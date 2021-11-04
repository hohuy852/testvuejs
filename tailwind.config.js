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
        'band-story': '#0565bb',
        'happened': '#fccb05',
        'brand-product': '#ff5500'
      },
      textColor: {
        'primary': '#f96400',
        'price': '#222222',
        'like': '#666666',
        'yellow-1': '#fcd32a',
        'gray-1': ' #a9a9a9',

      },
      fontSize: {
        'h2': ["50px", { lineHeight: 1.2 }],
        'header': ["14px", { lineHeight: 2.14 }],
        'hero-title': ["50px", { lineHeight: 0.54 }],
        'paragrahp': ["20px", { lineHeight: 1.75 }],
        'paragrahp2': ["20px", { lineHeight: 1.6 }],
        'product': ["20px", { lineHeight: 1.5 }],
        'badge': ["30px", { lineHeight: 0.83 }],
        'product-item': ["18px", { lineHeight: 1.94 }],
        'product-action': ["16px", { lineHeight: 2.19 }],
        'see-more': ["23px", { lineHeight: 1.09 }],
        'title': ["45px", { lineHeight: 1.33 }],
        'footer': ["14px", { lineHeight: 1.71 }],
        'ban-title': ["25px", { lineHeight: 2.4 }],
        'ban-paragraph': ["16px", { lineHeight: 1.88 }],
        'brand': ["30px", { lineHeight: 1.67 }],
        'whpn': ["55px", { lineHeight: 1.07 }],
        'whpn-title': ["50px", { lineHeight: 1.2 }]
      },
      padding: {
        "119": '119px',
        "116": '116px',
        "174": '174px',
        "150": '150px',
        "181": "181px",
        "149": "149px",
        "49": "49px",
        "74": "74px",
        "197": '197px',
        "21": '21px',
        "77": "77px",
        "45": "45px",
        "39": "39px",
        "62": "62px",
        "68": "68px",
        "47": "47px",
        "54": "54px",
        "170": '170px',
        "158": '158px',
        "55": "55px",
        "128": "128px",
        "142": "142px",
        "148": "148px",
        "50": "50px",
      },
      width: {
        '369': '369px',
        '612': '612px',
        '418': '418px',
        '387': '380px'
      },
      inset: {
        '656': '656px',
        '648': '648px',
        "183": '183px',
        "169": '169px',
        "61": '61px',
        "114": '114px',
        "171": '171px',
        "256": '256px',
        "203": '203px',
        "186": '186px',
        "309": '309px',
        "244": '244px',
        "242": '242px',
        "276": '276px',
        "270": '270px',
        "150": '150px',
        "168": '168px',
        "147": "147px",
        '348': '348px',
        '223': '223px',
        '226': '226px',
        '314': '314px',
      },
      height: {
        '79': '79px',
        '480': '480px'
      },
      margin: {
        "174": '174px',
        "59": '59px',
        "149": "149px",
        "49": "49px",
        "45": "45px",
        "39": "39px",
        "62": "62px",
        "68": "68px",
        "47": "47px",
        "54": "54px",
        "74": "74px",
        "116": '116px',
        "77": "77px",
        "55": "55px",
        "128": "128px",
        "142": "142px",
      },
      letterSpacing: {
        '5': '5px',
        '4.5': '4.5px'
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
