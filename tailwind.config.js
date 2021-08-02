module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#D6586C'
      },
      backgroundImage: theme => ({
        'gradient': "url('assets/Background.png')",
        'snippet': "url('assets/snippet.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
