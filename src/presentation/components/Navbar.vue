<template>
  <nav class="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md text-white py-5 px-10 flex justify-between items-center shadow-md z-50">
    <h1 class="text-2xl font-extrabold tracking-wide" style="color: white;">YourBrand</h1>
    <ul class="hidden md:flex space-x-8 text-lg font-medium">
      <li><NuxtLink to="#features" class="hover:text-purple-400 transition duration-300 text-white">Features</NuxtLink></li>
      <li><NuxtLink to="#pricing" class="hover:text-purple-400 transition duration-300 text-white">Pricing</NuxtLink></li>
      <li><NuxtLink to="#testimonials" class="hover:text-purple-400 transition duration-300 text-white">Testimonials</NuxtLink></li>
    </ul>
    <button class="md:hidden text-white text-2xl" @click="toggleMenu">☰</button>
  </nav>
</template>
    