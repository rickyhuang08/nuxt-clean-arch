<template>
  <Navbar />
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div v-if="profileStore.loading" class="text-white">Loading...</div>
    <div v-else-if="profileStore.error" class="text-red-400">Error: {{ profileStore.error }}</div>
    <ProfileCard v-else-if="profileStore.user" :user="profileStore.user" />
    <div v-else class="text-white">No user data available.</div>
  </div>
  <Footer />
</template>

<script setup>
import { onMounted, watchEffect } from 'vue';
import { useProfileStore } from '@/stores/profile';
import ProfileCard from '@/presentation/components/ProfileCard.vue';
import Navbar from '@/presentation/components/Navbar.vue'; 
import Footer from '@/presentation/components/Footer.vue'; 

const profileStore = useProfileStore();

onMounted(() => {
  if (!profileStore.user) { // ✅ Only fetch if user data is empty
    profileStore.fetchProfile();
  }
});

// Ensure updates are reactive
watchEffect(() => {
  if (profileStore.user === null) {
    profileStore.fetchProfile();
  }
});
</script>