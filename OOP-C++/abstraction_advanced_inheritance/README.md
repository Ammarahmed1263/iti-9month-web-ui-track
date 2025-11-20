# Abstraction & Advanced Inheritance — C++ Practice

This folder contains C++ programs and headers that demonstrate abstraction, inheritance, polymorphism, and advanced OOP concepts using geometric shapes.

---

## Programs and Headers Included

### 1) GeoShape.h
Defines an abstract base class `GeoShape` with virtual and pure virtual functions for area, perimeter, and printing. Serves as the root for all geometric shapes.

**Concepts Used**
- Abstract base class
- Pure virtual functions
- Polymorphism
- Operator overloading (== for area comparison)

---

### 2) Circle.h
Implements a `Circle` class derived from `GeoShape`. Provides area and perimeter calculations for circles.

**Concepts Used**
- Inheritance
- Overriding virtual functions
- Encapsulation

---

### 3) Rectangle.h
Implements a `Rectangle` class derived from `GeoShape`. Provides area, perimeter, and print functionality for rectangles.

**Concepts Used**
- Inheritance
- Overriding virtual functions
- Encapsulation

---

### 4) Square.h
Implements a `Square` class derived from `Rectangle`. Ensures both dimensions are equal and overrides area/perimeter/print.

**Concepts Used**
- Inheritance (Rectangle -> Square)
- Overriding virtual functions
- Encapsulation

---

### 5) Cube.h
Implements a `Cube` class derived from `Square`. Adds volume calculation and overrides area/perimeter/print for 3D.

**Concepts Used**
- Inheritance (Square -> Cube)
- Overriding virtual functions
- 3D geometry
- Encapsulation

---

### 6) Triangle.h
Implements a `Triangle` class derived from `GeoShape`. Calculates area and perimeter (as a right triangle) and provides print functionality.

**Concepts Used**
- Inheritance
- Overriding virtual functions
- Encapsulation

---

### 7) Rhombus.h
Implements a `Rhombus` class derived from `GeoShape`. Calculates area and perimeter and provides print functionality.

**Concepts Used**
- Inheritance
- Overriding virtual functions
- Encapsulation

---

### 8) main.cpp
Demonstrates polymorphism by creating an array of `GeoShape*` to various shapes, printing, sorting by area, and comparing shapes. Shows use of templates for comparison.

**Concepts Used**
- Polymorphism (virtual functions)
- Dynamic memory management
- Sorting with custom comparators
- Templates
- Operator overloading

---

## Files

- GeoShape.h
- Circle.h
- Rectangle.h
- Square.h
- Cube.h
- Triangle.h
- Rhombus.h
- main.cpp
- README.md

---

## How to Compile and Run

Use `g++` (MinGW on Windows, or any platform with GCC). Example command:

```bash
g++ main.cpp -o abstraction_advanced_inheritance && ./abstraction_advanced_inheritance
```

If you use C++11 features, add the flag:

```bash
g++ -std=c++11 main.cpp -o abstraction_advanced_inheritance && ./abstraction_advanced_inheritance
```

---

## Learning Goals
- Understand abstraction and pure virtual functions
- Practice inheritance and polymorphism
- Implement and use advanced OOP hierarchies
- Apply operator overloading and templates in OOP

---
