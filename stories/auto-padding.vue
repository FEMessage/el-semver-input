<template>
  <div>
    <div>按TAB或失去焦点自动填充</div>
    <el-semver-input v-model="version" autoPadding></el-semver-input>
  </div>
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
