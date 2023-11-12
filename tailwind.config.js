/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '2xl': '20px',
        '3xl': '28px',
        '5xl': '160px',
      },
      fontFamily: {
        serif: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
