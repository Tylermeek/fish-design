import Button from "../index";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

// 测试分组
describe("defaultButton", () => {
  // mount 挂载
  test("mount @vue/test-utils", () => {
    // 调用测试工具
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    // 断言 
    // 判断是否基础组件加载正常
    expect(wrapper.text()).toBe("Button");
    // 判断引入unocss 默认情况是否生效
    expect(wrapper.classes().map(v=>v.replace('\n','')).includes('bg-blue-500')).toBe(true)
  });
});


// 测试分组
describe("colorButton", () => {
  // mount 挂载
  test("mount @vue/test-utils", () => {
    // 调用测试工具
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props:{
        color:'red'
      }
    });
    // 断言 
    // 判断是否基础组件加载正常
    expect(wrapper.text()).toBe("Button");
    // 判断引入unocss 默认情况是否生效
    expect(wrapper.classes().map(v=>v.replace('\n','')).includes('bg-red-500')).toBe(true)
  });
});