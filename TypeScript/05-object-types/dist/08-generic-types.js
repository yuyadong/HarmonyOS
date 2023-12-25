"use strict";
function setContents(box, newContents) {
    return (box.contents = newContents);
}
let boxA = {
    contents: 100,
};
let boxB = {
    contents: "hello world",
};
let a = {};
let ab = {
    contents: a
};
