/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "neon-green": "var(--neon-green)",
        "normal-green": "var(--normal-green)",
        "flat-sea-blue": "var(--flat-sea-blue)",
        "sea-blue": "var(--sea-blue)",
        "dark-sea-blue": "var(--dark-sea-blue)",
        "dark-navy-blue": "var(--dark-navy-blue)",
        "navy-blue": "var(--navy-blue)",
        "slate-gray": "var(--slate-gray)",
        "golden-brown": "var(--golden-brown)",
        "papayawhip" : "var(--papayawhip)"
      },
      fontFamily: {
        roboto: ["Roboto Mono", "sans-serif"]
      }
    },
  },
  plugins: [],
}

