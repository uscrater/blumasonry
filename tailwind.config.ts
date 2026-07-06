import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      colors: {
        'dark-navy': '#060D1C',
        'deep-navy': '#001644',
        'dark-teal': '#0B191B',
        gold: '#E4B973',
        'dark-gold': '#DBA143',
        teal: '#1ABC9C',
        'light-text': 'rgba(237, 237, 237, 0.9)',
        'muted-white': 'rgba(247, 247, 247, 0.72)',
        'text-gray': '#7A7A7A',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'scroll-left': 'scroll-left 60s linear infinite',
        'scroll-right': 'scroll-right 60s linear infinite',
      },
    },
  },
  plugins: [],
  corePlugins: {
    float: false,
    clear: false,
    skew: false,
    caretColor: false,
    sepia: false,
    hueRotate: false,
    backdropHueRotate: false,
    backdropSepia: false,
  },
};
export default config;
