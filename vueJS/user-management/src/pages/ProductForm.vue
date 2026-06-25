<template>
  <div class="product-form-container">
    <h1 class="form-title">
      {{ isEditing ? "Edit Product" : "Add New Product" }}
    </h1>

    <form @submit.prevent="handleSubmit">
      <label for="title">Product Name</label>
      <input
        id="title"
        type="text"
        v-model.trim="product.title"
        placeholder="e.g. Essence Mascara"
        required
      />

      <label for="brand">Brand</label>
      <input
        id="brand"
        type="text"
        v-model.trim="product.brand"
        placeholder="e.g. Essence"
      />

      <label for="category">Category</label>
      <input
        id="category"
        type="text"
        v-model.trim="product.category"
        placeholder="e.g. Beauty"
      />

      <label for="thumbnail">Image URL</label>
      <input
        id="thumbnail"
        type="text"
        v-model.trim="product.thumbnail"
        placeholder="e.g. https://example.com/image.png"
      />

      <label for="description">Description</label>
      <textarea
        id="description"
        v-model.trim="product.description"
        placeholder="Enter product description..."
        required
      ></textarea>

      <div class="form-row">
        <div class="form-group">
          <label for="price">Price ($)</label>
          <input
            id="price"
            type="number"
            step="0.01"
            min="0"
            v-model.number="product.price"
            required
          />
        </div>

        <div class="form-group">
          <label for="discountPercentage">Discount (%)</label>
          <input
            id="discountPercentage"
            type="number"
            step="0.01"
            min="0"
            max="100"
            v-model.number="product.discountPercentage"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="rating">Rating (0 - 5)</label>
          <input
            id="rating"
            type="number"
            step="any"
            min="0"
            max="5"
            v-model.number="product.rating"
          />
        </div>

        <div class="form-group">
          <label for="stock">Stock Quantity</label>
          <input
            id="stock"
            type="number"
            min="0"
            v-model.number="product.stock"
            required
          />
        </div>
      </div>

      <button type="submit" class="submit-button">
        {{ isEditing ? "Save Changes" : "Create Product" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

const product = ref({
  title: "",
  brand: "",
  category: "",
  thumbnail: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
});

const isEditing = ref(false);

const handleSubmit = async () => {
  if (!product.value.brand) product.value.brand = "";
  if (!product.value.category) product.value.category = "";
  if (!product.value.rating) product.value.rating = 0;
  if (!product.value.discountPercentage) product.value.discountPercentage = 0;

  const thumbnailVal =
    product.value.thumbnail || "https://cdn.dummyjson.com/public/qr-code.png";
  const finalProduct = {
    ...product.value,
    thumbnail: thumbnailVal,
    images: [thumbnailVal],
  };

  if (isEditing.value) {
    await store.dispatch("updateProduct", {
      id: product.value.id,
      updatedProduct: finalProduct,
    });
  } else {
    await store.dispatch("addProduct", finalProduct);
  }

  router.push("/products");
};

onMounted(async () => {
  const productId = route.params.id;

  if (productId) {
    isEditing.value = true;

    const existingProduct = await store.dispatch("getProductById", productId);

    if (existingProduct) {
      product.value = {
        thumbnail: "",
        ...existingProduct,
      };
    }
  }
});
</script>

<style scoped>
.product-form-container {
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 16px;
  padding-top: 0;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 0;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid currentColor;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 16px;
  transition: outline 0.1s ease;
}

input:focus,
textarea:focus {
  outline: 2px solid currentColor;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.submit-button {
  margin-top: 30px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid currentColor;
  background-color: var(--text-color);
  color: var(--background-color);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.submit-button:hover {
  background-color: var(--background-color);
  color: var(--text-color);
}

@media (max-width: 600px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
}
</style>
