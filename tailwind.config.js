/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.{html,js,ts,jsx,tsx}",
      "./js/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            'navbar-blue': '#2196f3'
        },
    },
  },
  plugins: [],
}
