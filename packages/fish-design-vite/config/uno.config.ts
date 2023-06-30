// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  UserConfig,
} from "unocss";
import { safelist } from "./options/safelist";
import { rules } from "./options/rules";

export default defineConfig({
  rules,
  safelist,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(), // 添加图标预设
  ],
}) as UserConfig<{}>;
