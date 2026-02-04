# CSS Selectors and Animation Labs

This folder collects several small labs that demonstrate CSS selectors, transitions, and simple shape-based drawings using pure HTML5 and CSS3. Each subfolder is a separate mini-project focused on a specific visual or interactive effect.

---

## Project 1: Neon Button Hover

**What it does:** Creates a neon-style button that glows, changes color, and intensifies its shadow when hovered.

### How it works:
1. Styles the `<button>` with a transparent background, colored border, text shadow, and box shadow.
2. Uses `transition` to animate all properties smoothly on hover.
3. On `:hover`, switches the background and text colors and increases the box-shadow for a strong neon glow.

### Key Code:
```css
button {
  padding: 8px 16px;
  font-size: 1.2rem;
  border-radius: 8px;
  border: 2px solid #14f7ff;
  color: #14f7ff;
  background-color: transparent;
  box-shadow: 0 0 5px #14f7ff;
  text-shadow: 0 0 10px #14f7ff;
  transition: all 0.5s ease-in-out;
}

button:hover {
  background-color: #14f7ff;
  color: black;
  box-shadow: 0 0 20px 5px #14f7ff;
}
```

**Learning Points:**
- Using `transition` to animate multiple properties on hover.
- Combining `box-shadow` and `text-shadow` to create a neon glow.
- Styling buttons with custom borders and transparent backgrounds.

---

## Project 2: Card Draw

**What it does:** Builds a playing card layout using pure CSS shapes (heart and triangle) positioned inside a bordered card.

### How it works:
1. Creates a `.card` container with a fixed width, height, border, and rounded corners.
2. Positions the suit marks (`.top-mark`, `.bottom-mark`) absolutely inside the card.
3. Draws a heart shape using a `#heart` element with `::before` and `::after` pseudo-elements, rotated and rounded.
4. Creates a triangle (`#triangle-up`) using borders on a zero‑sized element.

### Key Code:
```css
.card {
  position: relative;
  width: 270px;
  height: 440px;
  border: 8px solid red;
  border-radius: 24px;
}

#heart:before,
#heart:after {
  position: absolute;
  content: "";
  width: 50px;
  height: 80px;
  background: black;
  border-radius: 50px 50px 0 0;
}

#triangle-up {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid black;
}
```

**Learning Points:**
- Using absolute positioning to compose complex layouts.
- Creating shapes (hearts, triangles) with borders and pseudo-elements.
- Building UI components without images.

---

## Project 3: Image Fade

**What it does:** Applies a fade and scale effect to an image when hovered, simulating a zoom-out and dimming transition.

### How it works:
1. Styles the `img` with a border, rounded corners, and a defined `transform-origin`.
2. Adds a `transition` on `opacity` and `transform` for smooth animation.
3. On `img:hover`, reduces `opacity` and applies `transform: scale(0.8)` to shrink and fade the image.

### Key Code:
```css
img {
  width: 300px;
  border: 5px solid #14f7ff;
  border-radius: 24px;
  transform-origin: left top;
  transition: all 2s;
}

img:hover {
  opacity: 0.2;
  transform: scale(0.8);
}
```

**Learning Points:**
- Using `transform-origin` to control where scaling is anchored.
- Combining `opacity` and `transform` for hover effects.
- Creating smooth image transitions with `transition`.

---

## Project 4: Input State Validation

**What it does:** Demonstrates CSS-only form validation feedback with colored borders and conditional error messages.

### How it works:
1. Uses HTML5 validation attributes like `required`, `type`, and `pattern` on inputs.
2. Styles the inputs with a neutral border by default.
3. Uses `:focus` to highlight the active field with a custom border color and glow.
4. Uses `:not(:placeholder-shown):valid` and `:not(:placeholder-shown):invalid` to show green or red borders only after the user has typed something.
5. Shows `.error-text` only when the associated input is invalid and not placeholder‑shown.

### Key Code:
```css
input:not(:placeholder-shown):valid {
  border-color: #34d43c;
  box-shadow: 0 0 10px #34d43c;
}

input:not(:placeholder-shown):invalid {
  border-color: rgb(205, 0, 0);
  box-shadow: 0 0 10px rgb(205, 0, 0);
}

.error-text {
  display: none;
}

input:not(:placeholder-shown):invalid + .error-text {
  display: block;
}
```

**Learning Points:**
- Leveraging HTML5 form validation with CSS pseudo-classes.
- Styling inputs based on validity state without JavaScript.
- Controlling when error messages appear using `:not(:placeholder-shown)`.

---

## Project 5: Pacman Mouth

**What it does:** Creates a Pacman-like circle using borders; the "mouth" opens on hover by hiding the right border color.

### How it works:
1. Uses a zero‑sized element with a thick border and `border-radius: 50%` to form a circle.
2. Colors all borders the same to create a filled disc.
3. On `#circle:hover`, sets `border-right-color: transparent`, visually cutting out a wedge that looks like an open mouth.

### Key Code:
```css
#circle {
  width: 0;
  height: 0;
  border-radius: 50%;
  border: 100px solid rgb(242, 255, 0);
}

#circle:hover {
  border-right-color: transparent;
}
```

**Learning Points:**
- Drawing shapes using only borders and border-radius.
- Using border colors to create simple icons and characters.
- Applying hover state to transform a static shape into an animated one.

---

## Usage
- Open any `index.html` file in the lab subfolders in a web browser.
- Interact with the buttons, cards, images, inputs, and shapes to see the effects.
- Inspect the corresponding `style.css` files to study the CSS techniques in detail.

---

## Conclusion
These labs provide hands-on practice with CSS selectors, shapes, and transitions. Together, they form a solid foundation for building interactive, visually engaging interfaces without relying on JavaScript.
