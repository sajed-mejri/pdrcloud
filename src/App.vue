<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { ref } from "vue";

import i18n from "./i18n";

const currentLanguage = ref<"en" | "gr">("en");

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === "en" ? "gr" : "en";
  i18n.global.locale = currentLanguage.value as "en";
};

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
          ><RouterLink class="detail-btn" to="/">{{
            $i18n.t("home")
          }}</RouterLink></b-nav-item
        >
      </b-nav>
      <b-nav>
        <b-nav-item v-if="!authStore.isAuthenticated">
          <RouterLink class="detail-btn" to="/login">{{
            $i18n.t("login")
          }}</RouterLink>
        </b-nav-item>
        <b-nav-item v-if="authStore.isAuthenticated" @click="handleLogout">
          <span class="detail-btn">{{ $i18n.t("logout") }}</span>
        </b-nav-item>
        <b-nav-item @click="toggleLanguage">
          <span class="detail-btn">{{ currentLanguage }}</span>
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
