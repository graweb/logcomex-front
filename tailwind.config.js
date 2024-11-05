/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "lc-purple": {
          "100": '#ede9fe',
          "200": '#ddd6fe',
          "300": '#c4b5fd',
          "400": '#a78bfa',
          "500": '#8b5cf6',
          "600": '#7c3aed',
          "700": '#6d28d9',
          "800": '#5b21b6',
          "900": '#4c1d95',
          "950": '#3b0764',
        },
      },
    },
  },
  plugins: [],
}

