import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: path.resolve(__dirname, "app/index.tsx"),
      name: "mdxEditor",
      fileName: "mdx-editor-test",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "next/link"],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
          "next/link": "next/link",
        },
        exports: "named",
      },
    },

    target: "esnext",
  },
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "app/lib"),
      "@lib/*": path.resolve(__dirname, "app/lib/*"),
      "@utils/*": path.resolve(__dirname, "app/utilities/*"),
      "@app": path.resolve(__dirname, "app"),
    },
  },
});
