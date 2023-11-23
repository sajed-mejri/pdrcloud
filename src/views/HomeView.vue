<script setup lang="ts">
import IconButtonComponent from "@/components/buttons/IconButtonComponent.vue";
import CardComponent from "../components/cards/CardComponent.vue";

// import { useAuthStore } from "@/stores/auth";
import { useTaskStore } from "@/stores/taskStore";
import { onMounted } from "vue";

// const authStore = useAuthStore();
const taskStore = useTaskStore();

onMounted(() => {
  taskStore.fetchTasks();
});
</script>

<template>
  <div class="wrapper">
    <b-container class="mb-3 d-flex justify-content-end">
      <IconButtonComponent :link="'/create'" :likes="42" />
    </b-container>
    <b-container class="mb-3">
      <b-row>
        <b-col
          v-for="task in taskStore.tasks"
          :key="task.id"
          lg="4"
          md="6"
          sm="12"
        >
          <!-- {{ task.title }} -->
          <CardComponent :task="task" />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mb-3 d-flex justify-content-between">
      <b-button>Previous</b-button>
      <b-button>Next</b-button>
    </b-container>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 16px;
}
</style>
