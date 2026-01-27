# ES6 Day 1 - Array Methods & Modern JavaScript Features

Three projects demonstrating ES6 features including array methods, destructuring, spread/rest operators, and modern JavaScript syntax.

---

## Project 1: Variable Swap with Destructuring

**What it does:** Swaps two variable values using ES6 array destructuring assignment in one line.

### How it works:
1. Initializes two variables `x = 5` and `y = 10`
2. Uses destructuring assignment to swap values
3. Logs swapped values to console

### Key Code:
```javascript
let x = 5;
let y = 10;
[y, x] = [x, y];  // Swap in one line!
console.log(x, y);  // Output: 10 5
```

**Traditional Approach (without ES6):**
```javascript
// Would require temporary variable
let temp = x;
x = y;
y = temp;
```

**How Destructuring Works:**
1. Right side creates array: `[5, 10]`
2. Left side destructures: first value → `y`, second value → `x`
3. Result: `y = 5`, `x = 10`

**Learning Points:** 
- Array destructuring assignment
- Elegant variable swapping without temporary variables
- ES6 syntactic sugar for common patterns
---

## Project 2: Min/Max Finder with Spread & Rest Operators

**What it does:** Finds minimum and maximum values from a list of numbers using ES6 spread/rest operators and destructuring.

### How it works:
1. Defines function with rest parameter `...numbers` to accept unlimited arguments
2. Uses spread operator with `Math.min()` and `Math.max()`
3. Returns object with min/max properties
4. Destructures result to extract values

### Key Code:
```javascript
function getMinMax(...numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}

const prices = [5, 12, 10, 1, 22];
const { min, max } = getMinMax(...prices);
// Output: "Minimum value is 1 while Maximum value is 22"
```

**ES6 Features:**
- **Rest Parameter (`...numbers`)**: Collects arguments into array
- **Spread Operator (`...prices`)**: Expands array into individual arguments
- **Object Destructuring (`{ min, max }`)**: Extracts properties from object
- **Template Literals**: String interpolation with backticks

**Learning Points:** Rest/spread operators, destructuring, Math utilities, concise function syntax

---

## Project 3: Array Methods

**What it does:** Demonstrates common ES6 array methods including `every()`, `some()`, `filter()`, `map()`, and `forEach()` on a fruits array.

### How it works:
1. Creates an array of fruit names
2. Uses `every()` to check if all elements are strings
3. Uses `some()` to check if any fruit starts with 'a'
4. Filters fruits starting with 'b' or 's'
5. Maps array to create "I like..." sentences
6. Iterates and logs each sentence with `forEach()`

### Key Concepts:
```javascript
const allStrings = fruits.every((fruit) => typeof fruit === "string");
// Returns true only if ALL elements satisfy the condition

const someStartWithA = fruits.some((fruit) => fruit.startsWith("a"));
// Returns true if AT LEAST ONE element satisfies the condition

const filtered = fruits.filter(
  (fruit) => fruit.startsWith("b") || fruit.startsWith("s")
);
// Creates NEW array with elements that pass the test
```

**Array Methods Used:**
- `every()`: Tests if all elements pass condition
- `some()`: Tests if at least one element passes condition
- `filter()`: Creates new array with filtered elements
- `map()`: Transforms each element into new value
- `forEach()`: Executes function for each element

**Learning Points:** Array iteration methods, arrow functions, callback functions, predicate testing

---

## Quick Reference

| Project | Technology | Key Concept |
|---------|-----------|------------|
| Array Methods | ES6 Arrays | every, some, filter, map, forEach |
| Min/Max Finder | Spread/Rest | Rest parameters & spread syntax |
| Variable Swap | Destructuring | Array destructuring assignment |

---

## Running the Projects

```bash
# Run array methods demo
node arrayMethods.js

# Run min/max finder
node minMax.js

# Run variable swap demo
node swap.js
```

## Key ES6 Concepts Covered

- **Arrow Functions**: Concise function syntax `(param) => expression`
- **Array Methods**: Functional programming with arrays
- **Spread Operator**: Expand iterables `...array`
- **Rest Parameters**: Collect arguments `...args`
- **Destructuring**: Extract values from arrays/objects
- **Template Literals**: String interpolation with `${expression}`
