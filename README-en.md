# el-semver-input

[![](https://img.shields.io/npm/dm/@femessage/el-semver-input.svg#align=left&display=inline&height=20&originHeight=20&originWidth=134&status=done&width=134)](https://www.npmjs.com/package/@femessage/el-semver-input) ![](https://img.shields.io/npm/v/@femessage/el-semver-input.svg#align=left&display=inline&height=20&originHeight=20&originWidth=80&status=done&width=80) [![](https://img.shields.io/npm/l/@femessage/el-semver-input.svg#align=left&display=inline&height=20&originHeight=20&originWidth=78&status=done&width=78)](https://github.com/FEMessage/el-semver-input/blob/master/LICENSE) ![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&status=done&width=90) [![](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg#align=left&display=inline&height=20&originHeight=20&originWidth=104&status=done&width=104)](https://github-tools.github.io/github-release-notes/)

Semantic version input component: auto filled when blur.

[](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196140-1fec3064-560c-4001-9f88-366be556cab8.gif#align=left&display=inline&height=87&originHeight=87&originWidth=1131&size=0&status=done&width=1131)

## Introduction

**What is `el-semver-input`**

`el-semver-input` component based on `el-input`. It will valify input value, and the error input can be automatically corrected.

**Why**

Use `el-semver-input` You will enjoy the following conveniences:

- Easy to get started, turn on all functions by default
- Customizable format validation rules
- Customizable auto-fill rules

## Table of Contents

- [Introduction](#introduction)
- [Feature](#feature)
- [Documentation](#documentation)
- [Pre Install](#pre-install)
- [Quick Start](#quick-start)
- [Example](#example)

## Feature

- Optional v prefix
- Prevent illegal input
- Can be automatically filled according to default or custom rules
- Reset illegal value to default value when blur
- Custom inspection rules, automatically filling rules
- Try to fix it automatically according to the matching rules

**[⬆Back to Top](#table-of-contents)**

## Documentation

- [Doc and online demo](https://femessage.github.io/el-semver-input/)

**[⬆Back to Top](#table-of-contents)**

## Pre Install

```html
# ensure element-ui installed
yarn add element-ui
# and el-input has global registered
```

## Quick Start

```html
# Step1 install
yarn add @femessage/el-semver-input
```

```html
// Step2 In the required .vue file
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

**[⬆Back to Top](#table-of-contents)**

## Example

- Automatically correct

![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196250-1506ad60-6111-48b6-a4ca-0cdb17fc8b06.gif#align=left&display=inline&height=603&originHeight=603&originWidth=1261&size=0&status=done&width=1261)

- Custom auto fill rule

![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196274-3c1fd76a-f0f8-4706-a3af-c8ae0b606d79.gif#align=left&display=inline&height=603&originHeight=603&originWidth=1261&size=0&status=done&width=1261)

- Prevent illegal input

![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196218-47085f92-e8e3-4ddb-8596-c7d3b0b2f6f9.gif#align=left&display=inline&height=603&originHeight=603&originWidth=1261&size=0&status=done&width=1261)

**[⬆Back to Top](#table-of-contents)**

## Contributors

Thanks goes to these wonderful people ( [Emoji key](https://allcontributors.org/docs/en/emoji-key) ):<br />This project follows [All-contributors](https://github.com/all-contributors/all-contributors) Specification. Contributions of any kind welcome!

**[⬆Back to Top](#table-of-contents)**
