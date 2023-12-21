function example(x: string | number, y: string | boolean) {
  if (x == y) {
    console.log(x.toUpperCase());
    console.log(y.toUpperCase());
  } else {
    console.log(x);
    console.log(y);
  }
}

example("x", "x");
example("x", "y");
example("x", true);
example(100, true);

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    container.value *= factor;
    console.log(container.value);
  }
}

multiplyValue({ value: 5 }, 6);
multiplyValue({ value: null }, 6);
multiplyValue({ value: undefined }, 6);
