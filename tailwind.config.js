/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#457b9d",
        cardGrey:"#dae4ea",
        darkPrimary:"#213c4c",
      }
    },
  },
  plugins: [],
}

