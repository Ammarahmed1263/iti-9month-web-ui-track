let number, divisor1, divisor2;

while (true) {
  let input1 = prompt("Enter number: ");
  if (input1 == null) {
    break;
  }

  number = parseInt(input1);

  if (isNaN(number)) {
    alert("Please enter numeric value only!");
    continue;
  }

  let input2 = prompt("Enter first divisor: ");
  if (input2 == null) {
    break;
  }

  divisor1 = parseInt(input2);

  if (isNaN(divisor1) || divisor1 == 0) {
    alert("Please enter numeric value only!");
    continue;
  }

  let input3 = prompt("Enter second divisor: ");
  if (input3 == null) {
    break;
  }

  divisor2 = parseInt(input3);

  if (isNaN(divisor2) || divisor2 == 0) {
    alert("Please enter numeric value only!");
    continue;
  }

  let message = number + " ";
  if (number % divisor1 == 0 && number % divisor2 == 0) {
    message += "is divisible by both " + divisor1 + " and " + divisor2;
  } else if (number % divisor1 == 0) {
    message += "is divisible by " + divisor1 + " only";
  } else if (number % divisor2 == 0) {
    message += "is divisible by " + divisor2 + " only";
  } else {
    message += "isn't divisible by either " + divisor1 + " or " + divisor2;
  }

  alert(message);
  break;
}
