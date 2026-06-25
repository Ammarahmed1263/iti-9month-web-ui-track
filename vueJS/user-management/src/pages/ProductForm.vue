<template>
  <div class="product-form-container">
    <h1 class="form-title">{{ isEditing ? "Edit Product" : "Add New Product" }}</h1>

    <form @submit.prevent="handleSubmit">
      <label for="title">Product Name</label>
      <input id="title" type="text" v-model.trim="product.title" placeholder="e.g. Essence Mascara" required />

      <label for="brand">Brand</label>
      <input id="brand" type="text" v-model.trim="product.brand" placeholder="e.g. Essence" />

      <label for="category">Category</label>
      <input id="category" type="text" v-model.trim="product.category" placeholder="e.g. Beauty" />

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
          <input id="stock" type="number" min="0" v-model.number="product.stock" required />
        </div>
      </div>

      <button type="submit" class="submit-button">
        {{ isEditing ? "Save Changes" : "Create Product" }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { productMixin } from "@/mixins/productMixin";

export default {
  name: "ProductForm",
  mixins: [productMixin],
  data() {
    return {
      product: {
        title: "",
        brand: "",
        category: "",
        thumbnail: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
      },
      isEditing: false,
    };
  },
  methods: {
    async handleSubmit() {
      // Ensure defaults if fields are empty
      if (!this.product.brand) this.product.brand = "";
      if (!this.product.category) this.product.category = "";
      if (!this.product.rating) this.product.rating = 0;
      if (!this.product.discountPercentage) this.product.discountPercentage = 0;

      const thumbnailVal = this.product.thumbnail || "https://cdn.dummyjson.com/public/qr-code.png";
      const finalProduct = {
        ...this.product,
        thumbnail: thumbnailVal,
        images: [thumbnailVal],
      };

      if (this.isEditing) {
        await this.updateProduct(this.product.id, finalProduct);
      } else {
        await axios.post(this.baseUrl, finalProduct);
      }

      this.$router.push("/products");
    },
  },
  async mounted() {
    const productId = this.$route.params.id;
    console.log(productId);

    if (productId) {
      this.isEditing = true;

      const existingProduct = await this.getProductById(productId);

      if (existingProduct) {
        this.product = {
          thumbnail: "",
          ...existingProduct,
        };
      }
    }
  },
};
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
