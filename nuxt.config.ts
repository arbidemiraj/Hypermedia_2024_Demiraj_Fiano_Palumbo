// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  css: ['~/assets/css/global.css'],
  modules: ['nuxt-icon', '@nuxtjs/supabase'],
  supabase: {
    // Ensure these are correct
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
})

