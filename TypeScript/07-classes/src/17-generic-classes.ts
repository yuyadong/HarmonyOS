class Box<Type> {
  contents: Type;

  constructor(value: Type) {
    this.contents = value;
  }
}

let box = new Box('hello world')
