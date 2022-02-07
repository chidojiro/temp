module.exports = {
  mode: 'jit',
  content: ['./**/*.{tsx,ts}'],
  theme: {
    fontSize: {
      small: '10px',
      'medium-sm': '11px',
      medium: '12px',
      'regular-sm': '13px',
      regular: '14px',
      h5: '16px',
      h4: '18px',
      h3: '20px',
      h2: '24px',
      h1: '28px',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#464646',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
      textColor: {
        gray: {
          100: '#464646',
          200: '#797979',
          300: '#969696',
          400: '#BFBFBF',
          500: '#DEDEDE',
          600: '#E2E2E2',
          700: '#EFEFEF',
          800: '#F7F7F7',
        },
      },
      colors: {
        lightenSlate: {
          50: '#F7F7F7',
        },
        f0: {
          500: '#869DE8',
        },
        f1: {
          500: '#55C5D9',
        },
        f2: {
          500: '#A5D559',
        },
        f3: {
          500: '#FFBA00',
        },
        loyal: {
          500: '#FF7D58',
        },
        sleepy: {
          500: '#B4B4B4',
        },
        secondary: {
          50: '#fff7e0',
          100: '#ffeab3',
          200: '#ffdd80',
          300: '#ffcf4d',
          400: '#ffc426',
          500: '#ffba00',
          600: '#ffb300',
          700: '#ffab00',
          800: '#ffa300',
          900: '#ff9400',
          A100: '#ffffff',
          A200: '#fff9f2',
          A400: '#ffe1bf',
          A700: '#ffd5a6',
        },
        primary: {
          50: '#ebf8fa',
          100: '#cceef4',
          200: '#aae2ec',
          300: '#88d6e4',
          400: '#6fcedf',
          500: '#55c5d9',
          600: '#4ebfd5',
          700: '#44b8cf',
          800: '#3bb0ca',
          900: '#2aa3c0',
          A100: '#ffffff',
          A200: '#cef5ff',
          A400: '#9beaff',
          A700: '#81e5ff',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
