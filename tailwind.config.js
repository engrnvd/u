/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./examples/index.html",
        "./components/**/*.{vue,js,ts,jsx,tsx}",
        "./composables/**/*.{vue,js,ts,jsx,tsx}",
        "./directives/**/*.{vue,js,ts,jsx,tsx}",
        "./examples/**/*.{vue,js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    light: 'var(--primary-light)',
                    lighter: 'var(--primary-lighter)',
                    DEFAULT: 'var(--primary)',
                    dark: 'var(--primary-dark)',
                    darker: 'var(--primary-darker)',
                },
                neutral: {
                    light: 'var(--neutral-light)',
                    lighter: 'var(--neutral-lighter)',
                    DEFAULT: 'var(--neutral)',
                    dark: 'var(--neutral-dark)',
                    darker: 'var(--neutral-darker)',
                },
                success: {
                    light: 'var(--success-light)',
                    lighter: 'var(--success-lighter)',
                    DEFAULT: 'var(--success)',
                    dark: 'var(--success-dark)',
                    darker: 'var(--success-darker)',
                },
                danger: {
                    light: 'var(--danger-light)',
                    lighter: 'var(--danger-lighter)',
                    DEFAULT: 'var(--danger)',
                    dark: 'var(--danger-dark)',
                    darker: 'var(--danger-darker)',
                },
                warn: {
                    light: 'var(--warn-light)',
                    lighter: 'var(--warn-lighter)',
                    DEFAULT: 'var(--warn)',
                    dark: 'var(--warn-dark)',
                    darker: 'var(--warn-darker)',
                },
                light: 'var(--light)',
                dark: 'var(--dark)',
                text: 'var(--text)',
                bg: 'var(--bg)',
                'bg-body': 'var(--body-bg)',
                muted: 'var(--muted)',
                'semi-muted': 'var(--semi-muted)',
                overlay: 'var(--overlay)'
            },
            boxShadow: {
                DEFAULT: '0 2px 2px 0 rgb(0 0 0 / 0.2), 0 1px 5px 0 rgb(0 0 0 / 0.1)'
            },
            backgroundColor: {
                DEFAULT: 'var(--bg)',
            },
            borderColor: {
                DEFAULT: 'var(--border-color)',
            },
            borderRadius: {
                'none': '0',
                'sm': '.125rem',
                'md': '.5rem',
                DEFAULT: 'var(--border-radius)',
                'lg': '1.25rem',
                'full': '9999px',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
    },

    safelist: [
        {
            pattern: /(border|bg|text)-(primary|neutral|warn|danger|success).*/,
            variants: ['hover', 'focus']
        },
    ],
}

