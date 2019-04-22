# el-semver-input

[![Build Status](https://travis-ci.com/FEMessage/el-semver-input.svg?branch=master)](https://travis-ci.com/FEMessage/el-semver-input)
[![NPM Download](https://img.shields.io/npm/dm/@femessage/el-semver-input.svg)](https://www.npmjs.com/package/@femessage/el-semver-input)
[![NPM Version](https://img.shields.io/npm/v/@femessage/el-semver-input.svg)](https://www.npmjs.com/package/@femessage/el-semver-input)
[![NPM License](https://img.shields.io/npm/l/@femessage/el-semver-input.svg)](https://github.com/FEMessage/el-semver-input/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/el-semver-input/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

语义化版本输入框：失去焦点可以补全。

![失去焦点尝试自动填充](https://ws1.sinaimg.cn/large/8db26677gy1fyujuaeiqig20vf02ft9q.jpg)

## Introduction

**What is `el-semver-input`**

`el-semver-input`组件基于`el-input`,在保留了`el-input`原本的属性以及方法的基础上进行了拓展，对输入值的格式进行校验，并可以自动修正错误输入。

**Why**

使用`el-semver-input`，您将享受到以下便捷之处：

* 上手简单，默认开启全部功能
* 可自定义格式检验规则
* 可自定义自动填充规则

## Table of Contents

- **[Feature](#feature)**
- **[Documentation](#documentation)**
- **[Pre install](#pre-install)**
- **[Quick start](#quick-start)**
- **[Example](#example)**
- **[Props](#props)**
- **[Events](#events)**

## Feature

* 可选是否携带 v 前缀
* 阻止不合法字符串输入
* 可根据默认或自定义的规则进行自动填充
* 失去焦点时格式错误重置为默认值
* 自定义检验规则,自动填充规则
* 根据匹配到的规则尝试自动修复

**[⬆ Back to Top](#table-of-contents)**

## Documentation

* [full api doc](https://femessage.github.io/el-semver-input/)
* [online demo](https://femessage.github.io/el-semver-input/storybook/)

**[⬆ Back to Top](#table-of-contents)**

## Pre install

```sh
# 确保提前安装了element-ui
yarn add element-ui

# 且全局注册了el-input
```

## Quick start

```vue
// Step1 安装
yarn add @femessage/el-semver-input

// Step2 在需要的.vue 文件中
<template>
    <el-semver-input v-model="version"></el-semver-input>
</template>

<script>
import ElSemverInput from 'el-semver-input'

export default {
  components: {
    ElSemverInput
  },
  data() {
    return {
      version: ''
    }
  }
}
</script>
```

**[⬆ Back to Top](#table-of-contents)**

## Example

* 自动修复
  ![失去焦点尝试自动填充](https://ws1.sinaimg.cn/large/8db26677gy1fyed4100a8g20z10gr0wr.jpg)

* 自定义自动填充规则
  ![失去焦点尝试自动填充](https://ws1.sinaimg.cn/large/8db26677gy1fyecv50g2sg20z10grn3a.jpg)

* 阻止不合法的输入
  ![失去焦点尝试自动填充](https://ws1.sinaimg.cn/large/8db26677gy1fyecv4ppz0g20z10grgn4.jpg)

**[⬆ Back to Top](#table-of-contents)**

## Props

| 参数                   | 说明                       | 类型    | 默认值 |
| ---------------------- | -------------------------- | ------- | ------ |
| preventIllegal         | 是否阻止不合法的字符串输入 | Boolean | true   |
| autoPadding            | 是否动根据填充规则进行填充 | Boolean | true   |
| prefix                 | 是否需要携带 v 前缀        | Boolean | true   |
| validRegular           | 自定义格式校验规则         | Regexp  |        |
| autoPaddingRegularList | 自定义自动填充规则         | Array   |        |

## Events

| 事件        | 说明                              | 回调参数   |
| ----------- | --------------------------------- | ---------- |
| validChange | value 变化时,其值是否符合检验规则 | true/false |
| input       | 输入框值变化                      | 输入框值   |

**[⬆ Back to Top](#table-of-contents)**
