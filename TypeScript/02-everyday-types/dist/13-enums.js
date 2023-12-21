"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
