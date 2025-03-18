<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900">
      <div class="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-white text-center mb-6">Login</h2>
  
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-gray-300">Email</label>
            <input 
              v-model="email"
              type="email" 
              placeholder="Enter your email"
              class="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
  
          <div class="mb-6">
            <label class="block text-gray-300">Password</label>
            <input 
              v-model="password"
              type="password" 
              placeholder="Enter your password"
              class="w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
  
          <button 
            type="submit"
            class="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-md transition duration-300"
            :disabled="loading"
          >
            {{ loading ? "Logging in..." : "Login" }}
          </button>
  
          <p v-if="errorMessage" class="mt-3 text-red-400 text-center">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useAuthStore } from "@/stores/auth";
  import { useRouter } from "vue-router";
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const email = ref("");
  const password = ref("");
  const loading = ref(false);
  const errorMessage = ref("");
  
  const handleLogin = async () => {
    loading.value = true;
    errorMessage.value = "";
  
    try {
      // ✅ Fix: Pass email and password separately
      await authStore.login(email.value, password.value);
      
      // ✅ Redirect only on success
      router.push("/");
    } catch (error) {
      errorMessage.value = error.message;
    } finally {
      loading.value = false;
    }
  };
    // ✅ Check if user is already logged in
    onMounted(() => {
        if (authStore.token) {
            router.push('/'); // ✅ Redirect to index if logged in
        }
    });
  </script>
  