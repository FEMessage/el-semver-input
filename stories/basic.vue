<template>
  <div>
    <div>尝试自动修复</div>
    <el-semver-input v-model="version" @validChange="validChange"></el-semver-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: null
    }
  },
  methods: {
    validChange(isValid) {
      console.log(isValid)
    }
  },
  mounted() {}
}
</script>
