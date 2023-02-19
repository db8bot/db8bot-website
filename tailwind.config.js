module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./globalCompoents/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bgBlack': '#131415',
        'candy1': '#CB5EEE',
        'candy2': '#4BE1EC',
        'btnLearnMore': '#2E323D',
        'nebula1': '#6699FF',
        'nebula2': '#FF3366',
        'orangewheel': '#EE7D14',
        'rosered': '#BC3455',
        'unicorn1': '#FFCC33',
        'unicorn2': '#E233FF',
      },
      animation: {
        'fade': 'fade ease 3s'
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
      }
    },
    fontFamily: {
      sans: ['inter', 'sans-serif']
    }
  },
  plugins: [
  ]
}
