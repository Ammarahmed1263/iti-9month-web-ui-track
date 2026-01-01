let value = parseFloat(prompt("Enter the radius of the circle:"));
if (isNaN(value) || value <= 0) {
  alert("Please enter a valid positive number");
} else {
  alert(
    "Area of the circle with radius " + value + " is: " + calculateArea(value)
  );
}

let value2 = parseFloat(prompt("Enter number to square root:"));
if (isNaN(value2) || value2 <= 0) {
  alert("Please enter a valid positive number");
} else {
  alert("Square root of " + value2 + " is: " + calculateRoot(value2));
}

let angle = parseFloat(prompt("Enter the angle in degrees:"));
let angleCosine = Math.cos(degreesToRadians(angle));

console.log("cosine of angle " + angle + " equals " + angleCosine);

function calculateArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function calculateRoot(radius) {
  return Math.sqrt(radius);
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}
