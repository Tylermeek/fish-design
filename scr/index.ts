import { createApp } from "vue/dist/vue.esm-bundler.js";
import FishDesign from "./entry"
import FButton from "./Button/index.tsx";

createApp({
  template:`
  <div>
  <FButton color="blue" icon="search">蓝色按钮</FButton>
  <FButton color="green">绿色按钮</FButton>
  <FButton color="gray">灰色按钮</FButton>
  <FButton color="yellow">黄色按钮</FButton>
  <FButton color="red">红色按钮</FButton>
  </div>
  `
}).use(FishDesign).mount("#app");
