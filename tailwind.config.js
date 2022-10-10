/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    container: false
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': {
        'light': '#191734',
        DEFAULT: '#0c0b23'
      },
      'red': '#e25454',
      'yellow': '#f8c45a',
      'white': '#ffffff'
    },
    extend: {
      height: {
        'navbar-mobile': '60px',
        'navbar-desktop': '80px'
      },
    },
  },
  plugins: [],
}