# C++ Practice — Arrays, Structs & Extended Keys

This folder contains C++ practice programs focusing on arrays, structs, and handling extended keys for interactive console applications.

---

## Programs Included

### 1) Employee Entry Form — `employee_form.cpp`
A program to input and display employee details interactively. It uses **cursor positioning** and **keyboard input handling** for a user-friendly form interface.

**Concepts Used**
- Structs for organizing employee data
- Arrays for storing multiple employees
- Console cursor manipulation (ANSI escape codes)
- Keyboard input handling (`_getch` for special keys)

---

### 2) Highlight Menu — `highlight_menu.cpp`
A program to display a menu with options that can be navigated using arrow keys. Highlights the selected option and performs actions based on the selection.

**Concepts Used**
- Arrays for menu options
- Keyboard input handling (`_getch` for arrow keys)
- Conditional logic for menu navigation
- ANSI escape codes for colored output

---

### 3) Students Grades — `students_grades.cpp`
A program to store and process students' grades for multiple subjects. Calculates and displays:
- Total grades for each student
- Average grades for each subject

**Concepts Used**
- Nested structs for organizing student and subject data
- Arrays for storing multiple students and subjects
- Loops for processing data
- Basic arithmetic operations

---

## Files

- `employee_form.cpp`
- `highlight_menu.cpp`
- `students_grades.cpp`
- `README.md`

---

## How to Compile and Run

Use `g++`:

```bash
g++ employee_form.cpp -o employee_form && ./employee_form
g++ highlight_menu.cpp -o highlight_menu && ./highlight_menu
g++ students_grades.cpp -o students_grades && ./students_grades
```