"use strict";
// 实现签名函数
function makeDate(m, y, d) {
    if (d !== undefined && y !== undefined) {
        console.log("a", y, m, d);
        return new Date(y, m, d);
    }
    else {
        console.log("b", m);
        return new Date(m);
    }
}
const d1 = makeDate(123456789);
const d2 = makeDate(5, 6, 7);
console.log(d1);
console.log(d2);
