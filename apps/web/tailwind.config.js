const sharedConfig = require("@repo/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/common/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...sharedConfig.theme,
    extend: {
      ...sharedConfig.theme.extend,
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
    },
  },
};
