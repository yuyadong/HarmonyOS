"use strict";
function examples() {
    let x;
    if (Math.random() < 0.5) {
        x = "hello";
    }
    else {
        x = 10;
    }
    return x;
}
console.log(examples());
