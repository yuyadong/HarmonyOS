class Points {
  x: number = 10;
  y: number = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

const point = new Points();
point.scale(10);
console.log(point.x, point.y);

let x: number = 0;
// class C {
//   x: string = "hello";
//   m() {
//     x = 100;
//   }
// }
