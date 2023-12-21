interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["a", "b"];
const secondItem = myArray[0];

interface TestString {
  [props: string]: number;
}

let testString: TestString = {
  x: 100,
  y: 200,
  z: 300,
};

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

interface NoOkay {
  [index: string]: number | string;
  length: number;
  name: string;
}

let noOkay: NoOkay = {
  x: 100,
  length: 100,
  name: "flex",
};
