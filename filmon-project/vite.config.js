import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//proxy stuff here
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
