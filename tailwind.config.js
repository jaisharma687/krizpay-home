/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      inter: ['var(--font-inter)'],
      interBold: ['var(--font-inter-bold)'],
    },
  },
},

  plugins: [],
};
