class Greeters {
  greet() {
    console.log("Hi");
  }
  sayHello() {
    this.greet();
  }
}

class Hello extends Greeters {
  constructor() {
    super();
    this.sayHello();
  }
}

const greeters = new Greeters();
greeters.greet();
greeters.sayHello();
