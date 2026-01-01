# JavaScript Practice — BOM & DOM Demos

This folder holds small browser exercises that use window APIs, timers, DOM events, and simple game logic. Open the listed HTML files directly in a browser to try each demo.

---

## Programs Included (in order)

### 1) Typewriter — `typewriter/`
Opens a child window and streams a message character by character using `setInterval`. Line breaks are preserved, then the child auto-closes after a delay. Includes a "show message" button.

**Files**: index.html, index.js, styles.css, child.html, child.css

---

### 2) Slideshow — `slideShow/`
Simple image viewer with manual `Next`/`Previous` buttons plus an auto-advance slideshow (`setInterval` every 2s) and a stop control. Starts on the first image and loops through six photos.

**Files**: index.html, index.js, styles.css, images/

---

### 3) Registration Form — `registrationForm/`
Two-page flow: `register.html` collects user name, job title, mobile, email, address, and gender (GET submit). `welcome.html` reads the query string, decodes values, and renders a profile card. Shows a Chrome recommendation alert when not on Chromium-based browsers.

**Files**: register.html, welcome.html, index.js, register.css, welcome.css

---

### 4) Marble Game — `marbleGame/`
Highlights one marble at a time in a loop. Hovering any marble pauses the timer; moving the cursor away resumes. The interval speed varies between 50ms and 250ms, reversing direction to create a speed-up/slow-down effect.

**Files**: index.html, index.js, styles.css, images/

---

### 5) Memory Game — `memoryGame/`
A 4x3 card-matching game with six pairs. Images are shuffled, clicks flip cards, and matches update the score. A winner message appears after all pairs are found; a reset button reshuffles and clears the board.

**Files**: index.html, index.js, styles.css, images/

---

## How to Run
1) Open the target `index.html` (or `register.html` for the form) in your browser.
2) Ensure images remain in their respective `images/` folders.
3) For best results, allow pop-ups when trying the Typewriter demo (it opens a child window).
