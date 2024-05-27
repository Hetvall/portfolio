/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customGray: "#373737",
        customWhite: "#f9f7f3",
        footerColor: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
