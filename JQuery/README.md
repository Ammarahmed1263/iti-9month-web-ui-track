# jQuery Projects

This folder contains interactive jQuery projects demonstrating **DOM manipulation**, **event handling**, **animations**, **drag-and-drop functionality**, and **form validation**. These projects showcase jQuery's powerful and concise syntax for web development.

---

## Project 1: Black Hole - Drag and Drop with jQuery UI

**Objective:** Implement an interactive drag-and-drop interface where users can drag an image to a designated drop zone, triggering animations and visual effects.

### HTML Structure
```html
<div id="droppable">
  <img src="31.jpg" alt="bunny_image" />
</div>

<div id="draggable">
  <div id="shake-layer">
    <img src="21.jpg" alt="bunny" />
    <p>Drag me</p>
  </div>
</div>
```
- **`#draggable`**: The element to be dragged (bunny image with text)
- **`#droppable`**: The target drop zone (black hole image)
- **`#shake-layer`**: Inner container for applying animation effects

### jQuery Dependencies
```html
<link rel="stylesheet" href="https://code.jquery.com/ui/1.14.1/themes/base/jquery-ui.css" />
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>
```
Uses jQuery UI for draggable and droppable widgets with built-in animations.

### Script Functionality

#### Draggable Configuration
```javascript
$("#draggable").draggable({
  revert: "invalid",
  start: function () {
    $(this)
      .find("#shake-layer")
      .effect("shake", { distance: 15, times: 2 }, 800);
  },
});
```

**Key Options:**
- **`revert: "invalid"`**: Returns the dragged element to its original position if dropped outside valid zones
- **`start` callback**: Triggered when dragging begins
  - `.find("#shake-layer")`: Selects the inner container
  - `.effect("shake", ...)`: Applies jQuery UI shake animation
  - **Parameters**: `{ distance: 15, times: 2 }` - shakes 15px, 2 times, over 800ms

**Process:**
1. User clicks and holds draggable element
2. Shake animation activates on start
3. Element follows cursor while dragging
4. If dropped outside droppable, reverts to original position

#### Droppable Configuration
```javascript
$("#droppable").droppable({
  accept: "#draggable",
  drop: function (event, ui) {
    $(ui.draggable).find("#shake-layer").stop(true);

    ui.draggable.position({
      my: "center",
      at: "center",
      of: $(this),
      using: function (pos) {
        $(this).animate(pos, 300, "easeOutBack");
      },
    });

    ui.draggable.fadeOut(800);
  },
});
```

**Key Components:**

1. **`accept: "#draggable"`**
   - Only accepts the specified draggable element
   - Other elements cannot be dropped here

2. **`.stop(true)` Method**
   - Stops the shake animation when drop occurs
   - `true` parameter clears animation queue

3. **`.position()` Method**
   - Positions dragged element relative to drop zone
   - **`my: "center"`**: Aligns element's center
   - **`at: "center"`**: To the center of drop zone
   - **`of: $(this)`**: Drop zone as reference

4. **Easing Animation**
   - **`"easeOutBack"`**: jQuery UI easing function for smooth deceleration
   - Element animates to final position over 300ms

5. **Fade Out Effect**
   - **`fadeOut(800)`**: Gradually disappears over 800ms
   - Creates visual effect of item being "consumed" by black hole

**Complete Drop Flow:**
```
Drop event triggered
    ↓
Stop shake animation
    ↓
Calculate center position
    ↓
Animate to center with easeOutBack
    ↓
Fade out element (800ms)
```

### Animation Effects Used
| Effect | Purpose | Parameters |
|--------|---------|-----------|
| `shake` | Vibration on drag start | distance: 15px, times: 2, duration: 800ms |
| `animate` | Smooth movement to center | duration: 300ms, easing: easeOutBack |
| `fadeOut` | Disappearing effect | duration: 800ms |

---

## Project 2: Car - Click Animation with Position Tracking

**Objective:** Create an interactive car that moves across the screen when clicked, with real-time position tracking displayed below.

### jQuery Setup and Element Creation
```javascript
$(document).ready(function () {
  let car = $("<img></img>", {
    id: "car_img",
    src: "12.gif",
    alt: "racing_car",
    css: {
      position: "absolute",
      top: "50px",
      cursor: "pointer",
    },
  });
```

**Key Features:**
- **`$("<img></img>", {...})`**: jQuery syntax for creating DOM elements
- **Second parameter object**: Configuration for id, attributes, and CSS
- **Inline CSS**: Sets position to absolute (relative to body) and cursor to pointer
- **`css` property**: Object containing CSS declarations in camelCase

#### Text Description Element
```javascript
let txt = $("<p></p>", {
  id: "description",
  html: '&lt;img src="12.gif" alt="racing_car" style="left: <span id="val">0</span>px" &gt;',
  css: {
    "font-family": "monospace",
    position: "absolute",
    top: "150px",
    margin: "0 5px",
    "background-color": "#e1e1e1",
    padding: "10px",
  },
});
```

