自动添加前缀

```vue
<template>
  <el-semver-input v-model="version" prefix></el-semver-input>
</template>

<script>
export default {
  data() {
    return {
      version: ''
    }
  }
}
</script>
```