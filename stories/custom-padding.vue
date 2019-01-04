<template>
  <div>
    <div>自定义填充规则:x.x.x</div>
    <el-semver-input v-model="version" autoPadding :autoPaddingRegularList="paddingList"></el-semver-input>
  </div>
</template>

<script>
// 自动填充规则
const autoPaddingRegularList = [
  {
    regular: /^v?([1-9]\d*|0)\.([1-9]\d*|0)\.$/,
    padding: 'x'
  },
  {
    regular: /^v?([1-9]\d*|0)\.([1-9]\d*|0)$/,
    padding: '.x'
  },
  {
    regular: /^v?([1-9]\d*|0)\.$/,
    padding: 'x.x'
  },
  {
    regular: /^v?([1-9]\d*|0)$/,
    padding: '.x.x'
  },
  {
    regular: /^v$/,
    padding: 'x.x.x'
  }
]

export default {
  data() {
    return {
      version: '',
      paddingList: autoPaddingRegularList
    }
  }
}
</script>