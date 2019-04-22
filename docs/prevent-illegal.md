阻止非法输入

```vue
<template>
  <el-semver-input v-model="version" preventIllegal></el-semver-input>
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