abstract class BaseA {
  abstract getName(): string;

  printName() {
    console.log(this.getName());
  }
}

class DerivedA extends BaseA {
  getName() {
    return "world";
  }
}

const basea = new DerivedA();
basea.getName();
basea.printName();
