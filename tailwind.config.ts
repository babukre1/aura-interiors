import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-black": {
          100: "#EAEBEA",
          200: "#E0E0E0",
          300: "#BFC0BF",
          400: "#888988",
          500: "#525452",
          600: "#35302B",
        },
        'primary': '#B87333',
        'secondary': '#3C5B63',
        "bg1": "#C4E1CE",
        "bg2": "#D3D3D3",

      }
    },

  },
  plugins: [],
};
export default config;
