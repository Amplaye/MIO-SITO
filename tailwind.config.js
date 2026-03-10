/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(240 10% 4%)",
        foreground: "hsl(0 0% 98%)",
        card: "hsl(240 10% 6%)",
        "card-foreground": "hsl(0 0% 98%)",
        primary: "hsl(263 70% 58%)",
        "primary-foreground": "hsl(0 0% 100%)",
        secondary: "hsl(187 94% 43%)",
        "secondary-foreground": "hsl(0 0% 100%)",
        muted: "hsl(240 5% 18%)",
        "muted-foreground": "hsl(240 5% 65%)",
        accent: "hsl(263 70% 58%)",
        "accent-foreground": "hsl(0 0% 100%)",
        destructive: "hsl(0 84% 60%)",
        border: "hsl(240 5% 20%)",
        ring: "hsl(263 70% 58%)",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
      },
      keyframes: {
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translate(120px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translate(120px) rotate(-360deg)",
          },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 3s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        draw: "draw 2s ease forwards",
      },
    },
  },
  plugins: [],
};
