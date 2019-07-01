# El-semver-input

[![](https://img.shields.io/npm/dm/@femessage/el-semver-input.svg#align=left&display=inline&height=20&originHeight=20&originWidth=134&status=done&width=134)](https://www.npmjs.com/package/@femessage/el-semver-input) ![](https://img.shields.io/npm/v/@femessage/el-semver-input.svg#align=left&display=inline&height=20&originHeight=20&originWidth=80&status=done&width=80) [![](https://img.shields.io/npm/l/@femessage/el-semver-input.svg#align=left&display=inline&height=20&originHeight=20&originWidth=78&status=done&width=78)](https://github.com/FEMessage/el-semver-input/blob/master/LICENSE) ![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&status=done&width=90) [![](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg#align=left&display=inline&height=20&originHeight=20&originWidth=104&status=done&width=104)](https://github-tools.github.io/github-release-notes/)

Semantic version input box: lost focus can be filled.<br />![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196140-1fec3064-560c-4001-9f88-366be556cab8.gif#align=left&display=inline&height=87&originHeight=87&originWidth=1131&size=0&status=done&width=1131)

<a name="Introduction"></a>
## Introduction

**What is `el-semver-input`**<br />`el-semver-input` Component based `el-input` In the reserved `el-input` The original attributes and methods are expanded, the format of the input values is verified, and the error input can be automatically corrected.<br />**Why**<br />Use `el-semver-input` You will enjoy the following conveniences:

- Easy to get started, turn on all functions by default
- Customizable format validation rules
- Customizable auto-fill rules

<a name="65f5152b"></a>
## Table of Contents

- [Introduction](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#introduction)
- [Feature](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#feature)
- [Documentation](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#documentation)
- [Pre Install](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#pre-install)
- [Quick Start](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#quick-start)
- [Example](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#example)

<a name="Feature"></a>
## Feature

- Optional whether to carry v prefix
- Block illegal string input
- Can be automatically filled according to default or custom rules
- Format error reset to default value when focus is lost
- Custom inspection rules, automatic filling rules
- Try to fix it automatically according to the matching rules<br />**[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#table-of-contents)**

<a name="Documentation"></a>
## Documentation

- [Doc and online demo](https://femessage.github.io/el-semver-input/)<br />**[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#table-of-contents)**

<a name="5bc0fb1f"></a>
## Pre Install

```html
# ensure element-ui installed
yarn add element-ui
# and el-input has global registered
```

<a name="411eaaaa"></a>
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

**[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#table-of-contents)**

<a name="Example"></a>
## Example

- Automatic Repair<br />![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196250-1506ad60-6111-48b6-a4ca-0cdb17fc8b06.gif#align=left&display=inline&height=603&originHeight=603&originWidth=1261&size=0&status=done&width=1261)
- Custom Auto fill rule<br />![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196274-3c1fd76a-f0f8-4706-a3af-c8ae0b606d79.gif#align=left&display=inline&height=603&originHeight=603&originWidth=1261&size=0&status=done&width=1261)
- Block illegal input<br />![](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561953196218-47085f92-e8e3-4ddb-8596-c7d3b0b2f6f9.gif#align=left&display=inline&height=603&originHeight=603&originWidth=1261&size=0&status=done&width=1261)<br />**[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#table-of-contents)**

<a name="Contributors"></a>
## Contributors

Thanks goes to these wonderful people ( [Emoji key](https://allcontributors.org/docs/en/emoji-key) ):<br />This project follows [All-contributors](https://github.com/all-contributors/all-contributors) Specification. Contributions of any kind welcome!<br />**[⬆Back to Top](https://www.yuque.com/deepexi-serverless/onx52o/rx1oac?translate=en#table-of-contents)**
