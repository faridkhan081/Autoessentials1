/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}',  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
      Montserrat: ['Montserrat', "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px":"400px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
    // ...
  ],
}

