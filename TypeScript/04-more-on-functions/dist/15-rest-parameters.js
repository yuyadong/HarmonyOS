"use strict";
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
const result = multiply(10, 1, 2, 3);
console.log(result);
