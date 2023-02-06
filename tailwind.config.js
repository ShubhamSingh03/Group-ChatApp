/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        appBg: "#0f0e17",
        buttonColor: "#ff8906",
        buttonTextcolor: "#fffffe",
        chatBackground: "rgba(10, 14, 14, 0.95)",
        chatPanelBackground: "#131719",
      },
      boxShadow: {
        buttonShadow: "2px 2px 4px 1px rgba(255, 137, 6, 0.4)",
        infoCardshadow:
          "15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #fff",
      },
    },
  },
  plugins: [],
};
