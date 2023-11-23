<script setup lang="ts">
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <b-card title="title" class="shadow mb-5">
    <template #header>
      <h6 class="mb-0">Status</h6>
    </template>
    <b-card-text>description</b-card-text>
    <div
      class="d-flex justify-content-between align-items-end mt-auto"
      v-if="authStore.isAuthenticated"
    >
      <RouterLink to="/about">Read More...</RouterLink>
      <b-link v-if="authStore.isAuthenticated">Delete Task</b-link>
    </div>
    <template #footer>
      <em>Due date</em>
    </template>
  </b-card>
</template>

<style lang="scss" scoped>
.card {
  background-color: whitesmoke;

  .d-flex {
    margin-top: 8px;
  }
}
</style>
