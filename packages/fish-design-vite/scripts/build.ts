import { config } from "../vite.config";
import { InlineConfig, UserConfig, build, defineConfig } from "vite";
import * as path from "path";
import * as fs from "fs-extra";
import { generateDTS } from "./type";
// import { pathToFileURL } from "url";

const buildAll = async () => {
  // 全量打包
  await build();

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
        entry: path.resolve(srcDir, name),
        name,
        fileName: "index",
        formats: ["es", "umd"],
      },
      outDir,
    };

    Object.assign(config.build, custom); // 结合配置
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
};

// 执行构建打包
buildAll();
