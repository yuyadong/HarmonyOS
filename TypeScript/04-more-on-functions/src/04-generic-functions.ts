function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(firstElement<string>(["a", "b", "c"]));
console.log(firstElement<number>([1, 2, 3]));
console.log(firstElement<undefined>([]));

function map<Input, Output>(arr: Input[], fn: (arg: Input) => Output): Output[] {
  return arr.map(fn);
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n))

console.log(parsed);
