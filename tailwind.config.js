/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        turquoise: '#00C4B4',
        coral: '#FF6F61',
        charcoal: '#333333',
        softGray: '#F7F7F7',
      },
    },
  },
  plugins: [],
};