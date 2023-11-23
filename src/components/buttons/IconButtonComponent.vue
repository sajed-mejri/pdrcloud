<script setup lang="ts">
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  link?: string;
}>();
</script>

<template>
  <RouterLink :to="link" class="circle-btn" variant="primary"
    ><BIconPlus font-scale="4"></BIconPlus
  ></RouterLink>
</template>

<style scoped>
.circle-btn {
  background-color: #eeeeee;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
