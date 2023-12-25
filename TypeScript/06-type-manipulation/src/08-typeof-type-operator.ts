console.log(typeof "hello world");

let str = "hello";
let nt: typeof s;
nt = "hello";

type Predicate = (x: unknown) => boolean;

type K = ReturnType<Predicate>;

function func() {
  return {
    x: 10,
    y: 100,
  };
}

type P1 = ReturnType<typeof func>;

// const p: P1 = 100
