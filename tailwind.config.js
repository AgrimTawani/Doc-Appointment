/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/herobg.png')", 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

