<template>
  <div v-if="user" class="bg-gray-800 p-6 rounded-xl shadow-md text-white">
    <h2 class="text-2xl font-bold mb-2">{{ user.username }}</h2>
    <p class="text-gray-300">Email: {{ user.email }}</p>
    <p class="text-gray-300">User ID: {{ user.id }}</p>
  </div>
  <div v-else class="text-white">Loading user data...</div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: false, // Allow it to be optional (initially null)
    default: null
  }
});
</script>