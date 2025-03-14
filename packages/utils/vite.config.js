import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [react(), dts()],
    build: {
        outDir: "./../../dist/utils",
        lib: {
            entry: "src/index.ts",
            name: "utils",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ["react", "react-dom"]
        }
    }
});
