function binaruSearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let center = Math.floor((right + left) / 2);
  let arrValue = arr[center];

  while (left <= right && value !== arrValue) {
    center = Math.floor((right + left) / 2);
    arrValue = arr[center];

    if (value > arrValue) left = center + 1;
    if (value < arrValue) right = center - 1;
  };

  return value === arrValue ? center : -1;
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binaruSearch(arr, 4));
console.log(binaruSearch(arr, 10));
console.log(binaruSearch(arr, 0));
console.log(binaruSearch(arr, 110));


