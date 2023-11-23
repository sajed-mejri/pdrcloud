<template>
  <div class="wrapper d-flex align-items-center justify-content-center">
    <b-form @submit.prevent="submitForm">
      <b-form-group
        id="title"
        label="Task Title:"
        label-for="title"
        label-cols="4"
        class="mb-2"
      >
        <b-form-input v-model="task.title" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group
        id="description"
        label="Task Description:"
        label-for="description"
        label-cols="4"
        class="mb-2"
      >
        <b-form-textarea v-model="task.description"></b-form-textarea>
      </b-form-group>

      <b-form-group
        id="status"
        label="Task Status:"
        label-for="status"
        label-cols="4"
        class="mb-2"
      >
        <b-form-select v-model="task.status">
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </b-form-select>
      </b-form-group>

      <b-form-group
        id="dueDate"
        label="Due Date:"
        label-for="dueDate"
        label-cols="4"
        class="mb-3"
      >
        <b-form-input v-model="task.due_date" type="date"></b-form-input>
      </b-form-group>

      <div class="d-flex justify-content-end">
        <b-button type="submit" variant="primary">Create Task</b-button>
      </div>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useTaskStore } from "../../stores/taskStore";

const taskStore = useTaskStore();
const router = useRouter();

let task = ref({
  title: "",
  description: "",
  status: "pending",
  due_date: "",
});

const submitForm = async () => {
  console.log("Task submitted:", task.value);
  try {
    await taskStore.createTask(task.value);

    router.push("/");
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 16px;
}
</style>
