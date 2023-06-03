# 初始化项目，建立一个MVP原型系统
  首先完成一个组件库的MVP（Minimum Viable Product 最小化可执行产品），以实现一个组件封装但是整体可用的组件库，从封装组件、组件库库文件导出和组件库整一个流程都实现的产品
# 具体实现
## 使用vite搭建项目
1.首先我们需要使用包管理工具进行对项目进行管理，最终选择的是pnpm进行对这个项目进行管理，这是首先考虑pnpm安装依赖迅速且节省空间，并且后期需要采用monorepo风格管理项目，需要使用到pnpm的workspace功能，更好的进行管理项目仓库  
ToDo：进行常见包管理工具总结  
2.利用vite搭建组件库的调试环境，在搭建过程中，并未采用脚手架快速搭建项目，虽然可以免去大量的工程化配置工作，但是为了将工程化的细节都掌控在自己的手里，所以进行手动搭建  
主要搭建过程如下:
安装vite，并且只在开发环境安装，毕竟是开发调试工具  
新建页面index.html并启动vite进行测试vite安装成功  
新建ts文件，引入并测试  
在package.json文件中加入启动脚本
``` json
  "scripts": {
    "dev": "vite"
  }
```
为项目安装vue3.0
接下来尝试使用sfc、template语法、render函数、tsx风格编写一个基础组件  
(注意vite默认只支持ts代码，所以无法直接运行template语法、sfc文件，所以我们需要引入插件@vitejs/plugin-vue@"3.0.3使得vite支持编译执行，核心实现方法就是在编译阶段将模版编译成ts render函数，才使得vite可执行 插件源码:[https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvitejs%2Fvite%2Ftree%2Fmain%2Fpackages%2Fplugin-vue])  
组件库的组件使用TSX语法进行编写，算是为了响应组件库的大趋势  
ToDo：jsx语法的优势  
由于vite不支持jsx语法，所以我们需要引入插件 **@vitejs/plugin-vue-jsx**  
注意需要开启ts支持jsx语法
## 库文件封装
主流组件库都至少支持两种引入方式，完整引入、按需引入，所以我们需要使得组件库满足：1.默认导出为vue插件 2.每个组件可以淡入导出
后期可以利用vite实现按需自动加载方案  
### 接下来实现
需要设置一个导出入口文件entry.ts  
主要需要实现两个功能：1.导出全部组件 2.实现一个vue插件，插件中编写install方法，将所有组件安装到vue实例里  
具体代码如下：
``` typeScript
import { App } from "vue";
import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

// 导出单独组件
export { MyButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },

};
```
接下来就需要进行对导出细节配置，默认vite是可以直接进行构建打包输出的，但是对于组件库，库文件导出，则需要配置导出模块类型，并确定导出的文件名
``` typescript
const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  // 添加库模式配置
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "FishDesign",
      fileName: "fish-design",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
  },
})
```  
最后构建打包成功就可以demo中尝试使用了  
至此一个MVP组件库就实现了