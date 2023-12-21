// interface SomeType {
//   readonly prop: string;
// }

// function doSomething(obj: SomeType) {
//   console.log(obj.prop);
//   obj.prop = "hello";
// }

// interface Home {
//   readonly resident: {
//     name: string;
//     readonly age: number;
//   };
// }

// function visitForBirthday(home: Home) {
//   console.log(home.resident.name)
//   home.resident.age++
// }

// function evict(home: Home) {
//   home.resident = {
//     name: 'flex',
//     age: 14
//   }
// }

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "flex",
  age: 18,
};

let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++
console.log(readonlyPerson.age);
