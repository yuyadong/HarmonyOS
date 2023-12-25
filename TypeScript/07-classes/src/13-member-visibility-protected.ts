class Greeterx {
  public greet() {
    console.log(this.getName());
  }
  protected getName() {
    return "hello";
  }
}

class SpecialGreeter extends Greeterx {
  public howdy() {
    console.log(this.getName());
  }
}

const specialGreeter = new SpecialGreeter();
specialGreeter.greet();
specialGreeter.howdy();

class Basex {
  protected m = 10;
}

class Derivedx extends Basex {
  public m = 100;
}

const derivedx = new Derivedx()
console.log(derivedx.m)
