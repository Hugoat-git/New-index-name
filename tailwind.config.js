/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0A97B0',
          deep: '#0A5EB0',
        },
        charcoal: '#2A3335',
        pink: {
          soft: '#FFCFEF',
        },
        offwhite: '#F5F9FF',
        accent: {
          green: '#C2FF00',
        }
      },
      fontFamily: {
        beastly: ['beastly', 'sans-serif'],
        acumin: ['acumin-pro', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #0A97B0 0%, #A66EFF 100%)',
        'gradient-radial': 'radial-gradient(circle at center, rgba(10, 151, 176, 0.1) 0%, rgba(166, 110, 255, 0.05) 100%)',
        'gradient-radial-pink': 'radial-gradient(circle at center, rgba(255, 192, 203, 0.5) 0%, rgba(0, 0, 0, 0) 70%)',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        shine: 'shine var(--duration, 14s) linear infinite',
      },
    },
  },
  plugins: [],
};