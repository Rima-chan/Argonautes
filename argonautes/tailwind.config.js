module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme =>({
      ...theme('colors'),
      'brownLight': '#ecdcbb',
      'brownMiddle': '#e6d1b0',
      'brownDark': '#ccaf85',
    }),
    extend: {
      fontFamily: {
        'candal': ['Candal', 'open-sans'],
        'lato': ['Lato', 'open-sans'],
        'sigmar': ['Sigmar', 'open-sans']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#F76C6C',
        primaryDark: '#d74f4f',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
