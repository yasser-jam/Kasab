/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2D547C",
          'primary-content': '#fff',
          secondary: '#7E78F3',
          accent: '#5950F6',
          success: '#00A96E',
          'success-content': '#fff',
          'error': '#FF6971',
          'error-content': '#fff',
          'base-100': '#F6F6FD', // background color
          neutral: '#DAD9F8', // cards background
          'neutral-content': '#040316', // base text color

        },
      }
    ]
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem'
      }
    }
  },
    plugins: [require('daisyui')],

}

