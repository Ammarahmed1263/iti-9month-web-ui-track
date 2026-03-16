# SASS Assignment - Blog Styling

This project demonstrates the use of SASS features to style a simple blog page, following requirements inspired by the provided template README.

---

## What It Does
- Styles the blog title (`h1.main-title`) with a primary color using SASS variables and nesting.
- Styles the subtitle (`p.main-subtitle`) with a secondary color using SASS variables and nesting.
- Styles the main button (`.main-btn`) with a primary color background and changes to secondary color on hover, using SASS variables and nesting.
- Uses SASS `@each` to generate font-size classes (`.font-14px`, `.font-16px`, `.font-18px`).
- Styles the finish button (`.finish-btn`) to be full width on mobile and half width on tablet screens using SASS variables and media queries.

---

## Key Features
- **SASS Variables** for colors, border radius, and breakpoints.
- **Nesting** for clear, maintainable CSS structure.
- **@each Loop** for generating font-size utility classes.
- **Responsive Design** using SASS variables and media queries.

---

## How It Works
1. Variables are defined in `_variables.scss` for colors, font sizes, border radius, and breakpoints.
2. `style.scss` uses `@use` to import variables and applies them with SASS features:
   - Nesting for `.main` and its children.
   - `@each` loop for `.font-*` classes.
   - Media queries for responsive `.finish-btn`.
3. The compiled `style.css` is linked in `index.html`.


## Run It
Open `index.html` in your browser after compiling `style.scss` to `style.css` using a SASS compiler.

---

## Learning Points
- SASS variable usage and best practices
- Nesting for maintainable CSS
- Generating utility classes with `@each`
- Responsive design with SASS variables and media queries
