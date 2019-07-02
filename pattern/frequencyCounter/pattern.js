function same(simpleArr, doubleArr) {
  if (simpleArr.length !== doubleArr.length) {
    return false;
  }
  let simpleCounter = {}
  let doublePowConter = {}

  for (let val of simpleArr) {
    simpleCounter[val] = (simpleCounter[val] || 0) + 1
  }
  for (let val of doubleArr) {
    doublePowConter[val] = (doublePowConter[val] || 0) + 1
  }

  console.log(simpleCounter);
  console.log(doublePowConter);

  for (let key in simpleCounter) {
    if (!(key ** 2 in doublePowConter)) {
      return false
    }
    if (doublePowConter[key ** 2] !== simpleCounter[key]) {
      return false
    }
  }
  return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25])
