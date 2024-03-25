const sharedConfig = require("@repo/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
    "../../packages/common/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...sharedConfig.theme,
    extend: {
      ...sharedConfig.theme.extend,
      fontFamily: {
        sans: ["Nunito_400Regular", "sans-serif"],
        "sans-italic": ["Nunito_400Regular_Italic", "sans-serif"],
        "sans-black": ["Nunito_900Black", "sans-serif"],
        "sans-bold": ["Nunito_700Bold", "sans-serif"],
      },
    },
  },
};
