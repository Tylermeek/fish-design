import { config } from "../vite.config";
import { InlineConfig, UserConfig, build, defineConfig } from "vite";
import * as path from "path";
import * as fs from "fs-extra";

const buildAll = async () => {
  // 全量打包
  // build(defineConfig(config as UserConfig) as InlineConfig);
  await build();

  const srcDir = path.resolve(__dirname, "../src/");
  const baseOutDir = config.build.outDir;

  const componentsDir = fs.readdirSync(srcDir).filter((name) => {
    // 过滤出包含index.ts的文件夹
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });
  // .forEach(async (name) => {
  //   // 文件夹遍历定制编译规则
  //   const outDir = path.resolve(config.build.outDir, name);
  //   const custom = {
  //     lib: {
  //       entry: path.resolve(srcDir, name),
  //       name,
  //       fileName: "index",
  //       formats: ["es", "umd"],
  //     },
  //     outDir,
  //   };
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
