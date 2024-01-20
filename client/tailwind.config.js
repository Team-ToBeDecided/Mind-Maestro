// /** @type {import('tailwindcss').Config} **/
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'info': ['Montserrat', 'sans-serif'],
        'action': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
});