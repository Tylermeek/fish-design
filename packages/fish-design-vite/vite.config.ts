/// <reference types="vitest"

import { UserConfig, defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";
import dts from "vite-plugin-dts";
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    exports: "named",
    globals: {
      vue: "Vue",
    },
    // 资源文件名 css 图片等等
    assetFileNames: "assets/[name].[ext]",
  },
};

export const config = {
  plugins: [
    vue() as Plugin,
    // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    UnoCSS({
      configFile: "./config/uno.config.ts",
    }) as Plugin[],
    // 类型导出
    dts({
      outputDir: "./dist/types", // 输出目录
      insertTypesEntry: false, // 插入ts入口
      copyDtsFiles: true, // 将源码里的类型文件导入dist 目录
    }),
  ],

  // 添加库模式配置
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true, // 输出单独的source文件以便debug
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "FishDesign",
      fileName: "fish-design",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
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
    coverage: {
      provider: "c8",
      reporter: ["json", "text", "html"],
    },
  },
};

export default defineConfig(config as UserConfig);
