export default defineI18nConfig(() => ({
    legacy: false,
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'ar', iso: 'ar-SY', dir: 'rtl' },
    ],
    locale: 'ar',
    messages: {
      en: {
        welcome: 'Welcome'
      },
      ar: {
        welcome: 'مرحبا'
      }
    }
  }))