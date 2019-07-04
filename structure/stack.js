class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const prevFirst = this.first;
      newNode.next = prevFirst;
      this.first = newNode;
    };

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const prevFirst = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
      return prevFirst;
    };
    this.first = prevFirst.next;

    this.size--;
    return prevFirst.value;
  }
}

const stack = new Stack();
stack.push('first');
stack.push('second');
stack.push('third');
