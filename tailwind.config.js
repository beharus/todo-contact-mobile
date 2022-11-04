/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./scr*.{html,js}"],
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
    },
  },
  variants:{
    extend: {
      display: [`group-focus`],
      opacity: [`group-focus`],
      inset: [`group-focus`]
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
