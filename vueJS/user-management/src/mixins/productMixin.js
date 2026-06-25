import axios from "axios";

export const productMixin = {
  data() {
    return {
      baseUrl: "http://localhost:3000/products",
    };
  },
  methods: {
    async deleteProduct(id) {
      try {
        await axios.delete(`${this.baseUrl}/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
    async updateProduct(id, updatedProduct) {
      try {
        return await axios.put(`${this.baseUrl}/${id}`, updatedProduct);
      } catch (error) {
        console.log(error);
      }
    },
    async getProductById(id) {
      try {
        const response = await axios.get(`${this.baseUrl}/${id}`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    formatPrice(price) {
      if (typeof price !== "number" || isNaN(price)) {
        return "$0.00";
      }

      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(price);
    },
    getDiscountedPrice(price, discountPercentage) {
      if (!price) return 0;
      if (!discountPercentage || discountPercentage <= 0) {
        return price;
      }
      return price - (price * discountPercentage / 100);
    },
  },
};
