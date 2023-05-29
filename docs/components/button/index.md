# Button 按钮
常用操作按钮

## 基础用法

基础的按钮用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
 <div style="margin-bottom:20px;">
  <FButton color="blue">主要按钮</FButton>
  <FButton color="green">绿色按钮</FButton>
  <FButton color="gray">灰色按钮</FButton>
  <FButton color="yellow">黄色按钮</FButton>
  <FButton color="red">红色按钮</FButton>
 </div>
 <div style="margin-bottom:20px;"
 >
  <FButton color="blue" plain>朴素按钮</FButton>
  <FButton color="green" plain>绿色按钮</FButton>
  <FButton color="gray" plain>灰色按钮</FButton>
  <FButton color="yellow" plain>黄色按钮</FButton>
  <FButton color="red" plain>红色按钮</FButton>
 </div>
 <div style="margin-bottom:20px;">
  <FButton size="small" plain>小按钮</FButton>
  <FButton size="medium" plain>中按钮</FButton>
  <FButton size="large" plain>大按钮</FButton>
 </div>
 <div style="margin-bottom:20px;">
  <FButton color="blue" round plain icon="search">搜索按钮</FButton>
  <FButton color="green" round plain icon="edit">编辑按钮</FButton>
  <FButton color="gray" round plain icon="check">成功按钮</FButton>
  <FButton color="yellow" round plain icon="message">提示按钮</FButton>
  <FButton color="red" round plain icon="delete">删除按钮</FButton>
 </div>
 <div style="margin-bottom:20px;">
  <FButton color="blue" round plain icon="search"></FButton>
  <FButton color="green" round plain icon="edit"></FButton>
  <FButton color="gray" round plain icon="check"></FButton>
  <FButton color="yellow" round plain icon="message"></FButton>
  <FButton color="red" round plain icon="delete"></FButton>
 </div>
</template>
```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 [icon 组件集合](https://element-plus.org/zh-CN/component/icon.html#icon-collection)

```vue
<template>
 <div class="flex flex-row">
  <FButton icon="edit" plain></FButton>
  <FButton icon="delete" plain></FButton>
  <FButton icon="share" plain></FButton>
  <FButton round plain icon="search">搜索</FButton>
 </div>
</template>
```
:::

## 禁用按钮

禁用状态的按钮

:::demo 设置 disabled 属性即可

```vue
<template>
 <div class="flex flex-row">
  <FButton color="blue" disabled>主要按钮</FButton>
  <FButton color="green" disabled>绿色按钮</FButton>
  <FButton color="gray" disabled>灰色按钮</FButton>
  <FButton color="yellow" disabled>黄色按钮</FButton>
  <FButton color="red" disabled>红色按钮</FButton>
 </div>
</template>
```
:::