# Chai + Mocha Practice

This folder is my learning log for basic unit testing with Mocha and Chai. It includes function exercises, browser-based validation notes, and examples of assertion styles.

## What is implemented

- `capitalizeText(input)` for string validation and uppercase conversion
- `createArray(number)` for array generation from a numeric input
- `CheckPositivity(x)` for positive/negative checks
- `Multiply(x)` for simple numeric transformation
- Nested object test data in `obj`, `obj1`, `obj2`, and `obj3`
- `validateNumber(value)` and `validateText(text)` for form validation exercises

## How it is implemented

The file in `src/index.js` mixes the function implementations with comments that describe the testing tasks. The tests in `test/index.test.js` are meant to validate each helper with Chai assertions and to practice different assertion styles.

- `capitalizeText` throws when the input is not a string and returns uppercase text for valid input.
- `createArray` turns a number into an indexed array starting from zero.
- `CheckPositivity` and `Multiply` are simple utility functions used for assertion practice.
- `validateNumber` and `validateText` back the browser form example and show basic input validation logic.

## What the tests cover

- String and number validation
- Deep equality checks
- Array length and content checks
- Assertion styles with Chai
- A browser-based form validation demo in `index.html` and `src/index.js`

## Folder Structure

```text
chai-mocha/
├── src/
│   ├── index.js
│   └── style.css
├── test/
│   └── index.test.js
├── index.html
├── package.json
├── bun.lock
└── README.md
```

## How to run

```bash
npm install
npm test
```

If you want to open the browser demo, serve `index.html` through a local server instead of opening it directly from disk.

## Learning progress notes

- Learned the difference between assertion styles and when each is useful.
- Practiced writing tests that describe behavior instead of implementation details.
- Used this folder to build confidence with basic client-side validation and Mocha test structure.
