<template>
  <!-- <div class="container">
    <div class="header">
      <nav>
        <button
          :class="{ active: activeTab === 'FormComponent' }"
          @click="activeTab = 'FormComponent'"
        >
          Add Account
        </button>
        <button
          :class="{ active: activeTab === 'UsersComponent' }"
          @click="activeTab = 'UsersComponent'"
        >
          User Directory
        </button>
        <button
          :class="{ active: activeTab === 'AdminsComponent' }"
          @click="activeTab = 'AdminsComponent'"
        >
          Admin Directory
        </button>
      </nav>

      <button @click="toggleTheme">
        {{ theme === "light" ? "Dark Theme" : "Light Theme" }}
      </button>
    </div>

    <p v-if="successMessage" class="success">
      {{ successMessage }}
    </p>

    <div>
      <Component
        :is="activeTab"
        :users="users"
        :admins="admins"
        @add-user="addUser"
        @delete-user="deleteUser"
      />
      <FormComponent v-if="activeTab === 'form'" @add-user="addUser" />
      <UsersComponent
        v-if="activeTab === 'users'"
        :users="users"
        @delete-user="deleteUser"
      />
      <AdminsComponent
        v-if="activeTab === 'admins'"
        :admins="admins"
        @delete-user="deleteUser"
      />
    </div>

  </div> -->
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeTab: "FormComponent",
      accounts: [],
      theme: "light",
      successMessage: "",
    };
  },
  computed: {
    users() {
      return this.accounts.filter((account) => account.role === "user");
    },
    admins() {
      return this.accounts.filter((account) => account.role === "admin");
    },
  },
  methods: {
    addUser(user) {
      const newUser = { ...user, id: Date.now() };
      console.log("New user added:", newUser);
      this.accounts.push(newUser);

      if (user.role === "user") {
        this.activeTab = "UsersComponent";
      } else if (user.role === "admin") {
        this.activeTab = "AdminsComponent";
      }

      this.successMessage = `Account for ${user.name} has been successfully created.`;
      setTimeout(() => {
        this.successMessage = "";
      }, 2000);
    },
    deleteUser(userId) {
      this.accounts = this.accounts.filter((account) => account.id !== userId);
    },
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

<style>
:root {
  --background-color: #ffffff;
  --text-color: #000000;
}

[data-theme="dark"] {
  --background-color: #1e1e1e;
  --text-color: #ffffff;
}

html {
  scrollbar-gutter: stable;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
}

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

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

.header nav {
  display: flex;
  flex-wrap: wrap;
}

button {
  margin: 10px 0;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid currentColor;
  background-color: var(--text-color);
  color: var(--background-color);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

button:hover {
  background-color: var(--background-color);
  color: var(--text-color);
}

.active {
  outline: 2px solid currentColor;
  background-color: var(--background-color);
  color: var(--text-color);
}

button.active:hover {
  outline: 1px solid currentColor;
  background-color: var(--background-color);
  color: var(--text-color);
}

.success {
  padding: 15px;
  border: 1px solid currentColor;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .header nav {
    flex-direction: column;
  }

  .header button,
  .header nav button {
    margin: 5px 0;
    width: 100%;
  }
}
</style>
