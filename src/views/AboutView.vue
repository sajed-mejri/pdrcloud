<!-- About.vue -->

<template>
  <b-container>
    <div v-if="isLoading">Loading...</div>

    <b-container v-else class="mt-2">
      <b-row>
        <b-col md="8" lg="8">
          <b-card title="View Task:" class="shadow">
            <b-container>
              <b-row>
                <b-col sm="6" md="6" lg="8">
                  <p v-if="task">Title: {{ task.title }}</p>
                  <p v-if="task">Description: {{ task.description }}</p>
                </b-col>
                <b-col sm="6" md="6" lg="4" class="mt-4 mt-sm-0">
                  <p v-if="task">Status: {{ task.status }}</p>
                  <p v-if="task">Due Date: {{ task.due_date }}</p>
                  <p v-if="task">Created At: {{ task.created_at }}</p></b-col
                >
              </b-row></b-container
            >
            <div v-if="error" class="mt-2">Error: {{ error }}</div>
          </b-card>
        </b-col>
        <b-col md="4" lg="4">
          <div class="image-container">
            <img class="image" src="../assets/detail.jpg" alt="" />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="mt-2">
      <router-link to="/">Back to Tasks</router-link>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useTaskStore, Task } from "../stores/taskStore";
import { useRoute } from "vue-router";

const taskStore = useTaskStore();
const isLoading = ref(true);
const task = ref(null as Task | null);
const error = ref(null as string | null);

const route = useRoute();
const taskId = ref(Number(route.params.id));

const fetchData = async () => {
  isLoading.value = true;

  try {
    await taskStore.fetchTaskById(taskId.value);
    task.value = taskStore.getFetchedTask();
    error.value = null;
  } catch (err) {
    console.error("Error fetching task:", err);
    error.value = "Error fetching task";
  } finally {
    isLoading.value = false;
  }
};

watchEffect(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.image-container {
  .image {
    max-width: 300px;
    border-radius: 40px;
    @media only screen and (max-width: 765px) {
      max-width: 100%;
    }
  }
  margin-top: 30px;
  margin-left: -6rem;
  // position: absolute;
  z-index: -1;
  @media only screen and (max-width: 765px) {
    margin-left: 0;
    margin-top: -130px;
  }
}
</style>
