# JavaScript Practice — Built-in Objects

This folder contains small practice scripts that exercise JavaScript's built-in objects (Math, String, RegExp) and basic input/output.

---

## Programs Included

### 1) Character Counter — `countCharacters.js`
Counts how many times a character appears in a string with optional case sensitivity.

**Concepts Used**
- String traversal with a `for` loop
- Case handling with `toLowerCase()`
- Input validation for single-character entry
- Console output with `console.log()`

---

### 2) Longest Word Finder — `longestString.js`
Finds the longest word in a sentence and writes it to the document.

**Concepts Used**
- String splitting
- Iteration and length comparison
- DOM output with `document.write()`

---

### 3) Palindrome Checker — `isPalindrome.js`
Checks if a word or phrase is a palindrome with optional case sensitivity after stripping non-alphanumeric characters.

**Concepts Used**
- Regular expressions for cleaning input
- Two-pointer comparison
- Optional case-insensitive matching
- User prompts and alerts

---

### 4) User Data Validation — `userValidation.js`
Collects and validates user name, phone, mobile, email, and favorite color, then logs the result with colored styling.

**Concepts Used**
- Regular expressions for input validation
- Looping with `while (true)` and break conditions
- Console styling via CSS (`console.log` with `%c`)
- User prompts and alerts

---

### 5) Circle Operations — `circleOperations.js`
Prompts for a circle radius, computes its area, then prompts for a number to square root, and logs the cosine of an input angle (degrees).

**Concepts Used**
- Math object (`Math.PI`, `Math.pow`, `Math.sqrt`, `Math.cos`)
- Degree-to-radian conversion
- Input validation with `isNaN()` and numeric comparisons
- User interaction with `prompt()` and `alert()`

---

## Files

- countCharacters.js
- longestString.js
- isPalindrome.js
- userValidation.js
- circleOperations.js
- index.html
- README.md

---

## How to Run

1. Open `index.html` in a web browser.
2. Uncomment the desired script tag in the HTML file.
3. Reload the page to run the selected program.

```html
<!-- Uncomment the script you want to run -->
<script src="countCharacters.js"></script>
<script src="longestString.js"></script>
<script src="isPalindrome.js"></script>
<script src="userValidation.js"></script>
<script src="circleOperations.js"></script>
```

---

## Notes

- All programs rely on `prompt()` for user input.
- Output methods vary: `alert()`, `document.write()`, or `console.log()`.
- Inputs include basic validation (e.g., regex checks, numeric bounds, single-character checks).
