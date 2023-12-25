// 重载函数
function makeDate(timestamp: number): Date;
function makeDate(y: number, m: number, d: number): Date;
// 实现签名函数
function makeDate(m: number, y?: number, d?: number): Date {
  if (d !== undefined && y !== undefined) {
    console.log("a", y, m, d);
    return new Date(y, m, d);
  } else {
    console.log("b", m);
    return new Date(m);
  }
}

const d1 = makeDate(123456789);
const d2 = makeDate(5, 6, 7);

console.log(d1);
console.log(d2);
