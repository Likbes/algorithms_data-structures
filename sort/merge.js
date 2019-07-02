function merge(firstArr, secondArr) {

  const length = firstArr.length + secondArr.length;

  let mergedArr = [];
  let firstCounter = 0;
  let secondCounter = 0;

  while (mergedArr.length !== length - 1) {
    const firstValue = firstArr[firstCounter];
    const secondValue = secondArr[secondCounter];

    if (firstValue < secondValue) {
      mergedArr.push(firstValue);
      firstCounter++;
    };

    if (firstValue > secondValue) {
      mergedArr.push(secondValue);
      secondCounter++;
    };

    if (firstValue === secondValue) {
      mergedArr.push(firstValue, secondValue);
      firstCounter++;
      secondCounter++;
    };

    if (firstCounter === firstArr.length) {
      mergedArr = mergedArr.concat(secondArr.slice(secondCounter));
      break;
    };

    if (secondCounter === secondArr.length) {
      mergedArr = mergedArr.concat(firstArr.slice(firstCounter));
      break;
    };
  };

  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const firstArrPart = mergeSort(arr.slice(0, middle));
  const secondArrPart = mergeSort(arr.slice(middle));

  return merge(firstArrPart, secondArrPart);
}

console.log(mergeSort([10, 55, 15, 19, 5, 7, 2, 9, 98, 12]));
