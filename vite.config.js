import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/whatsapp-2",
  public: "/whatsapp-2",
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        remote_app:
          "https://mehardiknaik.github.io/mf-festival/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/whatsapp-[name].js`,
        chunkFileNames: `assets/whatsapp-[name].js`,
        assetFileNames: `assets/whatsapp-[name].[ext]`,
      },
    },
  },
});
