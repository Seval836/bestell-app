/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        tlb: {
          orange: "#BE5504",
          green: "#84A366",
          blue: "#7385AB",
          light: "#F3F4F7",
          yellow: "#EEAE00",
        },
      },
    },
  },
  plugins: [],
};
