"use strict";
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
myForEach([1, 2, 3], (a, i) => console.log(i === null || i === void 0 ? void 0 : i.toFixed(2)));
