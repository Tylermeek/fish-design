import { config } from "../vite.config";
import { InlineConfig, UserConfig, build, defineConfig } from "vite";
import * as path from "path";
import * as fs from "fs-extra";
import { generateDTS } from "./type";
import chalk from "chalk";

const log = (...args) => console.log(chalk.green(...args));

const buildAll = async () => {
  // 全量打包
  log("🚀 开始全量打包");
  await build();
  log("👌 全量打包成功");

  // 定义基本路径
  const srcDir = path.resolve(__dirname, "../src/");
  const baseOutDir = config.build.outDir;

  // 导出dts文件
  // 复制package.json文件
  const packageJSON = require("../package.json");
  packageJSON.main = "fish-design.umd.js";
  packageJSON.module = "fish-design.mjs";
  packageJSON.types = "fish-design.d.ts";
  await fs.outputFile(
    path.resolve(baseOutDir, `package.json`),
    JSON.stringify(packageJSON, null, 2)
  );

  generateDTS(path.resolve(baseOutDir, "fish-design.mjs"));

  log("📃 复制README.md");
  // 复制readme文档
  fs.copyFileSync(
    path.resolve("./README.md"),
    path.resolve(baseOutDir, `README.md`)
  );

  log("📦 开始单独打包");
  // 遍历组件单独打包
  const componentsDir = fs.readdirSync(srcDir).filter((name) => {
    // 过滤出包含index.ts的文件夹
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });
  for (const name of componentsDir) {
    const outDir = path.resolve(baseOutDir, name);
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name) + "/index.ts",
        name,
        fileName: name,
        formats: ["es", "umd"],
      },
      outDir,
    };
    log(custom.lib.entry);
    config.build = Object.assign(config.build, custom); // 结合配置
    await build(defineConfig(config as UserConfig) as InlineConfig);
    // 生成定制package.json
    fs.outputFile(
      path.resolve(outDir, `package.json`),
      `{
        "name": "smarty-ui-vite/${name}",
        "main": "index.umd.js",
        "module": "index.umd.js"
      }`,
      "utf-8"
    );
  }
  log("👌 单独打包成功");
};

// 执行构建打包
buildAll();
