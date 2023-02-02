const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Bio Sans', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                brand: {
                    primary: {
                        blue: {
                            lightest: '#454AD9',
                            lighter: '#2A2FCB',
                            light: '#2327A9',
                            DEFAULT: '#1A1E7E',
                            dark: '#151866',
                            darker: '#111455',
                            darkest: '#0E1044',
                        },

                        'light-blue': {
                            lightest: '#6571E2',
                            lighter: '#4352DB',
                            light: '#3142D8',
                            DEFAULT: '#2331B5',
                            dark: '#1D2A9A',
                            darker: '#172178',
                            darkest: '#101756',
                        },
                    },

                    secondary: {
                        indigo: {
                            lightest: '#A29AFE',
                            lighter: '#7D72FE',
                            light: '#6B5DFD',
                            DEFAULT: '#5244FD',
                            dark: '#3321FD',
                            darker: '#1602F2',
                            darkest: '#1102B6',
                        },

                        pink: {
                            lightest: '#F7B6F4',
                            lighter: '#F391EE',
                            light: '#EF6CE8',
                            DEFAULT: '#EA46E3',
                            dark: '#E723DD',
                            darker: '#DC18D3',
                            darkest: '#CA16C1',
                        },

                        blue: {
                            lightest: '#88BCFC',
                            lighter: '#60A6FB',
                            light: '#4C9AFA',
                            DEFAULT: '#1E82F9',
                            dark: '#066FFF',
                            darker: '#055CC7',
                            darkest: '#04418B',
                        },

                        'sky-blue': {
                            lightest: '#AFEFFD',
                            lighter: '#87E7FD',
                            light: '#5FDFFC',
                            DEFAULT: '#33D7FB',
                            dark: '#0FCFFA',
                            darker: '#04B4DC',
                            darkest: '#0494B4',
                        },

                        yellow: {
                            lightest: '#FED686',
                            lighter: '#FDC85D',
                            light: '#FDBA35',
                            DEFAULT: '#FAA803',
                            dark: '#DE9502',
                            darker: '#B67A02',
                            darkest: '#8D5F01',
                        },

                        gray: {
                            DEFAULT: '#F8F8F7',
                        },
                    },
                },
            },
        },

        plugins: [],
    },
};