**Features:**
- **`html` property**: Sets inner HTML with embedded `<span id="val">0</span>`
- This span updates dynamically with the car's position
- Monospace font displays code-like text
- Light gray background with padding for readability

#### Appending to DOM
```javascript
$("body").append(car, txt);
```
- jQuery `.append()` adds multiple elements at once
- Comma-separated elements are all appended to body

### Click Event Handler
```javascript
car.click(function () {
  const endVal = $(window).width() - $(this).width() - 50;

  car.animate({ left: endVal + "px" }, {
    duration: 1500,
    easing: "linear",
    step: function(now) {
      $("#val").text(Math.round(now));
    }
  });
});
```

**Position Calculation:**
- **`$(window).width()`**: Total viewport width
- **`$(this).width()`**: Car image width
- **`- 50`**: 50px buffer from right edge
- **`endVal`**: Final position for the car to stop

**Animation Configuration:**
- **`{ left: endVal + "px" }`**: Animate left property to calculated position
- **`duration: 1500`**: Animation takes 1.5 seconds
- **`easing: "linear"`**: Constant speed (not accelerating/decelerating)

**Step Callback:**
- **`step(now)`**: Runs on every animation frame
- **`now`**: Current value of animated property (left position)
- **`Math.round(now)`**: Rounds to nearest integer for display
- **`$("#val").text(...)`**: Updates the position display in real-time

**Execution Flow:**
```
User clicks car
    ↓
Calculate end position (window width - car width - 50px)
    ↓
Animate left property over 1500ms
    ↓
Step callback runs ~60 times/second
    ↓
Update #val text with current position
    ↓
Car reaches end position
```

### Key jQuery Methods
| Method | Purpose | Example |
|--------|---------|---------|
| `$()` | Select or create elements | `$("<img>")` or `$("#id")` |
| `.css()` | Get/set CSS properties | `.css({ color: "red" })` |
| `.append()` | Add element to DOM | `.append(element)` |
| `.click()` | Attach click event | `.click(function() {})` |
| `.animate()` | Smooth property animation | `.animate({ left: "100px" })` |
| `.text()` | Set/get text content | `.text("Hello")` |
| `.width()` | Get element width | `$(this).width()` |

---

## Project 3: Website - Multi-Section Navigation with Effects

**Objective:** Build a dynamic website with navigation tabs, image gallery slider, and complaint form submission with smooth transitions and effects.

### Navigation System
```javascript
$(".nav-button").click(function () {
  let target = $(this).data("target");

  $(".nav-button").removeClass("active");
  $(this).addClass("active");

  if (target == "#services") {
    $(target).slideToggle(600);
    $(".content-section").not(".dropdown-menu").hide();
  } else {
    $("#services").slideUp();
    $(".content-section").not(".dropdown-menu").hide();
    $(target).fadeIn(1000);
  }
});
```

**Navigation Features:**

1. **Element Selection**
   - **`.data("target")`**: Retrieves custom data attribute from button
   - Buttons have `data-target="#about"`, `data-target="#gallery"`, etc.

2. **Active State Management**
   - **`.removeClass("active")`**: Removes active class from all buttons
   - **`.addClass("active")`**: Adds active class to clicked button
   - Used for highlighting current section in navigation

3. **Services Dropdown Handling**
   - **`slideToggle(600)`**: Opens/closes dropdown with slide animation
   - **`not(".dropdown-menu")`**: Hides other sections except dropdown

4. **Content Section Display**
   - **`.slideUp()`**: Closes services dropdown with slide up
   - **`.hide()`**: Instantly hides all non-dropdown sections
   - **`.fadeIn(1000)`**: Shows selected section with 1-second fade

**Navigation Flow:**
```
User clicks navigation button
    ↓
Get target section from data-target attribute
    ↓
Remove active class from all buttons
    ↓
Add active class to clicked button
    ↓
If Services: slideToggle dropdown
If Other: slideUp services, hide all, fadeIn target
```

### Image Gallery with Navigation
```javascript
let currentImg = 1;
let totalImgs = 8;
$(".slide-button").click(function () {
  let isNext = $(this).attr("alt") === "next_button";

  if (isNext) {
    currentImg = currentImg === totalImgs ? 1 : currentImg + 1;
  } else {
    currentImg = currentImg === 1 ? totalImgs : currentImg - 1;
  }

  $("#main-img").fadeOut(300, function () {
    $(this).attr("src", "images/" + currentImg + ".jpg");
    $(this).fadeIn(300);
    $("#img-num").text(currentImg);
  });
});
```

**Gallery Features:**

1. **State Management**
   - `currentImg`: Tracks current image number
   - `totalImgs`: Total number of images (8)

2. **Navigation Logic**
   - **`isNext`**: Checks if next or previous button was clicked
   - **Ternary operator**: Increments/decrements with wraparound
   - At end (8), next button goes to image 1
   - At start (1), previous button goes to image 8

