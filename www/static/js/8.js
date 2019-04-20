webpackJsonp([8],{

/***/ "HiNO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "R4Zp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/switch/switch.vue
//
//
//
//
//
//
//
//
//

/* harmony default export */ var switch_switch = ({
    name: "m-switch",
    props: {
        value: {},
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    methods: {
        handlerItem: function handlerItem(item) {
            this.$emit('input', item.value);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9e46f2fc","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/switch/switch.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-switch"},_vm._l((_vm.items),function(item){return _c('div',{staticClass:"m-switch-item",class:{'active': item.value === _vm.value},on:{"click":function($event){_vm.handlerItem(item)}}},[_vm._v("\n        "+_vm._s(item.text)+"\n    ")])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_switch_switch = (esExports);
// CONCATENATED MODULE: ./src/components/switch/switch.vue
function injectStyle (ssrContext) {
  __webpack_require__("ibk1")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9e46f2fc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  switch_switch,
  components_switch_switch,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_switch_switch = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "d4GJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/components/switch/switch.vue + 2 modules
var switch_switch = __webpack_require__("R4Zp");

// EXTERNAL MODULE: ./src/common/js/mixins/index.js
var mixins = __webpack_require__("HOuZ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/setter/mode.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var mode = ({
    name: "mode",
    mixins: [mixins["a" /* AppMixins */], mixins["b" /* MapMixins */]],
    data: function data() {
        return {
            items: [{
                value: 'light',
                text: '白天'
            }, {
                value: 'dark',
                text: '夜晚'
            }]
        };
    },

    methods: {
        handlerToggleMode: function handlerToggleMode(mode) {
            var _this = this;

            this.theme().then(function (res) {
                _this.setAppTypes({ mode: mode });
            });
            console.log("%c\u5F53\u524D\u6A21\u5F0F\u4E3A " + mode, 'color: #673ab7');
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */],
        MSwitch: switch_switch["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-16990257","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/setter/mode.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mode"},[_c('navigate',{attrs:{"title":"模式切换","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-list',{staticStyle:{"background-color":"#fff","padding":"0"}},[_c('mu-list-item',[_c('mu-list-item-title',[_vm._v("切换模式")]),_vm._v(" "),_c('mu-list-item-title',{staticStyle:{"display":"flex","justify-content":"flex-end","align-items":"center","height":"100%"}},[_c('div',{staticStyle:{"padding":"5px"}},[_c('m-switch',{attrs:{"value":_vm.App.mode,"items":_vm.items},on:{"input":_vm.handlerToggleMode}})],1)])],1),_vm._v(" "),_c('mu-divider',{attrs:{"shallow-inset":""}}),_vm._v(" "),_c('mu-list-item',[_c('mu-list-item-title',[_vm._v("自定义时间")]),_vm._v(" "),_c('mu-list-item-title',{staticStyle:{"display":"flex","align-items":"center","justify-content":"flex-end"}},[_c('p',{staticStyle:{"font-size":"12px","color":"rgba(0,0,0,.33)"}},[_vm._v("晚上20:00 ~ 早上08:00")]),_vm._v(" "),_c('mu-icon',{attrs:{"value":"chevron_right","color":"rgba(0,0,0,.12)"}})],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setter_mode = (esExports);
// CONCATENATED MODULE: ./src/views/about/setter/mode.vue
function injectStyle (ssrContext) {
  __webpack_require__("HiNO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-16990257"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  mode,
  setter_mode,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_setter_mode = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ibk1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=8.js.map