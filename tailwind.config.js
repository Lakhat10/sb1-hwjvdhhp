/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',    // Vibrant Orange
        secondary: '#2EC4B6',  // Turquoise
        accent: '#FFBF69',     // Warm Yellow
        green: '#4CAF50',      // Fresh Green
        red: '#E71D36',        // Bright Red
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};