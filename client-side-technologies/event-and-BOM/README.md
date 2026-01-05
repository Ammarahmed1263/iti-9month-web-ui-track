# Event and BOM Projects

This folder contains a series of JavaScript tasks focused on **DOM manipulation**, **Event handling**, and **Browser Object Model (BOM)** concepts. Each project demonstrates different aspects of client-side web development.

---

## Task 1: Prevent Context Menu (`prevent-context.js`)

**Objective:** Disable the right-click context menu and log cursor coordinates.

### What it does:
- Listens to the `contextmenu` event on the entire document
- Prevents the default context menu from appearing using `event.preventDefault()`
- Logs the X and Y coordinates of the right-click position to the console

### Key Concepts:
- **Event listener**: `contextmenu` event
- **Event prevention**: `preventDefault()` method
- **Event properties**: `clientX`, `clientY` coordinates

---

## Task 2: Confirm Form (`confirm-form.js`)

**Objective:** Add form submission validation with a confirmation dialog and timeout handling.

### What it does:
- **Form submission**: Triggers a confirm dialog before submitting the form
- **Validation**: If the user cancels, the form submission is prevented
- **Timeout event**: After 30 seconds of inactivity on the input field, a custom event is triggered
- **Custom event**: Displays an alert if the input field is still empty after the timeout
- **Event reset**: Clears the timeout when the user types in the input field

### Key Concepts:
- **Event types**: `submit`, `input`, custom events
- **setTimeout & clearTimeout**: Managing delayed actions
- **CustomEvent**: Creating and dispatching custom events
- **confirm()**: Browser confirmation dialog
- **Event dispatch**: Using `dispatchEvent()` to trigger custom events

---

## Task 3: Detect Keys (`detect-key.js`)

**Objective:** Detect and display keyboard input, including special key combinations.

### What it does:
- Listens to all `keydown` events on the document
- Displays the pressed key in a designated element
- Prevents the default save action when **Ctrl+S** is pressed

### Key Concepts:
- **Keyboard events**: `keydown` event type
- **Event properties**: `event.key`, `event.code`, `event.ctrlKey`
- **Key combination detection**: Detecting modifier keys with keyboard shortcuts

---

## Task 4: Form (`form/`)

**Objective:** Create a functional form with input validation and dynamic dropdown menu handling.

### What it does:
- **Clear button (AC)**: Clears all input from the input field
- **Delete button (DEL)**: Removes the last character from the input
- **Number display**: Appends numbers to the input field when buttons are clicked
- **Dropdown menu**: Retrieves selected options from a dropdown menu and displays them

### Key Concepts:
- **Click events**: Handling button clicks
- **DOM manipulation**: Updating input field values
- **Form elements**: Working with select dropdowns
- **Loop iteration**: Iterating through dropdown options to find selected ones

### Note:
The HTML structure was provided by the instructor. The JavaScript handles all user interactions and dynamic updates.

---

## Task 5: Calculator (`calculator/`)

**Objective:** Build a fully functional calculator with proper operator precedence.

### What it does:
- **Number input**: Appends digits to the display (prevents leading zeros)
- **Operators**: Supports addition (+), subtraction (-), multiplication (*), and division (/)
- **Calculation**: Evaluates expressions with correct operator precedence:
  - Multiplications and divisions are performed first
  - Additions and subtractions are performed after
- **Error handling**:
  - Alerts user if a complete operand is missing
  - Prevents division by zero
  - Resets calculator when errors occur
- **Clear function**: Resets the display to "0"

### Key Concepts:
- **String manipulation**: Splitting and filtering operators and operands
- **Operator precedence**: Handling multiplication and division before addition and subtraction
- **Regular expressions**: Using regex patterns to extract numbers and operators
- **Error validation**: Checking for incomplete expressions and invalid operations
- **Function composition**: Multiple helper functions working together

### Algorithm:
1. Parse the input string to extract all numbers and operators
2. Process multiplication and division operations first (left to right)
3. Process addition and subtraction operations (left to right)
4. Return the final result, rounded to 5 decimal places

### Note:
The HTML and CSS were provided by the instructor. The JavaScript implements the complete calculator logic.

---

## Learning Outcomes

Through these projects, you will have learned:
- ✅ DOM event handling and event listeners
- ✅ Browser object model and window events
- ✅ Custom events and event dispatching
- ✅ Preventing default browser behavior
- ✅ Working with timers (setTimeout, clearTimeout)
- ✅ String manipulation and parsing
- ✅ Form and input handling
- ✅ Mathematical operations and operator precedence
- ✅ Error handling and validation

---

## How to Run

Each task has its own HTML file that loads the corresponding JavaScript:

1. **Prevent Context Menu**: Open `index.html` in a browser, then right-click anywhere on the page to see the event logging in the console
2. **Confirm Form**: Open `confirm-form.js` in `index.html` to test form submission with a confirmation dialog and timeout behavior
3. **Detect Keys**: Open `detect-key.js` in `index.html` to see keyboard input detection and test the Ctrl+S prevention
4. **Form**: Open `form/index.html` to interact with the form interface (button clicks, input clearing, dropdown selection)
5. **Calculator**: Open `calculator/index.html` to perform calculations with proper operator precedence

### Checking Output

- **Console Output**: Press `F12` to open Developer Tools → Console tab to see logged messages and events
- **Browser Alerts**: Some features display alerts for user interactions (e.g., form confirmation, calculator errors)
- **DOM Updates**: Changes are reflected directly on the page (form inputs, calculator display, detected keys)

---

## Notes

- **Event Listeners**: Each task uses different event types (`click`, `keydown`, `submit`, `input`, `contextmenu`) to capture user interactions
- **Output Methods**: Output varies across tasks:
  - `console.log()` for debugging and event tracking
  - `alert()` for user notifications and error messages
  - DOM manipulation for displaying results and updates
  - Browser dialogs (`confirm()`) for user confirmation
- **Custom Interactions**: Features include form validation, keyboard shortcut prevention, timeout handling, custom events, and mathematical computations
- **User Input**: Interaction methods include mouse clicks, keyboard input, form submission, and dropdown selections
