/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080a08",
        surface: {
          DEFAULT: "#0d100d",
          elevated: "#111411",
          subtle: "#151815",
          border: "rgba(255, 255, 255, 0.06)",
          borderHover: "rgba(255, 255, 255, 0.14)"
        },
        arch: {
          blue: "#0ea5e9",
          cyan: "#38bdf8",
          dark: "#050605"
        },
        status: {
          healthy: "#10b981",
          warning: "#f59e0b",
          incident: "#ef4444",
          info: "#38bdf8",
        },
        text: {
          primary: "#f2f2ee",
          secondary: "#858a86",
          muted: "#505551",
          disabled: "#2f3330"
        }
      },
      fontFamily: {
        sans: ["Geist Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '10px',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
