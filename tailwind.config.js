export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        navy: {
          900: '#0A1A2F',
          800: '#11243F',
        },
        crimson: '#B22234',
        steel: '#E5E7EB',
      }
    }
  },
  plugins: [],
}
