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

## Table of Contents <!-- omit in toc -->

* [Introduction](#introduction)
* [Feature](#feature)
* [Documentation](#documentation)
* [Pre Install](#pre-install)
* [Quick Start](#quick-start)
* [Example](#example)

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
  ![失去焦点尝试自动填充](https://ws1.sinaimg.cn/large/8db26677gy1fyed4100a8g20z10gr0wr.jpg)

* 自定义自动填充规则
  ![失去焦点尝试自动填充](https://ws1.sinaimg.cn/large/8db26677gy1fyecv50g2sg20z10grn3a.jpg)

* 阻止不合法的输入
  ![失去焦点尝试自动填充](https://ws1.sinaimg.cn/large/8db26677gy1fyecv4ppz0g20z10grgn4.jpg)

**[⬆ Back to Top](#table-of-contents)**
