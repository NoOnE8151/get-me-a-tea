/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        exo: ["Exo", "sans-serif"],
        kaushanScript: ["Kaushan Script", "cursive"]
      },
      colors: {
        'backgroundColor': '#E7ECEF',
        'elementColor': '#0437F2',
        'secondaryTextColor': '#6B7280',
        'secondaryBackgroundColor': '#F2F2F2',
      }
    },
  },
  plugins: [],
};
