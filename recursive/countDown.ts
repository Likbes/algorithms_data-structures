function countDown(num: number): void {
  if (num <= 0) {
    console.log("That's all");
    return;
  }
  console.log(num);
  num -= 1;
  countDown(num);
}

countDown(6);
