<template>
  <div>
    <h1>Product Directory<span v-if="productsCount > 0 && !loading"> - ({{ productsCount }})</span></h1>

    <div v-if="loading" class="loading-state">
      Loading product directory...
    </div>

    <div v-else-if="!productsCount && !loading" class="empty-state">
      No products found
    </div>

    <div v-else-if="productsCount" class="products-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <span v-if="product.category" class="category-pill">{{
          product.category
        }}</span>

        <router-link :to="`/products/${product.id}`" class="product-img-link">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="product-img"
          />
        </router-link>

        <div v-if="product.brand" class="product-brand">
          {{ product.brand }}
        </div>

        <router-link :to="`/products/${product.id}`" class="product-title">
          <h3>{{ product.title }}</h3>
        </router-link>

        <div class="product-meta">
          <div class="price-container">
            <template v-if="product.discountPercentage && product.discountPercentage > 0">
              <span class="discounted-price">{{ formatPrice(getDiscountedPrice(product.price, product.discountPercentage)) }}</span>
              <span class="original-price">{{ formatPrice(product.price) }}</span>
            </template>
            <template v-else>
              <span class="product-price">{{ formatPrice(product.price) }}</span>
            </template>
          </div>
          <span v-if="product.rating" class="product-rating">
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
            {{ product.rating }}
          </span>
        </div>

        <div class="product-footer">
          <button @click="editProduct(product.id)">Edit</button>
          <button @click="handleDelete(product.id)">Delete</button>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">No products found</div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { formatPrice, getDiscountedPrice } from '@/utils/helpers';

const store = useStore();
const router = useRouter();

const products = computed(() => store.state.products);
const loading = computed(() => store.state.loading);
const productsCount = computed(() => store.getters.productsCount);

const getProducts = async () => {
  await store.dispatch('fetchProducts');
};

const handleDelete = async (id) => {
  try {
    if (
      window.confirm(
        "Are you sure you want to permanently delete this product? This action cannot be undone."
      )
    ) {
      await store.dispatch('deleteProduct', id);
    }
  } catch (error) {
    console.error("Failed to delete product:", error);
    alert("Could not delete the product. Please try again.");
  }
};

const editProduct = (id) => {
  router.push(`/products/edit/${id}`);
};

onMounted(() => {
  getProducts();
});
</script>

<style scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 20px;
}

.product-item {
  position: relative;
  border: 1px solid currentColor;
  padding: 1.5rem;
  min-width: 0;
  overflow: hidden;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.category-pill {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--text-color);
  color: var(--background-color);
  padding: 4px 8px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 10000;
}

.product-img-link {
  display: block;
  margin-bottom: 15px;
  overflow: hidden;
}

.product-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.product-img:hover {
  transform: scale(1.05);
}

.product-brand {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  opacity: 0.6;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.product-title {
  text-decoration: none;
  color: var(--text-color);
}

.product-title h3 {
  margin: 0 0 15px 0;
  font-size: 18px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-bottom: 15px;
}

.price-container {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.product-price,
.discounted-price {
  font-size: 18px;
  font-weight: bold;
}

.original-price {
  font-size: 13px;
  text-decoration: line-through;
  opacity: 0.65;
}

.product-rating {
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.star-icon {
  width: 14px;
  height: 14px;
  margin-right: 4px;
}

.product-footer {
  display: flex;
  gap: 10px;
}

.product-footer button {
  flex: 1;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
}

.loading-state,
.empty-state {
  padding: 40px;
  border: 1px solid currentColor;
  text-align: center;
  font-size: 18px;
}
</style>
