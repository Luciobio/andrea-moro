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
    },
    colors: {
      vanilla: '#fdf6e9', 
      grisoscuro: '#e7e3e0',
      rojo: '#ff0000',
      grisclaro: '#f7f5f4',
      marron: '#a7856a',
      marroncalido: '#9c8784',
      grisclarito: '#9f9f9f',
      blanco: '#ffffff',
      gris200: '#ebe7e5'
    }
  },
  plugins: [],
};
export default config;
