module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true,
  },
  // 支持解析.vue文件
  parser: "vue-eslint-parser",
  extends: [
    "plugin:json/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser", // 支持解析ts文件
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Icon"],
      },
    ],
  },
};
