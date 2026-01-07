function addParams() {
  if (arguments.length == 0) {
    throw new Error("Expected at least 1 argument, but got 0");
  }

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw new Error(
        "in argument " +
          arguments[i] +
          " expected a number but got " +
          typeof arguments[i]
      );
    }

    sum += arguments[i];
  }

  return sum;
}

console.log(addParams(1, -4, 5));
console.log(addParams(1, -4, 5, 10));
console.log(addParams(1, "abc", 5, 10));
console.log(addParams());
