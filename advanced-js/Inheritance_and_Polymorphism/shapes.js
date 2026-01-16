function Shape(len, wid) {
  if (this.constructor === Shape) {
    throw new Error("class 'Shape' is abstract. Can't create instance of it");
  }

  if (typeof len !== "number" || typeof wid !== "number") {
    throw new Error("Dimensions must be numbers.");
  }

  let length = len;
  let width = wid;

  Object.defineProperties(this, {
    length: {
      get() {
        return length;
      },
      enumerable: false,
      configurable: false,
    },
    width: {
      get() {
        return width;
      },
      enumerable: false,
      configurable: false,
    },
  });
}

function Rectangle(length, width) {
  if (Rectangle.instance && this.constructor === Rectangle) {
    return Rectangle.instance;
  }
  Shape.call(this, length, width);
  if (this.constructor === Rectangle) {
    Rectangle.instance = this;
  }
}

Rectangle.prototype = Object.create(Shape.prototype, {
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Object.defineProperty(Rectangle, "instance", {
  value: null,
  writable: true,
  enumerable: false,
  configurable: false,
});

Object.defineProperties(Rectangle.prototype, {
  area: {
    value: function () {
      return this.length * this.width;
    },
    writable: false,
    configurable: false,
    enumerable: false,
  },
  perimeter: {
    value: function () {
      return 2 * (this.length + this.width);
    },
    writable: false,
    configurable: false,
    enumerable: false,
  },
  toString: {
    value: function () {
      return (
        "Width: " +
        this.width +
        ", Length: " +
        this.length +
        ", Area: " +
        this.area() +
        ", Perimeter: " +
        this.perimeter()
      );
    },
  },
  valueOf: {
    value: function () {
      return this.area();
    },
  },
});

function Square(side) {
  if (Square.instance) {
    return Square.instance;
  }
  Rectangle.call(this, side, side);

  Square.count++;
  Square.instance = this;
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Object.defineProperty(Square, "count", {
  value: 0,
  writable: true,
  enumerable: false,
  configurable: false,
});

Object.defineProperty(Square, "instance", {
  value: null,
  writable: true,
  enumerable: false,
  configurable: false,
});

const rect = new Rectangle(5, 10);
const sqr1 = new Square(6);
const sqr2 = new Square(61);
const sqr3 = new Square(16);
const sqr4 = new Square(65);
const sqr5 = new Square(4);

console.log("--- 1. Verification of Inheritance and Types ---");
console.log("Is sqr1 a Square?", sqr1 instanceof Square); // true
console.log("Is sqr1 a Rectangle?", sqr1 instanceof Rectangle); // true
console.log("Is sqr1 a Shape?", sqr1 instanceof Shape); // true

console.log("\n--- 2. Verification of Singleton (Bonus 1.b) ---");
console.log("Are sqr1 and sqr2 the same object?", sqr1 === sqr2); // true
console.log("Square Count (should be 1):", Square.count); // 1 (because only one was actually created)

console.log("\n--- 3. Verification of Arithmetic (valueOf) ---");
const rect2 = new Rectangle(2, 3); // This will return the original 'rect' (5x10) due to singleton
console.log("Area of rect (5*10):", rect.valueOf()); // 50
console.log("Area of sqr1 (6*6):", sqr1.valueOf()); // 36
console.log("rect + sqr1 (50 + 36):", rect + sqr1); // 86
console.log("rect - sqr1 (50 - 36):", rect - sqr1); // 14

console.log("\n--- 4. Verification of toString ---");
console.log(rect.toString());
// Expected: Width: 10, Length: 5, Area: 50, Perimeter: 30 (or similar depending on param order)

console.log("\n--- 5. Verification of Property Protection ---");
rect.width = 1000; // Try to modify
console.log("Width after attempted change (should stay same):", rect.width);

delete rect.width; // Try to delete
console.log("Width after attempted delete (should still exist):", rect.width);

console.log("\n--- 6. Verification of Abstract Class ---");
try {
  const s = new Shape(10, 10);
} catch (e) {
  console.log("Caught expected error:", e.message); // "class 'Shape' is abstract..."
}
