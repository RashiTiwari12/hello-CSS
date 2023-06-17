/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./src/input.css -o ./build/css/style.css