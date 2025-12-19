/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors from previous theme
        thunder: '#262324',
        mischka: '#E0E1E5',
        athensGrey: '#EAEBF0',
        linkWater: '#F7F8FD',
        // Aliases for semantic naming
        brightGrey: '#EAEBF0',
        glossyBlack: '#262324',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Antonio', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
      transitionTimingFunction: {
        'in': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        'in': '300ms',
        'out': '150ms',
      },
    },
  },
  plugins: [],
};

