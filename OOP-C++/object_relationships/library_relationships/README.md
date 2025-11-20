# Library Relationships — C++ Practice

This folder contains C++ programs and headers that model a simple library system, demonstrating object relationships, dynamic/static memory, and class design for books, authors, members, and libraries.

---

## Programs and Headers Included

### 1) Author.h
Defines an `Author` class with name and nationality. Used as a component in book classes.

**Concepts Used**
- Class composition
- Encapsulation
- Constructors/destructors

---

### 2) Book.h
Defines a `Book` class with title, publish year, and a dynamically allocated `Author`. Supports copy/move semantics, assignment, and equality comparison.

**Concepts Used**
- Dynamic memory management
- Deep copy (copy constructor/assignment)
- Operator overloading
- Composition

---

### 3) StaticBook.h
Defines a `StaticBook` class similar to `Book`, but with an `Author` as a value member (not pointer). Used to demonstrate static composition.

**Concepts Used**
- Value-based composition
- Operator overloading
- Encapsulation

---

### 4) Library.h
Implements a `Library` class that manages an array of `Book*` pointers. Supports adding, removing, and listing books. Demonstrates manual memory and array management.

**Concepts Used**
- Array of pointers
- Manual memory management
- Copy/assignment
- Aggregation

---

### 5) LibraryVector.h
Implements a `LibraryVector` class that manages a collection of `Book*` using `std::vector`. Supports adding, removing, and listing books.

**Concepts Used**
- STL containers (`std::vector`)
- Aggregation
- Dynamic collections

---

### 6) Member.h
Defines a `Member` class representing a library member. Supports borrowing books and tracks member info.

**Concepts Used**
- Class encapsulation
- Simple association
- Constructors/destructors

---

### 7) main.cpp
Demonstrates the use of all classes: creating books/authors, adding/removing/listing books in libraries, and borrowing books by members.

**Concepts Used**
- Object relationships (composition, aggregation, association)
- Dynamic/static memory
- STL usage
- Testing class interactions

---

## Files

- Author.h
- Book.h
- StaticBook.h
- Library.h
- LibraryVector.h
- Member.h
- main.cpp
- README.md

---

## How to Compile and Run

Use `g++` (MinGW on Windows, or any platform with GCC). Example command:

```bash
g++ main.cpp -o library_relationships && ./library_relationships
```

If you use C++11 features, add the flag:

```bash
g++ -std=c++11 main.cpp -o library_relationships && ./library_relationships
```

---

## Learning Goals
- Understand object relationships in C++ (composition, aggregation, association)
- Practice dynamic and static memory management
- Use STL containers for collections
- Design and test interacting classes

---
