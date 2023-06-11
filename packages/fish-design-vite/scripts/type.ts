import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import handlebars from "handlebars";
import { pathToFileURL } from "url";
/**
 * 获取组件列表
 * 通过解析entry.ts模块获取组件数据
 */
async function getComponents(input: any) {
  // 踩坑点：es module的mjs文件，windows不支持绝对路径, 需要使用file url
  // 并且需要生成后使用，不能直接使用，否则会出错
  const fileURL = pathToFileURL(input).href;
  //   console.log(fileURL);

  const entry = await import(fileURL);
  return Object.keys(entry)
    .filter((k) => k !== "default")
    .map((k) => ({
      name: entry[k].name,
      component: k,
    }));
}

/**
 * 生成代码
 * @param meta 数据定义
 * @param filePath 目标文件路径
 * @param templatePath 模板文件路径
 */
function generateCode(meta, filePath, templatePath) {
  if (existsSync(templatePath)) {
    const content = readFileSync(templatePath).toString();
    const result = handlebars.compile(content)(meta);
    writeFileSync(filePath, result);
  }
  console.log(`🚀${filePath} 创建成功`);
}

/**
 * 生成类型定义文件 d.ts
 */

export async function generateDTS(entryPath: any) {
  //   console.log(entryPath);

  const template = resolve(__dirname, "./entry.d.ts.hbs");
  const dts = resolve(__dirname, entryPath.replace(".mjs", ".d.ts"));
  //   console.log(dts);

  // 组件库数据
  const components = await getComponents(entryPath);

  generateCode({ components }, dts, template);
}
