// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/font.css', '~/assets/css/main.css'],
})