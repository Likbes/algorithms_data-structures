function getDigit(num, place) {
  let numArr = String(num)
    .split('')
    .reverse()
    .join('');

  return Number(numArr[place]) || 0;
}

// console.log(getDigit(12345, 0)) // 5
// console.log(getDigit(12345, 1)) // 4
// console.log(getDigit(12345, 2)) // 3

function digitCount(num = 0) {
  return Number(String(num).length);
}

// console.log(digitCount(0)); // 1

function maxDigits(arr) {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
}

// console.log(maxDigits([111, 11, 1, 11111])); // 5

function radixSort(arr) {
  const maxDigitsNumber = maxDigits(arr);
  let newArr = [...arr];

  for (let i = 0; i < maxDigitsNumber; i++) {
    let bucket = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const placeInBucket = getDigit(newArr[j], i);
      bucket[placeInBucket].push(newArr[j]);
    };
    // es2019
    // newArr = [...bucket.flatMap(v => v)];
    newArr = [].concat(...bucket);
  };

  return newArr;
}

console.log(radixSort([6868, 1231, 77, 2323, 7575, 23, 1, 34, 1467, 3, 8, 2, 134, 346]))

