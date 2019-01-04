<template>
  <div>
    <div>阻止非法输入</div>
    <el-semver-input v-model="version" preventIllegal></el-semver-input>
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
