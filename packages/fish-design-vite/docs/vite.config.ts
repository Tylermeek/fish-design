import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    vueJsx(),
    UnoCSS({
      configFile: "../config/uno.config.ts",
    }),
  ],
});
