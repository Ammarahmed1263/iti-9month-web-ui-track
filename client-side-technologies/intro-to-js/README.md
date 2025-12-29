# JavaScript Practice — Introduction to JavaScript

This folder contains JavaScript practice programs focusing on basic programming concepts, user input handling, loops, and conditional statements.

---

## Programs Included

### 1) Headers Generator — `headers.js`
Generates HTML headers (H1 through H6) with user-provided text.

**Concepts Used**
- User input with `prompt()`
- Loops (`for` loop)
- String concatenation
- DOM manipulation with `document.write()`

---

### 2) Number Sum Calculator — `n-sum.js`
Continuously accepts numbers from the user and calculates their sum until:
- User enters 0
- User cancels input
- Sum exceeds 100

**Concepts Used**
- Loops (`while` loop)
- Conditional statements (`if`)
- Type conversion with `parseInt()`
- Input validation with `isNaN()`
- User interaction with `prompt()` and `alert()`

---

### 3) Maximum Integer Finder — `max-int.js`
Compares two user-provided numbers and determines which one is greater.

**Concepts Used**
- User input validation
- Conditional statements
- Ternary operator
- Type conversion
- Error handling for non-numeric input

---

### 4) Divisibility Checker — `divisors.js`
Checks if a number is divisible by one, both, or neither of two provided divisors.

**Concepts Used**
- Modulo operator (`%`)
- Multiple conditional statements
- Input validation
- String concatenation
- Logical operators (`&&`, `||`)

---

### 5) Star Pyramid — `star-pyramid.js`
Generates a pyramid pattern made of asterisks based on user-specified height.

**Concepts Used**
- Nested loops
- String concatenation
- Pattern generation
- HTML output with `<br>` tags

---

### 6) Number Range Filter — `z-range.js`
Displays numbers within a specified range with filtering options (odd, even, or all numbers) and calculates their sum.

**Concepts Used**
- Input validation function
- Conditional logic
- Dynamic step calculation for ascending/descending ranges
- Console styling with CSS
- String formatting
- Helper functions

---

## Files

- headers.js
- n-sum.js
- max-int.js
- divisors.js
- star-pyramid.js
- z-range.js
- count-multiples.js
- index.html
- README.md

---

## How to Run

1. Open `index.html` in a web browser
2. Uncomment the desired script tag in the HTML file
3. Reload the page to run the selected program

```html
<!-- Uncomment the script you want to run -->
<script src="headers.js"></script>
<script src="n-sum.js"></script>
<script src="max-int.js"></script>
<script src="divisors.js"></script>
<script src="star-pyramid.js"></script>
<script src="z-range.js"></script>
```

---

## Notes

- Each program uses `prompt()` for user input
- Some programs use `alert()` for output, others use `document.write()` or `console.log()`
- All programs include input validation to handle non-numeric entries
