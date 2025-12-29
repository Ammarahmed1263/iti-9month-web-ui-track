let n1, n2, flag;

n1 = validateInput("Enter first number: ");
n2 = validateInput("Enter second number: ");

while (true) {
  flag = prompt("Enter string flag: ");
  if (flag == "odd" || flag == "even" || flag == "no") {
    break;
  } else {
    alert("flag must be valid string");
  }
}

let output = "";
let sum = 0;

let step = n1 <= n2 ? 1 : -1;

for (let i = n1; step === 1 ? i <= n2 : i >= n2; i += step) {
  let keep = false;

  if (flag === "no") {
    keep = true;
  } else if (flag === "even") {
    if (i % 2 === 0) keep = true;
  } else if (flag === "odd") {
    if (i % 2 === 1) keep = true;
  }

  if (keep) {
    if (output !== "") {
      output += ",";
    }

    output += i;
    sum += i;
  }
}

let msg = output + " and their sum value that is " + sum;

console.log(
  "%c" + msg,
  "color: black; background-color: #f0f0f0; padding: 5px; border-radius: 5px;"
);

function validateInput(msg) {
  while (true) {
    let input = prompt(msg);

    if (input === null) return null;

    let number = parseInt(input);

    if (isNaN(number)) {
      alert("Please enter numeric value only!");
    } else if (number === 0) {
      alert("Divisor cannot be 0!");
    } else {
      return number;
    }
  }
}
