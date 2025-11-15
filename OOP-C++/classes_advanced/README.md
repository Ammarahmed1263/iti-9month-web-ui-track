# C++ OOP Practice — Advanced Classes

This folder contains C++ class implementations and test code focusing on advanced OOP concepts: copy/move semantics, operator overloading, and resource management. Each file demonstrates a different class or utility, with a test harness in `main.cpp`.

---

## Classes Included

### 1) Stack — `stack.h`
A dynamic integer stack class with support for push, pop, copy/move constructors and assignment, index operator, and a static instance counter.

**Concepts Used**
- Dynamic memory management
- Copy/move constructor and assignment
- Operator overloading (`[]`, assignment)
- Exception handling (`std::out_of_range`)
- Static class members

---

### 2) Bank Account — `bank_account.h`
A `BankAccount` class with unique account numbers, move semantics, deleted copy operations, deposit/withdraw methods, and stream operators for input/output.

**Concepts Used**
- Move constructor and assignment
- Deleted copy constructor/assignment
- Fluent API (chained methods)
- Static counters and unique ID generation
- Operator overloading (stream operators)

---

### 3) Complex Numbers — `complex_numbers.h`
A `ComplexNumbers` class supporting arithmetic, increment/decrement, comparison, type casting, and stream operators. Prints constructor/destructor messages for tracing.

**Concepts Used**
- Operator overloading (+, -, *, /, ++, --, ==, <, >, type cast)
- Custom comparison (returns string)
- Type casting operator (to float)
- Static instance counter
- Stream operators

---

### 4) Test — `main.cpp`
A test program that exercises all the above classes. Most tests are commented out; uncomment to try different features.

**Concepts Used**
- Instantiating and testing custom classes
- Demonstrating copy/move/assignment
- Exception handling and input/output

---

## Files
- `stack.h`
- `bank_account.h`
- `complex_numbers.h`
- `main.cpp`
- `README.md`

---

## How to Compile and Run
You can compile and run the test harness using a C++11 (or later) compiler. Example (from this folder):

```bash
g++ main.cpp -o main
./main
```

In Windows bash shell, run executables with `./classes_test.exe` if needed.

In VS Code: open `main.cpp` and use the default build task (Ctrl+Shift+B) or run the configured C++ build task.

---

## Notes
- The classes are designed for educational purposes and demonstrate advanced C++ OOP features.
- `BankAccount` disables copying to prevent accidental duplication of accounts.
- `Stack` throws exceptions for out-of-bounds access.
- `ComplexNumbers` prints lifecycle messages for tracing object creation/destruction.
