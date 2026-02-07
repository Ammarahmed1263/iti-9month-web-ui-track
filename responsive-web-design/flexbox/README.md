# Responsive Web Design – Flexbox Tasks

This repository contains four projects demonstrating modern responsive layouts using only CSS Flexbox. Each project focuses on a different real-world layout scenario, building up from simple centering to a professional landing page.

---

## 1. nav-layout

**What it does:**
A navigation bar and content cards layout using flexbox for both the navigation and the main content area.

### Features
- Responsive navigation bar using flexbox
- Content area with flexible cards
- Semantic HTML structure with `<header>`, `<nav>`, `<main>`, and `<footer>`
- Clean, accessible, and modern design

### Key Concepts
- `display: flex` for horizontal and vertical alignment
- `flex-wrap` for responsive stacking
- `gap` for spacing between items
- Semantic HTML5 elements

---

## 2. centered-box

**What it does:**
Demonstrates perfect centering of a box both vertically and horizontally using flexbox.

### Features
- Full viewport centering
- Minimal markup and CSS
- Useful for splash screens, modals, or loaders

### Key Concepts
- `align-items: center` and `justify-content: center`
- `min-height: 100vh` for full viewport height
- Simple, reusable centering pattern

---

## 3. flex-content-layout

**What it does:**
A classic web page layout with a header, footer, main content, and sidebars, all arranged using flexbox.

### Features
- Responsive three-column layout
- Header and footer spanning full width
- Main content and sidebars adjust naturally to screen size
- Clean separation of content areas

### Key Concepts
- Nested flex containers
- `flex: 2 1 400px` for main content, `flex: 1 1 200px` for sidebars
- `flex-wrap` for mobile stacking
- Consistent use of semantic tags

---

## 4. main-landing

**What it does:**
A professional, visually appealing landing page using only flexbox for layout. Includes navigation, intro, project cards, and a styled footer.

### Features
- Modern header with logo and navigation
- Intro section with text and featured image
- Responsive project cards with images and hover effects
- Stylish footer with navigation links
- Accessible and semantic HTML structure

### Key Concepts
- Advanced flexbox for complex layouts
- `flex: 1 1 ...` for responsive cards and sections
- Use of gradients, shadows, and transitions for polish
- Accessibility: alt text, ARIA labels, heading order

---

## Running the Projects

Open each folder and launch `index.html` in your browser to view the layout. All layouts are fully responsive and require no JavaScript or media queries—just pure flexbox!

---

## Flexbox Concepts Covered

- `display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `gap`
- Responsive design without media queries
- Semantic HTML5 structure
- Accessibility best practices
- Visual polish with gradients, shadows, and transitions
