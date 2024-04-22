// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/styles/main.scss'],

  modules: [
    '@nuxtjs/i18n'
  ],

  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }

})
