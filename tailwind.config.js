const themes = ['dark', 'winter', 'synthwave', 'halloween', 'cmyk', 'forest'];
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scale: {
          '0%': { scale: '0' },
          '100%': { scale: '100%' },
        },
      },
      animation: {
        scale: 'scale 100ms linear',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes,
  },
};
