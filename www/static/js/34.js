webpackJsonp([34],{

/***/ "A+57":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/common/js/cordova/index.js
var cordova = __webpack_require__("HM3N");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/setter/brightness.vue
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





/* harmony default export */ var brightness = ({
    name: "brightness",
    mixins: [mixins["a" /* appMixins */]],
    data: function data() {
        return {
            tip: false
        };
    },
    created: function created() {
        var _this = this;

        cordova["b" /* default */].brightness.get().then(function (brightness) {
            console.log("%c\u5F53\u524D\u5C4F\u5E55\u4EAE\u5EA6\u4E3A " + brightness, 'color: #673ab7');
            if (brightness > 0) {
                _this.tip = true;

                _this.setBrightness(Math.round(brightness * 100));
            }
        });
    },

    methods: {
        change: function change(value) {
            var _this2 = this;

            cordova["b" /* default */].brightness.set(value).then(function (status) {
                _this2.setBrightness(value);
            });
        },
        defaultBrightness: function defaultBrightness() {
            var _this3 = this;

            cordova["b" /* default */].brightness.set(-1).then(function (status) {
                _this3.tip = false;

                _this3.setBrightness(0);
            });
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a3b2da86","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/setter/brightness.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brightness"},[_c('navigate',{attrs:{"title":"亮度设置","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-list',[_c('mu-list-item',{staticClass:"item title border-1px-b"},[_c('mu-list-item-title',[_vm._v("屏幕亮度")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-button',{attrs:{"if":_vm.tip,"color":"info","flat":"","small":""},on:{"click":_vm.defaultBrightness}},[_vm._v("跟随系统")])],1)],1),_vm._v(" "),_c('mu-list-item',[_c('mu-slider',{staticStyle:{"margin":"0"},attrs:{"value":_vm.brightness,"step":1},on:{"change":_vm.change}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setter_brightness = (esExports);
// CONCATENATED MODULE: ./src/views/about/setter/brightness.vue
function injectStyle (ssrContext) {
  __webpack_require__("ZDkm")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a3b2da86"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  brightness,
  setter_brightness,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_setter_brightness = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ZDkm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=34.js.map