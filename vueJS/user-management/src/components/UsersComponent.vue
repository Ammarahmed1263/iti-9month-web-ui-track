<template>
  <div>
    <h1>User Directory</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        <h3>ID: {{ user.id }}</h3>
        <h3>Name: {{ user.name }}</h3>
        <p>Email: {{ user.email }}</p>
        <p>Age: {{ user.age }}</p>
        <button class="delete-button" @click="handleDelete(user.id)">Delete</button>
      </li>
    </ul>

    <div v-else class="empty-state">No registered users available.</div>
  </div>
</template>

<script>
export default {
  name: "UsersComponent",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleDelete(userId) {
      if (
        window.confirm(
          "Are you sure you want to permanently delete this user account? This action cannot be undone."
        )
      ) {
        this.$emit("delete-user", userId);
      }
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}

li {
  border: 1px solid currentColor;
  padding: 20px;
  margin-bottom: 16px;
  list-style-type: none;
  text-align: left;
}

.delete-button {
  width: 100%;
  margin: 0;
  margin-top: 10px;
}

.empty-state {
  padding: 40px 20px;
  border: 1px solid currentColor;
  text-align: center;
}
</style>

