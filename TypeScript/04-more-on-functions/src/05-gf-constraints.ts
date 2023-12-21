function longset<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}
const longString = longset("aa", "aaa");
const longArray = longset([1, 2], [1, 2, 3]);

console.log(longString);
console.log(longArray);
