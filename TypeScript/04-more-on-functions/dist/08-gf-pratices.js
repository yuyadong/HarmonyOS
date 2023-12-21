"use strict";
// 1.可能的情况下、使用参数本身、而不是对其进行约束
function firstElement1(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
const a = firstElement1([1, 2, 3]);
const b = firstElement2([1, 2, 3]);
// 2.尽可能的少使用类型参数
function filter1(arr, fn) {
    return arr.filter(fn);
}
function filter2(arr, fn) {
    return arr.filter(fn);
}
// 3.如果一个类型参数只出现在一个地方，请考虑你是否真的需要他
function greet(s) {
    console.log("Hello " + s);
}
greet("world");
function greet2(s) {
    console.log("Hello " + s);
}
greet2("world");
