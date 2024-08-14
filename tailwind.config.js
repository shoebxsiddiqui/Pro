/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "2/10": "20%",
        "8/10": "80%",
      },
    },
  },
  plugins: [],
};
