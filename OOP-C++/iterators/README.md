# C++ Practice — Iterators and Basic Programs

This folder contains C++ practice programs focusing on iterators, basic arithmetic operations, grading systems, and matrix manipulations.

---

## Programs Included

### 1) Print Even Numbers — `01_print_even.cpp`
Prints all even numbers between 1 and 100.

**Concepts Used**
- Loops (`for` loop)
- Conditional statements (`if`)
- Basic output with `std::cout`

---

### 2) Calculator Program — `02_calculator.cpp`
A simple calculator that performs the following operations based on user input:
- Addition
- Subtraction
- Multiplication
- Division

**Concepts Used**
- Loops (`while` loop)
- Conditional statements (`if`, `switch`)
- Input validation
- Type casting (`static_cast`)

---

### 3) Magic Square — `03_magic_square.cpp`
Generates a magic square for a given odd number size.

**Concepts Used**
- Loops
- Conditional statements
- Escape sequences for colored output
- Siamese method for magic square generation

---

### 4) Grading System — `04_grading_system.cpp`
Determines the grade based on the input score (0-100):
- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: Below 60

**Concepts Used**
- Conditional statements (`if-else`)
- Input validation

---

### 5) Star Matrix — `05_star_matrix.cpp`
Generates a square matrix of a given size with diagonal elements marked as `*` and others as `-`.

**Concepts Used**
- Nested loops
- Conditional statements
- Matrix manipulation

---

## Files

- 01_print_even.cpp
- 02_calculator.cpp
- 03_magic_square.cpp
- 04_grading_system.cpp
- 05_star_matrix.cpp
- README.md

---

## How to Compile and Run

Use `g++`:

```bash
g++ 01_print_even.cpp -o print_even && ./print_even
g++ 02_calculator.cpp -o calculator && ./calculator
g++ 03_magic_square.cpp -o magic_square && ./magic_square
g++ 04_grading_system.cpp -o grading_system && ./grading_system
g++ 05_star_matrix.cpp -o star_matrix && ./star_matrix
```