<script setup lang="ts">
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  link?: string;
  type?: string;
}>();
</script>

<template>
  <div class="wrapper">
    <RouterLink
      v-if="type === 'create'"
      :to="link"
      class="circle-btn"
      variant="primary"
      ><BIconPlus font-scale="4"></BIconPlus
    ></RouterLink>
    <b-button v-if="type === 'filter'" class="circle-btn" variant="primary">
      <BIconFilter style="color: blue"> </BIconFilter>
    </b-button>
  </div>
</template>

<style scoped>
.circle-btn {
  border: none;
  background-color: #eeeeee;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
