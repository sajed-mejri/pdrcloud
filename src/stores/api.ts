import { defineStore } from "pinia";

export const useApiStore = defineStore("api", {
  state: () => ({
    baseUrl: "http://127.0.0.1:8000/api",
  }),

  getters: {
    getBaseUrl: (state) => state.baseUrl,
  },
});
