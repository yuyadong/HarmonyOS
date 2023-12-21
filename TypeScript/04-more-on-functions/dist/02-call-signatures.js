"use strict";
function doSomething(fn) {
    console.log(fn.desceiption + " returned " + fn(6));
}
function fn1(n) {
    console.log(n);
    return true;
}
fn1.desceiption = "hello";
doSomething(fn1);
