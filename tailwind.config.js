/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // extend colors
      colors: {
        primary: "#00F",
        fade: "#878787",
        faded: "#5A5A5A",
      },
    },
  },
  plugins: [],
};
