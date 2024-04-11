/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          default: '#0ea5e9',
          text: '#696e77'
        },
        secondary: {
          default: '#0f3567'
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

