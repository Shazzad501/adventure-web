/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        winter: {
          primary: "#A0D8EF",
          secondary: "#BCC6CC",
          accent: "#F0F8FF",
          neutral: "#4B5563", // Cool dark gray
          "base-100": "#F0F8FF", // Snow white
          info: "#93C5FD",
          success: "#34D399",
          warning: "#FBBF24",
          error: "#F87171",
        },
      },
    ],
  },
}