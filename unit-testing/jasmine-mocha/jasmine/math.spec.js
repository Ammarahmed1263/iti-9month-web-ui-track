const { MathUtils } = require("../index");

describe("Math Utils Test Suite", function () {
  let math;

  beforeAll(() => {
    math = new MathUtils();
  });

  afterAll(() => {
    math = null;
  });

  describe("Addition Functionality", function () {
    it("should return the correct sum of two numbers", function () {
      expect(math.sum(2, 3)).toBe(5);
      expect(math.sum(-2, 3)).toBe(1);
      expect(math.sum(2.5, 3.5)).toBe(6);
    });

    it("should throw an error if any argument is missing", function () {
      expect(() => math.sum(2)).toThrowError(
        "Missing arguments: Both numbers must be provided",
      );
    });

    it("should throw an error if any argument is not a number", function () {
      expect(() => math.sum(2, "not a number")).toThrowError(
        "Invalid arguments: Both inputs must be numbers",
      );
    });
  });

  describe("Subtraction Functionality", function () {
    it("should return the correct difference of two numbers", function () {
      expect(math.substract(5, 3)).toBe(2);
      expect(math.substract(-2, 3)).toBe(-5);
      expect(math.substract(2.5, 3.5)).toBe(-1);
    });

    it("should throw an error if any argument is missing", function () {
      expect(() => math.substract(2)).toThrowError(
        "Missing arguments: Both numbers must be provided",
      );
    });

    it("should throw an error if any argument is not a number", function () {
      expect(() => math.substract(2, "not a number")).toThrowError(
        "Invalid arguments: Both inputs must be numbers",
      );
    });
  });

  describe("Multiplication Functionality", function () {
    it("should return the correct product of two numbers", function () {
      expect(math.multiply(2, 3)).toBe(6);
      expect(math.multiply(-2, 3)).toBe(-6);
      expect(math.multiply(2.5, 3.5)).toBe(8.75);
    });

    it("should throw an error if any argument is missing", function () {
      expect(() => math.multiply(2)).toThrowError(
        "Missing arguments: Both numbers must be provided",
      );
    });

    it("should throw an error if any argument is not a number", function () {
      expect(() => math.multiply(2, "not a number")).toThrowError(
        "Invalid arguments: Both inputs must be numbers",
      );
    });
  });

  describe("Division Functionality", function () {
    it("should return the correct quotient of two numbers", function () {
      expect(math.divide(6, 3)).toBe(2);
      expect(math.divide(-6, 3)).toBe(-2);
      expect(math.divide(2.5, 0.5)).toBe(5);
    });

    it("should throw an error if any argument is missing", function () {
      expect(() => math.divide(2)).toThrowError(
        "Missing arguments: Both numbers must be provided",
      );
    });

    it("should throw an error if any argument is not a number", function () {
      expect(() => math.divide(2, "not a number")).toThrowError(
        "Invalid arguments: Both inputs must be numbers",
      );
    });

    it("should throw an error if division by zero is attempted", function () {
      expect(() => math.divide(2, 0)).toThrowError(
        "Division by zero is not allowed",
      );
    });
  });

  describe("Average Functionality", function () {
    it("should return the correct average of two numbers", function () {
      expect(math.average(2, 4)).toBe(3);
      expect(math.average(-2, 4)).toBe(1);
      expect(math.average(2.5, 3.5)).toBe(3);
    });

    it("should throw an error if any argument is missing", function () {
      expect(() => math.average(2)).toThrowError(
        "Missing arguments: Both numbers must be provided",
      );
    });

    it("should throw an error if any argument is not a number", function () {
      expect(() => math.average(2, "not a number")).toThrowError(
        "Invalid arguments: Both inputs must be numbers",
      );
    });
  });

  describe("Factorial Functionality", function () {
    it("should throw an error if the argument is missing", function () {
      expect(() => math.factorial()).toThrowError(
        "Missing argument: Number must be provided",
      );
    });

    it("should throw an error if the argument is not a number", function () {
      expect(() => math.factorial("not a number")).toThrowError(
        "Invalid argument: Input must be a number",
      );
    });

    it("should throw an error if the argument is a non-integer", function () {
      expect(() => math.factorial(5.5)).toThrowError(
        "Invalid argument: Factorial is only defined for integers",
      );
    });

    it("should throw an error if the argument is a negative number", function () {
      expect(() => math.factorial(-5)).toThrowError(
        "There is no factorial for negative numbers",
      );
    });

    it("should return 1 for 0 and 1", function () {
      expect(math.factorial(0)).toBe(1);
      expect(math.factorial(1)).toBe(1);
    });

    it("should return the correct factorial for positive integers", function () {
      expect(math.factorial(5)).toBe(120);
      expect(math.factorial(10)).toBe(3628800);
    });
  });

  describe("Check Positivity Functionality", function () {
    it("should throw an error if the argument is missing", function () {
      expect(() => math.checkPositivity()).toThrowError(
        "Missing argument: Number must be provided",
      );
    });

    it("should throw an error if the argument is not a number", function () {
      expect(() => math.checkPositivity("not a number")).toThrowError(
        "Invalid argument: Input must be a number",
      );
    });

    it("should return true for positive numbers and zero", function () {
      expect(math.checkPositivity(5)).toBe(true);
      expect(math.checkPositivity(0)).toBe(true);
    });

    it("should return false for negative numbers", function () {
      expect(math.checkPositivity(-5)).toBe(false);
    });
  });
});
