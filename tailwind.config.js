module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'brand': '#DE0E4D',
            'brand-light': '#E33268',
            'black': '#191919',
            'white': '#FFFFFF',
            'grey': '#9292A3',
            'grey-2': '#C7C8CE',
            'grey-3': '#E4E4E9',
            'grey-4': '#F3F4F7',
            'green': '#27AE60',
            'red': '#EB5757',
            'orange': '#FF9500',
            'yellow': '#FFC700',
            'background': '#F3F4F6',
            'transparent': 'transparent',
        },
        fontFamily: {
            sans: ['Jeko', 'sans-serif'],
        },
        borderRadius: {
            'md': '1.5rem',
            'full': '100%'
        },
        extend: {
            spacing: {
                '15': '3.75rem', // 60px
                '4.5': '1.125rem', // 18px
                '114': '28.5rem' // 456px
            },
        },
    },
    plugins: [],
}
