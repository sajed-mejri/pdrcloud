<script setup lang="ts">
/* script/ */
</script>

<template>
  <b-card title="title" class="shadow mb-5">
    <template #header>
      <h6 class="mb-0">Status</h6>
    </template>
    <b-card-text>title</b-card-text>
    <b-button> Read More... </b-button>
    <b-button> Delete Task </b-button>
    <template #footer>
      <em>Due date</em>
    </template>
  </b-card>
</template>

<style lang="scss" scoped>
.card {
  background-color: whitesmoke;
}
</style>
