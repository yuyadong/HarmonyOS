"use strict";
let testString = "hello world";
testString = "hello ts";
const constString = "hello world";
// constString = "hello ts";
function printText(s, alignment) { }
printText("hello world", "left");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) { }
configure({ width: 100 });
configure("auto");
function handleRequest(url, method) { }
const req = {
    url: "https://example.com",
    method: "GET",
};
handleRequest(req.url, req.method);
