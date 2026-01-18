# DOM Manipulation Projects

This folder contains JavaScript tasks focused on **DOM Manipulation**, **Dynamic Styling**, and **Animation**, demonstrating various techniques for interacting with and modifying the Document Object Model.

---

## Task 1: Style_Text/script.js - Dynamic Text and Border Styling

**Objective:** Provide functions that dynamically modify various CSS properties of a paragraph element based on radio button selections.

### Element Selection
```javascript
const p = document.documentElement.lastChild.firstElementChild;
```
Selects the first child element of the document's last child (the paragraph to be styled).

### Style Modification Functions

#### ChangeFont(family)
```javascript
function ChangeFont(family) {
    p.style.fontFamily = family;
}
```
**Parameters**: `family` - Font name (e.g., 'arial', 'georgia', 'courier')
**Effect**: Changes the typeface of the paragraph

#### ChangeAlign(align)
```javascript
function ChangeAlign(align) {
    p.style.textAlign = align;
}
```
**Parameters**: `align` - Alignment value ('left', 'center', 'right', 'justify')
**Effect**: Changes text alignment within the paragraph

#### ChangeHeight(line_height)
```javascript
function ChangeHeight(line_height) {
    p.style.lineHeight = line_height;
}
```
**Parameters**: `line_height` - Height value ('normal', '10px', '15px', '1.5')
**Effect**: Changes vertical spacing between text lines

#### ChangeLSpace(space)
```javascript
function ChangeLSpace(space) {
    p.style.letterSpacing = space;
}
```
**Parameters**: `space` - Spacing value ('normal', '-1px', '2px', '3px')
**Effect**: Changes horizontal spacing between characters

#### ChangeIndent(indent)
```javascript
function ChangeIndent(indent) {
    p.style.textIndent = indent;
}
```
**Parameters**: `indent` - Indent value ('0px', '5px', '15px', '25px')
**Effect**: Indents the first line of the paragraph

#### ChangeTransform(transform)
```javascript
function ChangeTransform(transform) {
    p.style.textTransform = transform;
}
```
**Parameters**: `transform` - Transform value ('none', 'capitalize', 'uppercase', 'lowercase')
**Effect**: Changes text case appearance

#### ChangeDecorate(decorate)
```javascript
function ChangeDecorate(decorate) {
    p.style.textDecoration = decorate;
}
```
**Parameters**: `decorate` - Decoration value ('none', 'line-through', 'overline', 'underline')
**Effect**: Adds or removes text decoration

#### ChangeBorder(border)
```javascript
function ChangeBorder(border) {
    p.style.borderStyle = border;
}
```
**Parameters**: `border` - Border style ('none', 'dotted', 'double', 'groove', 'dashed', 'insert', 'solid', 'outset', 'ridge')
**Effect**: Changes the border appearance

#### ChangeBorderColor(border)
```javascript
function ChangeBorderColor(border) {
    p.style.borderColor = border;
}
```
**Parameters**: `border` - Color value ('black', 'pink', 'red', 'green', 'blue', 'yellow', 'purple')
**Effect**: Changes the border color

### How It Works:
1. HTML radio buttons have `onclick` attributes calling these functions with values
2. Each function receives the selected value as a parameter
3. The corresponding CSS property on the paragraph is updated immediately
4. Changes appear in real-time without page reload
5. Multiple properties can be combined by selecting different options

### Supported CSS Properties Modified:
| Function | CSS Property | Effect |
|----------|-------------|--------|
| ChangeFont | `fontFamily` | Typeface selection |
| ChangeAlign | `textAlign` | Text alignment |
| ChangeHeight | `lineHeight` | Line spacing |
| ChangeLSpace | `letterSpacing` | Character spacing |
| ChangeIndent | `textIndent` | First-line indentation |
| ChangeTransform | `textTransform` | Text case |
| ChangeDecorate | `textDecoration` | Text decoration |
| ChangeBorder | `borderStyle` | Border appearance |
| ChangeBorderColor | `borderColor` | Border color |

---

## Task 2: DOM_image/script.js - Element Cloning and Dynamic Styling

**Objective:** Handle image click events to dynamically clone DOM elements and apply styles to create a footer while modifying navigation styling.

### Script Functionality:

#### Main Event Listener
```javascript
const img = document.querySelector("img");
img.addEventListener("click", function () { ... });
```
Selects the image element and attaches a click event listener. When the image is clicked, the handler executes.

#### Inside the Click Handler:

**1. Element Selection**
```javascript
const imgContainer = document.getElementById("header");
const newImageContainer = imgContainer.cloneNode(true);
const nav = document.getElementById("nav");
```
- Selects the header container (parent of the image)
- Creates a deep clone of the header with `cloneNode(true)`
- Selects the navigation list element

