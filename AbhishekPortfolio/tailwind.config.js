/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:  {
      poppins: ["Poppins"," sans-serif"],

    },
    boxShadow: {
      'smoke': '0 4px 6px rgba(115, 115, 115, 0.3)', // Adjust the RGBA value to get the smoke color you desire
    },
  },
  plugins: [],
}

