<template>
  <div class="main-layout">
    <NavBar />
    <main class="page-content container">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "MainLayout",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-content {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
