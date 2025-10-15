/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // 'node_modules/preline/dist/*.{js,ts,jsx,tsx}',
    // './node_modules/preline/preline.js',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['12px'],
      },
      colors: {
        main: {
          yellow: '#FFC515',
        },
      },
      height: {
        'screen-897px': '897px', // 90% of the viewport height
        'screen-80': '80vh', // 80% of the viewport height
      },
    },
    fontFamily: {
      sans: [], // 기본 sans-serif 폰트 제거
      serif: [],
      mono: [],
    },
  },
  //  plugins: [require('preline/plugin')],
  plugins: [],
};
