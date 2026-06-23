/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--traeui-background)",
        foreground: "var(--traeui-foreground)",
        accent: {
          1: "var(--traeui-accent-1)",
          2: "var(--traeui-accent-2)",
          3: "var(--traeui-accent-3)",
        },
        "bg-1": "var(--traeui-background-1)",
        "bg-2": "var(--traeui-background-2)",
        "bg-3": "var(--traeui-background-3)",
        "bg-4": "var(--traeui-background-4)",
        "bg-5": "var(--traeui-background-5)",
        "text-paragraph": "var(--traeui-text-paragraph)",
        "text-on-accent": "var(--traeui-text-on-accent-3)",
      },
      fontFamily: {
        display: ["Righteous", "sans-serif"],
        heading: ["Righteous", "sans-serif"],
        body: ["Roboto Flex", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};