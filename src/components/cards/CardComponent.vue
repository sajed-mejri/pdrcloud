<script setup lang="ts">
import { defineProps } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useTaskStore } from "../../stores/taskStore";
import { Task } from "../../stores/taskStore";

const authStore = useAuthStore();

// eslint-disable-next-line vue/require-prop-types, vue/no-setup-props-destructure
const { task } = defineProps(["task" as Task]);

const taskStore = useTaskStore();

const removeTask = async () => {
  try {
    const taskId = task.id;

    await taskStore.deleteTask(taskId);

    console.log("Task removed");
  } catch (error) {
    console.error("Error removing task:", error);
  }
};
</script>

<template>
  <b-card :title="task.title" class="shadow mb-5">
    <template #header>
      <h6 class="mb-0">{{ task.status }}</h6>
    </template>
    <b-card-text>{{ task.description }}</b-card-text>
    <div
      class="d-flex justify-content-between align-items-end mt-auto"
      v-if="authStore.isAuthenticated"
    >
      <RouterLink to="/about">Read More...</RouterLink>
      <b-link v-if="authStore.isAuthenticated" @click="removeTask"
        >Delete Task</b-link
      >
    </div>
    <template #footer>
      <em>{{ task.due_date }}</em>
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
