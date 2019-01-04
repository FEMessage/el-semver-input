<template>
  <div>
    <div>自动添加前缀</div>
    <el-semver-input v-model="version" prefix></el-semver-input>
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