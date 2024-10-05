import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",
        grayishBlue: "hsl(217, 19%, 38%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.neonGreen"),
            h1: {
              color: theme("colors.neonGreen"),
            },
            p: {
              color: theme("colors.neonGreen"),
            },
          },
        },
      }),
    },
  },
  darkMode: "class",
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography"), nextui()],
};
export default config;
