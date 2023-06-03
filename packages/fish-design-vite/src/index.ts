import { createApp } from "vue/dist/vue.esm-bundler.js";
import FishDesign from "./entry";
// eslint-disable-next-line no-unused-vars
import Button from "./Common/index";

createApp({
  template: `
  <div>
  <Button color="blue" icon="search">蓝色按钮</Button>
  <Button color="green">绿色按钮</Button>
  <Button color="gray">灰色按钮</Button>
  <Button color="yellow">黄色按钮</Button>
  <Button color="red">红色按钮</Button>
  </div>
  `,
})
  .use(FishDesign)
  .mount("#app");
