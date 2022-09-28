const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/html/**/*.html',
    './src/script/data/**/*.js',
    './src/script/view/**/*.js',
    './src/script/components/**/*.js'
  ],
  theme: {
    fontFamily: {
      primary: ['"Varela Round"', ...defaultTheme.fontFamily.sans],
      secondary: ['"Titillium Web"', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      'sm': '640px',      
      'md': '768px',      
      'lg': '1024px',
      'xl': '1366px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        head: '#EB1D36',
      },
    },
  },
  plugins: [],
}
