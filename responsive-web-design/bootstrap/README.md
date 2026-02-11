# Bootstrap Projects

Two projects demonstrating responsive layouts, grid systems, and UI components using Bootstrap 5.

---

## Project 1: Blog (The Flower Blog)

**What it does:** Builds a blog landing page with a hero banner, blog post content, comments accordion, and a sidebar for categories and archives.

### How it works:
1. Uses a responsive `navbar` with a collapsible menu and theme switcher dropdown
2. Creates a hero card with a full-width background image overlay
3. Splits the main content into an 8/4 column layout for article + sidebar
4. Implements a Bootstrap `accordion` for comments
5. Adds a comment form with Bootstrap form controls

### Key Concepts:
```html
<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
  <div class="container">
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav w-100 justify-content-between">
        <li class="nav-item"><a class="nav-link" href="#home">Blog</a></li>
        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#archives">Archives</a></li>
      </ul>
    </div>
  </div>
</nav>
```
- Responsive navigation with collapsible menu
- Card overlay technique for the hero section
- Grid layout for article content and sidebar
- Accordion component for comments

**Learning Points:** responsive navbars, grid columns, accordions, forms, image overlays

---

## Project 2: Wireframe (ITI Web & UI)

**What it does:** Creates a portfolio-style wireframe using Bootstrap layout utilities, image grids, and feature cards.

### How it works:
1. Builds a sidebar column with profile and skill badges
2. Uses a hero section with a title and lead paragraph
3. Displays a three-column image gallery with captions
4. Adds feature cards for key skills with icons and descriptions
5. Includes a media section with a video and supporting text

### Key Concepts:
```html
<div class="row g-4 mb-5">
  <div class="col-12 col-md-4">
    <div class="text-center p-4 bg-white rounded-4 shadow-sm h-100">
      <img src="https://placehold.co/120x120/fd7e14/ffffff?text=Figma" class="img-fluid mb-3 rounded-circle border shadow-sm w-50" alt="UI/UX Icon" />
      <h3 class="h4">Design Systems</h3>
      <p class="small text-muted">Creating accessible UI components with Figma and Photoshop.</p>
    </div>
  </div>
</div>
```
- Responsive grid with `row` and `col-*` utilities
- Card-style layouts using spacing, shadows, and rounded corners
- Media embedding with `ratio-16x9`
- Utility classes for alignment and typography

**Learning Points:** grid utilities, card composition, spacing system, responsive media

---

## Quick Reference

| Project | Technology | Key Concept |
|---------|-----------|------------|
| Blog | Bootstrap 5 | Navbar, accordion, and sidebar layout |
| Wireframe | Bootstrap 5 | Responsive grid, cards, and media section |
