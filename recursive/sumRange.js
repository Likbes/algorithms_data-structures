"use strict";
function sumRange(num) {
    if (num === 0)
        return 1;
    return num + sumRange(num - 1);
}
console.log(sumRange(10));
