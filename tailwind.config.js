/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#006989',
        mainOrange: '#E88D67',
        mainGray: '#F3F7EC'
      }
      
    },
  },
  plugins: [],
}

