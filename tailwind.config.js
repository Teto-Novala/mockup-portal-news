/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans Variable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ibm: ["IBM Plex Serif", "serif"],
      },
    },
  },
  plugins: [],
};
