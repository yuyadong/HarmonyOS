"use strict";
function paintShape({ shape, xPos = 100, yPos = 100 }) {
    console.log(shape, xPos, yPos);
}
const shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
