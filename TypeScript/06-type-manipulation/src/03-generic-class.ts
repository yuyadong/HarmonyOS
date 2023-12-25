class GenericNumber<NumberType> {
  zeroValue: NumberType;
  add: (X: NumberType, y: NumberType) => NumberType;
}

// let myCeneric = new GenericNumber<number>();
// myCeneric.zeroValue = 0;
// myCeneric.add = function (x, y) {
//   return x + y;
// };

let myCeneric = new GenericNumber<string>();
myCeneric.zeroValue = '';
myCeneric.add = function (x, y) {
  return x + y;
};
