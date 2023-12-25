// type Person = {
//   age: number;
//   name: string;
//   alive: boolean;
// };

// type Age = Person["age"];

// let age: Age = 100

// interface Person {
//   age: number;
//   name: string;
//   alive: boolean;
// }

// type I1 = Person["age" | "name"];

// const i11: I1 = 100;
// const i12: I1 = "100";

// type I2 = Person[keyof Person];

// const i21: I2 = 100;
// const i22: I2 = "100";
// const i23: I2 = true;

// type AliveOrName = "alive" | "name";
// type I3 = Person[AliveOrName];

// const i31: I3 = true;
// const i32: I3 = "100";

const myArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = (typeof myArray)[number];

const p: Person = {
  name: "xiaoqian",
  age: 11,
};

type Age = (typeof myArray)[number]["age"];

const age: Age = 11;

type Age2 = Person["age"];

const agr2: Age2 = 300;

type key = "age";
type Age3 = Person[key];

const agr3: Age3 = 300;