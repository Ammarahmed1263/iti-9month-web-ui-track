# Vuex and Composition API Migration

This document outlines the recent refactoring of the product inventory catalog to replace the old Vue Mixins architecture with a centralized Vuex store, using both Composition API (`<script setup>`) and Options API.

---

## Central State & Utilities

### 1. Vuex Store Setup
* **File**: [src/store/index.js](./src/store/index.js)
* **Description**: Centralized state management for the entire application.
  * **State**: Holds reactive `products` array and `loading` boolean status.
  * **Getters**: Exposes computed states like `productsCount`, `categoriesCount`, and `stockCount`.
  * **Mutations**: Synchronously handles setting products, toggling loading, adding, updating, and deleting products.
  * **Actions**: Asynchronously dispatches operations including `fetchProducts`, `getProductById`, `addProduct`, `updateProduct`, and `deleteProduct` (making API requests to the JSON database).

### 2. Main Entry Point Integration
* **File**: [src/main.js](./src/main.js)
* **Description**: Initializes and registers the Vuex store instance with the Vue app (`.use(store)`).

### 3. Removed Mixin
* **File**: [src/mixins/productMixin.js](./src/mixins/productMixin.js) (Deleted)
* **Description**: Removed the old product mixin to eliminate unstructured, implicit state and method sharing across components.

### 4. Utility Helper Functions
* **File**: [src/utils/helpers.js](./src/utils/helpers.js)
* **Description**: Pure helper functions extracted from the old mixin.
  * `formatPrice(price)`: Formats numeric prices as USD currency.
  * `getDiscountedPrice(price, discountPercentage)`: Calculates final discounted product prices.

---

## Refactored Components

### 5. Product Directory Page (Composition API)
* **File**: [src/pages/ProductList.vue](./src/pages/ProductList.vue)
* **Description**: Refactored to Composition API using `<script setup>`.
  * Uses Vuex store to retrieve and display the list of products and the loading status.
  * Shows the total product count ` - ({{ productsCount }})` in the header conditionally (only if `productsCount > 0` and `loading` is false).

### 6. Product Form Page (Composition API)
* **File**: [src/pages/ProductForm.vue](./src/pages/ProductForm.vue)
* **Description**: Refactored to Composition API using `<script setup>`.
  * Integrates Vuex store to create new products or fetch and edit existing products.

### 7. Home Dashboard Page (Options API)
* **File**: [src/pages/HomePage.vue](./src/pages/HomePage.vue)
* **Description**: Retains Options API structure for mapping state, getters, and actions.
  * Maps Vuex state (`loading`, `products`) and getters (`productsCount`, `categoriesCount`, `stockCount`) using Vuex helpers.

### 8. Product Details Page (Options API)
* **File**: [src/pages/ProductDetails.vue](./src/pages/ProductDetails.vue)
* **Description**: Retains Options API structure to display specific product properties.
  * Maps Vuex actions (`getProductById`, `deleteProduct`) and imports helper function `formatPrice`.
