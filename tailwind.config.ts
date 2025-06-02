/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // <- zorg dat deze paths kloppen
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E6F6C',
        'primary-dark': '#145955',
        secondary: '#FFEBD0',
        accent: '#D1E0D7',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
