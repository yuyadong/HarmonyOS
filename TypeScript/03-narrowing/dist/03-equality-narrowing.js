"use strict";
function example(x, y) {
    if (x == y) {
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
}
example("x", "x");
example("x", "y");
example("x", true);
example(100, true);
function multiplyValue(container, factor) {
    if (container.value != null) {
        container.value *= factor;
        console.log(container.value);
    }
}
multiplyValue({ value: 5 }, 6);
multiplyValue({ value: null }, 6);
multiplyValue({ value: undefined }, 6);
