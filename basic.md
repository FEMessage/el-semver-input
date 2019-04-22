基本用法

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