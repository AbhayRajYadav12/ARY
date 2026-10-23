/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        paper: '#FAF9F6',
        wash: '#F1F5F2',
        card: '#FFFFFF',
        ink: {
          DEFAULT: '#29352F',
          muted: '#68736D',
        },
        line: '#E4E8E2',
        hover: '#EDF4F0',
        blue: {
          pastel: '#8CB9D8',
          link: '#2F5F78',
        },
        sage: '#B8CDBB',
        lavender: '#D7C8E8',
      },
      boxShadow: {
        card: '0 12px 32px -20px rgba(41, 53, 47, 0.22)',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}
