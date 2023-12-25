class Bases {
  name = "bases";
  constructor() {
    console.log("my name is " + this.name);
  }
}

class Deriveds extends Bases {
  name = "deriveds";
  constructor() {
    super()
    console.log(this.name);
  }
}

const deriveds = new Deriveds();
