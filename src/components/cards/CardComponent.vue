<script setup lang="ts">
import { defineProps, watch } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useTaskStore } from "../../stores/taskStore";
import { Task } from "../../stores/taskStore";
import { ref } from "vue";

// eslint-disable-next-line vue/no-setup-props-destructure
const { task } = defineProps(["task" as Task]);
const authStore = useAuthStore();
const taskStore = useTaskStore();

const localStatus = ref(task.status);

watch(
  () => task.status,
  (newStatus) => {
    localStatus.value = newStatus;
  }
);

const removeTask = async () => {
  try {
    const taskId = task.id;
    await taskStore.deleteTask(taskId);
    console.log("Task removed");
  } catch (error) {
    console.error("Error removing task:", error);
  }
};

const updateTaskStatus = async () => {
  try {
    const taskId = task.id;
    await taskStore.updateTaskStatus(taskId, localStatus.value);
    console.log("Task status updated");
  } catch (error) {
    console.error("Error updating task status:", error);
  }
};
</script>

<template>
  <b-card :title="task.title" class="shadow mb-5">
    <template #header>
      <b-form-group id="status" label-for="status" class="mb-2">
        <b-form-checkbox
          id="status"
          v-model="localStatus"
          name="status"
          value="completed"
          unchecked-value="pending"
          @change="updateTaskStatus"
        >
          <b-badge>{{ localStatus }}</b-badge>
        </b-form-checkbox>
      </b-form-group>
    </template>
    <div
      class="d-flex justify-content-between align-items-end mt-auto"
      v-if="authStore.isAuthenticated"
    >
      <RouterLink class="detail-btn" :to="{ path: '/about/' + task.id }"
        >Read More...</RouterLink
      >

      <b-link
        class="detail-btn"
        v-if="authStore.isAuthenticated"
        @click="removeTask"
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
  color: white;
  background-color: hsla(215, 39%, 50%, 0.74);
  .d-flex {
    margin-top: 8px;
  }
}
</style>
