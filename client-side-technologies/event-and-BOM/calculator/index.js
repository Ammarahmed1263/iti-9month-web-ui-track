let answer = document.getElementById("answer");

function EnterNumber(inputVal) {
  if (answer.value == "0") answer.value = inputVal;
  else answer.value += inputVal;
}

function EnterOperator(operator) {
  answer.value += operator;
}

function EnterEqual() {
  let numbers = answer.value.split(/[+\-*\/]+/g).filter(Boolean);
  let operators = answer.value.split(/[^+\-*\/]*/g).filter(Boolean);

  if (numbers.length - 1 !== operators.length) {
    alert("an operand is missing please try again!");
    return;
  }

  for (let i = 0; i < operators.length; i++) {
    let op = operators[i];

    if (op == "*" || op == "/") {
      if (op == "/" && parseFloat(numbers[i + 1]) == 0) {
        alert("Can't divide by 0!");
        EnterClear();
        return;
      }

      numbers.splice(i, 2, operate(op, numbers[i], numbers[i + 1]));
      operators.splice(i, 1);
      i--;
    }
  }

  while (operators.length > 0) {
    numbers.splice(0, 2, operate(operators[0], numbers[0], numbers[1]));
    operators.shift();
  }

  answer.value = parseFloat(numbers[0].toFixed(5));
}

function EnterClear() {
  if (answer.value != "0") {
    answer.value = "0";
  }
}

function operate(op, left, right) {
  left = parseFloat(left);
  right = parseFloat(right);

  if (op == "+") {
    return left + right;
  } else if (op == "-") {
    return left - right;
  } else if (op == "*") {
    return left * right;
  } else if (op == "/") {
    return left / right;
  }
}
