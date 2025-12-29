let sum = 0;

let n1;
let n2;

while (true) {
  let input1 = prompt("Enter first number: ");
  if (input1 == null) {
    break;
  }

  n1 = parseInt(input1);

  if (isNaN(n1)) {
    alert("Please enter numeric value only!");
    continue;
  }

  let input2 = prompt("Enter second number: ");
  if (input2 == null) {
    break;
  }

  n2 = parseInt(input2);

  if (isNaN(n2)) {
    alert("Please enter numeric value only!");
    continue;
  }

  alert("the greater number is: " + (n1 > n2 ? n1 : n2));
  break;
}
