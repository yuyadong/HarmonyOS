"use strict";
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement([1, 2, 3]));
console.log(firstElement([]));
function map(arr, fn) {
    return arr.map(fn);
}
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
console.log(parsed);
