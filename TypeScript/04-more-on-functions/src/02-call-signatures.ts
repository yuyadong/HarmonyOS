type DescribableFunction = {
  desceiption: string;
  (someAge: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.desceiption + " returned " + fn(6));
}

function fn1(n: number) {
  console.log(n);
  return true;
}
fn1.desceiption = "hello";

doSomething(fn1);
