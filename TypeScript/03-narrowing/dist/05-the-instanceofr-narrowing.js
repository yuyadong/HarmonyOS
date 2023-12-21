"use strict";
function loValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x);
    }
}
loValue(new Date());
loValue('2023-12-19');
