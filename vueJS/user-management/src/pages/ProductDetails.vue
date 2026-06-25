<template>
  <div class="product-details-container">
    <button @click="$router.push('/products')" class="back-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="back-icon"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      <span>Back to Directory</span>
    </button>

    <div v-if="loading" class="loading-state">Loading product details...</div>
    <div v-else-if="error" class="error-state">{{ error }}</div>
    <div v-else-if="product" class="product-details-content">
      <div class="product-media">
        <img
          :src="
            product.images && product.images.length
              ? product.images[0]
              : product.thumbnail
          "
          :alt="product.title"
        />
      </div>

      <div class="product-info">
        <span class="product-category">{{ product.category }}</span>
        <h1 class="product-title">{{ product.title }}</h1>
        <p v-if="product.brand" class="product-brand">Brand: {{ product.brand }}</p>

        <div class="rating-badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="star-icon"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          <span>{{ product.rating || "N/A" }}</span>
        </div>

        <div class="price-section">
          <span class="current-price">{{ formatPrice(product.price) }}</span>
          <span v-if="product.discountPercentage" class="discount-badge">
            -{{ product.discountPercentage }}%
          </span>
        </div>

        <p class="product-description">{{ product.description }}</p>

        <div class="details-grid">
          <div class="detail-item">
            <strong>Availability:</strong>
            <span
              :class="[
                'stock-status',
                product.stock > 10 ? 'in-stock' : 'low-stock',
              ]"
            >
              {{ product.availabilityStatus || 'In Stock' }} ({{ product.stock }} remaining)
            </span>
          </div>
          <div v-if="product.sku" class="detail-item">
            <strong>SKU:</strong> {{ product.sku }}
          </div>
          <div v-if="product.warrantyInformation" class="detail-item">
            <strong>Warranty:</strong> {{ product.warrantyInformation }}
          </div>
          <div v-if="product.returnPolicy" class="detail-item">
            <strong>Return Policy:</strong> {{ product.returnPolicy }}
          </div>
        </div>

        <div class="action-buttons">
          <button @click="editProduct" class="edit-btn">Edit Product</button>
          <button @click="handleDelete" class="delete-btn">Delete Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from "@/mixins/productMixin";

export default {
  name: "ProductDetails",
  mixins: [productMixin],
  data() {
    return {
      product: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    editProduct() {
      this.$router.push(`/products/edit/${this.product.id}`);
    },
    async handleDelete() {
      try {
        if (
          window.confirm(
            "Are you sure you want to permanently delete this product? This action cannot be undone.",
          )
        ) {
          await this.deleteProduct(this.product.id);
          this.$router.push("/products");
        }
      } catch (error) {
        console.error("Failed to delete product:", error);
        alert("Could not delete the product. Please try again.");
      }
    },
  },
  async mounted() {
    const id = this.$route.params.id;

    try {
      this.product = await this.getProductById(id);
      if (!this.product) {
        this.error = "Failed to load product details.";
      }
    } catch (err) {
      console.error(err);
      this.error = "Failed to load product details.";
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.product-details-container {
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 16px;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 20px 0;
  padding: 8px 16px;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid currentColor;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s, color 0.2s;
}

.back-button:hover {
  background-color: var(--text-color);
  color: var(--background-color);
}

.product-details-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  border: 1px solid currentColor;
  padding: 40px;
}

@media (max-width: 768px) {
  .product-details-content {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 20px;
  }
}

.product-media img {
  width: 100%;
  height: auto;
  border: 1px solid currentColor;
  object-fit: cover;
}

.product-category {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.7;
}

.product-title {
  margin: 10px 0;
  font-size: 28px;
}

.product-brand {
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 20px;
}

.rating-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid currentColor;
  padding: 4px 10px;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 20px;
}

.star-icon {
  width: 14px;
  height: 14px;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.current-price {
  font-size: 24px;
  font-weight: bold;
}

.discount-badge {
  border: 1px solid currentColor;
  padding: 2px 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: var(--text-color);
  color: var(--background-color);
}

.product-description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  border-top: 1px solid currentColor;
  padding-top: 20px;
}

.detail-item {
  font-size: 14px;
}

.stock-status {
  font-weight: bold;
}

.in-stock {
  text-decoration: underline;
}

.low-stock {
  text-decoration: line-through;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 100px 0;
  font-size: 18px;
  border: 1px solid currentColor;
}

.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  border-top: 1px solid currentColor;
  padding-top: 25px;
}

.action-buttons button {
  flex: 1;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  border: 1px solid currentColor;
}

.edit-btn {
  background-color: var(--text-color);
  color: var(--background-color);
}

.edit-btn:hover {
  background-color: var(--background-color);
  color: var(--text-color);
}

.delete-btn {
  background-color: transparent;
  color: var(--text-color);
}

.delete-btn:hover {
  background-color: var(--text-color);
  color: var(--background-color);
}
</style>