// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  css: 
    ['~/assets/css/global.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/css/global.css'],
  build: {
    transpile: ['@fortawesome/fontawesome-free']
  },
  modules: ['nuxt-icon', '@nuxtjs/supabase', "@nuxt/fonts"],
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
})