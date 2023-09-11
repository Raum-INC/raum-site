/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // extend colors
      colors: {
        primary: "#00F",
        primary_text: "#121212",
        seconfary: "#6C6C6C",
        fade: "#878787",
        faded: "#5A5A5A",
      },
      listStyleImage: {
        checkmark: 'url("/src/assets/checkmark.svg")',
      },
    },
  },
  plugins: [],
};
