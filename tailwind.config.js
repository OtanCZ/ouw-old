/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            maxWidth: {
                '8xl': '1920px',
                'pfp': '180px',
                'avatar': '50px',
                'avatar-sm': '25px',
            },
            backgroundImage: {
                'hero': "url('/baseplate1080.png')",
            },
            colors: {
                'gradient-start': '#00aeff',
                'gradient-end': '#0e49f1'
            },
            backgroundSize: {
                'transition-200': '200% 100%',
            },
            keyframes: {
                'infinite-gradient': {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '199% 100%' },
                },
                'wiggle': {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            },
            animation: {
                'infinite-gradient': 'infinite-gradient linear 5s infinite',
                'wiggle': 'wiggle ease-in-out 1s infinite',
            }
        },
    },
    plugins: [],
}

