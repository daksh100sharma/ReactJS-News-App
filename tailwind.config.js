/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton SC', 'sans-serif'],
        devil: ['Rubik Wet Paint', 'sans-serif'],
        abel: ['Abel', 'sans-serif']
      }
    },
  },
  plugins: [],
}

