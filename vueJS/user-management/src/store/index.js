import { createStore } from "vuex";
import axios from "axios";

const baseUrl = "http://localhost:3000/products";

export default createStore({
  state: {
    products: [],
    loading: false,
    error: null,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    REMOVE_PRODUCT(state, id) {
      state.products = state.products.filter((p) => p.id !== id);
    },
    UPDATE_PRODUCT(state, updatedProduct) {
      const index = state.products.findIndex((p) => p.id === updatedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
    ADD_PRODUCT(state, newProduct) {
      state.products.push(newProduct);
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const response = await axios.get(baseUrl);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        commit("SET_ERROR", "Failed to load products");
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async getProductById({ commit }, id) {
      try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
      } catch (error) {
        console.error("Failed to fetch product details:", error);
        commit("SET_ERROR", "Failed to fetch product details");
        return null;
      }
    },
    async deleteProduct({ commit }, id) {
      try {
        await axios.delete(`${baseUrl}/${id}`);
        commit("REMOVE_PRODUCT", id);
      } catch (error) {
        console.error("Failed to delete product:", error);
        commit("SET_ERROR", "Failed to delete product");
        throw error;
      }
    },
    async updateProduct({ commit }, { id, updatedProduct }) {
      try {
        const response = await axios.put(`${baseUrl}/${id}`, updatedProduct);
        commit("UPDATE_PRODUCT", response.data);
        return response.data;
      } catch (error) {
        console.error("Failed to update product:", error);
        commit("SET_ERROR", "Failed to update product");
        throw error;
      }
    },
    async addProduct({ commit }, newProduct) {
      try {
        const response = await axios.post(baseUrl, newProduct);
        commit("ADD_PRODUCT", response.data);
        return response.data;
      } catch (error) {
        console.error("Failed to add product:", error);
        commit("SET_ERROR", "Failed to add product");
        throw error;
      }
    }
  },
  getters: {
    productsCount(state) {
      return state.products.length;
    },
    categoriesCount(state) {
      const categories = new Set(state.products.map((p) => p.category).filter(Boolean));
      return categories.size;
    },
    stockCount(state) {
      return state.products.reduce((acc, p) => acc + (p.stock || 0), 0);
    }
  }
});
