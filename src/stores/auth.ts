import { defineStore } from "pinia";
import axios from "axios";
import { useApiStore } from "./api";

const TOKEN_KEY = "accessToken";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    accessToken: localStorage.getItem(TOKEN_KEY) || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },

  actions: {
    setUser(user: User) {
      this.user = user;
    },

    clearUser() {
      this.user = null;
    },

    getToken(): string | null {
      if (this.accessToken) {
        return this.accessToken;
      }

      const storedToken = localStorage.getItem(TOKEN_KEY);
      if (storedToken) {
        this.accessToken = storedToken;
        return storedToken;
      }

      return null;
    },

    setToken(token: string) {
      this.accessToken = token;
      localStorage.setItem(TOKEN_KEY, token);
    },

    removeToken() {
      this.accessToken = null;
      localStorage.removeItem(TOKEN_KEY);
    },

    async login({ email, password }: { email: string; password: string }) {
      try {
        const baseUrl = useApiStore().getBaseUrl;
        const response = await axios.post(`${baseUrl}/login`, {
          email,
          password,
        });

        if (response.status === 200) {
          const data = response.data;
          this.setUser(data.user);
          this.setToken(data.token);
          console.log(data.token);
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },

    async register({
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    }) {
      try {
        const baseUrl = useApiStore().getBaseUrl;
        const response = await axios.post(`${baseUrl}/register`, {
          name,
          email,
          password,
        });

        if (response.status === 200) {
          const data = response.data;
          this.user = data.user;
          this.setToken(data.token);
        } else {
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    },

    async logout() {
      console.log("Logging out...");
      console.log(this.accessToken);
      try {
        const baseUrl = useApiStore().getBaseUrl;
        const token = this.getToken();
        const response = await axios.post(
          `${baseUrl}/logout`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          this.clearUser();
          this.removeToken();

          console.log("Successfully logged out");
        } else {
          console.error("Logout failed");
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    },
  },
});

export interface User {
  id: number;
  name: string;
  email: string;
}
