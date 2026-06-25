<template>
  <div>
    <header class="header container">
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/products/add">Add Product</router-link></li>
        </ul>
      </nav>

      <button @click="toggleTheme">
        {{ theme === "light" ? "Dark Theme" : "Light Theme" }}
      </button>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.header nav ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
}

.header nav ul li a {
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid currentColor;
  background-color: var(--text-color);
  color: var(--background-color);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.header nav ul li a.router-link-exact-active {
  outline: 2px solid currentColor;
  background-color: var(--background-color);
  color: var(--text-color);
}

.header nav ul li a:hover {
  background-color: var(--background-color);
  color: var(--text-color);
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .header nav {
    flex-direction: column;
    align-items: stretch;
  }

  .header nav ul {
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }

  .header nav ul li {
    width: 100%;
  }

  .header nav ul li a {
    display: block;
    margin: 0;
    width: 100%;
    text-align: center;
  }

  .header > button {
    width: 100%;
    margin: 0;
  }
}
</style>
