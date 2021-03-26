module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            'shopify':{
                'dark-green':'#002E24',
                'green':'#014C3E',
                'btn-green': '#008060',
                'cream': '#FAF7ED'
            }
        },
        fontFamily:{
            'shopify' : 'Noto Sans'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
