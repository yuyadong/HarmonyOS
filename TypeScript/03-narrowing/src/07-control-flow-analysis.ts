function examples() {
  let x: string | number | boolean;
  if (Math.random() < 0.5) {
    x = "hello";
  } else {
    x = 10;
  }
  return x;
}

console.log(examples());
