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
];

const rouned = ["full", "lg"];

const size = ["py-1", "px-2", "py-3", "px-4", "py-2", "px-3"];

const cursorType = ["pointer", "not-allowed"];

export const safelist: string[] = [
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-300`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `bg-${v}-700`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `text-${v}`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:text-${v}-300`),
  ...icons.map((v) => `i-ic-baseline-${v}`),
  ...rouned.map((v) => `rounded-${v}`),
  ...cursorType.map((v) => `cursor-${v}`),
  ...size,
];
