let sum = 0;

while (true) {
  let input = prompt("Enter a number (enter 0 to stop): ");

  
  if (input == null) {
    break;
  }

  const number = parseInt(input);

  if (isNaN(number)) {
    alert("Please enter numeric values only!");
    continue;
  }

  if (number == 0) {
    break;
  }

  sum += number;

  if (sum > 100) {
    break;
  }
}

alert("Total sum is: " + sum);
