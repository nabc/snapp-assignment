/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#CFF4FF",
          100: "#6FDDFF",
          200: "#27CDFF",
          300: "#00AADD",
          400: "#0097C5",
          500: "#0085af",
          600: "#007BA1",
          700: "#007295",
          800: "#005F7C",
          900: "#004C63",
        },
      },
    },
  },
  plugins: [],
};
