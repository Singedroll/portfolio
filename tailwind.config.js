/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#F9FAFB",
        "gray-900": "var(--Gray-900, #111827)",
      },
      fontFamily: {
        rubikMono: ["Rubik Mono One", "sans-serif"],
      },
      fontSize: {
        "mobile-hero": "36px",
        "tablet-hero": "48px",
        "desktop-hero": "62px",
      },
      lineHeight: {
        "mobile-hero": "40px",
        "tablet-hero": "48px",
        "desktop-hero": "72px",
      },
      letterSpacing: {
        hero: "-2%",
      },
      width: {
        "hero-mobile": "240px",
        "hero-desktop": "280px",
      },
      height: {
        "hero-mobile": "280px",
        "hero-desktop": "320px",
      },
      width: {
        "aboutme-mobile": "280px",
        "aboutme-desktop": "400px",
      },
      height: {
        "aboutme-mobile": "360px",
        "aboutme-desktop": "480px",
      },
    },
  },
  plugins: [],
};
