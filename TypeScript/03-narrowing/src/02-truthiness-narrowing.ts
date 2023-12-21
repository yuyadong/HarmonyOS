function multiplyAll(values: number[] | undefined | null, factor: number) {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

console.log(multiplyAll([1, 2], 3));
