import flowbite from "flowbite-react/tailwind";
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui,flowbite.plugin(),],
    daisyui: {
        themes: ["light", "dark"],
    },
}

