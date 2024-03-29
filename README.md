# Inspire-UI for Vue 3

## 介绍
Inspire-UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库，详情请见[官网](https://ranze1129.github.io/Inspire-UI-website/)。

这款组件库其实是我为了自主学习以及总结经验而写的，全程亲手编写，尽量不采用第三方库，包括官网也几乎都是我自己写的。

所以强烈不建议你将此 UI 库用于生产环境。但如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。

## 安装
```
npm install inspire-ui-ranze
```
或者
```
yarn add inspire-ui-ranze
```

## 开始使用
请先安装本组件库。

然后在你的代码中写入下面的代码
```
import {Button, Tabs, Switch, Dialog, Input} from "inspire-ui-ranze"
```
就可以使用我提供的组件了。

### Vue 单文件组件示例
```
<template>
  <div>
    <Button>你好</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog, Input} from "inspire-ui-ranze"
export default {
  components: {Button}
}
</script>
```

