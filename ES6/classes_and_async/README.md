# ES6 Classes and Asynchronous Programming

This project demonstrates various ES6 features and asynchronous programming concepts in JavaScript, including Promises, Proxies, and Object-Oriented Programming with classes.

---

## Project 1: Fetch Users with Promises

**What it does:** Fetches user data from an API and displays it in a table format using Promises.

### How it works:
1. Defines a function `getUsers` that fetches data from `https://jsonplaceholder.typicode.com/users`.
2. Uses `.then()` to handle the response and convert it to JSON.
3. Creates a table to display user information.

### Key Code:
```javascript
const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {/* Handle error */}
      return response.json();
    })
    .then((users) => {
      const table = document.createElement("table");
      // ...existing code...
    })
    .catch((error) => {/* Handle error */});
};

getUsers();
```

**Learning Points:** 
- Understanding Promises and asynchronous data fetching.
- Handling API responses and errors gracefully.

---

## Project 2: Employee Management with Proxies

**What it does:** Demonstrates the use of Proxies to manage an employee object with custom behavior.

### How it works:
1. Creates an employee object and wraps it in a Proxy.
2. Defines handlers to intercept operations on the employee object.

### Key Code:
```javascript
let emp = {};
emp = new Proxy(emp, {/* Define handlers */});
```

**Learning Points:** 
- Understanding the Proxy object and its use cases.
- Intercepting and customizing object behavior.

---

## Project 3: Shape Classes

**What it does:** Defines various geometric shapes using classes and demonstrates inheritance.

### How it works:
1. Creates a base class `Polygon` and subclasses for specific shapes (Rectangle, Square, Circle, Triangle).
2. Implements methods to calculate area and draw shapes.

### Key Code:
```javascript
class Polygon {
  constructor(name, x = 0, y = 0, fillColor = "#3498db") {/* ... */}
  area() {/* ... */}
}

class Rectangle extends Polygon {/* ... */}
class Square extends Polygon {/* ... */}
class Circle extends Polygon {/* ... */}
class Triangle extends Polygon {/* ... */}

function drawShapes() {/* ... */}

document.addEventListener("DOMContentLoaded", drawShapes);
```

**Learning Points:** 
- Understanding class inheritance and polymorphism in JavaScript.
- Implementing object-oriented design principles.

---

## Usage
- To run the examples, open the `index.html` file in a web browser. Each JavaScript file is linked to the HTML file, and the functionalities can be tested directly in the browser.

## Conclusion
This project serves as a practical demonstration of modern JavaScript features and best practices, providing a solid foundation for understanding asynchronous programming, object-oriented design, and advanced JavaScript concepts.