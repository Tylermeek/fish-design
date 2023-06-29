import { Rule } from "unocss";

export const rules: Rule<{}>[] = [
  [
    /^bg-([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
    (match) => ({ "background-color": `#${match[1]}` }),
  ],
];
