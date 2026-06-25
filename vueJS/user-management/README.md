# Product Catalog Dashboard

An elegant, minimalist inventory management web application built with Vue 3.

---

## Lab Requirements Implementation

### 1. Website with Minimum 4 Pages + 404 Page
Defined in [src/router.js](./src/router.js):
- **Home/Dashboard**: [HomePage.vue](./src/pages/HomePage.vue)
- **Product Directory**: [ProductList.vue](./src/pages/ProductList.vue)
- **Product Details**: [ProductDetails.vue](./src/pages/ProductDetails.vue)
- **Add / Edit Form**: [ProductForm.vue](./src/pages/ProductForm.vue)
- **404 Not Found Page**: [NotFound.vue](./src/pages/NotFound.vue)

### 2. Hide Navbar Without Using Route Meta
Configured in [src/router.js](./src/router.js):
- Regular pages are nested under [MainLayout.vue](./src/layouts/MainLayout.vue) which displays the `<NavBar />`.
- The **404 page** is nested under [EmptyLayout.vue](./src/layouts/EmptyLayout.vue) which has no navbar, hiding it cleanly without meta tags.

### 3. Full CRUD Operations
Connects to local JSON database (`http://localhost:3000/products`):
- **Create**: Add form in [ProductForm.vue](./src/pages/ProductForm.vue) (`axios.post`).
- **Read**: Main list in [ProductList.vue](./src/pages/ProductList.vue) and item specs in [ProductDetails.vue](./src/pages/ProductDetails.vue) (`axios.get`).
- **Update**: Edit form in [ProductForm.vue](./src/pages/ProductForm.vue) (`axios.put`).
- **Delete**: Action button in [ProductList.vue](./src/pages/ProductList.vue) and [ProductDetails.vue](./src/pages/ProductDetails.vue) (`axios.delete`).

### 4. Mixin Code Reuse (Bonus)
Implemented in [src/mixins/productMixin.js](./src/mixins/productMixin.js):
- `baseUrl`: Defined in mixin, used in [HomePage.vue](./src/pages/HomePage.vue), [ProductList.vue](./src/pages/ProductList.vue), [ProductDetails.vue](./src/pages/ProductDetails.vue), and [ProductForm.vue](./src/pages/ProductForm.vue).
- `deleteProduct(id)`: Defined in mixin, used in [ProductList.vue](./src/pages/ProductList.vue) and [ProductDetails.vue](./src/pages/ProductDetails.vue).
- `updateProduct(id, updatedProduct)`: Defined in mixin, used in [ProductForm.vue](./src/pages/ProductForm.vue).
- `getProductById(id)`: Defined in mixin, used in [ProductDetails.vue](./src/pages/ProductDetails.vue) and [ProductForm.vue](./src/pages/ProductForm.vue).
- `formatPrice(price)`: Defined in mixin, used in [ProductList.vue](./src/pages/ProductList.vue) and [ProductDetails.vue](./src/pages/ProductDetails.vue).
- `getDiscountedPrice(price, discountPercentage)`: Defined in mixin, used in [ProductList.vue](./src/pages/ProductList.vue).

### 5. Dynamic Component Refactoring (Bonus)
Implemented in [src/layouts/MainLayout.vue](./src/layouts/MainLayout.vue):
- Uses Vue's dynamic component tag `<router-view v-slot="{ Component, route }"> <transition name="fade" mode="out-in"> <component :is="Component" :key="route.fullPath" /> </transition> </router-view>` to dynamically render components based on the selected route.

---

## Project Setup
```bash
# Install dependencies
yarn install

# Run database server (port 3000)
yarn server

# Run development server (port 8080)
yarn serve

# Build for production
yarn build

# Lint files
yarn lint
```
