import axios from "axios";
import { defineStore } from "pinia";
import { useApiStore } from "./api";
import { useAuthStore } from "./auth";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    setTasks(tasks: Task[]) {
      this.tasks = tasks;
    },
    async fetchTasks() {
      try {
        const baseUrl = useApiStore().getBaseUrl;

        const response = await axios.get(`${baseUrl}/tasks`);
        const tasks = response.data.map((task: Task) => ({
          ...task,
        }));
        this.setTasks(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },
    async createTask(taskData: TaskData) {
      try {
        const baseUrl = useApiStore().getBaseUrl;
        const authStore = useAuthStore();

        // Check if the user is authenticated
        if (!authStore.isAuthenticated) {
          console.error("User is not authenticated");
          return;
        }

        const token = authStore.getToken();

        if (!token) {
          console.error("No token available");
          return;
        }

        const response = await axios.post(`${baseUrl}/tasks`, taskData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 201) {
          console.log("Task created successfully");
          this.fetchTasks();
        } else {
          console.error(
            "Failed to create task:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error creating task:", error);
      }
    },
    async deleteTask(taskId: number) {
      try {
        const baseUrl = useApiStore().getBaseUrl;
        const authStore = useAuthStore();

        if (!authStore.isAuthenticated) {
          console.error("User is not authenticated");
          return;
        }

        const token = authStore.getToken();

        if (!token) {
          console.error("No token available");
          return;
        }

        const apiUrl = `${baseUrl}/tasks/${taskId}`;

        const response = await axios.delete(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          console.log("Task deleted successfully");
          this.fetchTasks();
        } else {
          console.error(
            "Failed to delete task:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    },
  },
});

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
}

export interface TaskData {
  title: string;
  description: string;
  status: string;
  due_date: string;
}
