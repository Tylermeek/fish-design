import inquirer from "inquirer";
import chalk from "chalk";
import clone from "../utils/clone.js";
import { existsSync, readFileSync, writeFileSync } from "fs";
import handlebars from "handlebars";

const log = (...args) => console.log(chalk.green(...args));

const run = async function () {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      message: "请输入项目的名称",
      name:"name",
    },
  ]);

  log(`🏃 ‍创建项目:${name}`);

  // 远程克隆项目
  await clone("Tylermeek/fish-design-app-js-template", name);

  // 生成路由定义
  compile({
    name
  },
  `./${name}/package.json`,
  `./${name}/template/package.hbs.json`
  )


  log(
    `😍 安装完成
        To get Start:
===========================
cd ${name}
npm i
npm run dev
===========================`
  );
};

/**
 * 编译模板文件
 * @param meta 数据定义
 * @param filePath 目标文件路径
 * @param templatePath 模板文件路径
 */
function compile(meta, filePath, templatePath){
    if(existsSync(templatePath)){
        const content = readFileSync(templatePath).toString()
        const result = handlebars.compile(content)(meta)
        writeFileSync(filePath,result)
        log(`✅ ${filePath} 模板修改完成`)
    } else{
        log(`☠️ ${filePath} 模板修改出错`)

    }
}

export default run;