# SASS Wireframe Project

This folder contains a modular SASS (SCSS) wireframe system for rapid prototyping and scalable UI development. It demonstrates best practices in SASS architecture, including the use of partials, variables, mixins, and utility classes, and is organized for maintainability and reusability.

---

## Project Structure

```
sass-wireframe/
├── index.html                # Demo HTML file (responsive layout)
├── main.css                  # Compiled CSS output
├── package.json              # Project metadata and scripts
├── .gitignore                # Git ignore rules
└── sass/                     # SASS source files
    ├── main.scss             # Main SASS entry point
    ├── abstracts/            # SASS helpers (variables, mixins, functions)
    │   ├── _functions.scss
    │   ├── _mixins.scss
    │   └── _variables.scss
    ├── base/                 # Base styles (reset, typography)
    │   ├── _reset.scss
    │   └── _typography.scss
    ├── components/           # UI components (cards, etc.)
    │   └── _cards.scss
    ├── layout/               # Layout styles (grid, sidebar, etc.)
    │   ├── _grid.scss
    │   ├── _sidebar.scss
    │   └── _header.scss
    └── utilities/            # Utility classes (spacing, helpers)
        ├── _spacing.scss
        └── _utilities.scss

```

---


## Key Features
- **SASS Architecture:** Uses the 7-1 pattern for scalable, maintainable code.
- **Variables & Mixins:** Centralized control of colors, spacing, and reusable patterns.
- **Utility Classes:** Includes spacing, border, color, and layout utilities for rapid prototyping.
- **Component-Based:** Styles are separated by component and layout for clarity.
- **Reset & Typography:** Base styles ensure consistency across browsers.
- **Responsive Design:** Grid and spacing utilities support responsive layouts.
- **Demo HTML:** `index.html` demonstrates a responsive wireframe layout using the provided SASS utilities and components. The layout adapts to different screen sizes, showcasing the flexibility of the grid and utility classes.

---

## How it Works
1. **Entry Point:**
   - `main.scss` imports all partials in a logical order (abstracts → base → layout → components → utilities).
2. **Abstracts:**
   - `_variables.scss` defines color, spacing, and font variables.
   - `_mixins.scss` and `_functions.scss` provide reusable SASS logic.
3. **Base:**
   - `_reset.scss` normalizes browser styles.
   - `_typography.scss` sets up font and text styles.
4. **Layout:**
   - `_grid.scss`, `_sidebar.scss`, `_header.scss` define the main page structure and layout utilities.
5. **Components:**
   - `_cards.scss` contains card UI styles.
6. **Utilities:**
   - `_spacing.scss` and `_utilities.scss` provide helper classes for spacing, borders, colors, etc.
7. **Build:**
   - Compile `main.scss` to `main.css` (e.g., `sass sass/main.scss main.css`).
8. **Demo:**
   - Open `index.html` to see the responsive wireframe in action. The HTML uses the grid and utility classes to create a layout that adjusts for mobile, tablet, and desktop screens.

---

## Usage
1. Edit SASS files in the `sass/` directory to customize variables, layouts, or components.
2. Run the SASS compiler to generate `main.css`.
3. Use the utility classes and components in your HTML for rapid prototyping.
4. Extend or add new partials for additional components or utilities as needed.
5. Use and modify `index.html` as a starting point for your own responsive layouts.

---

## Learning Points
- How to structure a large SASS project for maintainability.
- Using variables, mixins, and functions for DRY (Don't Repeat Yourself) CSS.
- Creating and using utility classes for fast layout and design changes.
- Building a responsive, component-based UI system with SASS.
- Designing HTML layouts that adapt to different screen sizes using SASS utilities.

---

## Files
- `main.scss`, `main.css` – Main SASS entry and compiled CSS
- `abstracts/` – Variables, mixins, and functions
- `base/` – Reset and typography
- `components/` – UI components
- `layout/` – Layout and structure
- `utilities/` – Utility/helper classes
- `index.html` – Demo HTML (responsive)
- `package.json` – Project scripts and dependencies
- `.gitignore` – Excludes `node_modules/` and `package-lock.json`

---

## .gitignore
```
node_modules/
package-lock.json
```

---

## Conclusion
This project provides a robust foundation for building scalable, maintainable, and responsive UIs with SASS. It demonstrates best practices in SASS architecture, modularity, utility-driven design, and responsive HTML layout for modern web development.
