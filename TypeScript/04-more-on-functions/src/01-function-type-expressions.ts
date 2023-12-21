function greeter(fn: (s: string) => void) {
  fn("hello world");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
