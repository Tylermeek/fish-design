import type { App } from "vue";
import Button from "./src/Button";
import "uno.css";

// 导出类型
export * from "./type/Button";

// 单独导出Button组件
export { Button };

// 默认导出为vue插件
export default {
  install(app: App): void {
    app.component(Button.name, Button);
  },
};
