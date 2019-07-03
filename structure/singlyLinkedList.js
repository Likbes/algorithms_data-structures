class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('man');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    };

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
      return undefined;
    }

    let removedVal;
    let poppedVal = this.head;

    while (poppedVal.next.next !== null) {
      poppedVal = poppedVal.next;
    }

    // last item of list
    removedVal = poppedVal.next;
    poppedVal.next = null;
    this.tail = poppedVal;

    this.length--;
    return removedVal;
  }

  shift() {
    if (!this.head) return undefined;
    // prev first node
    const prevHead = this.head;
    this.head = prevHead.next;

    this.length--;
    if (this.length === 0) this.tail = null;
    return prevHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    // empty list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevHead = this.head;
      newNode.next = prevHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(position) {
    if (position < 0 || position >= this.length) return null;

    let nessNode = this.head;

    for (let i = 0; i < position; i++) {
      nessNode = nessNode.next;
    }

    return nessNode;
  }

  set(position, val) {
    let nessNode = this.get(position);

    nessNode
      ? nessNode.val = val
      : nessNode = false;

    return nessNode;
  }

  insert(position, val) {
    // edge cases
    if (position < 0 || position > this.length) return false;
    if (position === this.length) return !!this.push(val);
    if (position === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const nodeBeforeInsert = this.get(position - 1);
    const nodeAfterInsert = nodeBeforeInsert.next;

    nodeBeforeInsert.next = newNode;
    newNode.next = nodeAfterInsert;

    this.length++;
    return true;
  }

  remove(position) {
    // edge cases
    if (position < 0 || position > this.length) return false;
    if (position === this.length) return this.pop();
    if (position === 0) return this.shift();

    const removedNode = this.get(position);
    const nodeBeforeInsert = this.get(position - 1);
    // just jumped through necessary node
    nodeBeforeInsert.next = removed.next;

    this.length--;
    return removedNode;
  }

  reverse() {

    let nextNode, prevNode;
    let currentNode = this.head;
    // swap first and last nodes
    [this.head, this.tail] = [this.tail, currentNode];

    for (let i = 0; i < this.length; i++) {
      // nextNode saves an original ref to next from old list
      // prevNode saves a ref to node that will be next in reversed arr
      [nextNode, currentNode.next] = [currentNode.next, prevNode]
      // [prevNode, currentNode, nextNode] 
      // - [tail, prevNode, currentNode, nextNode]
      // all vals make a step
      [prevNode, currentNode] = [currentNode, nextNode];
    };

    return this;
  }
}

const list = new SinglyLinkedList();
list
  .push('hello')
  .push('goodbye')
  .push('man')
  .unshift('Hmm...');

console.log(list.reverse());
