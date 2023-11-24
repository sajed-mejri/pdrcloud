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
          ><RouterLink to="/">Home</RouterLink></b-nav-item
        >
      </b-nav>
      <b-nav>
        <b-nav-item v-if="!authStore.isAuthenticated">
          <RouterLink to="/login">Login</RouterLink>
        </b-nav-item>
        <b-nav-item v-if="authStore.isAuthenticated" @click="handleLogout()">
          <RouterLink to="/login">Logout</RouterLink>
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
body {
  overflow-x: hidden;
}
</style>
