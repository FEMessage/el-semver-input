# el-semver-input

[![Build Status](https://travis-ci.com/FEMessage/el-semver-input.svg?branch=master)](https://travis-ci.com/FEMessage/el-semver-input)
[![NPM Download](https://img.shields.io/npm/dm/@femessage/el-semver-input.svg)](https://www.npmjs.com/package/@femessage/el-semver-input)
[![NPM Version](https://img.shields.io/npm/v/@femessage/el-semver-input.svg)](https://www.npmjs.com/package/@femessage/el-semver-input)
[![NPM License](https://img.shields.io/npm/l/@femessage/el-semver-input.svg)](https://github.com/FEMessage/el-semver-input/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/el-semver-input/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

语义化版本输入框：失去焦点可以补全。

[](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196140-1fec3064-560c-4001-9f88-366be556cab8.gif#align=left&display=inline&height=87&originHeight=87&originWidth=1131&size=0&status=done&width=1131)

[English](./README-en.md)

## Introduction

**What is `el-semver-input`**

`el-semver-input`组件基于`el-input`,在保留了`el-input`原本的属性以及方法的基础上进行了拓展，对输入值的格式进行校验，并可以自动修正错误输入。

**Why**

使用`el-semver-input`，您将享受到以下便捷之处：

* 上手简单，默认开启全部功能
* 可自定义格式检验规则
* 可自定义自动填充规则

## Table of Contents <!-- omit in toc -->

* [Introduction](#Introduction)
* [Feature](#Feature)
* [Documentation](#Documentation)
* [Pre Install](#Pre-Install)
* [Quick Start](#Quick-Start)
* [Example](#Example)
* [Contributors](#Contributors)

## Feature

* 可选是否携带 v 前缀
* 阻止不合法字符串输入
* 可根据默认或自定义的规则进行自动填充
* 失去焦点时格式错误重置为默认值
* 自定义检验规则,自动填充规则
* 根据匹配到的规则尝试自动修复

**[⬆ Back to Top](#table-of-contents)**

## Documentation

* [doc and online demo](https://femessage.github.io/el-semver-input/)

**[⬆ Back to Top](#table-of-contents)**

## Pre Install

```sh
# 确保提前安装了element-ui
yarn add element-ui

# 且全局注册了el-input
```

## Quick Start

```sh
# Step1 安装
yarn add @femessage/el-semver-input
```

```vue
// Step2 在需要的.vue 文件中
<template>
  <el-semver-input v-model="version" />
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
  ![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196250-1506ad60-6111-48b6-a4ca-0cdb17fc8b06.gif#align=left&display=inline&height=603&originHeight=603&originWidth=1261&size=0&status=done&width=1261)

* 自定义自动填充规则
  ![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196274-3c1fd76a-f0f8-4706-a3af-c8ae0b606d79.gif#align=left&display=inline&height=603&originHeight=603&originWidth=1261&size=0&status=done&width=1261)

* 阻止不合法的输入
  ![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196218-47085f92-e8e3-4ddb-8596-c7d3b0b2f6f9.gif#align=left&display=inline&height=603&originHeight=603&originWidth=1261&size=0&status=done&width=1261)

**[⬆ Back to Top](#table-of-contents)**

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

**[⬆ Back to Top](#table-of-contents)**
