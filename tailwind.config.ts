import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#78ADBE',
        'dark-gray': '#454444',
        'light-gray-100': '#D9D9D9',
        'light-gray-200': '#A6A4A4',
        'light-gray-600': '#575656'
      }
    },
  },
  plugins: [],
}
export default config
