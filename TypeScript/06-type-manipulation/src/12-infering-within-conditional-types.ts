type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type N = GetReturnType<() => number>;

let n: N = 100;

type S = GetReturnType<(x: string) => string>;

let s: S = "100";

type B = GetReturnType<(x: boolean, y: boolean) => boolean[]>;

let b: B = [true, false];

type Never = GetReturnType<string>;

let ner: Never = "hello" as never;

function stringOrNum(x: string): number;
function stringOrNum(x: number): string;
function stringOrNum(x: number | string): number | string;
function stringOrNum(x: number | string): number | string {
  return Math.random() > 0.5 ? "hello" : 23;
}

type T1 = GetReturnType<typeof stringOrNum>;

const t1: T1 = '100'
