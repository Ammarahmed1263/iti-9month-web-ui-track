# JavaScript Practice — Built-in & Window APIs

This folder explores using basic JavaScript objects plus window management via timers (`setTimeout`/`setInterval`).

---

## Programs Included

### 1) Address Formatter — `show-address.js`
Builds a formatted address string from an object and appends the current date.

**Concepts Used**
- Object property access
- String concatenation
- Date formatting with `toLocaleDateString()`
- Page output with `document.writeln()`

---

### 2) Dynamic Value Reader — `display-value.js`
Retrieves a value from an object by key and displays it.

**Concepts Used**
- Function parameters and return values
- Dynamic property lookup (`obj[key]`)
- DOM output with `document.write()`

---

### 3) Array Sorter — `sort-array.js`
Prompts for numbers, then shows ascending and descending sorts.

**Concepts Used**
- User input with `prompt()`
- Number parsing with `parseInt()`
- Custom comparator functions for `Array.prototype.sort`
- Basic loop input collection

---

### 4) Flying Window (Timers) — `flying-window/parent.html`
Opens a child window and animates it diagonally using `setTimeout`; an alternative `setInterval` approach is left commented for reference.

**Concepts Used**
- `window.open()` to spawn a child window
- Window movement/resizing with `moveBy()` and `resizeTo()`
- Boundary detection with viewport values
- Timer control via `setTimeout` / `clearTimeout` (and commented `setInterval`)

---

### 5) Scrollable Window (Timers) — `scrollable-window/parent.html`
Opens a scrollable child window and auto-scrolls until reaching the bottom using `setTimeout`; a commented `setInterval` version shows the same idea.

**Concepts Used**
- `window.open()` with scrollbars
- Reading scroll position and document height
- Automated scrolling with `scrollBy()`
- Timer-driven flow control

---

## Files

- show-address.js
- display-value.js
- sort-array.js
- index.html
- flying-window/parent.html
- flying-window/child.html
- scrollable-window/parent.html
- scrollable-window/child.html
- README.md

---

## How to Run

1. Open `index.html` in a browser.
2. Uncomment the desired `<script>` in the `<head>` to load `show-address.js`, `display-value.js`, or `sort-array.js`.
3. Reload the page to run that script.
4. For window demos, open `flying-window/parent.html` or `scrollable-window/parent.html` directly in the browser and use the on-page controls.

---

## Notes

- Timer-based demos include both `setTimeout` implementations and commented `setInterval` alternatives for comparison.
- Prompts in `sort-array.js` require numeric input; non-numeric entries will produce `NaN` in the results.
