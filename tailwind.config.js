module.exports = {
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px'
        },

        colors: {
            brand: '#6b46c1',
            black: '#000000',
            gray: '#CCCCCC',
            white: '#FFFFFF',
            transparent: 'rgba(0,0,0,0)'
        },

        fontFamily: {
            ibmplexsans: ['"IBM Plex Sans"', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif']
        },

        extend: {
            fontSize: {
                huge: '3vw',
                huge2: '2vw'
            },

            width: {
                '50vw': '50vw'
            },

            gridTemplateColumns: {
                lombizlg: '1fr repeat(12, 85px) 1fr',
                lombizxl: '1fr repeat(12, 106px) 1fr',
                lombiz2xl: '1fr repeat(12, 120px) 1fr'
            },

            gridColumnEnd: {
                14: '14',
                15: '15'
            }
        }
    },

    variants: {},

    plugins: [],

    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
            // TypeScript
            'plugins/**/*.ts',
            'nuxt.config.ts'
        ]
    }
}
