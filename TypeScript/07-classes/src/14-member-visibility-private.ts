class Basez {
  private x = 0;

  printX() {
    console.log(this.x);
  }
}

class Derivedz extends Basez {
  showX() {
    // this.x
  }
}

const derivedz = new Derivedz();
// console.log(derivedx.x)

class Ax {
  private x = 0;

  public sameAt(other: Ax) {
    return (other.x = this.x);
  }
}
