import {configure} from '@storybook/vue'

import Vue from 'vue'
import {Input} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Import your component
import Component from '../src/index'

// Register your component
Vue.component('el-semver-input', Component)
Vue.component('el-input', Input)

function loadStories() {
  // You can require as many stories as you need.
  require('../stories')
}

configure(loadStories, module)
