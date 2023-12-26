const someClass = class<Type> {
  content: Type;

  constructor(value: Type) {
    this.content = value;
  }
};

let m = new someClass('hello')
