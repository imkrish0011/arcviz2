/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030305",
        surface: {
          DEFAULT: "#08080c",
          elevated: "#0d0f16",
          card: "#0a0b10",
          subtle: "#12141d",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.04)"
        },
        brand: {
          red: "#ff2d46",
          redHover: "#ff4d61",
          redDark: "#b91c1c",
          redGlow: "rgba(255, 45, 70, 0.25)",
          midnight: "#070b14",
          blueAccent: "#38bdf8",
        },
        text: {
          primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.75)",
          muted: "#858b9c",
          disabled: "rgba(255, 255, 255, 0.3)"
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Syne", "Plus Jakarta Sans", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
