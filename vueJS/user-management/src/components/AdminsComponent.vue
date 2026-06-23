<template>
  <div>
    <h1>Administrator Directory</h1>
    <ul v-if="admins.length">
      <li v-for="admin in admins" :key="admin.id">
        <h3>ID: {{ admin.id }}</h3>
        <h3>Name: {{ admin.name }}</h3>
        <p>Email: {{ admin.email }}</p>
        <p>Age: {{ admin.age }}</p>
        <button class="delete-button" @click="handleDelete(admin.id)">Delete</button>
      </li>
    </ul>
    <div v-else class="empty-state">No registered administrators available.</div>
  </div>
</template>

<script>
export default {
  name: "AdminsComponent",
  props: {
    admins: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleDelete(adminId) {
      if (
        window.confirm(
          "Are you sure you want to permanently delete this administrator account? This action cannot be undone."
        )
      ) {
        this.$emit("delete-user", adminId);
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

