<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();
console.log(authStore.isAuthenticated);
const handleLogout = async () => {
  console.log(authStore.isAuthenticated);
  await authStore.logout();
};
</script>

<template>
  <header>
    <div class="wrapper d-flex justify-content-between">
      <b-nav>
        <b-nav-item v-if="authStore.isAuthenticated"
          ><RouterLink class="detail-btn" to="/">Home</RouterLink></b-nav-item
        >
      </b-nav>
      <b-nav>
        <b-nav-item v-if="!authStore.isAuthenticated">
          <RouterLink class="detail-btn" to="/login">Login</RouterLink>
        </b-nav-item>
        <b-nav-item v-if="authStore.isAuthenticated" @click="handleLogout">
          <span class="detail-btn">Logout</span>
          <b-icon icon="arrow-up"></b-icon>
        </b-nav-item>
      </b-nav>
    </div>
  </header>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <RouterView />
</template>

<style scoped>
/* Your existing styles */
header {
  color: white;
  background-color: hsla(215, 39%, 50%, 0.74);
}
body {
  overflow-x: hidden;
}
</style>
