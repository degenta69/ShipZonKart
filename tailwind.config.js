module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // minHeight: {
    //   '0': '0',
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //   full: '100%'
    // },
    // backgroundColor: theme => ({
    //   primary: '#3490dc',
    //   secondary: '#ffed4a',
    //   danger: '#e3342f',
    //   button_netflex_hover: '#e6e6e6',
    //   button_netflex: '#1f1e1e'
    // }),
    extend: {
      screens: {
        'MAX2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'MAXxl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'MAXlg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'MAXmd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'MAXsm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    }
  },
  // variants: {
  //   extend: {
  //     animation: ['motion-reduce'],
  //     transitionProperty: [
  //       'hover',
  //       'focus',
  //       'responsive',
  //       'motion-safe',
  //       'motion-reduce'
  //     ]
  //   }
  // },
  // plugins: [],
}
