/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
        marquee2: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}