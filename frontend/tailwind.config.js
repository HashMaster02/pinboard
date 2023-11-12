/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx, js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "figtree": ['Figtree', 'sans-serif'],
        "shantell sans": ['Shantell Sans', 'sans-serif']
      },
      colors: {
        'dark-blue': '#022B3A',
        'bluish-turqoise': '#1F7A8C',
        'light-blue': '#BFDBF7',
        'baby-white': '#E1E5F2',
      }
    },
  },
  plugins: [],
}

