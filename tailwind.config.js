const themes = [
  {
    smile: {
      primary: '#ff543d',
      secondary: '#ffb522',
      accent: '#53d7b7',
      neutral: '#1D222A',
      'base-100': '#f4f1ec',
      info: '#88ACD7',
      success: '#177D6A',
      warning: '#CBA006',
      error: '#E25336',
    },
    'el regaldo': {
      primary: '#947cd3',
      secondary: '#ef8a70',
      accent: '#ce980e',
      neutral: '#2E2532',
      'base-100': '#242C47',
      info: '#7FBADC',
      success: '#19E6C7',
      warning: '#C99B13',
      error: '#F35862',
    },
  },
  'dark',
  'winter',
  'synthwave',
  'halloween',
  'cmyk',
  'forest',
  'night',
];
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
