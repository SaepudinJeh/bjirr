import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react"

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-comfortaa)"],
        sevillana: ["var(--font-sevillana)"],
        javanese: ["var(--font-javanese)"],
      },
      screens: {
        xxs: "330px",
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
