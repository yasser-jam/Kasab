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
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-swiper'
  ],

  swiper: {},
  
  imports: {
    dirs: ['./types']
  }

  // i18n: {
  //   locales: [
  //     { code: 'en', iso: 'en-US',  dir: 'ltr' },
  //     { code: 'ar', iso: 'ar-EG', dir: 'rtl' },
  //   ],
  //   defaultLocale: 'ar'
  //   // vueI18n: './i18n.config.ts' // if you are using custom path, default
  // }

})
