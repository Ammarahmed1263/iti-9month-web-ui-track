# Pointers and Dynamic Memory — C++ Practice

This folder contains C++ programs that demonstrate pointer usage, pointer-to-pointer, swapping by address/reference, and simple line editors using static and dynamic memory allocation.

---

## Programs Included

### 1) array_with_pointers.cpp
Demonstrates using a pointer to a dynamically allocated array (an `int *`), accessing elements via pointer arithmetic and dereferencing.

**Concepts Used**
- Pointer to a dynamically allocated array (`int *`)
- Pointer arithmetic and dereferencing (`*(arr + i)`)
- Looping and indexing

---

### 2) dynamic_employee_form.cpp
Interactive employees management program that allocates a fixed-size employees list at startup using a smart pointer (`std::unique_ptr<Employee[]>`). Provides a simple menu UI (arrow keys + enter) to add employees, search by ID, and list all employees. The form uses ANSI cursor positioning for inline input fields.

**Concepts Used**
- Dynamic allocation with `std::unique_ptr<Employee[]>`
- Structs for employee records and basic I/O
- Simple console UI with `_getch()` for arrow-key navigation and ANSI escape sequences for cursor positioning

---

### 3) dynamic_line_editor.cpp
A one-line terminal editor implemented using dynamic memory (`new[]` / `delete[]`) for the text buffer. It draws an editable box with ANSI escape codes and supports cursor movement, Home/End, Backspace, Delete and arrow keys. The buffer size is based on the box width but is allocated at runtime.

**Concepts Used**
- Dynamic allocation with raw arrays (`new[]` / `delete[]`)
- ANSI escape sequences for colored output and cursor control
- Low-level input handling with `_getch()`

---

### 4) line_editor.cpp
A one-line terminal editor implemented with static memory (fixed-size `char` buffer). It renders a small box in the terminal, supports cursor movement, Home/End, Backspace, Delete, and responds to arrow keys.

**Concepts Used**
- Static (stack) arrays for fixed-size buffers
- ANSI escape sequences for colored output and cursor control
- Low-level input with `_getch()` (MinGW/Windows console)

---

### 5) pointer_to_pointer_modern.cpp
Example showing pointer-to-pointer concepts with modern C++ styles (when applicable), possibly demonstrating references to smart pointers or nested pointer usage in a safer style.

**Concepts Used**
- Pointer-to-pointer concept
- Using modern C++ idioms where appropriate

---

### 6) pointer_to_pointer_raw.cpp
Low-level example of pointer-to-pointer usage using raw pointers. Useful to understand how double-indirection works and how to allocate multi-level structures.

**Concepts Used**
- `T**` usage
- Allocation and deallocation patterns with raw pointers

---

### 7) swap_by_address.cpp
Swapping two variables by passing their addresses (using pointers) to a function.

**Concepts Used**
- Passing by pointer (address)
- In-place swapping

---

### 8) swap_by_reference.cpp
Swapping two variables by passing by reference.

**Concepts Used**
- Passing by reference
- Cleaner swap without pointer syntax

---

## Files

- array_with_pointers.cpp
- dynamic_employee_form.cpp
- dynamic_line_editor.cpp
- line_editor.cpp
- pointer_to_pointer_modern.cpp
- pointer_to_pointer_raw.cpp
- swap_by_address.cpp
- swap_by_reference.cpp
- README.md

---

## How to Compile and Run

Use `g++` (MinGW on Windows, or any platform with GCC). Example commands:

```bash
# Compile individual programs
g++ array_with_pointers.cpp -o array_with_pointers && ./array_with_pointers
g++ dynamic_employee_form.cpp -o dynamic_employee_form && ./dynamic_employee_form
g++ dynamic_line_editor.cpp -o dynamic_line_editor && ./dynamic_line_editor
g++ line_editor.cpp -o line_editor && ./line_editor
g++ pointer_to_pointer_modern.cpp -o pointer_to_pointer_modern && ./pointer_to_pointer_modern
g++ pointer_to_pointer_raw.cpp -o pointer_to_pointer_raw && ./pointer_to_pointer_raw
g++ swap_by_address.cpp -o swap_by_address && ./swap_by_address
g++ swap_by_reference.cpp -o swap_by_reference && ./swap_by_reference
```

Notes for Windows users:
- If `line_editor.cpp` or `dynamic_line_editor.cpp` uses ANSI escape sequences, make sure your terminal supports them (Windows 10+ Command Prompt, PowerShell, or use an ANSI-capable terminal like Windows Terminal). If colors/cursor control don't work, enable VT processing or run inside an ANSI-capable terminal.
- Use `g++ -std=c++11` or later if the code needs C++11 features:

```bash
g++ -std=c++11 line_editor.cpp -o line_editor.exe
```

---

## Learning Goals
- Understand ownership and lifetime of static vs dynamic memory
- Practice pointer arithmetic and dereferencing
- Learn double pointers logic and implementation
- Build small interactive terminal utilities and understand basic terminal control

---