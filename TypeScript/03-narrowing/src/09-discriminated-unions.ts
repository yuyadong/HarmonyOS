// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   sideLength: number;
// }

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//   }
// }

// let circle = getArea({
//   kind: "circle",
//   radius: 10,
// });

// let square = getArea({
//     kind: "square",
//     sideLength: 10,
//   });

// console.log(circle);
// console.log(square);
