/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        xs: "540px",
        // => @media (min-width: 360px) { ... }
        sm: "712px",
        // md: "768px",
        // // => @media (min-width: 768px) { ... }

        // lg: "1024px",
        // // => @media (min-width: 1024px) { ... }

        // xl: "1280px",
        // // => @media (min-width: 1280px) { ... }

        // "2xl": "1536px",
        // // => @media (min-width: 1536px) { ... }
      },
      colors: {
        gold: "gold",
        grey: "#F3F4F6",
      },
      fontSize: {
        big: "20px",
      },
      margin: {
        35: "35%",
        98: "35rem",
      },
      width: {
        98: "35rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-ribbon": {
          clipPath: "polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)",
        },
      });
    },
  ],
};
