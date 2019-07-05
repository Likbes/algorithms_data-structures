class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    let comparedNode = this.root;

    if (!this.root) {
      this.root = newNode;
      return this;
    };

    // infinity loop
    while (1) {
      // insert to right part or left
      const isValueLarger = comparedNode.value < value;
      if (comparedNode.value === value) return undefined;
      if (isValueLarger) {

        // we can insert node to right
        if (comparedNode.right === null) {
          comparedNode.right = newNode;
          return this;
        }

        comparedNode = comparedNode.right;
      } else {
        if (comparedNode.left === null) {
          comparedNode.left = newNode;
          return this;
        }

        comparedNode = comparedNode.left;
      }
    };
  }

  find(value) {
    let comparedNode = this.root;

    if (!this.root) return null;

    // infinity loop
    while (1) {
      if (comparedNode.value === value) return true;

      // insert to right part or left
      const isValueLarger = comparedNode.value < value;

      if (isValueLarger) {
        // doesnt exist
        if (comparedNode.right === null) return false;

        comparedNode = comparedNode.right;
      } else {
        if (comparedNode.left === null) return false;

        comparedNode = comparedNode.left;
      }
    };
  }
}

const BST = new BinarySearchTree();

BST
  .insert(10)
  .insert(5)
  .insert(15)
  .insert(17)
  .insert(7)
  .insert(2)
  .insert(12);


console.log(BST.find(6));
