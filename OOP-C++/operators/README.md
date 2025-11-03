# C++ Practice — Basic I/O and Number Systems

This folder contains C++ practice programs covering basic input/output, arithmetic operations, ASCII values, and number system formatting.

---

## Programs Included

### 1) Display Personal Information — `01_print_info.cpp`
Reads and prints the user’s **name, age, and city**.

**Concepts Used**
- `std::cin` and `std::cout`
- Basic input/output operations
- Strings and integers

---

### 2) Arithmetic Operations — `02_two_numbers.cpp`
Reads **two integers** and calculates:
- Sum
- Difference
- Average (using `static_cast` for correct float division)

**Concepts Used**
- Input with `std::cin`
- Arithmetic expressions
- Type casting (`static_cast<float>`)

---

### 3) Decimal to Hex & Octal — `03_decimal_convert.cpp`
Reads a **decimal integer** and prints it in:
- Hexadecimal using `std::hex`
- Octal using `std::oct`

**Concepts Used**
- Stream manipulators (`std::hex`, `std::oct`)
- Number system formatting

---

### 4) ASCII Value of Character — `04_ascii_value.cpp`
Reads a **single character** and prints its **ASCII value**.

**Concepts Used**
- Character input
- Casting (`static_cast<int>`)

---

## Files

- 01_print_info.cpp
- 02_two_numbers.cpp
- 03_decimal_convert.cpp
- 04_ascii_value.cpp
- README.md

---

## How to Compile and Run

Use `g++`:

```bash
g++ ascii.cpp -o ascii && ./ascii
g++ number_systems.cpp -o number_systems && ./number_systems
g++ arithmetic.cpp -o arithmetic && ./arithmetic
g++ info.cpp -o info && ./info
