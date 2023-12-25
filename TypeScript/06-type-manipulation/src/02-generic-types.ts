function identity<Type>(arg: Type): Type {
  return arg;
}

// let myIdentity: <Input>(agr: Input) => Input = identity;
// let myIdentity: { <Type>(arg: Type): Type } = identity;

// interface GenericIdentityFn {
//   <Type>(arg: Type): Type;
// }

// let myIdentity: GenericIdentityFn = identity;
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

let myIdentity: GenericIdentityFn<string> = identity;
