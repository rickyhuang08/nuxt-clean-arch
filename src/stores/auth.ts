import { defineStore } from "pinia";
import { useCookie } from "#app";
import { loginApi } from "@/infrastructure/api/auth"; // ✅ Import API function

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null, // ✅ Don't access cookies here
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const response = await loginApi(email, password);
        this.token = response.token;

        // ✅ Store token in a cookie inside an action
        const authToken = useCookie("auth_token", { path: "/" });
        authToken.value = response.token;
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },

    logout() {
      this.token = null;
      const authToken = useCookie("auth_token", { path: "/" });
      authToken.value = null;
    },

    checkAuth() {
      const authToken = useCookie("auth_token");
      this.token = authToken.value || null;
    },
  },
});
