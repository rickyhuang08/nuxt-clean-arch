<template>
  <div class="font-sans bg-black text-white min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section with Background Image -->
    <section 
      class="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${heroImg})` }"
    >
      <!-- <img src="/images/hero.jpg" alt="Hero Image" /> -->
      <h2 class="text-6xl md:text-7xl font-extrabold leading-tight max-w-3xl text-white">The Future of Payments</h2>
      <p class="mt-6 text-xl max-w-2xl text-gray-300 text-white">Secure, scalable, and powerful payment solutions for your business.</p>
      <button class="mt-8 px-6 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 transition duration-300 rounded-full">Get Started</button>
    </section>


    <!-- Features Section -->
    <section class="py-24 text-center px-6 md:px-16">
      <h3 class="text-5xl font-bold mb-8">Why Choose Us?</h3>
      <div class="grid md:grid-cols-3 gap-10">
        <div class="p-6 bg-gray-800 rounded-xl">
          <h4 class="text-2xl font-semibold">Fast Transactions</h4>
          <p class="text-gray-400 mt-2">Instant payment processing with industry-leading speed.</p>
        </div>
        <div class="p-6 bg-gray-800 rounded-xl">
          <h4 class="text-2xl font-semibold">Global Reach</h4>
          <p class="text-gray-400 mt-2">Expand your business with multi-currency support worldwide.</p>
        </div>
        <div class="p-6 bg-gray-800 rounded-xl">
          <h4 class="text-2xl font-semibold">Secure & Reliable</h4>
          <p class="text-gray-400 mt-2">Advanced encryption and fraud protection for peace of mind.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
  import heroImg from '@/assets/images/hero.jpg';
  import Navbar from '@/presentation/components/Navbar.vue'; 
  import Footer from '@/presentation/components/Footer.vue'; 
</script>