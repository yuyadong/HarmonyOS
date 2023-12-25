interface NumberBox {
  contents: number;
}

interface StringBox {
  contents: string;
}

interface BooleanBox {
  contents: boolean;
}

function setContents(box: NumberBox, newContents: number): void;
function setContents(box: StringBox, newContents: string): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(
  box: { contents: number | string | boolean },
  newContents: number | string | boolean
) {
  return (box.contents = newContents);
}

interface Box<Type> {
  contents: Type;
}

let boxA: Box<number> = {
  contents: 100,
};

let boxB: Box<string> = {
  contents: "hello world",
};

interface Apple {}

type AppleBox = Box<Apple>;

let a: Apple = {}

let ab: AppleBox = {
  contents: a
};

type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]
type OneOrManyNull<Type> = OrNull<OneOrMany<Type>> 
type OneOrManyNullString<Type> = OneOrManyNull<string>