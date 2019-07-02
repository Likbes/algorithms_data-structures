function bubbleSort(arr) {
  let newArr = [...arr];

  for (let i = arr.length - 1; i > 0; i--) {
    let wasSwaped = false;

    for (let j = 0; j < i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        wasSwaped = true;
      };
    };

    if (!wasSwaped) break;
  };

  return newArr;
}

const arr = [22, 1, 5, 6, 3, 9, 2, 6, 10, 235, 3, 6, 7, 23, 436, 46, 46, 35, 2]

console.log(bubbleSort(arr));
