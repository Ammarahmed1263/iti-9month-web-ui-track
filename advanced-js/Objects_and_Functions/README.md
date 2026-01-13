# Objects and Functions Projects

This folder contains JavaScript tasks focused on **Object-Oriented Programming**, **Function Methods**, and **Advanced JavaScript Concepts**, specifically working with custom data structures, the arguments object, and dynamic property generation.

---

## Task A1: Ordered Linked List Implementation (`A1_LinkedListObj.js`)

**Objective:** Create an ordered linked list data structure with comprehensive validation and error handling.

### What it does:
- **push(val)**: Adds an element to the end of the list (must be greater than current last element)
- **enqueue(val)**: Adds an element to the beginning of the list (must be smaller than current first element)
- **insert(idx, val)**: Inserts an element at a specific index while maintaining sorted order
- **pop()**: Removes and returns the last element
- **dequeue()**: Removes and returns the first element
- **remove(val)**: Removes a specific value from the list
- **find(val)**: Searches for a value and returns its index (-1 if not found)
- **display()**: Prints all elements with their indices
- **getValue(item)**: Helper method to extract value from item object

### Key Concepts:
- **Data structure design**: Using an object to encapsulate data and behavior
- **Ordered insertion**: Maintaining sorted order during all operations
- **Duplicate prevention**: Rejecting duplicate values across all insertion methods
- **Comprehensive validation**: Type checking, argument count, and range validation
- **Error handling**: Using `Error`, `TypeError`, and `RangeError` for different scenarios
- **Array methods**: Using `push()`, `pop()`, `shift()`, `unshift()`, and `splice()`

### Error Handling Examples:
- Calling methods without correct number of arguments throws `Error`
- Passing non-number values throws `TypeError`
- Inserting out-of-order values throws `Error` with descriptive messages
- Inserting duplicate values throws `Error`
- Removing from empty list throws `RangeError`
- Invalid index in `insert()` throws `RangeError`
- Removing non-existent element throws `RangeError`

### Order Validation Rules:
- **push()**: Value must be greater than current last element
- **enqueue()**: Value must be smaller than current first element
- **insert()**: Value must be between previous and next elements at insertion point

### Test Cases:
```javascript
// Building: [-10, 0, 10, 20, 30]
linkedList.push(10);           // First element
linkedList.push(30);           // 30 > 10 ✓
linkedList.enqueue(-10);       // -10 < 10 ✓
linkedList.insert(1, 0);       // -10 < 0 < 10 ✓
linkedList.insert(3, 20);      // 10 < 20 < 30 ✓

// Removal operations
linkedList.pop();              // Returns: 30
linkedList.dequeue();          // Returns: -10
linkedList.remove(10);         // Returns: 10

// Final list: [0, 20]
```

---

## Task B1: Arguments Reversal Functions (`B1_ReverseArgs.js`)

**Objective:** Implement two different approaches to reverse function arguments using call/apply methods.

### What it does:
- **reverse_slice()**: Uses `slice.call()` to convert arguments to array, then reverses it
- **reverse_call()**: Uses `reverse.call()` directly on the arguments object

### Key Concepts:
- **arguments object**: Accessing function parameters dynamically
- **call() method**: Borrowing array methods for array-like objects
- **slice.call()**: Converting arguments object to a real array
- **reverse.call()**: Calling array method directly on arguments object
- **Error handling**: Validating at least one argument is provided
- **Two approaches**: Demonstrating different techniques to achieve the same result

### Technical Differences:
- **reverse_slice()**: 
  - Creates a new array copy using `slice.call()`
  - Returns a true Array with `reverse()` applied
  - More memory usage but safer for further array operations

- **reverse_call()**:
  - Directly reverses the arguments object in place
  - Returns the modified arguments object (array-like)
  - More memory efficient but returns array-like object

### Test Cases:
```javascript
reverse_slice(4, 6, 2);     // Returns: [2, 6, 4]
reverse_slice(4, 2);        // Returns: [2, 4]

reverse_call(1, 2, 5);      // Returns: [5, 2, 1] (as arguments object)
reverse_call(10, 5);        // Returns: [5, 10] (as arguments object)

reverse_slice();            // Throws: "Provide at least one argument"
```

---

## Task B2: Dynamic Getter/Setter Generator (`B2_GetSetGen.js`)

**Objective:** Create a utility that automatically generates getter and setter methods for all properties of an object.

