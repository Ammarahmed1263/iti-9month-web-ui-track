// import { assert, expect, should } from "chai";
// import {
//   capitalizeText,
//   createArray,
//   CheckPositivity,
//   Multiply,
//   obj,
//   obj1,
//   obj2,
//   obj3,
//   validateNumber,
//   validateText,
// } from "../src/index.js";

// should();

describe("capitalizeText Function Checks", () => {
  it("should return string", () => {
    expect(capitalizeText("Ammar")).to.be.a("string");
  });

  it("should capitalize input string", () => {
    expect(capitalizeText("Ammar")).to.equal("AMMAR");
  });

  it("should through type error", () => {
    expect(() => capitalizeText(125)).to.throw(
      TypeError,
      "parameter should be string",
    );
  });

  it("should take one parameter", () => {
    expect(capitalizeText.length).to.equal(1);
  });
});

describe("createArray Function Checks", () => {
  it("should return an array (expect)", () => {
    expect(createArray(3)).to.be.an("array");
  });

  it("should return an array with the correct length (expect)", () => {
    expect(createArray(3)).to.have.length(3);
  });

  it.skip("should include 1 in the returned array (expect)", () => {
    expect(createArray(3)).to.include(1);
  });

  it("should delay testing process 5 seconds (expect)", function (done) {
    this.timeout(6000);

    setTimeout(() => {
      expect(createArray(3)).to.include(1);
      done();
    }, 5000);
  });

  it("should return an array (should)", () => {
    createArray(3).should.be.an("array");
  });

  it("should return an array with the correct length (should)", () => {
    createArray(3).should.have.length(3);
  });

  it("should delay testing process 5 seconds (should)", function (done) {
    this.timeout(6000);

    setTimeout(() => {
      createArray(3).should.include(1);
      done();
    }, 5000);
  });

  it("should return an array (assert)", () => {
    assert.isArray(createArray(3));
  });

  it("should return an array with the correct length (assert)", () => {
    assert.lengthOf(createArray(3), 3);
  });

  it("should delay testing process 5 seconds (assert)", function (done) {
    this.timeout(6000);

    setTimeout(() => {
      assert.include(createArray(3), 1);
      done();
    }, 5000);
  });
});

describe("Equal Objects Checks", () => {
  it("should equal (expect)", () => {
    expect(obj1).to.deep.equal(obj2);
  });

  it("should equal (should)", () => {
    obj1.should.deep.equal(obj2);
  });

  it("should equal (assert)", () => {
    assert.deepEqual(obj1, obj2);
  });
});

describe("CheckPositivity Function Checks", () => {
  it("should return true when x = 4 (expect)", () => {
    expect(CheckPositivity(4)).to.equal(true);
  });

  it("should return false when x = 0 (expect)", () => {
    expect(CheckPositivity(0)).to.equal(false);
  });

  it("should return false when x = -1 (expect)", () => {
    expect(CheckPositivity(-1)).to.equal(false);
  });

  it("should return true when x = 4 (should)", () => {
    CheckPositivity(4).should.equal(true);
  });

  it("should return false when x = 0 (should)", () => {
    CheckPositivity(0).should.equal(false);
  });

  it("should return false when x = -1 (should)", () => {
    CheckPositivity(-1).should.equal(false);
  });

  it("should return true when x = 4 (assert)", () => {
    assert.equal(CheckPositivity(4), true);
  });

  it("should return false when x = 0 (assert)", () => {
    assert.equal(CheckPositivity(0), false);
  });

  it("should return false when x = -1 (assert)", () => {
    assert.equal(CheckPositivity(-1), false);
  });
});

describe("Multiply Function Checks", () => {
  it("should accept positive numbers only", () => {
    let input = 5;
    assert.isAbove(Multiply(input), 0);
  });

  it("should make sure that the result is above zero", () => {
    assert.isAbove(Multiply(2), 0);
  });
});

describe("obj3 Checks", () => {
  it("should include {x:1} in a.b[0]", () => {
    assert.deepNestedInclude(obj3, { "a.b[0]": { x: 1 } });
  });
});

describe("Number Validation Checks", () => {
  it("should return error message for empty input", () => {
    expect(validateNumber("")).to.equal("Number required");
  });

  it("should return error message for non-numeric input", () => {
    expect(validateNumber("abc")).to.equal("Must be a number");
  });

  it("should return error message for non-integer input", () => {
    expect(validateNumber(3.14)).to.equal("Must be an integer");
  });

  it("should return error message for negative input", () => {
    expect(validateNumber(-5)).to.equal("Must be >= 0");
  });

  it("should return null for valid number input", () => {
    expect(validateNumber(3)).to.equal(null);
  });
});

describe("Text Validation Checks", () => {
  it("should return error message for empty input", () => {
    expect(validateText("")).to.equal("Text required");
  });

  it("should return error message for non-alphabetic input", () => {
    expect(validateText("abc123")).to.equal("Only letters allowed");
  });

  it("should return error message for short input", () => {
    expect(validateText("A")).to.equal("Too short");
  });

  it("should return null for valid input", () => {
    expect(validateText("Hello")).to.equal(null);
  });
});
