/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      colors: {
        'dark': {
          100: '#d5d7db',
          200: '#acafb6',
          300: '#828792',
          400: '#595f6d',
          500: '#2f3749',
          600: '#252c3a',
          700: '#1b212c',
          800: '#12161d',
          900: '#090b0f',
        },
        'accent': '#6d28d9', // A purple shade, feel free to change
      }
    },
  },
  plugins: [],
}
