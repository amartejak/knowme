import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: ['active', 'group-hover', 'hover', 'focus', 'even', 'odd', 'responsive', 'dark', 'dark-focus', 'dark-hover', 'dark-active','opacity']
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
