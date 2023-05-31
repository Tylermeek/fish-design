import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import { safelist } from "./options/safelist";
import { rules } from "./options/rules";



export default () =>
  Unocss({
    rules,
    safelist,
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(), // 添加图标预设
    ],
  });
