<template>
  <form @submit.prevent="handleSubmit">
    <h1>Register New Account</h1>
    <input type="text" placeholder="Full Name" v-model.trim="name" />
    <p v-if="errors.name" class="error">
      {{ errors.name }}
    </p>

    <input type="email" placeholder="Email Address" v-model.trim="email" />
    <p v-if="errors.email" class="error">
      {{ errors.email }}
    </p>

    <input
      type="number"
      placeholder="Age (Minimum 18)"
      v-model="age"
      min="18"
      max="100"
    />

    <div class="role-inputs">
      <label
        ><input
          type="radio"
          name="role"
          value="user"
          v-model="role"
        />User</label
      >
      <label
        ><input
          type="radio"
          name="role"
          value="admin"
          v-model="role"
        />Admin</label
      >
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      name: "",
      email: "",
      age: 18,
      role: "user",
      errors: {},
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};

      if (!this.name) {
        this.errors.name = "Please enter a name.";
      } else if (!/^[a-zA-Z\s]+$/.test(this.name)) {
        this.errors.name = "Name must only contain letters and spaces.";
      }

      if (!this.email) {
        this.errors.email = "Please enter an email address.";
      } else if (!this.email.includes("@")) {
        this.errors.email = "Please enter a valid email address.";
      }

      if (Object.keys(this.errors).length) {
        return;
      }

      this.$emit('add-user', {
        name: this.name,
        email: this.email,
        age: this.age,
        role: this.role
      });

      this.name = "";
      this.email = "";
      this.age = 18;
      this.role = "user";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
}

input[type="text"],
input[type="email"],
input[type="number"] {
  margin: 10px 0;
  border: 1px solid currentColor;
  padding: 12px 8px;
  font-size: 16px;
  background-color: var(--background-color);
  color: var(--text-color);
}

.role-inputs {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  gap: 24px;
}

.role-inputs label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

input[type="radio"] {
  accent-color: currentColor;
  margin: 0;
  cursor: pointer;
}

.error {
  text-align: left;
  margin-top: -5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
}
</style>

