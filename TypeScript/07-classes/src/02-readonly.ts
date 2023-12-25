class Greeter {
  readonly name: string = "world";
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
}

const g = new Greeter('hello');
console.log(g.name);
