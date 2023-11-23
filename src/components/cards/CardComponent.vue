<script setup lang="ts">
/* script/ */
</script>

<template>
  <b-card title="title" class="shadow mb-5">
    <template #header>
      <h6 class="mb-0">Status</h6>
    </template>
    <b-card-text>title</b-card-text>
    <div class="d-flex justify-content-between align-items-end mt-auto">
      <RouterLink to="/about">Read More...</RouterLink>
      <b-link>Delete Task</b-link>
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
