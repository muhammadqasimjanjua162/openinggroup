// @type {import('tailwindcss').Config} 
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "header-bg": "url('/src/assets/img/your-image.jpg')",
  //     },
  //   },
  // },
  plugins: [tailwindcss(

  )],
});
