按TAB或失去焦点自动填充

```vue
<template>
  <el-semver-input v-model="version" autoPadding></el-semver-input>
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