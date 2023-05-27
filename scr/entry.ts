import { App } from "vue";
import JSXButton from "./Button/index.tsx"
import SFCButton from './Button/index.vue'

// 导出单独组件
export{JSXButton, SFCButton}

// 编写一个插件，实现一个install方法
// 插件中编写 install 方法，将所有组件安装到 vue 实例中
export default {
  install(app: App): void {
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },

};