class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  add(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    };

    this.size++;
    return this;
  }

  remove() {
    if (!this.first) return undefined;
    // prev first node
    const prevFirst = this.first;
    this.first = prevFirst.next;

    this.size--;
    if (this.length === 0) this.last = null;
    return prevFirst;
  }
}

const queue = new Queue();
queue.add('first').add('second').add('third');
queue.remove();
console.log(queue);

