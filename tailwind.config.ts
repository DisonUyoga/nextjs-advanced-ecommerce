import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ff00d7',

          secondary: '#f3a700',

          accent: '#be0000',

          neutral: '#1d1d1d',

          'base-100': '#fffaee',

          info: '#00bfff',

          success: '#00ac5c',

          warning: '#e17500',

          error: '#e92d4e',
          body: { 'background-color': '#e3e6e6' },
        },
      },
    ],
  },
}
export default config
