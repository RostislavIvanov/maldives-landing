/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                'default': '20px',
                'subtitle': '45px',
                '5xl': '160px',
                'button': '28px',
            },
            colors: {
                'blue': '#27c9d9',
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
