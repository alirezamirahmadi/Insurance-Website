/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        mainColor:{
          main:'#0ea5e9'
        },
        secondColor:{
          main:'#fafafa'
        },
        textColor:{
          main:'#082f49'
        }
      }
    },
  },
  plugins: [],
}

