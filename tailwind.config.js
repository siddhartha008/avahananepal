/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        'signika-negative': ['Signika Negative', 'sans-serif'],
      },
      colors: {
        'sa': '#B5B682',
        'cb': '#7C9885',
        'cc': '#28666E',
        'id': '#033F63',
        'py': '#FEDC97',
        'platinum': '#E8EDEA',
        'yellow-custom-100': '#FFF2D7',
      },
      container: {
        center: true,
        padding: '2.5rem',
      }
    },
  },
  plugins: [],
}