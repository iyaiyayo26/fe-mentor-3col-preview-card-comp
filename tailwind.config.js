/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-orange": "#e38826",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "dark-cyan": "	#006970",
        "very-dark-cyan": "	#004241",
      },
      fontFamily: {
        "big-shoulders": ["Big Shoulders Display", "cursive"],
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
