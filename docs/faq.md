## 在 TypeScript 中指定组件的类型

```html
<script lang="ts">
// 需要引入这个
// import { ElSemverInputType } from '@femessage/el-semver-input'
export default {
  mounted() {
    (this.$refs.semverInput as ElSemverInputType).autoPadding = false
  },
}
</script>
```
