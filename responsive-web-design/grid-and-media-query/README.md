# Responsive Web Design – Grid & Media Query

Two projects demonstrating modern responsive web design using CSS Grid and media queries: a landing page and a live grid layout. These projects showcase best practices for building adaptable, visually appealing web interfaces.

---

## Project 1: Live Grid Layout

**What it does:**
Showcases a dynamic grid layout that adapts to different screen sizes, ideal for image galleries, product listings, or dashboards.

### How it works:
1. Implements a multi-column grid using CSS Grid
2. Adjusts the number of columns and item sizes with media queries
3. Demonstrates grid gap management and item alignment
4. Ensures a seamless experience from mobile to desktop

### Key Code:
```html
<!-- index.html -->
<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <!-- ... -->
</div>
```
```css
/* style.css */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

**Features:**
- Flexible grid columns (auto-fit/auto-fill)
- Responsive breakpoints
- Consistent spacing with grid-gap
- Scalable and extendable design

**Learning Points:**
- Building adaptive grid layouts
- Managing grid gaps and alignment
- Responsive design patterns for content-heavy pages
- Enhancing user experience with scalable CSS

---


## Project 2: Landing Page with CSS Grid & Media Queries

**What it does:**
Creates a visually engaging landing page layout using CSS Grid and media queries for responsiveness.

### How it works:
1. Uses CSS Grid to structure main sections (header, hero, features, footer, etc.)
2. Applies media queries to adjust layout for different screen sizes (mobile, tablet, desktop)
3. Demonstrates modern CSS techniques for spacing, alignment, and typography
4. Ensures content remains accessible and visually balanced on all devices

### Key Code:
```html
<!-- index.html -->
<section class="features">
  <div class="feature">Fast</div>
  <div class="feature">Responsive</div>
  <div class="feature">Modern</div>
</section>
```
```css
/* style.css */
.features {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 600px) {
  .features {
    grid-template-columns: 1fr;
  }
}
```

**Features:**
- CSS Grid for flexible layouts
- Responsive design with media queries
- Semantic HTML for accessibility
- Modern styling and color schemes

**Learning Points:**
- Structuring a landing page with CSS Grid
- Writing effective media queries
- Creating layouts that adapt to device size
- Using semantic HTML for accessibility

---

## Quick Reference

| Project      | Technology | Key Concept                        |
|-------------|-----------|------------------------------------|
| Live Grid   | CSS Grid, Media Queries | Adaptive grid, flexible columns  |
| Landing Page| CSS Grid, Media Queries | Responsive layout, semantic HTML |

---

## Running the Projects

Open the HTML files in your browser to view the layouts:

```bash
# View the live grid demo
open live-grid/index.html

# View the landing page
open landing-page/index.html
```

Or simply double-click the HTML files in your file explorer.

---

## Key Responsive Design Concepts Covered

- **CSS Grid Layout:** Powerful 2D layout system for web interfaces
- **Media Queries:** CSS technique for adapting styles to device characteristics
- **Semantic HTML:** Improves accessibility and SEO
- **Responsive Patterns:** Ensures usability across devices
- **Modern CSS Features:** Grid gap, auto-fit/auto-fill, minmax, etc.

---

## CSS Grid vs Flexbox

| Aspect         | CSS Grid                | Flexbox                  |
|----------------|------------------------|--------------------------|
| Layout         | 2D (rows & columns)    | 1D (row or column)       |
| Use Case       | Complex page layouts    | Component alignment      |
| Responsiveness | Excellent with media queries | Good, but 1D only   |
| Control        | Precise area placement  | Flow-based, less control |

---

## Responsive Design Best Practices

1. **Mobile-First:** Start with mobile styles, then scale up
2. **Flexible Units:** Use %, vw/vh, rem/em for sizing
3. **Test on Devices:** Check layouts on real devices and emulators
4. **Accessible Markup:** Use semantic tags and ARIA roles
5. **Performance:** Optimize images and minimize CSS for faster loads
