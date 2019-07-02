function insertionSort(arr) {
  let newArr = [...arr];

  for (let i = 1; i < newArr.length; i++) {
    const currValue = newArr[i];
    let insIndex = i - 1;

    while (insIndex >= 0 && newArr[insIndex] > currValue) {
      newArr[insIndex + 1] = newArr[insIndex];
      insIndex--;
    }
    newArr[insIndex + 1] = currValue;
  };

  return newArr;
}

const arr = [22, 1, 5, 6, 3, 9, 2, 6, 10, 235, 3, 6, 7, 23, 436, 46, 46, 35, 2]

console.log(insertionSort(arr));
