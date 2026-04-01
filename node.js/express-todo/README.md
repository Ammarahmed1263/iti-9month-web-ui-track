# Node.js Practice — Express Todo REST API

This folder contains a RESTful API built with Express.js for managing products. It demonstrates HTTP methods (GET, POST, PUT, PATCH, DELETE), routing, and JSON middleware for handling product data.

---

## Features

### Express Server Setup
- **Express.js framework** for HTTP server
- **JSON middleware** for automatic request/response parsing
- **Port 5000** for development server
- **Module-based routing** with controller separation

### REST API Endpoints

#### GET /products
**Description**: Retrieve all products

**Response**: Array of all products

---

#### GET /products/:id
**Description**: Retrieve a specific product by ID

**Parameters**: 
- `id` - Product identifier (UUID format)

**Response**: Single product object

---

#### POST /products
**Description**: Create a new product

**Request Body**:
```json
{
  "name": "Product Name",
  "price": 19.99
}
```

**Response**: Created product object with generated UUID

---

#### PUT /products/:id
**Description**: Replace entire product (full update)

**Parameters**: 
- `id` - Product identifier

**Request Body**: Complete product object (all fields required)

**Response**: Updated product object

---

#### PATCH /products/:id
**Description**: Partially update product (specific fields only)

**Parameters**: 
- `id` - Product identifier

**Request Body**: Only fields to update

**Response**: Updated product object with partial changes

---

#### DELETE /products/:id
**Description**: Remove product by ID

**Parameters**: 
- `id` - Product identifier

**Response**: Confirmation message or updated product list

---

## Files

- app.js - Main Express application with route definitions
- package.json - Project dependencies and scripts
- controllers/
  - product.controller.js - Handler functions for each route
- products.json - Data storage
- README.md

---

## Installation & Setup

1. **Install Node.js** (if not already installed)
2. **Navigate to the directory**:
   ```bash
   cd node.js/express-todo
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

---

## How to Run

### Development Mode (with auto-reload)
```bash
npm run dev
```
Uses `nodemon` to automatically restart server on file changes.

### Production Mode
```bash
npm start
```
Runs the server once without watching for changes.

---

## Example Requests

### Get all products
```bash
curl http://localhost:5000/products
```

### Get specific product
```bash
curl http://localhost:5000/products/550e8400-e29b-41d4-a716-446655440000
```

### Create product
```bash
curl -X POST http://localhost:5000/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Laptop", "price": 999.99}'
```

### Update product (replace all)
```bash
curl -X PUT http://localhost:5000/products/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -d '{"name": "Gaming Laptop", "price": 1299.99}'
```

### Partial update
```bash
curl -X PATCH http://localhost:5000/products/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -d '{"price": 899.99}'
```

### Delete product
```bash
curl -X DELETE http://localhost:5000/products/550e8400-e29b-41d4-a716-446655440000
```

---

## Key Concepts & Technologies

- **Express.js**: Web framework for Node.js
- **Middleware**: `express.json()` for automatic JSON parsing
- **UUID**: Unique identifier generation for products (v13.0.0)
- **Controllers**: Separated business logic from routing
- **REST Principles**: Proper use of HTTP verbs and status codes
- **npm Scripts**: Automation for development and production environments
- **Nodemon**: Auto-reload server during development

---

## Dependencies

- **express**: ^5.2.1 - Web framework
- **uuid**: ^13.0.0 - UUID generation for product IDs
- **nodemon**: ^3.1.14 (dev) - Server auto-reload during development

---

## Notes

- Server runs on `http://localhost:5000`
- All requests/responses use JSON format
- Products are stored in `products.json`
- UUIDs provide globally unique identifiers for products
- Controllers handle the actual business logic (CRUD operations)
- Error handling should be implemented in controller functions
