import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff4ed",
          100: "#ffe5d4",
          200: "#ffc7a8",
          300: "#ffa270",
          400: "#ff7c3f",
          500: "#ff5e1f",
          600: "#f04007",
          700: "#c72e08",
          800: "#9e260f",
          900: "#7f2310"
        }
      },
      boxShadow: {
        glow: "0 20px 60px rgba(244, 114, 182, 0.25)"
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 18% 15%, rgba(244,114,182,0.22), transparent 25%), radial-gradient(circle at 82% 18%, rgba(251,191,36,0.2), transparent 18%), radial-gradient(circle at 55% 75%, rgba(34,211,238,0.18), transparent 25%), linear-gradient(135deg, #14071f 0%, #1e1441 35%, #0f2242 70%, #0a1328 100%)"
      }
    }
  },
  plugins: []
};

export default config;
