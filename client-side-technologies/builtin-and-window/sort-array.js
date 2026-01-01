let arr = [];

let size = parseInt(prompt("Enter number of elements: "), 10);

console.log(size);

for (let i = 0; i < size; i++) {
  arr[i] = parseInt(prompt("element number " + (i + 1)));
}

document.writeln(
  "Sorted ascending: " +
    arr.sort(function (a, b) {
      return a - b;
    }) +
    "<br>"
);

document.writeln(
  "Sorted descending: " +
    arr.sort(function (a, b) {
      return b - a;
    }) +
    "<br>"
);
