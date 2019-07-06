class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.nodes.push(newNode);
    this.bubbleUp();

    return this;
  }

  bubbleUp() {
    let childIndex = this.nodes.length - 1;
    const childNode = this.nodes[childIndex];

    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      const parentNode = this.nodes[parentIndex];

      if (childNode.priority >= parentNode.priority) break;

      [this.nodes[childIndex], this.nodes[parentIndex]] = [parentNode, childNode];
      childIndex = parentIndex;
    };
  }

  dequeue() {
    // delete the greaters Node
    const deletedNode = this.nodes[0];
    const end = this.nodes.pop();

    if (this.nodes.length > 0) {
      this.nodes[0] = end;
      this.sinkDown();
    }

    return deletedNode;
  }

  sinkDown() {
    let idx = 0;
    const length = this.nodes.length;
    const currentNode = this.nodes[idx];

    while (true) {

      // left child of node in heap
      const leftIdx = idx * 2 + 1;
      // right respectively
      const rightIdx = idx * 2 + 2;

      // Node that we catch from the end of array(heap)
      const leftNode = this.nodes[leftIdx];
      const rightNode = this.nodes[rightIdx];

      // right and left child are greater than current Node
      if (
        leftIdx < length && rightIdx < length &&
        leftNode.priority < currentNode.priority &&
        rightNode.priority < currentNode.priority
      ) {
        //console.log(isLeftGreater);
        leftNode.priority < rightNode.priority
          ? idx = this.swap(idx, currentNode, leftIdx, leftNode)
          : idx = this.swap(idx, currentNode, rightIdx, rightNode);

        continue;
      }

      // just lift a left Node to root
      if (leftIdx < length && leftNode.priority < currentNode.priority) {
        idx =
          this.swap(idx, currentNode, leftIdx, leftNode);

        continue;
      }

      // just lift a right Node to root
      if (rightIdx < length && rightNode.priority < currentNode.priority) {
        idx =
          this.swap(idx, currentNode, rightIdx, rightNode);

        continue;
      }

      break;
    };
  }

  swap(firstIdx, firstNode, secondIdx, secondNode) {
    [
      this.nodes[firstIdx],
      this.nodes[secondIdx]
    ] = [secondNode, firstNode];

    return secondIdx;
  }
}

let pQueue = new PriorityQueue();
pQueue
  .enqueue(15, 15)
  .enqueue(7, 7)
  .enqueue(67, 67)
  .enqueue(89, 89)
  .enqueue(44, 44)
  .enqueue(2, 2);

console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
// console.log(pQueue.dequeue());
// console.log(pQueue.nodes)
