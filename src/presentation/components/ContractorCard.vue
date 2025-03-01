<template>
    <div class="p-4 bg-white shadow-md rounded-lg border">
        <h2 class="text-lg font-bold">{{ name }}</h2>
        <p class="text-gray-600">{{ description }}</p>
    </div>
</template>
  
<script setup>
    defineProps({
    name: String,
    description: String,
    });
</script>
