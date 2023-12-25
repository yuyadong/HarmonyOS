"use strict";
// interface SomeType {
//   readonly prop: string;
// }
let writablePerson = {
    name: "flex",
    age: 18,
};
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
