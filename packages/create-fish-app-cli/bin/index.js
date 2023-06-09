#!/usr/bin/env node
import { promisify } from "util";
import figlet from "figlet";
import clear from "clear";
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

// 封装log
const log = (content) => console.log(chalk.green(content));

// 脚手架选项
const choices = {
    "FishDesign应用模板(Vite)":"fish-design-vite",
    退出:"quit"
}

// 选项选择器
const choose = [
    {
        type: "rawlist", // 选择框
        message:"请选择需要创建的项目",
        name:"operation",
        choices:Object.keys(choices)
    }
]

// 首先清除屏幕
clear()
// 开始打印动画
const logo = figlet.textSync("Fish Design",{
    horizontalLayout:'default',
    verticalLayout:'default',
    width: 80,
    whitespaceBreak: true
})

const rainbow = chalkAnimation.rainbow(logo)

// 设置动画结束并正式开始执行
setTimeout(() =>{
    rainbow.stop() // 结束动画
},500)

// 让用户进行选择
async function query(){
    const choosed = await inquirer.prompt(choose)
    if(choosed.operation === "退出") return
    const {default: op} = await import(
        `../lib/operations/${choices[choosed.operation]}`
    )
    await op()
}