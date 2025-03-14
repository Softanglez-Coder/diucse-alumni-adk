import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    plugins: [
        react(),
        dts(),
        viteStaticCopy({
            targets: [
                {
                    src: "package.json",
                    dest: ""
                }
            ]
        })
    ],
    build: {
        outDir: "./../../dist/core",
        emptyOutDir: true,
        lib: {
            entry: "src/index.ts",
            name: "core",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ["react", "react-dom"]
        }
    }
});
