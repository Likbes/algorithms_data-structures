// prop - wall / stock / support, not props.
function prop(arr) {
  const middleValue = arr[Math.floor(arr.length / 2)];

  let lessThanProp = [];
  let equalProp = [middleValue];
  let moreThanProp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > middleValue) moreThanProp.push(arr[i]);
    else if (arr[i] < middleValue) lessThanProp.push(arr[i]);
    else equalProp.push(arr[i]);
  };

  return [
    lessThanProp,
    equalProp,
    moreThanProp
  ];
}

function qsort(arr) {
  if (arr.length <= 1) return arr;

  const [
    lessThanProp,
    middleValue,
    moreThanProp
  ] = prop(arr);

  return []
    .concat(
      qsort(lessThanProp),
      middleValue,
      qsort(moreThanProp)
    );
}

console.log(qsort([5, 1, 8, 10, 12, 6, 1, 4, 2, 6, 34]));
