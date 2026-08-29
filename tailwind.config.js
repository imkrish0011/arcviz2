/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090a",
        surface: {
          DEFAULT: "#0e1013",
          elevated: "#12151a",
          card: "#0d0f14",
          subtle: "#181b22",
          border: "#1e2229",
          borderHover: "#2e3440"
        },
        arch: {
          blue: "#0ea5e9",
          blueHover: "#38bdf8",
          blueDim: "rgba(14, 165, 233, 0.12)",
          dark: "#050607"
        },
        status: {
          healthy: "#10b981",
          healthyDim: "rgba(16, 185, 129, 0.12)",
          warning: "#f59e0b",
          warningDim: "rgba(245, 158, 11, 0.12)",
          incident: "#ef4444",
          incidentDim: "rgba(239, 68, 68, 0.12)",
          info: "#0ea5e9",
          infoDim: "rgba(14, 165, 233, 0.12)",
        },
        text: {
          primary: "#ededed",
          secondary: "#888d96",
          muted: "#5e636e",
          disabled: "#3a3e48"
        }
      },
      fontFamily: {
        sans: ["Geist Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        'card': '8px',
        'subtle': '6px',
      }
    },
  },
  plugins: [],
}
