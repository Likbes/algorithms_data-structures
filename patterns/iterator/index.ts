namespace Iterator {
  interface Iterator<T> {
    current(): any;
    // return current and go to next
    next(): T;
    // key of current value;
    key(): number;
    valid(): boolean;
    // to first element
    rewind(): void;
  }

  interface Aggregator {
    // get external iteratoe
    getIterator(): Iterator<string>;
  }

  class AlphabeticalOrderIterator implements Iterator<string> {
    private collection: WordsCollection;
    private position: number = 0;
    private reverse: boolean = false;

    constructor(collection: WordsCollection, reverse: boolean = false) {
      this.collection = collection;
      this.reverse = reverse;

      if (this.reverse) this.position = collection.getCount() - 1;
    }

    public current(): any {
      return this.collection.getItems()[this.position];
    }

    public next(): any {
      const item = this.collection.getItems()[this.position];
      this.position += this.reverse ? -1 : 1;
      return item;
    }

    public key(): number {
      return this.position;
    }

    public valid(): boolean {
      return this.reverse
        ? this.position >= 0
        : this.position < this.collection.getCount();
    }

    public rewind() {
      this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    }
  }

  class WordsCollection implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
      return this.items;
    }

    public getCount(): number {
      return this.items.length;
    }

    public addItem(item: string): void {
      this.items.push(item);
    }

    public getIterator(): Iterator<string> {
      return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
      return new AlphabeticalOrderIterator(this, true);
    }
  }

  // client code doesnt know about concrete iterators
  const collection = new WordsCollection();
  collection.addItem('First');
  collection.addItem('Second');
  collection.addItem('Third');

  const iterator = collection.getIterator();

  console.log('Straight traversal:');
  while (iterator.valid()) {
    console.log(iterator.next());
  }

  console.log('');
  console.log('Reverse traversal:');
  const reverseIterator = collection.getReverseIterator();
  while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
  }
}
