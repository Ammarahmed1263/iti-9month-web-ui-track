# ES6 Day 2 - Generators & Symbols

Four projects demonstrating ES6 generators and symbols including generator functions, iterator protocol, well-known symbols, and parameter destructuring.

---

## Project 1: Course Info with Destructuring & Rest

**What it does:** Creates a function that accepts course information with parameter destructuring, default values, and rest parameters with validation.

### How it works:
1. Uses destructuring in function parameters with defaults
2. Collects unknown properties with rest operator
3. Validates only allowed properties are passed
4. Throws error for unexpected properties
5. Returns normalized course information object

### Key Code:
```javascript
const generateCourseInfo = ({
  courseName = "ES6",
  courseDuration = "3days",
  courseOwner = "javascript",
  ...rest
} = {}) => {
  if (Object.keys(rest).length !== 0) {
    throw new SyntaxError(
      "only courseName, courseDuration, courseOwner properties allowed"
    );
  }
  
  return {
    courseName,
    courseDuration,
    courseOwner,
  };
};

// Valid usage
console.log(generateCourseInfo());
// { courseName: 'ES6', courseDuration: '3days', courseOwner: 'javascript' }

// Throws error - invalid property
generateCourseInfo({ instructor: "Ammar Ahmed" });
// SyntaxError: only courseName, courseDuration, courseOwner properties allowed
```

**Destructuring Features:**
- **Default Values**: `courseName = "ES6"` provides fallback
- **Rest Parameters**: `...rest` collects remaining properties
- **Parameter Defaults**: `= {}` allows calling without arguments
- **Property Shorthand**: `return { courseName }` instead of `{ courseName: courseName }`

**Learning Points:**
- Parameter destructuring with defaults
- Rest operator for collecting properties
- Input validation patterns
- Error handling with try/catch
- Object property shorthand syntax

---

## Project 2: Fibonacci Generator

**What it does:** Implements Fibonacci sequence generation using ES6 generator functions with two variants: count-based and value-based.

### How it works:
1. **Count-based generator**: Yields first N Fibonacci numbers
2. **Value-based generator**: Yields Fibonacci numbers up to a maximum value
3. Uses `yield` keyword to produce values on-demand
4. Implements lazy evaluation for memory efficiency

### Key Code:
```javascript
function* genFibonacciCount(count) {
  let prev = 0;
  let curr = 1;
  let order = 1;

  while (order <= count) {
    yield prev;
    [prev, curr] = [curr, curr + prev];
    order++;
  }
}

// Usage: Generate first 9 Fibonacci numbers
for (const num of genFibonacciCount(9)) {
  console.log(num);  // 0, 1, 1, 2, 3, 5, 8, 13, 21
}
```

**Traditional Approach (without generators):**
```javascript
// Would require generating entire array upfront
function fibonacci(count) {
  const result = [];
  let prev = 0, curr = 1;
  for (let i = 0; i < count; i++) {
    result.push(prev);
    [prev, curr] = [curr, curr + prev];
  }
  return result;
}
```

**How Generators Work:**
1. Generator function is defined with `function*` syntax
2. Calling generator returns an iterator object
3. Each `yield` pauses execution and returns a value
4. `for...of` loop automatically calls `next()` until done
5. Values are computed on-demand (lazy evaluation)

**Learning Points:**
- Generator functions with `function*` syntax
- `yield` keyword for producing values
- Lazy evaluation for memory efficiency
- Fibonacci sequence implementation
- Array destructuring for swapping values

---

## Project 3: Symbol.replace Override

**What it does:** Demonstrates Symbol.replace well-known symbol by creating a custom object that shortens strings when used with `String.prototype.replace()`.

### How it works:
1. Creates object with custom `[Symbol.replace]` method
2. Implements string truncation logic (15 chars max + "...")
3. Uses object as replacement argument in `replace()`
4. JavaScript engine calls custom replace logic