**2. Header Styling**
```javascript
imgContainer.style.textAlign = "right";
```
Changes the original header's text alignment to right.

**3. Footer Creation and Insertion**
```javascript
newImageContainer.style.textAlign = "left";
newImageContainer.id = "footer";
document.body.insertBefore(newImageContainer, nav.parentElement.nextSibling);
```
- Sets cloned container's text alignment to left
- Changes its ID to "footer" (for identification)
- Inserts the footer into the DOM after the navigation section using `insertBefore()`

**4. Navigation List Styling**
```javascript
nav.style.listStyleType = "circle";
nav.style.listStylePosition = "inside";
```
Changes the navigation list bullets to circles and positions them inside the list item.

**5. Individual List Item Styling**
```javascript
for (let i = 0; i < nav.children.length; i++) {
  nav.children[i].style.color = "purple";
  nav.children[i].style.textDecoration = "underline";
}
```
Loops through each navigation item and:
- Sets text color to purple
- Adds underline decoration

### Key DOM Methods Used:
- `querySelector()`: Select single element by CSS selector
- `getElementById()`: Select element by ID
- `cloneNode(true)`: Deep clone element with all children
- `insertBefore()`: Insert element at specific position in DOM
- `style` object: Directly modify CSS properties
- Child element access via `children` property

### Execution Flow:
```
Page Load → Image displayed with navigation
    ↓
User clicks image
    ↓
Handler fires → Element cloning → DOM insertion → Styling applied
    ↓
Footer appears with original header structure
Navigation items turn purple and underlined
Header and footer have opposite text alignments
```

---

## Task 3: Moving_Pics/script.js - Animation with Boundary Detection

**Objective:** Manage multiple animated images that move within a bounded area, detect boundary collisions, and provide control buttons for animation state.

### Constants
```javascript
const BOX_WIDTH = 500;      // Container width
const BOX_HEIGHT = 500;     // Container height
const IMAGE_WIDTH = 47;     // Image element width
const IMAGE_HEIGHT = 50;    // Image element height
const STEP = 20;            // Pixels moved per frame
```

### Image Objects Structure
Three image objects are created (`img1`, `img2`, `img3`), each containing:
```javascript
{
  img: HTMLImageElement,    // DOM element reference
  x: number,                // Current X coordinate
  y: number,                // Current Y coordinate
  dirX: number,             // X direction (-1=left, 1=right)
  dirY: number,             // Y direction (-1=up, 1=down)
  initialX: number,         // Starting X position
  initialY: number,         // Starting Y position
  initial_dirX: number,     // Starting X direction
  initial_dirY: number,     // Starting Y direction
  desc: HTMLElement         // Text element showing position
}
```

### Core Functions:

#### createBox()
```javascript
function createBox() {
  let box = document.getElementById("floating_area");
  box.style.setProperty("border", "4px solid #00ffb7");
  box.style.width = (BOX_WIDTH + IMAGE_WIDTH) + "px";
  box.style.height = (BOX_HEIGHT + IMAGE_HEIGHT) + "px";
  box.style.position = "relative";
  return box;
}
```
- Gets the container element
- Sets border, dimensions, and relative positioning
- Returns the configured container

#### createImg(src, alt, id, left, top, parent)
```javascript
function createImg(src, alt, id, left, top, parent) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.id = id;
  img.style.position = "absolute";
  img.style.width = IMAGE_WIDTH + "px";
  img.style.height = IMAGE_HEIGHT + "px";
  img.style.left = left + "px";
  img.style.top = top + "px";
  img.style.backgroundColor = "#e8e8e8";
  parent.appendChild(img);
  return img;
}
```
- Creates new image element with specified properties
- Sets absolute positioning with initial coordinates
- Appends to parent container
- Returns the created element

#### createDesc(imgObj)
```javascript
function createDesc(imgObj) {
  const p = document.createElement("p");
  p.innerText = '<img src="' + imgObj.img.src + '" style="left: ' + 
                imgObj.initialX + "px; top: " + imgObj.initialY + 'px;">';
  p.style.color = "blue";
  const wrapper = document.querySelector(".wrapper");
  wrapper.appendChild(p);
  return p;
}
```
- Creates paragraph element to display position info
- Sets text with image source and initial coordinates
- Styles text in blue
- Appends to wrapper and returns element

