class Polygon {
  constructor(name, x = 0, y = 0, fillColor = "#3498db") {
    this.name = name;
    this.x = x;
    this.y = y;
    this.fillColor = fillColor;
  }

  area() {
    throw new Error("area() must be implemented by subclass");
  }

  draw(ctx) {
    throw new Error("draw() must be implemented by subclass");
  }

  toString() {
    return `Shape: ${this.name}\nArea: ${this.area()}`;
  }
}

class Rectangle extends Polygon {
  constructor(width, height, x = 0, y = 0, fillColor = "#3498db") {
    super("Rectangle", x, y, fillColor);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  draw(ctx) {
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  toString() {
    return `${super.toString()}\nWidth: ${this.width}\nHeight: ${this.height}`;
  }
}

class Square extends Polygon {
  constructor(side, x = 0, y = 0, fillColor = "#e74c3c") {
    super("Square", x, y, fillColor);
    this.side = side;
  }

  area() {
    return this.side ** 2;
  }

  draw(ctx) {
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.x, this.y, this.side, this.side);
  }

  toString() {
    return `${super.toString()}\nSide: ${this.side}`;
  }
}

class Circle extends Polygon {
  constructor(radius, x = 0, y = 0, fillColor = "#2ecc71") {
    super("Circle", x, y, fillColor);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  draw(ctx) {
    ctx.fillStyle = this.fillColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  toString() {
    return `${super.toString()}\nRadius: ${this.radius}`;
  }
}

class Triangle extends Polygon {
  constructor(base, height, x = 0, y = 0, fillColor = "#9b59b6") {
    super("Triangle", x, y, fillColor);
    this.base = base;
    this.height = height;
  }

  area() {
    return (this.base * this.height) / 2;
  }

  draw(ctx) {
    ctx.fillStyle = this.fillColor;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.base, this.y);
    ctx.lineTo(this.x + this.base / 2, this.y - this.height);
    ctx.closePath();
    ctx.fill();
  }

  toString() {
    return `${super.toString()}\nBase: ${this.base}\nHeight: ${this.height}`;
  }
}

function drawShapes() {
  const canvas = document.getElementById("shapesCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rectangle = new Rectangle(120, 80, 50, 50);
  const square = new Square(80, 220, 50);
  const circle = new Circle(50, 450, 100);
  const triangle = new Triangle(100, 80, 550, 130);

  rectangle.draw(ctx);
  square.draw(ctx);
  circle.draw(ctx);
  triangle.draw(ctx);

  console.log(rectangle.toString());
  console.log("\n" + square.toString());
  console.log("\n" + circle.toString());
  console.log("\n" + triangle.toString());
}

document.addEventListener("DOMContentLoaded", drawShapes);
