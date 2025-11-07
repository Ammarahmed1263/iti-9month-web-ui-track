# C++ Practice — Functions & Recursion

This folder contains small C++ practice programs focusing on functions, recursion, and simple console utilities. The examples are short, self-contained, and intended for learning algorithmic patterns and console I/O techniques.

---

## Programs Included

### 1) Subspan / Subarray Utility — `subspan_array.cpp`
Demonstrates extracting subspans (subarrays) from arrays and working with ranges. Useful for practicing array indexing, boundary checks, and returning sequences from functions.

**Concepts Used**
- Array traversal and slicing
- Boundary validation
- Function return of computed ranges

---

### 2) Fibonacci Sequence — `fibonacci.cpp`
Implements the Fibonacci sequence using one or more approaches (for example: recursive and iterative). Good for practicing recursion, iteration, and performance considerations.

**Concepts Used**
- Recursion (and tail/iterative alternatives)
- Time/space complexity considerations
- Simple input/output

---

### 3) Decimal-to-Binary Conversion — `decimal_to_binary.cpp`
Converts decimal integers to binary representation and prints the result. Teaches number-base conversion and bitwise/modulo operations.

**Concepts Used**
- Number base conversion
- Loops or recursion for building output
- Handling edge cases (zero, negative numbers if supported)

---

### 4) Swap Values Utility — `swap_values.cpp`
Small helper that swaps two values (by pointer/reference or using std::swap). Useful for understanding parameter passing and simple algorithmic utilities.

**Concepts Used**
- Passing by reference / pointer
- Standard library utilities (`std::swap`)

---

### 5) Highlight Menu / Employee UI Helper — `employee_management_system.cpp`
A console UI helper that shows a menu and highlights selected options (arrow-key navigation). This may be used as part of an employee-management or form-based demo.

**Concepts Used**
- Keyboard input handling (arrow keys)
- Console cursor control and ANSI escape codes for color/highlight
- Menu-driven program structure

---

## Files
- `subspan_array.cpp`
- `fibonacci.cpp`
- `decimal_to_binary.cpp`
- `swap_values.cpp`
- `employee_management_system.cpp`
- `README.md`

---

## How to Compile and Run
There is a VS Code build task configured to compile the active file using g++ (see the workspace tasks). You can also compile and run from the shell. Adjust filenames as needed.

Example (compile one file and run):

```bash
"g++ -std=c++20 subspan_array.cpp -o subspan_array.exe
./subspan_array.exe
```

Replace `subspan_array.cpp` with the file you want to build (e.g., `fibonacci.cpp`, `decimal_to_binary.cpp`). In Windows bash shell, run executables with `./<name>.exe`.

In VS Code: open the .cpp you want to run and press the default build task (Ctrl+Shift+B) or run the configured task labelled "C/C++: g++.exe build active file".
