function* genFibonacciCount(count) {
  let prev = 0;
  let curr = 1;
  let order = 1;

  while (order <= count) {
    yield prev;

    [prev, curr] = [curr, curr + prev];
    order++;
  }
}

for (const ele of genFibonacciCount(9)) {
  console.log(ele);
}

console.log("---------------------------------------------------")

function* genFibonacciMax(maxVal) {
  let prev = 0;
  let curr = 1;

  while (prev <= maxVal) {
    yield prev;

    [prev, curr] = [curr, curr + prev];
  }
}

for (const ele of genFibonacciMax(22)) {
  console.log(ele);
}
