/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c12",
        surface: {
          DEFAULT: "#0e131d",
          elevated: "#121926",
          card: "#0f1520",
          subtle: "#171717",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.05)"
        },
        brand: {
          green: "#8cff2e",
          greenHover: "#9eff47",
          dark: "#09090b"
        },
        text: {
          primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.7)",
          muted: "rgba(255, 255, 255, 0.5)",
          disabled: "rgba(255, 255, 255, 0.3)"
        }
      },
      fontFamily: {
        sans: ["Onest", "Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        onest: ["Onest", "sans-serif"]
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
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
