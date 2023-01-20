module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'funky': {'raw': '(max-height: 750px)'},
        // => @media (max-height: 1234px) { ... }
      }
    },
    
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
  ],
}