#### moveImg(imgObj)
```javascript
function moveImg(imgObj) {
  imgObj.x += STEP * imgObj.dirX;  // Update X position
  imgObj.y += STEP * imgObj.dirY;  // Update Y position

  // Boundary collision detection and reversal
  if (imgObj.x >= BOX_WIDTH) {
    imgObj.x = BOX_WIDTH;
    imgObj.dirX *= -1;              // Reverse X direction
  } else if (imgObj.x <= 0) {
    imgObj.x = 0;
    imgObj.dirX *= -1;
  }

  if (imgObj.y >= BOX_HEIGHT) {
    imgObj.y = BOX_HEIGHT;
    imgObj.dirY *= -1;              // Reverse Y direction
  } else if (imgObj.y <= 0) {
    imgObj.y = 0;
    imgObj.dirY *= -1;
  }

  // Update DOM
  imgObj.img.style.left = imgObj.x + "px";
  imgObj.img.style.top = imgObj.y + "px";
  updateDesc(imgObj);
}
```
- Increments position by STEP × direction
- Detects boundary collisions (edges of container)
- Reverses direction when hitting boundaries
- Updates DOM element position
- Updates description text

#### resetImg(imgObj)
```javascript
function resetImg(imgObj) {
  imgObj.x = imgObj.initialX;
  imgObj.y = imgObj.initialY;
  imgObj.dirX = imgObj.initial_dirX;
  imgObj.dirY = imgObj.initial_dirY;
  imgObj.img.style.left = imgObj.x + "px";
  imgObj.img.style.top = imgObj.y + "px";
  updateDesc(imgObj);
}
```
- Restores all position and direction values to initial state
- Updates DOM to reflect original positions

### Button Event Handlers:

#### GO Button
```javascript
goButton.addEventListener("click", function () {
  if (timer_id) clearInterval(timer_id);  // Clear existing timer
  timer_id = setInterval(function () {
    for (let i = 0; i < images.length; i++) {
      moveImg(images[i]);  // Move each image
    }
  }, 50);  // 50ms = 20 FPS
});
```
- Clears any existing animation timer
- Starts new interval that calls `moveImg()` for all images
- 50ms interval provides smooth 20 FPS animation

#### STOP Button
```javascript
stopButton.addEventListener("click", function () {
  clearInterval(timer_id);  // Pause animation
});
```
- Simply clears the interval, freezing images at current position

#### RESET Button
```javascript
resetButton.addEventListener("click", function () {
  if (timer_id) clearInterval(timer_id);  // Stop animation
  for (let i = 0; i < images.length; i++) {
    resetImg(images[i]);  // Reset each image
  }
});
```
- Stops the animation
- Resets all images to initial positions and directions

### Animation Mechanics:
1. **50ms Interval**: Each 50ms, `moveImg()` is called for all images
2. **Position Update**: x, y incremented by STEP × direction each frame
3. **Boundary Detection**: When x/y reaches edge, direction is reversed (×-1)
4. **Smooth Bouncing**: Images bounce continuously within bounds
5. **State Preservation**: Initial values stored for reset functionality

---

## Task 3: Moving_Pics/script.js - Animation with Boundary Detection

**Objective:** Manage multiple animated images that move within a bounded area, detect boundary collisions, and provide control buttons for animation state.

### Constants
```javascript
const BOX_WIDTH = 500;      // Container width
const BOX_HEIGHT = 500;     // Container height
const IMAGE_WIDTH = 47;     // Image element width
const IMAGE_HEIGHT = 50;    // Image element height
const STEP = 20;            // Pixels moved per frame
```

### Image Objects Structure
Three image objects are created (`img1`, `img2`, `img3`), each containing:
```javascript
{
  img: HTMLImageElement,    // DOM element reference
  x: number,                // Current X coordinate
  y: number,                // Current Y coordinate
  dirX: number,             // X direction (-1=left, 1=right)
  dirY: number,             // Y direction (-1=up, 1=down)
  initialX: number,         // Starting X position
  initialY: number,         // Starting Y position
  initial_dirX: number,     // Starting X direction
  initial_dirY: number,     // Starting Y direction
  desc: HTMLElement         // Text element showing position
}
```

### Core Functions:

#### createBox()
```javascript
function createBox() {
  let box = document.getElementById("floating_area");
  box.style.setProperty("border", "4px solid #00ffb7");
  box.style.width = (BOX_WIDTH + IMAGE_WIDTH) + "px";
  box.style.height = (BOX_HEIGHT + IMAGE_HEIGHT) + "px";
  box.style.position = "relative";
  return box;
}
```
- Gets the container element
- Sets border, dimensions, and relative positioning
- Returns the configured container

#### createImg(src, alt, id, left, top, parent)
```javascript
function createImg(src, alt, id, left, top, parent) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.id = id;
  img.style.position = "absolute";
  img.style.width = IMAGE_WIDTH + "px";
  img.style.height = IMAGE_HEIGHT + "px";
  img.style.left = left + "px";
  img.style.top = top + "px";
  img.style.backgroundColor = "#e8e8e8";
  parent.appendChild(img);
  return img;
}
```
- Creates new image element with specified properties
- Sets absolute positioning with initial coordinates
- Appends to parent container
- Returns the created element

