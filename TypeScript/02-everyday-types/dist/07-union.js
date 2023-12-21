"use strict";
function pointId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
pointId(101);
pointId("202");
function welcome(x) {
    if (Array.isArray(x)) {
        console.log('hello,' + x.join(' and '));
    }
    else {
        console.log('hello,' + x);
    }
}
welcome("a");
welcome(["a", "b", "c"]);
function getFirstThree(x) {
    console.log(x.slice(0, 3));
}
getFirstThree('abcdefg');
getFirstThree(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
