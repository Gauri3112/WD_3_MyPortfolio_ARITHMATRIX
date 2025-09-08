import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/WD_3_MyPortfolio_ARITHMATRIX/",   // 👈 replace with your GitHub repo name
  plugins: [react()],
});
