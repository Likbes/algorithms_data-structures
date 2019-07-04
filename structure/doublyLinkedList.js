class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      const prevTail = this.tail;
      prevTail.next = newNode;

      newNode.prev = prevTail;
      this.tail = newNode;
    };

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length--;
      return undefined;
    }

    let newTail;
    let prevTail = this.head;

    while (prevTail.next !== null) {
      prevTail = prevTail.next;
    }

    // last item of list
    newTail = prevTail.prev;
    newTail.next = null;
    this.tail = newTail;

    this.length--;
    return newTail;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) this.tail = null;
    // prev first node
    const prevHead = this.head;
    this.head = prevHead.next;
    this.head.prev = null;

    this.length--;
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
      prevHead.prev = newNode;

      newNode.next = prevHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(position = 0) {
    if (position < 0 || position >= this.length) return null;
    const halfOfLength = Math.floor(this.length / 2);

    if (position < halfOfLength) {
      let nessNode = this.head;

      for (let i = 0; i < position; i++) {
        nessNode = nessNode.next;
      }

      return nessNode;
    }
    // if necessary val in 2nd half of list
    let nessNode = this.tail;

    for (let i = 0; i < this.length - position - 1; i++) {
      nessNode = nessNode.prev;
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
    newNode.prev = nodeBeforeInsert;
    newNode.next = nodeAfterInsert;
    nodeAfterInsert.prev = newNode;

    this.length++;
    return true;
  }

  remove(position) {
    // edge cases
    if (position < 0 || position > this.length) return false;
    if (position === this.length) return this.pop();
    if (position === 0) return this.shift();

    const removedNode = this.get(position);
    const nodeBeforeRemoved = removedNode.prev;
    const nodeAfterRemoved = removedNode.next;
    // just jumped through necessary node
    nodeBeforeRemoved.next = removed.next;
    nodeAfterRemoved.prev = nodeBeforeRemoved;

    // clear removed val
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
list
  .push('hello')
  .push('goodbye')
  .unshift('man')
  .unshift('Yo,')
  .remove(0);

console.log(list.get(0));

//console.log(list);
