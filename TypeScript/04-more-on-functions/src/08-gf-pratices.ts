// 1.可能的情况下、使用参数本身、而不是对其进行约束
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

const a = firstElement1([1, 2, 3]);
const b = firstElement2([1, 2, 3]);

// 2.尽可能的少使用类型参数
function filter1<Type>(arr: Type[], fn: (arg: Type) => boolean) {
  return arr.filter(fn);
}

function filter2<Type, Fn extends (arg: Type) => boolean>(arr: Type[], fn: Fn) {
  return arr.filter(fn);
}

// 3.如果一个类型参数只出现在一个地方，请考虑你是否真的需要他
function greet<Str extends string>(s: Str) {
  console.log("Hello " + s);
}

greet("world");

function greet2(s: string) {
  console.log("Hello " + s);
}

greet2("world");
