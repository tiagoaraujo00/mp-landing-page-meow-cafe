import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     padding: {
      '6.5rem': '6.5rem'
     },
     fontSize: {
      sm: '0.5rem',
      base: '1rem',
      xl: '1.25rem',
      'xs': '0.6rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow"),
    ({
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowBlur: "3px",
      shadowOffsetX: "2px",
      shadowOffsetY: "2px",
  })
  ],
};
export default config;
