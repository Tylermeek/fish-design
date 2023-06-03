/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    Unocss(),
  ],

  // 添加库模式配置
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true, // 输出单独的source文件以便debug
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "FishDesign",
      fileName: "fish-design",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  // 单元测试配置
  test: {
    // enable jest-like global test APIs
    globals: true,
    // 启用模拟dom，需要安装前置happy-dom
    environment: "happy-dom",
    // 支持tsx、jsx文件
    transformMode: {
      web: [/.[jt]sx$/],
    },
  },
});
