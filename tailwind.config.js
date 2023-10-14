/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,vue}', './index.html'],
  theme: {
    extend: {
      colors: {
        // ----------------------------------------------------------------
        // generated from https://javisperez.github.io/tailwindcolorshades/?primary=316d88&secondary=b94c48&tertiary=e48d40
        primary: {
          50: '#F2F9FA',
          100: '#E4F0F2',
          200: '#BCD9E0',
          300: '#99C3CF',
          400: '#5E96AB',
          500: '#316d88',
          600: '#275D7A',
          700: '#1C4866',
          800: '#123552',
          900: '#0A233D',
          950: '#041326',
        },
        secondary: {
          50: '#FCF9F5',
          100: '#F7EFE9',
          200: '#EDD8CA',
          300: '#E3BEAC',
          400: '#CF8676',
          500: '#b94c48',
          600: '#A83F3B',
          700: '#8C2C29',
          800: '#701D1A',
          900: '#54100F',
          950: '#360706',
        },
        tertiary: {
          50: '#FCFAF2',
          100: '#FCF7EB',
          200: '#F7E9CB',
          300: '#F5DBAE',
          400: '#EBB675',
          500: '#e48d40',
          600: '#CC7833',
          700: '#AB5C24',
          800: '#874017',
          900: '#662B0D',
          950: '#421805',
        },
        // ----------------------------------------------------------------
      },
      fontFamily: {
        'sans': ['"Noto Sans SC Variable"', 'sans'],
      }
    },
  },
  plugins: [],
}
