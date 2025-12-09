/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // New color palette matching Figma design
        background: "#0A0A0A",
        sidebar: "#111111",
        card: "#111111",
        surface: "#0A0A0A",
        border: "#1F1F1F",
        "border-light": "#2A2A2A",
        muted: "#6B6B6B",
        // Teal accent
        accent: {
          DEFAULT: "#14B8A6",
          hover: "#0D9488",
          muted: "#14B8A6/20",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "toast-in": "toastIn 0.4s ease-out",
        "toast-out": "toastOut 0.3s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        toastIn: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        toastOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
