import {storiesOf} from '@storybook/vue'

import AutoPadding from './auto-padding.vue'
import CustomRegular from './custom-regular.vue'
import Prefix from './prefix.vue'
import PreventIllegal from './prevent-illegal.vue'
import CustomPadding from './custom-padding.vue'
import Basic from './basic.vue'

storiesOf('el-semver-input', module)
  .add('bsasic', () => ({
    components: {Basic},
    template: `<Basic/>`
  }))
  .add('auto-padding', () => ({
    components: {AutoPadding},
    template: `<AutoPadding/>`
  }))
  .add('custom-regular', () => ({
    components: {CustomRegular},
    template: `<CustomRegular/>`
  }))
  .add('prefix', () => ({
    components: {Prefix},
    template: `<Prefix/>`
  }))
  .add('prevent-illegal', () => ({
    components: {PreventIllegal},
    template: `<PreventIllegal/>`
  }))
  .add('custom-padding', () => ({
    components: {CustomPadding},
    template: `<CustomPadding/>`
  }))
