# C++ OOP Practice — Intro Classes

This folder contains introductory C++ class implementations and simple test code, focusing on basic OOP concepts: constructors, member functions, static members, and simple resource management. Each file demonstrates a different class or utility.

---

## Classes Included

### 1) Stack — `stack.h`
A basic integer stack class with push, pop, and display methods. Supports dynamic allocation, static instance counting, and simple error messages for overflow/underflow.

**Concepts Used**
- Dynamic memory allocation
- Constructors and destructors
- Static class members
- Simple push/pop logic

---

### 2) Banking System — `banking_system.h`
A `BankingSystem` class with unique account numbers, deposit/withdraw methods, and static counters for accounts. Demonstrates simple encapsulation and static data members.

**Concepts Used**
- Constructors (default and parameterized)
- Static counters and unique ID generation
- Member functions for deposit/withdraw
- Simple output formatting

---

### 3) Complex Numbers — `complex_numbers.h`
A `ComplexNumbers` class supporting multiple constructors, a print method, and a static instance counter. Prints constructor/destructor messages for tracing.

**Concepts Used**
- Overloaded constructors
- Static instance counter
- Print method for formatted output
- Lifecycle tracing (constructor/destructor messages)

---

## Files
- `stack.h`
- `banking_system.h`
- `complex_numbers.h`
- `README.md`

---

## How to Compile and Run
You can include these headers in a test program and compile using a C++11 (or later) compiler. Example (from this folder):

```bash
g++ main.cpp -o main
./main
```

Replace `your_test.cpp` with your own test file that includes these headers and exercises the classes.

In Windows bash shell, run executables with `./test_program.exe` if needed.

---

## Notes
- These classes are designed for learning and demonstration purposes.
- `BankingSystem` uses static members for account counting and unique account numbers.
- `Stack` and `ComplexNumbers` both demonstrate static counters and basic resource management.
