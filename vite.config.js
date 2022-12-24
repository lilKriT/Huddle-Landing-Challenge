import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  build: {
    lib: {
      entry: "src/app.js",
      formats: ["es"],
    },
    rollupOptions: {
      external: /^lit/,
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
