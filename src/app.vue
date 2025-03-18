<template>
  <div class="bg-gray-200 min-h-screen">
    <LoginPage v-if="!authStore.token" />
    <NuxtPage v-else />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import LoginPage from '@/presentation/pages/login.vue';

const authStore = useAuthStore();
authStore.checkAuth();
</script>
