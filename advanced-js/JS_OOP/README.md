# JS_OOP Projects

This folder contains JavaScript tasks focused on object-oriented programming, data validation, error handling, and encapsulation using closures, implemented through custom constructors and collection-like behavior.

---

## Task A: Box Library & Book Management ([advanced-js/JS_OOP/box_library.js](advanced-js/JS_OOP/box_library.js))

**Objective:** Model a simple library box that stores books, tracks their copies, and enforces validation rules on `Book` creation.

### What it does:
- **Book(title, numOfChapters, author, numOfPages, publisher, numOfCopies)**
  - Expects exactly 6 arguments; otherwise throws `Error`.
  - Validates:
    - `title`, `author`, `publisher` must be strings.
    - `numOfChapters`, `numOfPages`, `numOfCopies` must be numbers `>= 0`.
  - On invalid input, throws `TypeError("Invalid arguments where passed")`.
  - Stores book metadata and the current number of copies.
- **BoxLibrary(height, width, length, material)**
  - Stores box dimensions and computes `volume = length * width * height`.
  - Maintains:
    - `content`: array of stored `Book` objects (one entry per title).
    - `numOfBooks`: total number of copies across all books.
  - Methods:
    - `getBooksCount()` → returns the total number of book copies in the box.
    - `addBook(book)` →
      - Requires `book` to be an instance of `Book` (otherwise throws `TypeError`).
      - If a book with the same title exists: increments its `numOfCopies` by the new book’s `numOfCopies`.
      - Otherwise: clones the passed `Book` into a new internal `Book` instance and pushes it to `content`.
      - Updates `numOfBooks` by the number of added copies.
    - `removeBook(title)` →
      - Looks up a book by title using a private `findBook` helper (closure over `self` and `content`).
      - If not found, throws `Error("book doesn't exist")`.
      - If the stored book has more than 1 copy: decrements `numOfCopies` and `numOfBooks`, returns the book object.
      - If it has exactly 1 copy: removes that entry from `content`, decrements `numOfBooks`, and returns the removed book.

### Key Concepts:
- Input validation & specific error types for constructor misuse.
- Aggregation and counting: separates title entries (`content`) from total copies (`numOfBooks`).
- Encapsulation via closures: `findBook(title)` is a private helper.
- Defensive data management: merges duplicate titles by increasing copy counts; internal `Book` instances prevent accidental external mutation.

### Test Cases / Examples:
```javascript
const myBox = new BoxLibrary(10, 20, 10, "Wood");
const book1 = new Book("Harry Potter", 17, "JK Rowling", 300, "Bloomsbury", 2);

myBox.addBook(book1);
myBox.addBook(book1); // merges copies → numOfBooks grows by 2 each time
console.log(myBox.getBooksCount()); // 4

myBox.removeBook("Harry Potter"); // decrements copies
console.log(myBox.getBooksCount()); // 3
```

---

## Task B: Numeric Sequence Generator ([advanced-js/JS_OOP/numerical_sequence.js](advanced-js/JS_OOP/numerical_sequence.js))

**Objective:** Implement a numeric sequence object that enforces a strict arithmetic progression and validates append/prepend operations.

### What it does:
- **NumericSequence(start, end, step)**
  - Requires exactly 3 arguments; otherwise throws `Error`.
  - Validates step direction:
    - If `end > start`, `step` must be positive.
    - If `end < start`, `step` must be negative.
    - On mismatch, throws `SyntaxError("steps aren't following range logic")`.
  - Builds the initial sequence (inclusive) with the provided step.
- **Methods** (operate on an internal `list` array):
  - `append(newVal)` →
    - If empty, pushes `newVal`.
    - Otherwise expects `newVal === lastElement + step`; rejects duplicates; else throws `SyntaxError`.
  - `prepend(newVal)` →
    - If empty, pushes `newVal`.
    - Otherwise expects `newVal === firstElement - step`; rejects duplicates; else throws `SyntaxError`.
  - `pop()` → removes and returns the last element.
  - `dequeue()` → removes and returns the first element.
  - `show()` → logs the current list to the console.

### Key Concepts:
- Sequence invariants: every element must follow the same arithmetic progression.
- Constructor validation: enforces argument count and step direction relative to `start`/`end`.
- Robust edge handling: `append`/`prepend` safely handle empty sequences.
- Encapsulation: internal list isn’t returned directly; all interactions go through methods.
- Error signaling: uses `Error` and `SyntaxError` with clear messages for debugging.

### Test Cases / Examples:
```javascript
const seq = new NumericSequence(0, 10, 2);
seq.append(12);   // ok
seq.prepend(-2);  // ok
seq.show();       // list:  [ -2, 0, 2, 4, 6, 8, 10, 12 ]

try {
  seq.append(11); // throws SyntaxError: wrong step
} catch (e) {
  console.log(e.message);
}
```

---

## Learning Outcomes

Through these projects, I have practiced:

- ✅ Designing constructor-based “classes” with clear responsibilities
- ✅ Validating constructor arguments and throwing appropriate error types
- ✅ Managing collections (books, numeric sequences) with custom logic instead of raw arrays
- ✅ Using closures to hide helper functions and internal state
- ✅ Enforcing invariants (arithmetic progression, valid book counts) through method design
- ✅ Implementing operations similar to stack/queue (`pop`, `dequeue`) on custom structures

---

## How to Run

### Using Node.js (recommended)
From the project root:

- `node advanced-js/JS_OOP/box_library.js`
  - Runs tests that create books, add/remove them from the box, and log results.
- `node advanced-js/JS_OOP/numerical_sequence.js`
  - Runs tests that create ascending/descending sequences and exercise all operations.

### Using a Browser
Create a simple HTML file and include a script tag for the desired file, then open it and inspect the console (F12) to see the logged tests.
