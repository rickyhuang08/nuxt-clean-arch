import { defineStore } from 'pinia';
import { getProfile } from '~/infrastructure/api/profile';

interface User {
    id: number;
    username: string;
    email: string;
  // Add more fields as needed based on API response
}

interface ProfileResponse {
    user: User;
  }

export const useProfileStore = defineStore('profile', {
    state: () => ({
      user: null as User | null, // Store `user` instead of `profile`
      loading: false,
      error: null as string | null,
    }),
    actions: {
      async fetchProfile() {
        this.loading = true;
        try {
          const response = await getProfile() as ProfileResponse;
          this.user = response.user as User; // Map `user` object
        } catch (err) {
          this.error = (err as Error).message;
        } finally {
          this.loading = false;
        }
      }
    },
    persist: true
  });
