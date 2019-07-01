const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) return i;
  };
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 88], 87));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 88], 88));