#### createDesc(imgObj)
```javascript
function createDesc(imgObj) {
  const p = document.createElement("p");
  p.innerText = '<img src="' + imgObj.img.src + '" style="left: ' + 
                imgObj.initialX + "px; top: " + imgObj.initialY + 'px;">';
  p.style.color = "blue";
  const wrapper = document.querySelector(".wrapper");
  wrapper.appendChild(p);
  return p;
}
```
- Creates paragraph element to display position info
- Sets text with image source and initial coordinates
- Styles text in blue
- Appends to wrapper and returns element

#### moveImg(imgObj)
```javascript
function moveImg(imgObj) {
  imgObj.x += STEP * imgObj.dirX;  // Update X position
  imgObj.y += STEP * imgObj.dirY;  // Update Y position

  // Boundary collision detection and reversal
  if (imgObj.x >= BOX_WIDTH) {
    imgObj.x = BOX_WIDTH;
    imgObj.dirX *= -1;              // Reverse X direction
  } else if (imgObj.x <= 0) {
    imgObj.x = 0;
    imgObj.dirX *= -1;
  }

  if (imgObj.y >= BOX_HEIGHT) {
    imgObj.y = BOX_HEIGHT;
    imgObj.dirY *= -1;              // Reverse Y direction
  } else if (imgObj.y <= 0) {
    imgObj.y = 0;
    imgObj.dirY *= -1;
  }

  // Update DOM
  imgObj.img.style.left = imgObj.x + "px";
  imgObj.img.style.top = imgObj.y + "px";
  updateDesc(imgObj);
}
```
- Increments position by STEP × direction
- Detects boundary collisions (edges of container)
- Reverses direction when hitting boundaries
- Updates DOM element position
- Updates description text

#### resetImg(imgObj)
```javascript
function resetImg(imgObj) {
  imgObj.x = imgObj.initialX;
  imgObj.y = imgObj.initialY;
  imgObj.dirX = imgObj.initial_dirX;
  imgObj.dirY = imgObj.initial_dirY;
  imgObj.img.style.left = imgObj.x + "px";
  imgObj.img.style.top = imgObj.y + "px";
  updateDesc(imgObj);
}
```
- Restores all position and direction values to initial state
- Updates DOM to reflect original positions

### Button Event Handlers:

#### GO Button
```javascript
goButton.addEventListener("click", function () {
  if (timer_id) clearInterval(timer_id);  // Clear existing timer
  timer_id = setInterval(function () {
    for (let i = 0; i < images.length; i++) {
      moveImg(images[i]);  // Move each image
    }
  }, 50);  // 50ms = 20 FPS
});
```
- Clears any existing animation timer
- Starts new interval that calls `moveImg()` for all images
- 50ms interval provides smooth 20 FPS animation

#### STOP Button
```javascript
stopButton.addEventListener("click", function () {
  clearInterval(timer_id);  // Pause animation
});
```
- Simply clears the interval, freezing images at current position

#### RESET Button
```javascript
resetButton.addEventListener("click", function () {
  if (timer_id) clearInterval(timer_id);  // Stop animation
  for (let i = 0; i < images.length; i++) {
    resetImg(images[i]);  // Reset each image
  }
});
```
- Stops the animation
- Resets all images to initial positions and directions

### Animation Mechanics:
1. **50ms Interval**: Each 50ms, `moveImg()` is called for all images
2. **Position Update**: x, y incremented by STEP × direction each frame
3. **Boundary Detection**: When x/y reaches edge, direction is reversed (×-1)
4. **Smooth Bouncing**: Images bounce continuously within bounds
5. **State Preservation**: Initial values stored for reset functionality

---

## How to Run

### Task 1: Style Text
```
Style_Text/index.html → Select radio buttons → Observe paragraph styling changes
```

### Task 2: DOM Image
```
DOM_image/index.html → Click the image → Observe footer creation and styling
```

### Task 3: Moving Pics
```
Moving_Pics/index.html → Click buttons:
- GO: Start animation
- STOP: Pause animation
- RESET: Return to initial state
```

---

## Learning Outcomes

Through these script implementations, I have learned:
- ✅ DOM element selection and manipulation
- ✅ Event listener attachment and handling
- ✅ Element cloning with `cloneNode(true)`
- ✅ DOM insertion with `insertBefore()`
- ✅ Dynamic element creation with `createElement()`
- ✅ Animation loops with `setInterval()`
- ✅ Coordinate-based movement and boundary detection
- ✅ Direction reversal for collision response
- ✅ State management for animation objects
- ✅ Real-time CSS property modification
- ✅ Function parameter passing from HTML
- ✅ Timer management with `clearInterval()`
- ✅ Working with absolute and relative positioning
- ✅ String interpolation for dynamic content
