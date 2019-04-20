webpackJsonp([44],{

/***/ "9mFS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/setter/notice.vue


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




/* harmony default export */ var notice = ({
    name: "notice",
    mixins: [mixins["f" /* noticeMixins */]],
    methods: {
        handlerToggle: function handlerToggle(name) {
            this.setNovice(assign_default()({}, this.notice, defineProperty_default()({}, name, !this.notice[name])));

            console.log("%c\u5F53\u524D " + name + " \u4E3A " + this.notice[name], 'color: #673ab7');
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0da95e06","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/setter/notice.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notice"},[_c('navigate',{attrs:{"title":"消息通知","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper",staticStyle:{"padding-top":"15px"}},[_c('mu-list',{staticStyle:{"background-color":"#fff","padding":"0"}},[_c('mu-list-item',{staticClass:"list-item border-1px-b"},[_c('mu-list-item-title',[_vm._v("是否接收推送")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.notice.push},on:{"change":function($event){_vm.handlerToggle('push')}}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item border-1px-b shrink"},[_c('mu-list-item-title',[_vm._v("铃声提示")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.notice.ring,"disabled":!_vm.notice.push},on:{"change":function($event){_vm.handlerToggle('ring')}}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item border-1px-b shrink"},[_c('mu-list-item-title',[_vm._v("震动提示")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.notice.shock,"disabled":!_vm.notice.push},on:{"change":function($event){_vm.handlerToggle('shock')}}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item"},[_c('mu-list-item-title',[_vm._v("消息弹窗提示")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.notice.popup,"disabled":!_vm.notice.push},on:{"change":function($event){_vm.handlerToggle('popup')}}})],1)],1)],1),_vm._v(" "),_c('div',{staticStyle:{"height":"15px"}}),_vm._v(" "),_c('mu-list',{staticStyle:{"background-color":"#fff","padding":"0"}},[_c('mu-list-item',{staticClass:"list-item"},[_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v("勿扰模式")]),_vm._v(" "),_c('mu-list-item-sub-title',[_vm._v("晚上 20:00 ~ 早上 8:00")])],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.notice.disturbed},on:{"change":function($event){_vm.handlerToggle('disturbed')}}})],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setter_notice = (esExports);
// CONCATENATED MODULE: ./src/views/about/setter/notice.vue
function injectStyle (ssrContext) {
  __webpack_require__("J+fu")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0da95e06"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  notice,
  setter_notice,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_setter_notice = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "J+fu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=44.js.map