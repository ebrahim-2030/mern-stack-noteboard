
// import daisyUI
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  // add daisyUI plugin for UI components
  plugins: [daisyui],
  daisyui: {
    // enable selected daisythemes
    themes: ["sunset", "dark"],
  },
};
