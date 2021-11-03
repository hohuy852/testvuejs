module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'body': ["'Montserrat', sans-serif"],
      'korean': ["'Noto Sans Korean', sans-serif"]
    },
    extend: {
      gap: {
        '76': "76px"
      },
      colors: {
        'dark': '#11111',
        'primary': '#ea4913',
        'band-story': '#0565bb'
      },
      textColor:{
        'primary': '#f96400',
        'price': '#222222',
        'like': '#666666',
        'yellow-1': '#fcd32a',
        'gray-1':' #a9a9a9'
      },
      fontSize: {
        'h2': ["50px", { lineHeight: 1.2 }],
        'header': ["14px", { lineHeight: 2.14 }],
        'hero-title': ["50px", { lineHeight: 0.54 }],
        'paragrahp':  ["20px", { lineHeight: 1.75}],
        'paragrahp2':  ["20px", { lineHeight: 1.6}],
        'product':  ["20px", { lineHeight: 1.5}],
        'badge':  ["30px", { lineHeight: 0.83}],
        'product-item':  ["18px", { lineHeight: 1.94}],
        'product-action': ["16px", { lineHeight: 2.19}],
        'see-more':  ["23px", { lineHeight: 1.09}],
        'title': ["45px", { lineHeight: 1.33}],
        'footer': ["14px", { lineHeight: 1.71 }],
      },
      padding: {
        "119": '119px',
        "174": '174px',
        "150": '150px',
        "181": "181px",     
      },
      width:{
        '369': '369px'
      },
      height:{
        '79': '79px'
      },
      margin:{
        "174": '174px'
      },
      letterSpacing:{
        '5px': '5px'
      },
      maxWidth: {
        '180': '200px',
      }

    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark']

    },
  },
  plugins: [],
}