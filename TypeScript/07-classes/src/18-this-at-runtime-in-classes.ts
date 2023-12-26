class MyClasss {
  name = "MyClass";

  getName(this: MyClasss) {
    return this.name;
  }
}

const myClass = new MyClasss();

const obj = {
  name: "obj",
  getName: myClass.getName,
};

console.log(myClass.getName());
console.log(obj.getName());
