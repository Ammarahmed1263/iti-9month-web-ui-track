# LESS Columns Lab

This folder demonstrates a responsive column layout using LESS, showcasing how to use variables, mixins, and modular structure for scalable CSS. It provides a simple example of how LESS can be used to create maintainable and reusable styles for grid systems.

---

## What it does
- Styles a multi-column layout with custom spacing and responsive behavior.
- Uses LESS variables for consistent theming and spacing.
- Demonstrates modular LESS structure with a variables partial and main style file.

---

## How it works
1. **Variables:**
   - `_variables.less` defines color and spacing variables for reuse.
2. **Main Styles:**
   - `style.less` imports variables and contains the main column and layout styles.
3. **Compiled CSS:**
   - `style.css` is the compiled output from `style.less`.

---

## Key LESS Features Used
- **Variables:** Centralized control of colors and spacing.
- **Mixins:** Reusable style patterns for columns and layout.
- **Importing:** Combining partials into the main LESS file.

---

## Usage
1. Edit the LESS files (`style.less`, `_variables.less`) to customize styles.
2. Compile LESS to CSS (e.g., using `lessc style.less style.css`).
3. Use the generated `style.css` in your HTML to apply the column layout.

---

## Learning Points
- How to organize a LESS project for maintainability.
- Using variables and mixins for scalable CSS.
- Creating responsive column layouts with LESS.

---

## Files
- `style.less`, `style.css` – Main column styles (LESS and compiled CSS)
- `_variables.less` – LESS variables partial

---

## Conclusion
This lab provides hands-on practice with LESS project structure, variables, and modular CSS for building responsive column layouts.