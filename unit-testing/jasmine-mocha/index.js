//? using mocha and chai
async function fetchPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  if (!response.ok) {
    throw new Error("Network response failed with: " + response.statusText);
  }
  return await response.json();
}
//? using expect test data length and type that returned from this code
//? Task 2 --> implement all the unit testing cases for the following functions using jasmine
MathUtils = function () {};

MathUtils.prototype._validateArgs = function (n1, n2) {
  if (n1 === undefined || n2 === undefined) {
    throw new Error("Missing arguments: Both numbers must be provided");
  }

  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Invalid arguments: Both inputs must be numbers");
  }
};

MathUtils.prototype.sum = function (number1, number2) {
  this._validateArgs(number1, number2);
  return number1 + number2;
};

MathUtils.prototype.substract = function (number1, number2) {
  this._validateArgs(number1, number2);
  return number1 - number2;
};

MathUtils.prototype.multiply = function (number1, number2) {
  this._validateArgs(number1, number2);
  return number1 * number2;
};

MathUtils.prototype.divide = function (number1, number2) {
  this._validateArgs(number1, number2);
  if (number2 === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return number1 / number2;
};

MathUtils.prototype.average = function (number1, number2) {
  this._validateArgs(number1, number2);
  return (number1 + number2) / 2;
};

MathUtils.prototype.factorial = function (number) {
  if (number === undefined) {
    throw new Error("Missing argument: Number must be provided");
  }

  if (typeof number !== "number") {
    throw new Error("Invalid argument: Input must be a number");
  }

  if (!Number.isInteger(number)) {
    throw new Error("Invalid argument: Factorial is only defined for integers");
  }

  if (number < 0) {
    throw new Error("There is no factorial for negative numbers");
  }

  if (number == 1 || number == 0) {
    return 1;
  }

  return number * this.factorial(number - 1);
};

MathUtils.prototype.checkPositivity = function (number) {
  if (number === undefined) {
    throw new Error("Missing argument: Number must be provided");
  }

  if (typeof number !== "number") {
    throw new Error("Invalid argument: Input must be a number");
  }

  return number >= 0;
};

module.exports = { MathUtils, fetchPosts };

//? Task 3 --> test two requests in node with using async/await instead of done()
