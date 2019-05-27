基本用法，默认按TAB或失去焦点自动填充，自动添加前缀，和阻止非法输入

```vue
<template>
  <el-semver-input v-model="version" @validChange="validChange"/>
</template>

<script>
export default {
  data() {
    return {
      version: ''
    }
  },
  methods: {
    validChange(isValid) {
      console.log(isValid)
    }
  }
}
</script>
```
