import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const icons = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",
  "share",
]

const rouned = [
  'full',
  'lg'
]

const safelist = [
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `bg-${v}-700`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `text-${v}`),
  ...colors.map((v) => `text-${v}-500`),
  ...icons.map(v => `i-ic-baseline-${v}`),
  ...rouned.map(v => `rounded-${v}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(), // 添加图标预设
    ],
  });
