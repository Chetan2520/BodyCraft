/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'font':"Faculty Glyphic"
      },
      color:{
        'dark':"#00010a"
      }
    },
  },
  plugins: [],
}