### What it does:
- **getSetGen()**: Dynamically creates `get` and `set` methods for each property
  - Analyzes object properties at runtime
  - Skips function properties (only processes data properties)
  - Creates `getPropertyName()` and `setPropertyName(value)` methods
  - Uses capitalized property names for method naming

### Key Concepts:
- **Object.defineProperty()**: Defining new properties on objects
- **Property descriptors**: Configuring property characteristics
- **call() method**: Invoking method in different object context
- **Dynamic method generation**: Creating functions programmatically
- **Closure**: Generated methods maintain access to property names
- **String manipulation**: Capitalizing property names using `charAt()` and `slice()`
- **Object.keys()**: Iterating over object properties
- **typeof operator**: Filtering out function properties

### How It Works:
1. `getSetGen()` is called with the target object as `this` context
2. Captures initial property count to avoid processing generated methods
3. Iterates through each non-function property
4. Creates getter method: `get[PropertyName]()` that returns the property value
5. Creates setter method: `set[PropertyName](value)` that updates the property value
6. Uses `capitalize()` helper to format method names

### Usage Example:
```javascript
const dept = { id: "SD-10", location: "SV", addr: "123 st." };
util.getSetGen.call(dept);

// Auto-generated methods:
dept.setId("MN-25");          // Sets id to "MN-25"
dept.setLocation("EG");       // Sets location to "EG"
dept.setAddr("Cairo");        // Sets addr to "Cairo"

console.log(dept.getId());    // Returns: "MN-25"
console.log(dept.getLocation()); // Returns: "EG"
console.log(dept.getAddr());  // Returns: "Cairo"
```

### Test Cases:
```javascript
// Object 1: Department
const dept = { id: "SD-10", location: "SV", addr: "123 st." };
util.getSetGen.call(dept);
dept.setId("MN-25");
dept.getId();  // Returns: "MN-25"

// Object 2: Child
const child = { name: "ali", age: 10 };
util.getSetGen.call(child);
child.setName("Ammar");
child.setAge("22");
child.getName();  // Returns: "Ammar"
child.getAge();   // Returns: "22"
```

---

## Learning Outcomes

Through these projects, I have learned:
- ✅ Custom data structure implementation (ordered linked list)
- ✅ Maintaining data integrity through validation
- ✅ Comprehensive error handling with appropriate error types
- ✅ Working with the `arguments` object in functions
- ✅ Using `call()` method to borrow array methods
- ✅ Converting array-like objects to true arrays
- ✅ Dynamic property and method creation
- ✅ Using `Object.defineProperty()` for property definition
- ✅ Closures and their practical applications
- ✅ Object-oriented programming patterns in JavaScript
- ✅ Type checking with `typeof` operator
- ✅ String manipulation and formatting

---

## How to Run

### Testing All Tasks
Open [index.html](index.html) in a browser and check the console (F12):
- By default, `A1_LinkedListObj.js` is loaded
- Uncomment the desired script tag in index.html to test other tasks

### Task A1: Ordered Linked List
Script is loaded by default. Console will show:
- Step 1: Building the list with insertions
- Step 2: Testing removal operations with return values
- Step 3: Final list display
- Uncomment error test cases at the bottom to see validation in action

### Task B1: Arguments Reversal
1. Comment out `A1_LinkedListObj.js` in index.html
2. Uncomment `<script src="B1_ReverseArgs.js"></script>`
3. Refresh browser and check console for:
   - Results from `reverse_slice()` function
   - Results from `reverse_call()` function

### Task B2: Dynamic Getters/Setters
1. Comment out `A1_LinkedListObj.js` in index.html
2. Uncomment `<script src="B2_GetSetGen.js"></script>`
3. Refresh browser and check console for:
   - Department object with generated getters/setters
   - Child object with generated getters/setters
   - Final state of both objects showing all properties


## Notes

- **Data Structure Design**: The linked list uses an array internally but exposes a controlled interface that maintains ordering
- **Arguments Object**: Not a true array, but array-like (has length and indexed access)
- **call() vs apply()**: Both demonstrated - `call()` used for borrowing array methods
- **Object.defineProperty()**: Provides fine-grained control over property behavior and characteristics
- **Property Descriptors**: Can control writability, enumerability, and configurability
- **Defensive Programming**: All functions validate inputs before processing
- **Error Types**: Using specific error types (Error, TypeError, RangeError) provides clearer debugging information
