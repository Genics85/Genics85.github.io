/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors:{
        primary:"#457b9d",
        cardGrey:"#dae4ea",
        darkPrimary:"#213c4c",
        textColor:"#323232",
        secondaryHover:"#012033"
      }
    },
  },
  plugins: [],
}

