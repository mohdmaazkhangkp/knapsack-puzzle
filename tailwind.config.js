/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        balooThambi2: ['Baloo Thambi 2', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        balooThambi: ['balooThambi', 'sans-serif'],
      },
      colors:{
        primary: "#F86509",
        blue: "#00A2F1",
        yellow: "#FFDA00",
        green: "#34E816",
        red: "#EF4444"
      }
    },
  },
  plugins: [],
}