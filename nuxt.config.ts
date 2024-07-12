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
  modules: ['nuxt-icon', '@nuxtjs/supabase', "@nuxt/fonts", "vue3-carousel-nuxt"],
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      },
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
  app: {
    head: {
        title: 'ByYourSide',
        meta: [{ name: 'description', content: 'ByYourSide is a website that supports women against violence and abuses' }],
        htmlAttrs: {
            lang: 'en',
        },
    },
  },
})