/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Outfit": ['"Outfit"', 'sans-serif'],
        "Young": ['"Young Serif"', 'serif']
      },
      colors:{
        'Nutmeg': 'hsl(14, 45%, 36%)',
        'Dark-Raspberry': 'hsl(332, 51%, 32%)',
        'White': 'hsl(0, 0%, 100%)',
        'Rose-White': 'hsl(330, 100%, 98%)',
        'Eggshell': 'hsl(30, 54%, 90%)',
        'Light-Grey': 'hsl(30, 18%, 87%)',
        'Wenge-Brown': 'hsl(30, 10%, 34%)',
        'Dark-Charcoal': 'hsl(24, 5%, 18%)',
      }
    },
  },
  plugins: [],
}

