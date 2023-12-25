class MsgError extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, MsgError.prototype);
  }
  sayHello() {
    return "hello " + this.message;
  }
}

const msgerror = new MsgError("world");
console.log(msgerror.sayHello());
console.log(msgerror instanceof MsgError)