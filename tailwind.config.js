/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './app/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true, // This centers the container
      screens: {
        lg: '1030px',
      },
    },
    extend: {
      animation: () => ({
        appear: 'appear 300ms',
        slideIn: 'slideIn 0.5s',
      }),
      backgroundImage: () => ({
        'custom-gradient':
          'linear-gradient(52.68deg, #71717a 7.29%, #18181b 92.91%)',
      }),
      boxShadow: () => ({
        'custom-sh': 'box-shadow: 4px 4px 10px 0px #1E293B1A',
      }),

      colors: {
        zinc: { 700: '#283943' },
      },
      keyframes: () => ({
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-150px)' },
          '100%': { transform: 'translateY(0);' },
        },
      }),

      spacing: () => ({
        modalHight: 'calc(100vh - 40px)',
      }),
    },
  },
};
