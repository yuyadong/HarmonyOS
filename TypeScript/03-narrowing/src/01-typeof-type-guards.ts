function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    console.log("null");
  }
}

printAll("yuyadong");
printAll(["a", "d", "a", "m"]);
printAll(null);


