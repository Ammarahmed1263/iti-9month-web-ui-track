# Node.js Practice — Mongoose & Express with Middleware

This folder contains a full-stack REST API built with Express.js and MongoDB (using Mongoose), demonstrating database schema modeling, middleware patterns, error handling, and relational data management.

---

## Features

### Database & Schema Management
- **Mongoose ODM** for MongoDB integration
- **Schema validation** with required fields and constraints
- **Data types**: String, Double (numeric), ObjectId (references)
- **Timestamps**: Automatic created/modified tracking
- **References**: Products reference Categories through ObjectId

### Middleware Architecture
- **Custom error middleware** for centralized error handling
- **Error type detection**: ValidationError, CastError, Generic errors
- **User-friendly error responses** with detailed messages
- **Express Router** for modular route organization

### REST API Endpoints

#### Products Routes (/products)
- `GET /products` - Retrieve all products
- `GET /products/:id` - Retrieve specific product
- `POST /products` - Create new product
- `PUT /products/:id` - Replace entire product
- `PATCH /products/:id` - Partial product update
- `DELETE /products/:id` - Delete product

#### Categories Routes (/categories)
- `GET /categories` - Retrieve all categories
- `GET /categories/:id` - Retrieve specific category
- `POST /categories` - Create new category
- `PUT /categories/:id` - Replace entire category
- `PATCH /categories/:id` - Partial category update
- `DELETE /categories/:id` - Delete category

---

## Project Structure

```
mongoose-middleware/
├── server.js                    # Main server entry point
├── package.json                 # Dependencies & scripts
├── models/
│   ├── product.model.js        # Product schema definition
│   └── category.model.js       # Category schema definition
├── routes/
│   ├── products.route.js       # Product endpoints
│   └── categories.route.js     # Category endpoints
├── controllers/
│   ├── product.controller.js   # Product business logic
│   └── category.controller.js  # Category business logic
├── middlewares/
│   └── error.middleware.js     # Centralized error handling
└── README.md
```

---

## Data Models

### Product Schema
```javascript
{
  name: String         // Required, 2+ chars, auto-trimmed
  price: Double        // Required, minimum 1
  quantity: Number     // Required, non-negative
  category: ObjectId   // Reference to Category, required
  createdAt: Date      // Auto-timestamp
  updatedAt: Date      // Auto-timestamp
}
```

### Category Schema
Similar structure with category-specific fields.

---

## Error Handling

### ValidationError
- **Trigger**: Missing required fields or constraint violations
- **HTTP Status**: 400 Bad Request
- **Response**: Lists all validation error messages

**Example**:
```json
{
  "success": false,
  "message": "Product name is required, Product price is required"
}
```

### CastError
- **Trigger**: Invalid ObjectId format (e.g., malformed MongoDB ID)
- **HTTP Status**: 400 Bad Request
- **Response**: "Invalid ID format"

### Generic Server Error
- **Trigger**: Unexpected errors
- **HTTP Status**: 500 Internal Server Error
- **Response**: Error message or default "Server Error"

---

## Installation & Setup

1. **Install Node.js** (if not already installed)
2. **Start MongoDB** locally or ensure connection string is valid:
   ```bash
   mongod
   ```
3. **Navigate to the directory**:
   ```bash
   cd node.js/mongoose-middleware
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```

---

## How to Run

### Development Mode (with auto-reload)
```bash
npm start
```
Uses `nodemon` to automatically restart server on file changes.

### Server Output
```
connected to MongoDB
running on http://localhost:5000
```

---

## Example Requests

### Create a Category
```bash
curl -X POST http://localhost:5000/categories \
  -H "Content-Type: application/json" \
  -d '{"name": "Electronics"}'
```

### Create a Product (requires valid category ID)
```bash
curl -X POST http://localhost:5000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "price": 999.99,
    "quantity": 10,
    "category": "507f1f77bcf86cd799439011"
  }'
```

### Get all products
```bash
curl http://localhost:5000/products
```

### Update product price
```bash
curl -X PATCH http://localhost:5000/products/507f1f77bcf86cd799439012 \
  -H "Content-Type: application/json" \
  -d '{"price": 899.99}'
```

### Delete product
```bash
curl -X DELETE http://localhost:5000/products/507f1f77bcf86cd799439012
```

---

## Key Concepts & Technologies

- **MongoDB**: NoSQL database for flexible document storage
- **Mongoose**: ODM for MongoDB with schema validation
- **Express.js**: Web framework for routing and middleware
- **Express.Router**: Modular route organization
- **Middleware Pattern**: Error handling, request processing
- **Schema Validation**: Client-side and database-level constraints
- **ObjectId References**: Relational data linking in NoSQL
- **Timestamps**: Audit trail for created/updated dates
- **Error Middleware**: Centralized error handling & formatting

---

## Dependencies

- **express**: ^5.2.1 - Web framework
- **mongoose**: ^9.3.3 - MongoDB ODM
- **nodemon**: ^3.1.14 (dev) - Server auto-reload

---

## Connection Details

- **Database**: MongoDB
- **URL**: `mongodb://localhost:27017/products_db`
- **Server Port**: 5000
- **Access**: `http://localhost:5000`

---

## Notes

- MongoDB must be running before starting the server
- Connection happens automatically on server startup
- All error responses include `success: false` flag
- Validation errors detail the specific constraint violations
- Updated fields automatically update the `updatedAt` timestamp
- Controllers implement the actual CRUD business logic
- Middleware chains allow composable request/response processing
- Mongoose auto-generates MongoDB _id field if not provided
