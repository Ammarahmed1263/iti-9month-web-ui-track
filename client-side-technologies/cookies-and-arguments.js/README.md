# Cookies and Arguments Projects

This folder contains JavaScript tasks focused on **Browser Object Model (BOM)** concepts and **Built-in Objects**, specifically working with cookies and function argument validation.

---

## Task 1: Cookie Management Library (`cookie.js`)

**Objective:** Create a reusable cookie management library with proper error handling.

### What it does:
- **getCookie(cookieName)**: Retrieves a cookie value based on the cookie name
- **setCookie(cookieName, cookieValue[, expiryDate])**: Sets a cookie with optional expiration date
- **deleteCookie(cookieName)**: Deletes a cookie by setting its expiration to the past
- **allCookieList()**: Returns a list of all stored cookies (implemented as `showCookieList()`)
- **hasCookie(cookieName)**: Checks whether a cookie exists

### Key Concepts:
- **Cookie parsing**: Splitting and decoding `document.cookie` string
- **Error handling**: Comprehensive validation for all functions
  - Type validation (ensures cookie names are strings)
  - Argument count validation (checks correct number of parameters)
  - Existence validation (throws error when accessing non-existent cookies)
  - Name validation (prevents empty names and invalid characters)
  - Date validation (validates expiry date format)
- **URL encoding**: Using `encodeURIComponent()` and `decodeURIComponent()` for safe cookie values
- **Error types**: Using `Error`, `TypeError`, `ReferenceError`, `SyntaxError`, `RangeError`, and `URIError`

### Error Handling Examples:
- Calling `getCookie()` without parameters throws `Error`
- Passing non-string cookie name throws `TypeError`
- Accessing non-existent cookie throws `ReferenceError`
- Empty cookie name throws `Error`
- Cookie name with special characters (`;`, `=`, whitespace) throws `SyntaxError`
- Invalid expiry date throws `RangeError`
- Deleting non-existent cookie throws `ReferenceError`

---

## Task 2: User Registration & Greeting (`welcome-cookies/`)

**Objective:** Build a registration and greeting system using cookies to track user visits and preferences.

### What it does:
- **Registration page (`index.html` + `script.js`)**:
  - Collects user information: name, age, gender (radio buttons), favorite color (dropdown)
  - Stores all preferences as cookies using `setCookie()`
  - Validates that name field is not empty
  - Tracks visit count and increments on each registration
  - Redirects to greeting page using `location.replace()`
  - Does NOT use `<form>` tag (uses individual input elements)

- **Greeting page (`greet.html` + `greet.js`)**:
  - Displays personalized welcome message with user's name
  - Shows profile picture based on gender selection
  - Displays number of visits to the site
  - Applies user's chosen font color to name and visit count

### Key Concepts:
- **Cookie persistence**: Using cookies to store user preferences across page loads
- **DOM manipulation**: Updating element content and styles dynamically
- **Input events**: Listening to `input`, `change`, and `click` events
- **Location object**: Using `location.replace()` for page navigation
- **Radio button handling**: Using `:checked` selector to get selected radio value
- **Image selection**: Dynamically setting image source based on gender choice

### Requirements Met:
- ✅ No `<form>` tag used in registration page
- ✅ Location object used for page replacement
- ✅ Cookie functions have error handling for wrong calls
- ✅ Displays greeting message with user name
- ✅ Shows profile picture based on gender
- ✅ Displays visit count
- ✅ Applies chosen color to displayed text

---

## Task 3: Parameter Validation (`check-params.js`)

**Objective:** Create a function that accepts exactly 2 parameters and throws an exception for any other count.

### What it does:
- **checkParams(param1, param2)**: Validates that exactly 2 arguments are passed
- Throws `Error` if fewer than or more than 2 parameters are provided
- Uses `arguments.length` to check parameter count
- Logs the parameters when exactly 2 are passed

### Key Concepts:
- **Error object**: Creating and throwing custom error messages
- **arguments object**: Accessing function arguments dynamically
- **Parameter validation**: Checking argument count at runtime
- **Exception handling**: Using `throw` to raise exceptions

### Test Cases:
```javascript
checkParams(1);           // Throws: Expected 2 arguments, but got 1
checkParams(1, 2);        // Success: logs "params passed: 1 2"
checkParams(1, 2, 3);     // Throws: Expected 2 arguments, but got 3
```

---

## Task 4: Variable-Length Addition (`add-n.js`)

**Objective:** Create an adding function that accepts n numbers and validates all parameters.

### What it does:
- **addParams()**: Adds any number of arguments together
- Validates that at least one parameter is passed
- Validates that all parameters are of type `"number"`
- Throws `Error` if called without parameters
- Throws `Error` if any non-number type is passed (includes which argument failed)
- Returns the sum of all valid numbers

### Key Concepts:
- **Variable arguments**: Using `arguments` object to accept unlimited parameters
- **Type checking**: Using `typeof` to validate data types
- **Error messages**: Providing detailed error information (which argument and type)
- **Loop iteration**: Processing all arguments in sequence
- **Accumulator pattern**: Building sum incrementally

### Test Cases:
```javascript
addParams(1, -4, 5);          // Returns: 2
addParams();                  // Throws: Expected at least 1 argument, but got 0
addParams(1, "2", 3);         // Throws: expected a number but got string
addParams(1, true, 3);        // Throws: expected a number but got boolean
```

---

## Learning Outcomes

Through these projects, I have learned:
- ✅ Cookie creation, retrieval, and deletion
- ✅ Cookie encoding and parsing
- ✅ Comprehensive error handling and validation
- ✅ Error types: Error, TypeError, ReferenceError, SyntaxError, RangeError, URIError
- ✅ Function parameter validation using arguments object
- ✅ Type checking with typeof operator
- ✅ DOM event handling (input, change, click)
- ✅ Location object for navigation
- ✅ Radio button and dropdown handling
- ✅ Dynamic styling and content updates
- ✅ User preference persistence

---

## How to Run

### Cookie Management Functions
Open [index.html](index.html) which loads [cookie.js](cookie.js) and [script.js](script.js). Check the browser console (F12) to see:
- Cookie creation and retrieval
- Error handling demonstrations
- Cookie list display

### Registration & Greeting System
1. Open [welcome-cookies/index.html](welcome-cookies/index.html)
2. Fill in your name (required), age, select gender, and choose favorite color
3. Click "Register" button
4. You'll be redirected to the greeting page showing:
   - Your personalized welcome message
   - Profile picture based on gender
   - Visit count
   - Text styled in your chosen color

### Parameter Validation
Uncomment the `check-params.js` script in [index.html](index.html) to test the 2-parameter validation function. Check console for results.

### Variable-Length Addition
Uncomment the `add-n.js` script in [index.html](index.html) to test the addition function. Check console for results.

## Notes

- **Error Handling Philosophy**: The cookie library implements defensive programming with comprehensive validation, ensuring predictable behavior and clear error messages
- **Cookie Encoding**: All cookie names and values are URL-encoded to handle special characters safely
- **Visit Tracking**: Designed to increment visits for returning users with the same name
- **No Form Tag**: Registration page uses individual input elements with event listeners instead of form submission
- **Location Replace**: Using `location.replace()` prevents users from navigating back to the registration page
