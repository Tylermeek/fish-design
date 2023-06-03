import { App } from "vue";
import Button from "./Button";

// 单独导出Button组件
export { Button };

// 默认导出为vue插件
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
