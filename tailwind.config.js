/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0d10',
        card: {
          DEFAULT: '#13151b',
          foreground: '#e2e4ea',
        },
        border: 'rgba(255, 255, 255, 0.08)',
        // 오직 하나의 강조색: 밝은 연두색 (Lime)
        accent: {
          DEFAULT: '#a3e635',
          light: '#bef264',
          dark: '#65a30d',
          subtle: 'rgba(163, 230, 53, 0.1)',
          border: 'rgba(163, 230, 53, 0.25)',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      },
    },
  },
  plugins: [],
}
