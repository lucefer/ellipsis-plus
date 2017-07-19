(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ellipsisPlus"] = factory();
	else
		root["ellipsisPlus"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(3)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(5),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/fanqi/Documents/mine/lucefer/ellipsis-plus/src/ellipsis-plus.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ellipsis-plus.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2393ed58", Component.options)
  } else {
    hotAPI.reload("data-v-2393ed58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ellipsis_plus_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ellipsis_plus_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_ellipsis_plus_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__src_ellipsis_plus_vue___default.a; });


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ellipsis-plus',
  props: {
    text: String,
    line: {
      type: Number,
      default: 2
    },
    ellipsis: {
      type: String,
      default: '...'
    },
    showButton: {
      type: Boolean,
      default: true
    },
    expandText: {
      type: String,
      default: '展开全部',
      validator(value) {
        return value && value.trim().length;
      }
    },
    collapseText: {
      type: String,
      default: '收起',
      validator(value) {
        return value && value.trim().length;
      }
    }
  },
  data() {
    return {
      tmpTxt: '',
      show: false,
      marginLeft: 0,
      collapseMarginLeft: 0
    };
  },
  created() {},
  mounted() {
    if (!this.line) {
      return;
    }
    let everywidth = this.$refs.txt.offsetWidth;
    this.$refs.txt.innerHTML = this.text;
    let containerWidth = this.$refs.container.offsetWidth;
    let btnWidth = 0;
    let btnWidthExpand = 0;
    let ellipsisWidth = this.$refs.ellipsis.offsetWidth;
    if (this.showButton) {
      btnWidthExpand = btnWidth = Math.ceil(parseFloat(getComputedStyle(this.$refs.more, null)['width'].replace('px', '')));
      this.$refs.ellipsis.style.display = 'none';
      let left = 0;
      let btnClone = this.$refs.more.cloneNode();
      if (this.expandText !== this.collapseText) {
        this.$refs.more.style.display = 'none';
        btnClone.innerHTML = this.collapseText;
        btnClone.style.display = 'inline-block';
        this.$refs.container.appendChild(btnClone);
        btnWidthExpand = Math.ceil(parseFloat(getComputedStyle(btnClone, null)['width'].replace('px', '')));
        left = btnClone.offsetLeft;
      }
      // 魔法数字 5
      if (btnClone.offsetTop <= this.$refs.ellipsis.offsetTop + 5) {
        this.marginLeft = containerWidth - btnWidthExpand - left + ellipsisWidth;
      } else {
        this.marginLeft = containerWidth - btnWidthExpand - left;
      }
      btnClone.remove();
      this.$refs.more.style.display = 'inline-block';
      this.$refs.ellipsis.style.display = 'inline-block';
    }

    let style = getComputedStyle(this.$refs.container, null);
    let lineHeight = parseFloat(style['lineHeight'].replace('px', ''));

    this.$refs.txt.innerHTML = this.text;
    if (Math.floor(this.$refs.container.offsetHeight / lineHeight) <= this.line) {
      this.tmpTxt = this.text;
      this.show = true;
      this.showButton = false;
      return;
    }
    let initNum = Math.floor((containerWidth * this.line - btnWidth - ellipsisWidth) / everywidth);
    let increase = 1;
    this.$refs.txt.innerHTML = this.text.substr(0, initNum);
    if (Math.round(this.$refs.container.offsetHeight / lineHeight) > this.line) {
      increase = -1;
    }
    for (let i = initNum; i < this.text.length; i = i + increase) {
      if (i < 0 || i > this.text.length) {
        return;
      }
      this.$refs.txt.innerHTML = this.text.substr(0, i);
      if (increase === 1 && Math.round(this.$refs.container.offsetHeight / lineHeight) > this.line) {
        this.tmpTxt = this.text.substr(0, i - 1);
        this.$refs.txt.innerHTML = this.tmpTxt;
        if (this.showButton) {
          let left = this.$refs.more.offsetLeft;
          this.collapseMarginLeft = containerWidth - btnWidth - left - 1;
        }
        break;
      } else if (increase === -1 && Math.round(this.$refs.container.offsetHeight / lineHeight) === this.line) {
        this.tmpTxt = this.text.substr(0, i);
        this.$refs.txt.innerHTML = this.tmpTxt;
        if (this.showButton) {
          let left = this.$refs.more.offsetLeft;
          this.collapseMarginLeft = containerWidth - btnWidth - left - 1;
        }
        break;
      }
    }
  },
  methods: {
    handleClick() {
      if (this.show) {
        this.collapse();
      } else {
        this.expand();
      }
    },
    expand() {
      if (!this.show) {
        this.show = true;
        this.$refs.txt.innerHTML = this.text;
      }
    },
    collapse() {
      if (this.show) {
        this.show = false;
        this.$refs.txt.innerHTML = this.tmpTxt;
      }
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "ellipsis-plus"
  }, [_c('span', {
    ref: "txt",
    staticClass: "ellipsis-plus-txt"
  }, [_vm._v("中")]), _c('span', {
    ref: "ellipsis",
    staticClass: "ellipsis-plus-ellipsis",
    style: ({
      'display': _vm.show ? 'none' : 'inline-block'
    })
  }, [_vm._v(_vm._s(_vm.ellipsis))]), (_vm.showButton) ? _c('button', {
    ref: "more",
    staticClass: "ellipsis-plus-button",
    style: ({
      'margin-left': (_vm.show ? (_vm.marginLeft + 'px') : _vm.collapseMarginLeft + 'px')
    }),
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._v(_vm._s(_vm.show ? _vm.collapseText : _vm.expandText))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2393ed58", module.exports)
  }
}

/***/ })
/******/ ]);
});