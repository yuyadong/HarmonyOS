class Point {
  x: number;
  y: number;
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

const p = new Point();
p.x = 1;
p.y = 1;
console.log(p.x, p.y);

class OkGreeter {
  name!: string
}
