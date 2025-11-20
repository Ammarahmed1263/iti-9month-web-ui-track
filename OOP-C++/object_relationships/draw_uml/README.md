# Draw UML — C++ Practice

This folder contains C++ programs and headers for a simple ASCII-based drawing system, demonstrating object relationships (aggregation, composition), geometric classes, and basic graphics rendering in the console.

---

## Programs and Headers Included

### 1) Point.h
Defines a `Point` class representing a 2D coordinate. Used as a building block for all shapes.

**Concepts Used**
- Class encapsulation
- Coordinate representation

---

### 2) Circle.h
Defines a `Circle` class with a center (`Point`) and radius. Can draw itself using the graphics system.

**Concepts Used**
- Composition (uses Point)
- Drawing method

---

### 3) Ellipse.h
Defines an `Ellipse` class with a center (`Point`) and two radii. Can draw itself using the graphics system.

**Concepts Used**
- Composition (uses Point)
- Drawing method

---

### 4) Line.h
Defines a `Line` class with start and end `Point`s. Can draw itself using the graphics system.

**Concepts Used**
- Composition (uses Point)
- Drawing method

---

### 5) Rectangle.h
Defines a `Rectangle` class with upper-left and lower-right `Point`s. Can draw itself using the graphics system.

**Concepts Used**
- Composition (uses Point)
- Drawing method
- Copy constructor

---

### 6) Triangle.h
Defines a `Triangle` class with three `Point`s. Can draw itself using the graphics system.

**Concepts Used**
- Composition (uses Point)
- Drawing method

---

### 7) SimpleGraphics.h / SimpleGraphics.cpp
Implements a simple ASCII graphics engine for drawing pixels, lines, rectangles, circles, ellipses, triangles, and text on a virtual screen.

**Concepts Used**
- Procedural graphics functions
- ASCII rendering
- Screen buffer management

---

### 8) Picture.h
Defines a `Picture` class that aggregates static shapes (circles, rectangles, triangles) and composes dynamic shapes (lines, ellipses). Manages their lifetime and rendering.

**Concepts Used**
- Aggregation (static shapes)
- Composition (dynamic shapes)
- Shape management
- Polymorphic-like design (manual, not via inheritance)

---

### 9) main.cpp
Interactive program to create and draw a picture by adding various shapes. Demonstrates aggregation, composition, and user-driven graphics.

**Concepts Used**
- Object relationships (aggregation, composition)
- Dynamic/static memory
- User input and graphics

---

## Files

- Point.h
- Circle.h
- Ellipse.h
- Line.h
- Rectangle.h
- Triangle.h
- SimpleGraphics.h
- SimpleGraphics.cpp
- Picture.h
- main.cpp
- README.md

---

## How to Compile and Run

Use `g++` (MinGW on Windows, or any platform with GCC). Example command:

```bash
g++ main.cpp SimpleGraphics.cpp -o draw_uml && ./draw_uml
```

If you use C++11 features, add the flag:

```bash
g++ -std=c++11 main.cpp SimpleGraphics.cpp -o draw_uml && ./draw_uml
```

---

## Learning Goals
- Understand object relationships (aggregation vs composition)
- Practice geometric class design
- Implement and use a simple graphics engine
- Manage dynamic and static memory for objects

---
