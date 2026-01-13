function reverse_slice() {
  if (arguments.length == 0) {
    throw new Error("Provide at least one argument");
  }

  const args = [].slice.call(arguments);
  return args.reverse();
}

function reverse_call() {
  if (arguments.length == 0) {
    throw new Error("Provide at least one argument");
  }

  return [].reverse.call(arguments);
}

console.log(reverse_slice(4, 6, 2));
console.log(reverse_slice(4, 2));

console.log(reverse_call(1, 2, 5));
console.log(reverse_call(10, 5));
