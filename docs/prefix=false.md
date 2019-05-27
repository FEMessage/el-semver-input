不自动添加前缀

```vue
<template>
  <el-semver-input v-model="version" :prefix="false" />
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
