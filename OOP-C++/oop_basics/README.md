# OOP Basics — C++ Practice

This folder contains small programs that demonstrate basic OOP and related C++ features: function overloading, and transitioning from struct to class with member functions.

---

### 1) overload_sum.cpp
Demonstrates function overloading in C++ by providing three overloaded `sum` functions:
- `int sum(int, int)` — integer addition
- `double sum(double, double)` — floating-point addition
- `string sum(string, string)` — string concatenation

**Concepts Used**
- Function overloading and overload resolution
- Basic I/O with `std::cout`
- Implicit conversions are avoided to show clear overload selection

---

### 2) struct_to_class.cpp
Shows the difference (and similarity) between a `struct` and a `class` in C++ by defining an `Animal` as a `struct` and `AnimalClass` as a `class`. Both contain similar data members and a member function `makeSound()` to demonstrate that `struct` and `class` can both have behavior.

**Concepts Used**
- `struct` vs `class` defaults (public vs private)
- Member functions on aggregate types
- Basic object instantiation and member access

---

## How to compile and run

```bash
g++ overload_sum.cpp -o overload_sum && ./overload_sum
g++ struct_to_class.cpp -o struct_to_class && ./struct_to_class
```

---