"use strict";
function pointCood(pt) {
    console.log("坐标的x值为：" + pt.x);
    console.log("坐标的y值为：" + pt.y);
}
pointCood({
    x: 3,
    y: 7,
});
function pointName(obj) {
    console.log(obj.lastName?.toUpperCase());
}
pointName({
    firstName: "yadong",
    lastName: "yu",
});
pointName({
    firstName: "yadong",
});
