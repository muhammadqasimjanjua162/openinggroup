// tailwind.config.js
module.exports = {
  theme: {
    keyframes: {
      slowSlide: {
        "0%": { transform: "translateX(100%)", opacity: "0" },
        "10%": { opacity: "1" }, // Fade in
        "100%": { transform: "translateX(0%)", opacity: "1" },
      },
    },
    animation: {
      slowSlide: "slowSlide 5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
    },

    extend: {
      colors: {
        primary: "#ff6347", // Custom color
        secondary: "#4a90e2", // Custom secondary color
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"], // Custom fonts
      },
      spacing: {
        128: "32rem", // Custom spacing
      },
      boxShadow: {
        custom: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Custom box shadow
      },
    },
  },
  plugins: [],
};
