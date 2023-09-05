/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto':['Roboto','sans-serif'],
        'raleway':['Raleway','sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