### Key Code:
```javascript
const myObj = {
  [Symbol.replace]: function (str) {
    if (str.length > 15) {
      return str.slice(0, 15) + "...";
    }
    return str;
  }
};

let str = "hello, world. I'm ammar ahmed.";
console.log(str.replace(myObj));
// Output: "hello, world. I..."

let shortStr = "hello, world.";
console.log(shortStr.replace(myObj));
// Output: "hello, world."
```

**Well-Known Symbols:**
JavaScript provides built-in symbols that modify object behavior:
- `Symbol.iterator`: Makes object iterable
- `Symbol.replace`: Customizes `replace()` behavior
- `Symbol.match`: Customizes `match()` behavior
- `Symbol.split`: Customizes `split()` behavior
- And more...

**Learning Points:**
- Well-known symbols for behavior customization
- Symbol.replace for custom string operations
- String manipulation methods
- Overriding built-in behaviors

---

## Project 4: Custom Iterable Object

**What it does:** Makes a plain object iterable using Symbol.iterator with a generator function, allowing it to work with `for...of` loops.

### How it works:
1. Defines object with company properties
2. Implements `[Symbol.iterator]` using generator function
3. Yields key-value pairs using `Object.entries()`
4. Makes object usable in `for...of` loops

### Key Code:
```javascript
const itrObj = {
  company: "Facebook",
  worth: 90000000,
  size: "50k-200k",
  [Symbol.iterator]: function* () {
    for (const entry of Object.entries(this)) {
      yield entry;
    }
  }
};

// Now the object is iterable!
for (const entry of itrObj) {
  console.log(entry);
  // ['company', 'Facebook']
  // ['worth', 90000000]
  // ['size', '50k-200k']
}
```

**Iterator Protocol:**
An object is iterable if it implements the `@@iterator` method (Symbol.iterator) which returns an iterator object with a `next()` method.

**Manual Iterator Implementation (commented in code):**
```javascript
[Symbol.iterator]: function () {
  const entries = Object.entries(this);
  let index = 0;
  return {
    next: function () {
      if (index < entries.length) {
        return { value: entries[index++], done: false };
      }
      return { value: undefined, done: true };
    }
  };
}
```

**Learning Points:**
- Symbol.iterator well-known symbol
- Making custom objects iterable
- Generator functions as iterators
- Iterator protocol implementation
- Object.entries() for key-value pairs

---

## Quick Reference

| Project | Technology | Key Concept |
|---------|-----------|------------|
| Course Info | Destructuring | Parameter destructuring, rest operator, defaults |
| Fibonacci Generator | Generators | Generator functions, yield, lazy evaluation |
| Symbol Replace | Symbols | Symbol.replace, well-known symbols |
| Iterable Object | Symbols | Symbol.iterator, custom iterables |

---

## Running the Projects

```bash
# Run course info with validation
node courseInfo.js

# Run Fibonacci generator demo
node fibonacciGen.js

# Run Symbol.replace demo
node symbolReplace.js

# Run custom iterable object
node iterableObject.js
```

## Key ES6 Concepts Covered

- **Generator Functions**: Create iterators with `function*` and `yield`
- **Symbols**: Unique, immutable primitive values for property keys
- **Well-Known Symbols**: Built-in symbols that modify object behavior
- **Iterator Protocol**: Making objects work with `for...of`
- **Parameter Destructuring**: Extract values from objects in function parameters
- **Default Parameters**: Provide fallback values for function parameters
- **Rest Operator**: Collect remaining properties/arguments
- **Object Property Shorthand**: Concise object literal syntax
- **Lazy Evaluation**: Generate values on-demand instead of upfront

---

## Generator vs Regular Function

| Aspect | Regular Function | Generator Function |
|--------|-----------------|-------------------|
| Syntax | `function foo()` | `function* foo()` |
| Returns | Single value | Iterator object |
| Execution | Runs to completion | Pauses at each `yield` |
| Memory | Stores all results | Generates on-demand |
| Use Case | Compute final value | Stream values over time |

---

## Symbol Use Cases

1. **Unique Property Keys**: Avoid property name collisions
2. **Meta-programming**: Customize object behavior (iterator, replace, match)
3. **Hidden Properties**: Create "private" properties
4. **Protocol Implementation**: Implement standard interfaces (iterable, async iterable)
