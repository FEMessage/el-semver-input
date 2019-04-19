自定义填充规则:x.x.x

```vue
<template>
  <el-semver-input v-model="version" autoPadding :autoPaddingRegularList="paddingList"></el-semver-input>
</template>

<script>
export default {
  data() {
    return {
      version: '',
      // 自动填充规则
      paddingList: [
        {
          regular: /^v?([1-9]\d*|0)\.([1-9]\d*|0)\.$/,
          padding: 'x'
        },
        {
          regular: /^v?([1-9]\d*|0)\.([1-9]\d*|0)$/,
          padding: '.x'
        },
        {
          regular: /^v?([1-9]\d*|0)\.$/,
          padding: 'x.x'
        },
        {
          regular: /^v?([1-9]\d*|0)$/,
          padding: '.x.x'
        },
        {
          regular: /^v$/,
          padding: 'x.x.x'
        }
      ]
    }
  }
}
</script>
```