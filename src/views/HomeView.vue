<script setup lang="ts">
import IconButtonComponent from "@/components/buttons/IconButtonComponent.vue";
import CardComponent from "../components/cards/CardComponent.vue";

import { useTaskStore } from "@/stores/taskStore";
import { onMounted, ref } from "vue";

const taskStore = useTaskStore();
const selectedStatus = ref("All");

onMounted(() => {
  taskStore.fetchTasks();
});

const filterTasks = (status: string) => {
  selectedStatus.value = status;
  if (status === "All") {
    taskStore.fetchTasks();
  } else {
    taskStore.getByStatus(status);
  }
};
</script>

<template>
  <div class="wrapper">
    <b-container class="mb-3 d-flex justify-content-end">
      <div class="mt-3">
        <b-button-group size="sm">
          <IconButtonComponent :link="'/create'" type="create" />
        </b-button-group>
      </div>
    </b-container>
    <b-container class="mb-3">
      <b-dropdown id="filter" :text="'Filter: ' + selectedStatus" class="m-2">
        <b-dropdown-item @click="filterTasks('All')">All</b-dropdown-item>
        <b-dropdown-item @click="filterTasks('pending')"
          >Pending</b-dropdown-item
        >
        <b-dropdown-item @click="filterTasks('completed')"
          >Completed</b-dropdown-item
        >
      </b-dropdown>

      <b-row>
        <b-col
          v-for="task in taskStore.tasks"
          :key="task.id"
          lg="4"
          md="6"
          sm="12"
        >
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
