import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (mirrors design-system/colors_and_type.css)
        ink: {
          900: '#0E1428',
          800: '#141B33',
          700: '#1A2341',
          600: '#242E54',
          500: '#2E3A67',
          400: '#4C578A',
          DEFAULT: '#1A2341',
        },
        royal: {
          700: '#1F3E7A',
          600: '#2B519E',
          500: '#3E66B4',
          400: '#5D83C8',
          300: '#86A4D8',
          200: '#B7CBE6',
          100: '#DCE5F2',
          50: '#F0F3FA',
          DEFAULT: '#2B519E',
        },
        gold: {
          700: '#8C6A2F',
          600: '#B0863D',
          500: '#C9A24E',
          400: '#D9B66A',
          300: '#E6CB91',
          200: '#F0DEB7',
          100: '#F8EED9',
          DEFAULT: '#D4AF7A',
        },
        mist: '#F0F3FA',
        // Brand black — preferred page background
        nightblack: '#0A0E1C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        text: ['var(--font-text)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0.0, 0.0, 1.0)',
        emph: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      letterSpacing: {
        tightest: '-0.035em',
        tight2: '-0.03em',
        tight1: '-0.02em',
      },
      maxWidth: {
        wrap: '1240px',
        wrapsm: '980px',
      },
    },
  },
  plugins: [],
};

export default config;
