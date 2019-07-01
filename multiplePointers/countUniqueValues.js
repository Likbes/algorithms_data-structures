function countUniqueValues(arr) {

  let counter = 0;
  let currIndex = 0;
  let nextIndex = 1;

  while (nextIndex <= arr.length) {
    if (arr[currIndex] !== arr[nextIndex]) {
      currIndex = nextIndex;
      nextIndex++;
      counter++;
    } else {
      // just skip repeat values
      nextIndex++;
    }
  }

  return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 4, 5]))
