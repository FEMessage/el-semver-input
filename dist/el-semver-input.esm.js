(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".is-error.semver-input .el-input__inner { border: 1px solid rgba(226,65,86,0.5); } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

/**
 * 版本号正则
 * 匹配（0或者大于0的数字）(.)（0或者大于0的数字）(.)（0或者大于0的数字）
 * 如1.11.0
 */

var VERSION_PATTERN = /^v?([1-9]\d*|0)\.([1-9]\d*|0)\.([1-9]\d*|0)$/;

// 默认版本
var NONSENSE_VERSION = '0.0.0';
var MIN_VERSION = '0.0.1';
var DEFAULT_VERSION = '1.0.0';
var v = 'v';

// 自动填充规则
var autoPaddingRegularList = [{
  regular: VERSION_PATTERN,
  padding: ''
}, {
  regular: /^v?([1-9]\d*|0)\.([1-9]\d*|0)\.$/,
  padding: '0'
}, {
  regular: /^v?([1-9]\d*|0)\.([1-9]\d*|0)$/,
  padding: '.0'
}, {
  regular: /^v?([1-9]\d*|0)\.$/,
  padding: '0.0'
}, {
  regular: /^v?([1-9]\d*|0)$/,
  padding: '.0.0'
}, {
  regular: /^v?$/,
  padding: DEFAULT_VERSION
}];

var autoFixRegular = [{
  // 都为0只保留一个0
  regular: /^v?([1-9]\d*|0)\.([1-9]\d*|0)\.0+$/,
  fixStr: function fixStr(str) {
    var stringList = str.split('.');
    var last = stringList.length - 1;

    stringList[last] = stringList[last].replace(/^0+/, '0');
    return stringList.join('.');
  }
}, {
  // 将1.1.000001格式连续的0去掉为1.1.1
  regular: /^v?([1-9]\d*|0)\.([1-9]\d*|0)\.0+[1-9]\d*$/,
  fixStr: function fixStr(str) {
    var stringList = str.split('.');
    var last = stringList.length - 1;

    stringList[last] = stringList[last].replace(/^0+/, '');
    return stringList.join('.');
  }
}, {
  // 将1.1.1.1.1截取为1.1.1
  regular: /^v?([1-9]\d*|0)\.([1-9]\d*|0)\.\d+\.(.*)$/,
  fixStr: function fixStr(str) {
    return str.split('.').slice(0, 3).join('.');
  }
}];

var Component = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('el-input', _vm._g(_vm._b({ staticClass: "semver-input", class: { 'is-error': !_vm.isValid }, attrs: { "value": _vm.version }, on: { "input": _vm.handelInput, "blur": _vm.handleBlur } }, 'el-input', _vm.$attrs, false), _vm.$listeners));
  }, staticRenderFns: [],
  name: 'ElSemverInput',
  props: {
    /**
     * 输入框默认值
     */
    value: {
      type: String
    },
    /**
     * 是否阻止非法输入字符
     */
    preventIllegal: {
      type: Boolean,
      default: true
    },
    /**
     * 是否根据填充规则进行自动填充
     */
    autoPadding: {
      type: Boolean,
      default: true
    },
    /**
     * 是否需要v前缀
     */
    prefix: {
      type: Boolean,
      default: true
    },
    /**
     * 默认输入框格式检验规则
     */
    validRegular: {
      type: RegExp,
      default: function _default() {
        return VERSION_PATTERN;
      }
    },
    /**
     * 默认自动填充规则
     */
    autoPaddingRegularList: {
      type: Array,
      default: function _default() {
        return autoPaddingRegularList;
      }
    }
  },
  data: function data() {
    return {
      version: this.value,
      isValid: true
    };
  },

  watch: {
    // 同步外面传进来的value
    value: function value(data) {
      this.version = data;
    }
  },
  methods: {
    handelInput: function handelInput() {
      var _this = this;

      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var hasV = false;

      // 如果需要阻止非法输入,则替换除了开头的第一个v，数字，点为空
      if (this.preventIllegal) {
        e = e.replace(/[^\d\.]/g, function (data) {
          if (data == v && e.startsWith(v) && !hasV) {
            hasV = true;
            return v;
          }
          return '';
        });
      }

      // 如果需要前缀且当前value不是v开头,则自动带上v
      var value = this.prefix && e.length > 0 && !e.startsWith(v) ? v + e : e;
      var isValid = this.checkVersionVaild(value);

      // this is hack! magic function
      this.$nextTick(function () {
        _this.notify({ value: value, isValid: isValid });
      });
    },

    // 失去焦点时进行判断
    handleBlur: function handleBlur() {
      var originValue = this.version || '';

      /**
       * 如果是不完全输入，会自动填充
       */
      // 依次寻找匹配自动填充的规则
      var matchPaddingRegular = this.autoPaddingRegularList.find(function (item) {
        return item.regular.test(originValue);
      });

      // 如果需要自动填充,且存在可以满足的自动填充，则自动填充后续字符串
      if (this.autoPadding && matchPaddingRegular) {
        var paddedValue = originValue + matchPaddingRegular.padding;

        // 自动补齐后可能会出现版本0.0.0, 将0.0.0替换为默认版本
        paddedValue = paddedValue.replace(NONSENSE_VERSION, MIN_VERSION);

        // 如果需要前缀，且没有输入前缀v，自动添加前缀
        paddedValue = this.prefix && !paddedValue.startsWith(v) ? v + paddedValue : paddedValue;

        this.notify({
          value: paddedValue
        });

        return;
      }

      /**
       * 如果是过量输入，会自动截取
       */
      // 尝试寻找可以自动fix的规则
      var matchFixRegular = autoFixRegular.find(function (item) {
        return item.regular.test(originValue);
      });
      // 满足条件则autoFix
      if (matchFixRegular) {
        var fixValue = matchFixRegular.fixStr(originValue);

        this.notify({
          value: fixValue
        });
        return;
      }

      // 格式不对重置输入框
      if (!this.checkVersionVaild(originValue)) {
        this.setDefaultVersion();
      }
    },
    updateValue: function updateValue(value) {
      /**
       * 输入框值改变时,对外通知输入框最新的值
       * @event input
       */
      this.$emit('input', value);
    },
    updateValid: function updateValid(isValid) {
      /**
       * 输入框值改变时,其值是否符合校验规则
       * @event validChange
       */
      this.$emit('validChange', isValid);
      this.isValid = isValid;
    },

    // 对外通知
    notify: function notify(_ref) {
      var value = _ref.value,
          _ref$isValid = _ref.isValid,
          isValid = _ref$isValid === undefined ? true : _ref$isValid;

      this.updateValue(value);
      this.updateValid(isValid);
    },
    checkVersionVaild: function checkVersionVaild() {
      var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // 不允许 0.0.0
      return version.split('.').some(function (item) {
        return item != 0;
      }) && this.validRegular.test(version);
    },

    // 重置value为默认版本（如失去焦点时若格式不对）
    setDefaultVersion: function setDefaultVersion() {
      this.notify({
        value: this.prefix ? v + DEFAULT_VERSION : DEFAULT_VERSION
      });
    }
  }
};

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('ElSemverInput', Component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install

  // To auto-install when vue is found
};var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default Component;
export { install };
