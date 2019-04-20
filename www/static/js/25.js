webpackJsonp([25],{

/***/ "9mFS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/common/js/mixins/index.js
var mixins = __webpack_require__("HOuZ");

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
    mixins: [mixins["a" /* AppMixins */]],
    methods: {
        handlerToggle: function handlerToggle(name) {
            var notification = {};

            notification[name] = !this.App.notification[name];

            this.setAppTypes({ notification: notification });

            console.log("%c\u5F53\u524D" + name + "\u4E3A " + notification[name], 'color: #673ab7');
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2706d718","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/setter/notice.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notice"},[_c('navigate',{attrs:{"title":"消息通知","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper",staticStyle:{"padding-top":"15px"}},[_c('mu-list',{staticStyle:{"background-color":"#fff","padding":"0"}},[_c('mu-list-item',{staticClass:"list-item"},[_c('mu-list-item-title',[_vm._v("是否接受推送")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.App.notification.push},on:{"change":function($event){_vm.handlerToggle('push')}}})],1)],1),_vm._v(" "),_c('mu-divider',{attrs:{"shallow-inset":""}}),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item"},[_c('mu-list-item-title',[_vm._v("铃声提示")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.App.notification.ring},on:{"change":function($event){_vm.handlerToggle('ring')}}})],1)],1),_vm._v(" "),_c('mu-divider',{attrs:{"shallow-inset":""}}),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item"},[_c('mu-list-item-title',[_vm._v("震动提示")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.App.notification.shock},on:{"change":function($event){_vm.handlerToggle('shock')}}})],1)],1),_vm._v(" "),_c('mu-divider',{attrs:{"shallow-inset":""}}),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item"},[_c('mu-list-item-title',[_vm._v("消息弹窗提示")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.App.notification.popup},on:{"change":function($event){_vm.handlerToggle('popup')}}})],1)],1)],1),_vm._v(" "),_c('div',{staticStyle:{"height":"15px"}}),_vm._v(" "),_c('mu-list',{staticStyle:{"background-color":"#fff","padding":"0"}},[_c('mu-list-item',{staticClass:"list-item"},[_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v("勿扰模式")]),_vm._v(" "),_c('mu-list-item-sub-title',[_vm._v("晚上 20:00 ~ 早上 8:00")])],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.App.notification.disturbed},on:{"change":function($event){_vm.handlerToggle('disturbed')}}})],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setter_notice = (esExports);
// CONCATENATED MODULE: ./src/views/about/setter/notice.vue
function injectStyle (ssrContext) {
  __webpack_require__("JeE9")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2706d718"
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

/***/ "JeE9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=25.js.map