const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A90E2", // Primary blue
          dark: "#003366", // Darker shade for contrast
          light: "#A6C8FF", // Lighter shade for accents
        },
        secondary: {
          DEFAULT: "#E94E77", // Vibrant pink
          dark: "#992039", // Dark pink for highlights
          light: "#FFD3E0", // Soft pink for backgrounds
        },
        neutral: {
          DEFAULT: "#F5F5F5", // Light gray for backgrounds
          dark: "#333333", // Dark gray for text
          light: "#E8E8E8", // Soft gray for subtle borders
        },
        accent: "#FBBF24", // Golden yellow for CTAs and icons
        success: "#10B981", // Green for success messages
        warning: "#F59E0B", // Orange for warnings
        error: "#EF4444", // Red for error alerts
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
