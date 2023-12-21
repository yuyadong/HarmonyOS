interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

let awu: AddressWithUnit = {
  name: "1",
  street: "1",
  city: "1",
  country: "1",
  postalCode: "1",
  unit: "3单元",
};

// interface Color {
//   color: string;
// }

// interface Circle {
//   radius: number;
// }

// interface ColorCircle extends Color, Circle {}

// const cc: ColorCircle = {
//   color: "red",
//   radius: 50,
// };
