function selectionSort(arr) {

  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    let min = i;
    // move lowest pointer
    for (let j = min + 1; j < newArr.length; j++) {
      if (newArr[j] < newArr[min]) min = j;
    };
    // swap
    if (i !== min)
      [newArr[i], newArr[min]] = [newArr[min], newArr[i]];
  };

  return newArr;
}

const arr = [22, 1, 5, 6, 3, 9, 2, 6, 10, 235, 3, 6, 7, 23, 436, 46, 46, 35, 2]

console.log(selectionSort(arr));
