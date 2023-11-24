import axios from "axios";
import { defineStore } from "pinia";
import { useApiStore } from "./api";
import { useAuthStore } from "./auth";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    tasks: [] as Task[],
    fetchedTask: null as Task | null,
  }),
  actions: {
    setTasks(tasks: Task[]) {
      this.tasks = tasks;
    },
    async fetchTasks() {
      try {
        const baseUrl = useApiStore().getBaseUrl;
        const response = await axios.get(`${baseUrl}/tasks`);

        const tasks = response.data.tasks;

        if (Array.isArray(tasks)) {
          this.setTasks(tasks);
          console.log("Tasks:", tasks);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },

    async getByStatus(status: string) {
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

        const apiUrl = `${baseUrl}/tasks/status/${status}`;

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const tasks = response.data.tasks;

        if (Array.isArray(tasks)) {
          this.setTasks(tasks);
          console.log("Tasks by Status:", tasks);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      } catch (error) {
        console.error("Error fetching tasks by status:", error);
      }
    },

    async fetchTaskById(taskId: number) {
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

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const task = response.data.task;

        if (task) {
          task.created_at = new Date(task.created_at).toLocaleString();
          this.setFetchedTask(task);
          console.log("Task by ID:", this.getFetchedTask());
        } else {
          console.error("Task not found");
        }
      } catch (error) {
        console.error("Error fetching task by ID:", error);
      }
    },

    setFetchedTask(task: Task | null) {
      this.fetchedTask = task;
    },

    getFetchedTask(): Task | null {
      return this.fetchedTask;
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

    async updateTaskStatus(taskId: number, newStatus: string) {
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

        const apiUrl = `${baseUrl}/tasks/${taskId}/update-status`;

        const response = await axios.put(
          apiUrl,
          { status: newStatus },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("Task status updated successfully");
          this.fetchTasks();
        } else {
          console.error(
            "Failed to update task status:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error updating task status:", error);
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
  created_at: string;
}

export interface TaskData {
  title: string;
  description: string;
  status: string;
  due_date: string;
}
