/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "2/10": "20%",
        "8/10": "80%",
      },
      keyframes: {
        moveBack: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50px)" },
          "100%": { transform: "translateX(0)" },
        },
        fallIn: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        moveBack: "moveBack 1s ease-out",
        fallIn: "fallIn 1s ease-out",
      },
    },
  },
  plugins: [],
};
