import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GTreasury Primary Colors
        "night-blue": "var(--night-blue)",
        "sea-blue": "var(--sea-blue)",
        "peppermint-green": "var(--peppermint-green)",
        "monsoon-green": "var(--monsoon-green)",
        "gt-white": "var(--white)",

        // GTreasury Secondary Colors
        "lime-green": "var(--lime-green)",
        "sage-green": "var(--sage-green)",
        "pale-yellow": "var(--pale-yellow)",

        // Night Blue Tints
        "night-blue-100": "var(--night-blue-100)",
        "night-blue-90": "var(--night-blue-90)",
        "night-blue-80": "var(--night-blue-80)",
        "night-blue-70": "var(--night-blue-70)",
        "night-blue-60": "var(--night-blue-60)",
        "night-blue-50": "var(--night-blue-50)",
        "night-blue-40": "var(--night-blue-40)",
        "night-blue-30": "var(--night-blue-30)",
        "night-blue-20": "var(--night-blue-20)",
        "night-blue-10": "var(--night-blue-10)",

        // Sea Blue Tints
        "sea-blue-130": "var(--sea-blue-130)",
        "sea-blue-120": "var(--sea-blue-120)",
        "sea-blue-110": "var(--sea-blue-110)",
        "sea-blue-100": "var(--sea-blue-100)",
        "sea-blue-90": "var(--sea-blue-90)",
        "sea-blue-80": "var(--sea-blue-80)",
        "sea-blue-70": "var(--sea-blue-70)",
        "sea-blue-60": "var(--sea-blue-60)",
        "sea-blue-50": "var(--sea-blue-50)",
        "sea-blue-40": "var(--sea-blue-40)",
        "sea-blue-30": "var(--sea-blue-30)",
        "sea-blue-20": "var(--sea-blue-20)",
        "sea-blue-10": "var(--sea-blue-10)",

        // Peppermint Green Tints
        "peppermint-green-150": "var(--peppermint-green-150)",
        "peppermint-green-140": "var(--peppermint-green-140)",
        "peppermint-green-130": "var(--peppermint-green-130)",
        "peppermint-green-120": "var(--peppermint-green-120)",
        "peppermint-green-110": "var(--peppermint-green-110)",
        "peppermint-green-100": "var(--peppermint-green-100)",
        "peppermint-green-90": "var(--peppermint-green-90)",
        "peppermint-green-80": "var(--peppermint-green-80)",
        "peppermint-green-70": "var(--peppermint-green-70)",
        "peppermint-green-60": "var(--peppermint-green-60)",
        "peppermint-green-50": "var(--peppermint-green-50)",
        "peppermint-green-40": "var(--peppermint-green-40)",
        "peppermint-green-30": "var(--peppermint-green-30)",
        "peppermint-green-20": "var(--peppermint-green-20)",
        "peppermint-green-10": "var(--peppermint-green-10)",

        // Monsoon Green Tints
        "monsoon-green-150": "var(--monsoon-green-150)",
        "monsoon-green-140": "var(--monsoon-green-140)",
        "monsoon-green-130": "var(--monsoon-green-130)",
        "monsoon-green-120": "var(--monsoon-green-120)",
        "monsoon-green-110": "var(--monsoon-green-110)",
        "monsoon-green-100": "var(--monsoon-green-100)",
        "monsoon-green-90": "var(--monsoon-green-90)",
        "monsoon-green-80": "var(--monsoon-green-80)",
        "monsoon-green-70": "var(--monsoon-green-70)",
        "monsoon-green-60": "var(--monsoon-green-60)",
        "monsoon-green-50": "var(--monsoon-green-50)",
        "monsoon-green-40": "var(--monsoon-green-40)",
        "monsoon-green-30": "var(--monsoon-green-30)",
        "monsoon-green-20": "var(--monsoon-green-20)",
        "monsoon-green-10": "var(--monsoon-green-10)",

        // Legacy Theme Colors
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",

        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
          6: "var(--chart-6)",
          7: "var(--chart-7)",
          8: "var(--chart-8)",
          9: "var(--chart-9)",
          10: "var(--chart-10)",
        },

        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "2xs": "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "var(--tracking-tighter)",
        tight: "var(--tracking-tight)",
        normal: "var(--tracking-normal)",
        wide: "var(--tracking-wide)",
        wider: "var(--tracking-wider)",
        widest: "var(--tracking-widest)",
      },
      spacing: {
        DEFAULT: "var(--spacing)",
      },
      keyframes: {
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-scale": "fade-in-scale 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