3. **Image Transition**
   - **`fadeOut(300)`**: Image fades out over 300ms
   - **Callback function**: Runs after fade completes
   - **`.attr("src", ...)`**: Changes image source
   - **`.fadeIn(300)`**: Fades in new image
   - **`.text(currentImg)`**: Updates counter

**Gallery Animation Flow:**
```
User clicks prev/next button
    ↓
Determine if next or previous
    ↓
Update currentImg with wraparound logic
    ↓
Fade out current image (300ms)
    ↓
Change image source in callback
    ↓
Fade in new image (300ms)
    ↓
Update counter display
```

### Complaint Form with Validation
```javascript
$("#submit-complaint").click(function () {
  let name = $("#name").val();
  let email = $("#email").val();
  let phone = $("#phone").val();
  let complaint = $("#complaint-text").val();

  if (
    name.trim() == "" ||
    email.trim() == "" ||
    phone.trim() == "" ||
    complaint.trim() == ""
  ) {
    alert("All Fields Are Required");
    return;
  }

  $("#view-name").text(name);
  $("#view-email").text(email);
  $("#view-phone").text(phone);
  $("#view-complaint").text(complaint);

  $("#complaint-form").hide("blind", 500, function () {
    $("#complaint-info").show("drop", { direction: "down" }, 500);
  });
});
```

**Validation Process:**

1. **Form Data Retrieval**
   - **`.val()`**: Gets input value from text fields and textarea
   - All four fields must be populated

2. **Validation Logic**
   - **`.trim()`**: Removes whitespace from beginning and end
   - Checks if any field is empty
   - Shows alert and exits if validation fails

3. **Data Display**
   - **`.text(value)`**: Sets text content of display elements
   - Populates `#view-name`, `#view-email`, `#view-phone`, `#view-complaint`

4. **Form to Summary Transition**
   - **`hide("blind", 500)`**: Hides form with blind effect over 500ms
   - **`show("drop", { direction: "down" }, 500)`**: Shows summary with drop effect
   - Callback ensures animation sequence

#### Edit Functionality
```javascript
$("#edit-complaint").click(function () {
  $("#complaint-info").hide("fade", 300, function () {
    $("#complaint-form").show("fade", 300);
  });
});
```

**Features:**
- **`fadeOut` / `fadeIn`**: Smooth transitions between form and view
- Returns to form for editing submitted complaint
- Smooth 300ms fade animations

### jQuery UI Effects Used
| Effect | Parameters | Purpose |
|--------|-----------|---------|
| `slideToggle` | duration (ms) | Toggle slide open/close |
| `slideUp` | duration (ms) | Slide element up and hide |
| `fadeIn` / `fadeOut` | duration (ms) | Fade in/out animation |
| `blind` | duration (ms) | Venetian blind effect |
| `drop` | { direction: "down" } | Drop-down effect |
| `fade` | duration (ms) | Fade transition |

---

## How to Run

### Project 1: Black Hole
```
JQuery/black_hole/index.html → Open in browser → Drag the bunny into the black hole
```

### Project 2: Car
```
JQuery/car/index.html → Open in browser → Click the car to animate it across screen
```

### Project 3: Website
```
JQuery/website/index.html → Open in browser
- Click navigation buttons to switch sections
- Use prev/next buttons in gallery to browse images
- Fill complaint form and submit
```

---

## Learning Outcomes

Through these jQuery projects, I have learned:
- ✅ jQuery element selection and creation
- ✅ Event handling with `.click()`, `.on()`
- ✅ jQuery UI draggable and droppable widgets
- ✅ Animation with `.animate()`, `.fadeIn()`, `.fadeOut()`, `.slideToggle()`
- ✅ jQuery UI effects (shake, blind, drop, fade)
- ✅ Easing functions for smooth animations
- ✅ Element positioning with `.position()`
- ✅ Custom data attributes with `.data()`
- ✅ Form validation and input handling
- ✅ Dynamic DOM element creation
- ✅ CSS property manipulation with `.css()`
- ✅ Callback functions for animation sequencing
- ✅ Real-time value updates with `.text()` and `.attr()`
- ✅ Class manipulation for state management
- ✅ Conditional logic for user interactions
- ✅ Method chaining for concise code
- ✅ Ternary operators for simple logic

---

## jQuery Advantages Demonstrated

| Concept | Advantage |
|---------|-----------|
| **Concise Syntax** | `$("#id")` vs `document.getElementById()` |
| **Chainable Methods** | `.fadeOut().text().addClass()` |
| **Cross-browser** | Works consistently across all browsers |
| **Built-in Effects** | `.animate()`, `.fadeIn()` with parameters |
| **jQuery UI Library** | Draggable, droppable, effects out of the box |
| **Easy Event Handling** | `.click()`, `.on()` simplified syntax |
| **DOM Manipulation** | Element creation and insertion made simple |

