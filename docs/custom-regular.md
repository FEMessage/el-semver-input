自定义验证正则(本例:每项最多两位数)

```vue
<template>
  <el-semver-input v-model="version" :validRegular="regular"></el-semver-input>
</template>

<script>
export default {
  data() {
    return {
      version: '',
      regular: /^v?([1-9]\d?|0)\.([1-9]\d?|0)\.([1-9]\d?|0)$/
    }
  }
}
</script>
```