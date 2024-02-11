/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                'default': '18px',
                'subtitle': '24px',
                'label': '36px',
                '2xl': '2vw',
                '4xl': '100px',
                '5xl': '5vw',
            },
            colors: {
                'lightGrey': '#f3f4f6',
            },
            boxShadow: {
                'excursion': '11px 12px 24px -3px rgba(0,0,0,0.5);',
                'excursion-dark': '5px 6px 12px -1px rgba(0,0,0,0.6);',
                'burger': '0px 4px 23px -3px rgba(0,0,0,0.1);',
            },
            borderRadius: {
                'default': '40px',
            },
            fontFamily: {
                serif: ['Montserrat', 'sans-serif']
            },
            keyframes: {
                slideToRight: {
                    'from': {
                        transform: 'translateX(-100vh)',
                        opacity: '0',
                    },
                    'to': {
                        transform: 'translateX(0)',
                        opacity: '1',
                    },
                },
              slideToLeft: {
                'from': {
                  transform: 'translateX(0)',
                  opacity: '1',
                },
                'to': {
                  transform: 'translateX(-100vh)',
                  opacity: '0',

                },
              },
            },
            animation: {
                'slide-to-right': 'slideToRight 1s ease forwards',
                'slide-to-left': 'slideToLeft 1s ease forwards',
            },
        },
    },
    plugins: [],
}
