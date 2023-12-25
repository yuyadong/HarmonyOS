class Base {
  greet() {
    console.log("Hello World");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name == undefined) {
      super.greet();
    } else {
      console.log(name.toUpperCase());
    }
  }
}

const derived = new Derived();
derived.greet();
derived.greet("yuyadong");
