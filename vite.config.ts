import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import pkg from "./package.json";

export default defineConfig({
  base: "/portfolio/", // required for GH Pages
  envDir: "./config",
  define: {
    "import.meta.env.VITE_APP_TITLE": pkg.name ?? "react starter kit",
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "./packages/ui"),
    },
  }
})
