/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9B6CFF",
        secondary: "#7C3AED",
        background: "#050509",
        surface: "#0A0A12",
        textMain: "#F5F3FA",
        muted: "#8B8799",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      backgroundImage: {
        'circuit-pattern': "url('/circuit.svg')",
      }
    },
  },
  plugins: [],
}
