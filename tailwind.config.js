/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3f1eae",
        "background-light": "#f9fafb",
        "background-dark": "#151220",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
