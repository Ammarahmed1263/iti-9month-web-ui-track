# SASS Form Lab

This folder demonstrates a form layout and validation using SASS (SCSS syntax) for modular, maintainable styles. It showcases how to structure SASS projects and use variables, nesting, and partials for scalable CSS.

---

## What it does
- Styles a form with custom colors, spacing, and responsive layout.
- Uses SASS variables for easy theming and consistency.
- Demonstrates modular SASS structure with partials for variables and main styles.
- Provides validation feedback using CSS only (no JavaScript).

---

## How it works
1. **Variables:**
   - `_variables.scss` defines color and spacing variables for reuse.
2. **Main Styles:**
   - `form.scss` imports variables and contains the main form styles, including layout, input, and button styling.
3. **Grid System:**
   - `grid.scss` provides a simple grid layout for form alignment and responsiveness.
4. **Compiled CSS:**
   - `form.css` and `grid.css` are the compiled outputs from their respective SCSS files.
5. **HTML:**
   - `index.html` demonstrates the form and grid in action.

---

## Key SASS Features Used
- **Variables:** Centralized color and spacing control.
- **Nesting:** Cleaner, more readable selectors.
- **Partials:** Logical separation of variables and components.
- **Importing:** Combining partials into main SCSS files.

---

## Usage
1. Edit the SCSS files (`form.scss`, `grid.scss`, `_variables.scss`) to customize styles.
2. Compile SCSS to CSS (e.g., using `sass form.scss form.css`).
3. Open `index.html` in a browser to view the styled form and grid.

---

## Learning Points
- How to organize a SASS project for maintainability.
- Using variables and partials for scalable CSS.
- Creating responsive layouts and form validation with SASS.

---

## Files
- `form.scss`, `form.css` – Main form styles (SASS and compiled CSS)
- `grid.scss`, `grid.css` – Grid system (SASS and compiled CSS)
- `_variables.scss` – SASS variables partial
- `index.html` – Demo HTML file

---

## Conclusion
This lab provides hands-on practice with SASS project structure, variables, and modular CSS for building modern, maintainable forms and layouts.