import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-02-28',
  devtools: { enabled: true },
  srcDir: 'src/',
  pages: true, // Ensure pages are enabled
  dir: {
    pages: 'presentation/pages' // Tell Nuxt where to find your pages
  },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});