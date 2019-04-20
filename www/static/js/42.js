webpackJsonp([42],{

/***/ "2t7s":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rJY+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/message/detail.vue
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




/* harmony default export */ var detail = ({
    name: "detail",
    data: function data() {
        return {
            detail: {}
        };
    },

    props: {
        id: {
            type: String,
            default: ''
        }
    },
    created: function created() {
        this.queryNoticeDetail();
    },

    methods: {
        queryNoticeDetail: function queryNoticeDetail() {
            var _this = this;

            Object(personal["p" /* queryNoticeDetail */])({ id: this.id }).then(function (res) {
                _this.detail = res;
            });
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19f51e6b","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/message/detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"message-detail"},[_c('navigate',{attrs:{"title":"详情","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"header border-1px-b"},[_c('h2',{staticClass:"title"},[_vm._v(_vm._s(_vm.detail.title))]),_vm._v(" "),_c('p',{staticClass:"time"},[_vm._v(_vm._s(_vm.detail.publishTime))])]),_vm._v(" "),_c('p',{staticClass:"content"},[_vm._v("\n            "+_vm._s(_vm.detail.content)+"\n        ")])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var message_detail = (esExports);
// CONCATENATED MODULE: ./src/views/about/message/detail.vue
function injectStyle (ssrContext) {
  __webpack_require__("2t7s")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19f51e6b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  detail,
  message_detail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_message_detail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=42.js.map