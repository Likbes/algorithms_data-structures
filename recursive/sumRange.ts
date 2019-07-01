function sumRange(num: number): number {
  if (num === 0) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(10));
