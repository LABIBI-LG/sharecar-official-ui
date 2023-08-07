/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {},
      colors: {
        primary: {
          100: '#c7d8e0',
          200: '#a0b5c5',
          300: '#7a92aa',
          400: '#648195',
          500: '#6b95a8', // 原本的顏色
          600: '#5a829b',
          700: '#4a6f8e',
          800: '#395c82',
          900: '#285a75',
        },
        secondary: {
          100: '#f5f8f9',
          200: '#eff3f6',
          300: '#e9eff2', // 中間色號
          400: '#e3ebf0',
          500: '#dee7ed',
          600: '#d8e3ea',
          700: '#d2dfe7',
          800: '#ccebe4',
          900: '#c6e7e1',
        },
        gray: {
          50: '#f5f4f4',
          100: '#ededed',
          200: '#d8d8d8',
          300: '#d6d6d6',
          400: '#cacaca',
          500: '#a6a6a6',
          600: '#a1a1a1',
          700: '#979797',
          800: '#8b8b8b',
          900: '#808080',
        },
        dark: {
          400: '#4d4e4d',
          500: '#4f4f4f',
          600: '#464646',
          700: '#3d3d3d',
          800: '#2d2d2d',
          900: '#282828',
        },
        danger: {
          200: '#f7eaec',
          300: '#cb747e',
          400: '#a35858',
          500: '#db5060',
        },
        warn: {
          200: '#f7f3ea',
          500: '#bc9e5c'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
