import { Rule } from "unocss";

export const rules: Rule<{}>[] = [
  [
    /^bg-?(#[a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    (match) => ({ "background-color": match[1] }),
  ],
];
