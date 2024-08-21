export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redFontColor: "hsl(14, 86%, 42%)",
        dispaearText: "hsl(13, 31%, 94%)",
        darkRedColor: "hsl(14, 65%, 9%)",
        secondTextColor: "hsl(12, 20%, 44%)",
        boxColor: "hsl(20, 50%, 98%)",
        backgroundPageColor: "hsl(14, 25%, 72%)",
        penetratingWhite: "hsl(7, 20%, 60%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
