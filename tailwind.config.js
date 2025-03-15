import { createThemes } from 'tailwindcss-themer'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        accent: "#10B981"
      }
    },
  },
  // Activamos el modo JIT por defecto en la v4 (esto viene por defecto ahora)
  plugins: [],
}