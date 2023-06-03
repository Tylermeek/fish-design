import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "fish-design-vite/config/unocss";

export default defineConfig({
  plugins: [vueJsx(), Unocss()],
});
