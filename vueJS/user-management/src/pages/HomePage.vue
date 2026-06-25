<template>
  <div class="homepage-container">
    <div class="hero-section">
      <h1 class="hero-title">Core Catalog</h1>
      <p class="hero-subtitle">
        A high-fidelity inventory directory and command console. Experience streamlined catalog curation, real-time database analytics, and robust input validation through a curated, raw aesthetic.
      </p>
    </div>

    <div v-if="loading" class="loading-state">
      Loading dashboard analytics...
    </div>
    <div v-else class="stats-grid">
      <div class="stat-card">
        <span class="stat-num">{{ productsCount }}</span>
        <span class="stat-label">Total Products</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">{{ categoriesCount }}</span>
        <span class="stat-label">Product Categories</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">{{ stockCount }}</span>
        <span class="stat-label">Stock Units</span>
      </div>
    </div>

    <div class="actions-grid">
      <router-link to="/products" class="action-card">
        <h2>
          <span>Browse Directory</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="action-arrow"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </h2>
        <p>
          Explore all active catalog items, search products, inspect detail
          specs, run edits, or remove inventory records.
        </p>
      </router-link>
      <router-link to="/products/add" class="action-card">
        <h2>
          <span>Add New Product</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="action-arrow"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </h2>
        <p>
          Register new items into the database with specific categories, brands,
          prices, descriptions, and stock quantities.
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapState(["loading", "products"]),
    ...mapGetters(["productsCount", "categoriesCount", "stockCount"])
  },
  methods: {
    ...mapActions(["fetchProducts"])
  },
  async mounted() {
    if (this.products.length === 0) {
      await this.fetchProducts();
    }
  },
};
</script>

<style scoped>
.homepage-container {
  text-align: left;
}

.hero-section {
  margin-bottom: 50px;
}

.hero-title {
  font-size: 48px;
  margin: 0 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-size: 18px;
  line-height: 1.6;
  max-width: 650px;
  opacity: 0.8;
}

.loading-state {
  padding: 40px;
  border: 1px solid currentColor;
  text-align: center;
  font-size: 16px;
  margin-bottom: 50px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.stat-card {
  border: 1px solid currentColor;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stat-num {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.7;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }
  .actions-grid {
    grid-template-columns: 1fr;
  }
}

.action-card {
  border: 1px solid currentColor;
  padding: 35px;
  text-decoration: none;
  color: var(--text-color);
  background-color: var(--background-color);
  transition: background-color 0.2s, color 0.2s;
}

.action-card:hover {
  background-color: var(--text-color);
  color: var(--background-color);
}

.action-card h2 {
  margin: 0 0 15px 0;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-arrow {
  transition: transform 0.2s ease;
}

.action-card:hover .action-arrow {
  transform: translateX(6px);
}

.action-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.8;
}
</style>
