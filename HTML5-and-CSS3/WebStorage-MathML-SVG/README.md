# WebStorage, MathML & SVG Projects

Five projects demonstrating HTML5 Web Storage, Canvas drawing, SVG graphics, and MathML rendering.

---

## Project 1: Button with Canvas

**What it does:** Draws a stylized button with the letter "N" using HTML5 Canvas with gradient fills.

### How it works:
1. Creates canvas context with `getContext("2d")`
2. Draws outer circle with radial gradient (light to dark blue)
3. Draws inner circle with different gradient
4. Renders "N" text with white fill

### Key Concepts:
```javascript
const outerGradient = ctx.createRadialGradient(
  centerX + 25, centerY - 35, outerRadius / 2 - 15,
  centerX, centerY, outerRadius
);
outerGradient.addColorStop(0, "#d0dbff");
outerGradient.addColorStop(0.2, "#b4c6f8");
outerGradient.addColorStop(1, "#1745cf");
```
- Radial gradients with color stops for depth effect
- Multiple circles for 3D button appearance
- Text rendering with `fillText()`

**Learning Points:** Canvas gradients, drawing shapes, text rendering

---

## Project 2: Line Animation

**What it does:** Animates a diagonal line drawing across canvas from (0,0) to (500,500).

### How it works:
1. Uses `requestAnimationFrame()` for smooth animation
2. Incrementally draws line by moving coordinates +2 pixels per frame
3. Continues until reaching target (500, 500)
4. Shows alert when animation completes

### Key Code:
```javascript
function draw() {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
  
  currentX += 2;
  currentY += 2;
  
  if (currentX <= targetX && currentY <= targetY) {
    requestAnimationFrame(draw);  // Continue animation
  }
}
```

**Canvas Styling:**
- `strokeStyle`: "darkred"
- `lineWidth`: 8
- `lineCap`: "round"

**Learning Points:** requestAnimationFrame, line drawing, animation loops

---

## Project 3: Nature View with Canvas

**What it does:** Draws a stylized landscape scene (sky, grass, field gate) using canvas gradients and paths.

### Components:

#### Background Gradient
```javascript
const backgroundGradient = ctx.createLinearGradient(0, 0, 0, 500);
backgroundGradient.addColorStop(0, "skyblue");      // Top: sky
backgroundGradient.addColorStop(0.5, "#00b300");    // Middle: grass
backgroundGradient.addColorStop(1, "white");        // Bottom: ground
```

#### Field Gate (Rectangle outline)
```javascript
ctx.moveTo(120, 400);  // Bottom-left
ctx.lineTo(120, 110);  // Top-left
ctx.lineTo(490, 110);  // Top-right
ctx.lineTo(490, 400);  // Bottom-right
```

#### Goal Gradient (Fading effect)
```javascript
const goalGradient = ctx.createLinearGradient(0, 150, 0, 350);
goalGradient.addColorStop(0, "black");           // Opaque
goalGradient.addColorStop(0.4, "black");         // Stays black
goalGradient.addColorStop(1, "rgba(0,0,0,0)");   // Fades to transparent
```

**Learning Points:** Linear gradients, gradient color stops, alpha transparency, complex paths

---

## Project 4: Polyfill - LocalStorage & SessionStorage Fallback

**What it does:** Implements polyfill for `localStorage` and `sessionStorage` using cookies for older browsers.

### How it works:
```javascript
(function () {
  if (!window.localStorage) {
    window.localStorage = {
      setItem: function (key, value) {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);  // 1-year expiry
        setCookie("LS_" + key, value, date);
      },
      
      getItem: function (key) {
        return getCookie("LS_" + key);
      },
      
      removeItem: function (key) {
        deleteCookie("LS_" + key);
      },
      
      clear: function () {
        // Delete all LS_ prefixed cookies
      }
    };
  }
})();
```

### Key Features:
- **Polyfill Pattern**: Checks if feature exists before adding fallback
- **IIFE (Immediately Invoked Function Expression)**: Encapsulates logic
- **Cookie-based Storage**: Fallback for older browsers without localStorage
- **Prefix Convention**: "LS_" for localStorage, "SS_" for sessionStorage
- **Expiry Handling**: localStorage expires in 1 year, sessionStorage expires on browser close

### Dependency:
Uses `cookie.js` for cookie management functions: `setCookie()`, `getCookie()`, `deleteCookie()`, `hasCookie()`

**Learning Points:** 
- Web Storage API
- Polyfill design patterns
- Cookie manipulation
- Feature detection
- Fallback strategies

---

## Project 5: Pythagorean Theorem - SVG & MathML

**What it does:** Visualizes Pythagorean theorem with an SVG right triangle and MathML mathematical notation.

### SVG Graphics:
```html
<svg height="220" width="500">
  <polygon points="180,10 180,180 50,180" fill="red"></polygon>
  <text x="115" y="195">a</text>
  <text x="190" y="100">b</text>
  <text x="90" y="100">c</text>
</svg>
```
- Red right triangle with labeled sides (a, b, c)
- Text positioned near each side

### MathML Formula:
```html
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>c</mi>           <!-- Variable c -->
  <mo>=</mo>           <!-- Operator = -->
  <msqrt>              <!-- Square root -->
    <msup>
      <mi>a</mi>
      <mn>2</mn>       <!-- Superscript 2 -->
    </msup>
    <mo>+</mo>
    <msup>
      <mi>b</mi>
      <mn>2</mn>
    </msup>
  </msqrt>
</math>
```

**MathML Elements:**
- `<mi>`: Mathematical identifier (variable)
- `<mo>`: Mathematical operator
- `<mn>`: Mathematical number
- `<msup>`: Superscript
- `<msqrt>`: Square root

**Learning Points:**
- SVG polygon creation and positioning
- SVG text labels
- MathML markup for mathematical expressions
- Rendering mathematical notation in HTML

---

## Quick Reference

| Project | Technology | Key Concept |
|---------|-----------|------------|
| Button | Canvas | Gradients & shapes |
| Line Animation | Canvas | requestAnimationFrame |
| Nature View | Canvas | Linear gradients |
| Polyfill | JavaScript | Feature detection & fallback |
| Pythagorean | SVG + MathML | Vector graphics + math notation |

