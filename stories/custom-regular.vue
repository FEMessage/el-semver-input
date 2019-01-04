<template>
  <div>
    <div>自定义验证正则(本例:每项最多两位数)</div>
    <el-semver-input v-model="version" :validRegular="regular"></el-semver-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: '',
      regular: /^v?([1-9]\d?|0)\.([1-9]\d?|0)\.([1-9]\d?|0)$/
    }
  }
}
</script>