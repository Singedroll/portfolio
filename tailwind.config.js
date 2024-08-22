module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#F9FAFB", // Define the custom gray color
      },
      boxShadow: {
        custom:
          "0px 4px 3px 0px rgba(0, 0, 0, 0.10), 0px 10px 8px 0px rgba(0, 0, 0, 0.04)", // Define the custom shadow
      },
    },
  },
  plugins: [],
};
