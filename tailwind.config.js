/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      'Kanit' : ['Kanit']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

