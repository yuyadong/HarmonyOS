function pointCood(pt: { x: number; y: number }) {
  console.log("坐标的x值为：" + pt.x);
  console.log("坐标的y值为：" + pt.y);
}

pointCood({
  x: 3,
  y: 7,
});

function pointName(obj: { firstName: string; lastName?: string }) {
  console.log(obj.lastName?.toUpperCase());
}

pointName({
  firstName: "yadong",
  lastName: "yu",
});

pointName({
  firstName: "yadong",
});
