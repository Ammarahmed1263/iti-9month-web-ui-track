# Templates and Inheritance — C++ Practice

This folder contains C++ programs and headers that demonstrate advanced C++ concepts including templates, inheritance, and generic data structures.

---

## Programs and Headers Included

### 1) stack.h
A generic stack implementation using C++ templates. Demonstrates how to create a reusable stack data structure for any data type.

**Concepts Used**
- C++ templates
- Generic data structures
- Stack operations (push, pop, top, isEmpty)

---

### 2) complex_numbers.h
Implements a complex number class with operator overloading for arithmetic operations. Useful for mathematical computations involving complex numbers.

**Concepts Used**
- Class definition
- Operator overloading
- Encapsulation

---

### 3) inheritance.h
Defines a Base class and a Derived class, demonstrating constructor overloading, encapsulation, and method hiding/overriding for the sum() method.

**Concepts Used**
- Inheritance (base and derived classes)
- Constructor overloading
- Encapsulation
- Method hiding/overriding

---

### 4) main.cpp
A driver program to test and demonstrate the usage of the stack, complex numbers, and inheritance examples.

**Concepts Used**
- Using custom classes and templates
- Demonstrating inheritance and polymorphism
- Testing generic data structures

---

## Files

- stack.h
- complex_numbers.h
- inheritance.h
- main.cpp
- README.md

---

## How to Compile and Run

Use `g++` (MinGW on Windows, or any platform with GCC). Example command:

```bash
g++ main.cpp -o templates_inheritance && ./templates_inheritance
```

If you use C++11 features, add the flag:

```bash
g++ -std=c++11 main.cpp -o templates_inheritance && ./templates_inheritance
```

---

## Learning Goals
- Understand and implement C++ templates
- Practice inheritance and polymorphism
- Build and use generic data structures
- Apply operator overloading in custom classes

---
