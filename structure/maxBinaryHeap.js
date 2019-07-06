class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let childIndex = this.values.length - 1;
    const childValue = this.values[childIndex];

    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      const parentValue = this.values[parentIndex];

      if (parentValue >= childValue) break;

      [this.values[childIndex], this.values[parentIndex]] = [parentValue, childValue];
      childIndex = parentIndex;
    };

    return this;
  }

  extractMax() {
    const length = this.values.length;
    if (length === 0) return undefined;

    // delete the greaters value
    const deletedValue = this.values[0];
    let currentValueIdx = 0;

    this.values[0] = this.values[length - 1];
    this.values.pop();

    while (true) {

      // left child of node in heap
      const leftIdx = currentValueIdx * 2 + 1;
      // right respectively
      const rightIdx = currentValueIdx * 2 + 2;

      // value that we catch from the end of array(heap)
      const currentValue = this.values[currentValueIdx];
      const leftValue = this.values[leftIdx];
      const rightValue = this.values[rightIdx];

      // right and left child are greater than current value
      if (leftValue > currentValue && rightValue > currentValue) {
        const isLeftGreater = leftValue - rightValue;

        isLeftGreater > 0
          ? currentValueIdx = this.swap(currentValueIdx, currentValue, leftIdx, leftValue)
          : currentValueIdx = this.swap(currentValueIdx, currentValue, rightIdx, rightValue);
      }

      // just lift a left value to root
      if (leftValue > currentValue && leftIdx < length) {
        currentValueIdx =
          this.swap(currentValueIdx, currentValue, leftIdx, leftValue);

        continue;
      }

      // just lift a right value to root
      if (rightValue > currentValue && rightIdx < length) {
        currentValueIdx =
          this.swap(currentValueIdx, currentValue, rightIdx, rightValue);

        continue;
      }

      break;
    };

    return deletedValue;
  }

  swap(firstIdx, firstValue, secondIdx, secondValue) {
    [
      this.values[firstIdx],
      this.values[secondIdx]
    ] = [secondValue, firstValue];

    return secondIdx;
  }
}

let heap = new MaxBinaryHeap();
heap
  .insert(15)
  .insert(22)
  .insert(7)
  .insert(67)
  .insert(89)
  .insert(44)
  .insert(2)
  .insert(4);

console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.values)
