不阻止非法输入。按TAB或失去焦点时如果非法则重设为默认值

```vue
<template>
  <el-semver-input v-model="version" :preventIllegal="false" />
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
