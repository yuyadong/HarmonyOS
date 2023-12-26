class Boxs {
  contents: string = "";

  set(value: string) {
    this.contents = value;
    return this;
  }
}

class ClearBoxs extends Boxs {
  clear() {
    this.contents = "";
  }
}

let aaa = new ClearBoxs();
let bbb = aaa.set("hello");
