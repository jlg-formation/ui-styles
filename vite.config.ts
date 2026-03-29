import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages - change 'ui-styles' to your repo name if different
  base: process.env.GITHUB_ACTIONS ? "/ui-styles/" : "/"
});
