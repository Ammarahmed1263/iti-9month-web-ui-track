# Node.js Practice — Command-Line Todo Manager

This folder contains a command-line todo application that uses the Node.js File System (fs) module to persist data to a JSON file. It demonstrates file I/O, JSON parsing, and basic data management operations.

---

## Features

### File Operations with fs Module
- **Synchronous file reading** with error handling for missing files
- **Synchronous file writing** with automatic file creation
- **JSON serialization** for data persistence
- **Error handling** for file not found (ENOENT) and JSON parsing errors

### Product Management Functions
- **readProducts()** - Loads products from JSON file, returns empty array on error
- **saveProducts()** - Persists products to JSON file with formatted output
- **getIncrementalId()** - Generates unique IDs based on highest existing ID
- **addProduct()** - Creates new product with auto-incremented ID

### Data Structure
Each product contains:
- `id` - Unique numeric identifier
- `name` - Product name (string)
- `price` - Product price (float/numeric)

---

## Files

- index.js - Main application file with all functions
- products.json - JSON file storing product data
- README.md

---

## How to Run

1. **Install Node.js** (if not already installed)
2. **Navigate to the directory**:
   ```bash
   cd node.js/todo-cmd
   ```
3. **Run the application**:
   ```bash
   node index.js
   ```
4. **Call functions from command line** or modify index.js to execute specific operations

---

## Example Usage

```javascript
// Add a product
addProduct("Orange", 3.5);

// List all products
const products = readProducts();
console.log(products);

// Expected output:
// [
//   { id: 1, name: "Orange", price: 3.5 },
//   { id: 2, name: "Banana", price: 8 },
//   ...
// ]
```

---

## Key Concepts

- **Synchronous File Operations**: Uses `fs.readFileSync()` and `fs.writeFileSync()`
- **JSON Parsing**: Converts between JSON strings and JavaScript objects
- **Error Handling**: Catches file-not-found and parsing errors gracefully
- **Data Persistence**: Maintains state between application runs via JSON file
- **Auto-increment Logic**: Generates sequential IDs for new records
- **try/catch Blocks**: Manages error scenarios without crashing

---

## Notes

- Uses synchronous file operations (blocks thread); consider `async` versions for production use
- `products.json` is created automatically if it doesn't exist
- Formatting with `JSON.stringify(..., null, 2)` ensures readable multi-line output
- File permissions must allow read/write access to the directory
- Each product's price is parsed as float for numerical accuracy
