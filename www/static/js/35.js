webpackJsonp([35],{

/***/ "YVZ3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cdN9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/components/agreement/service-agreement.vue + 2 modules
var service_agreement = __webpack_require__("G3JL");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/setter/related.vue
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




/* harmony default export */ var related = ({
    name: "aboutApp",
    data: function data() {
        return {
            logo: "static/image/logo.png",
            panel: "",
            version: '0.0.0',
            agree: false
        };
    },
    created: function created() {
        var _this = this;

        window.$cordova_api.app.version().then(function (res) {
            _this.version = res;

            console.log("%c\u5F53\u524DAPP\u7248\u672C\u4E3A " + res, 'color: #673ab7');
        });
    },

    methods: {
        toggle: function toggle(panel) {
            this.panel = panel === this.panel ? "" : panel;
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */],
        ServiceAgreement: service_agreement["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-86243bcc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/setter/related.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-related"},[_c('navigate',{attrs:{"title":"关于","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"related-content"},[_c('div',{staticClass:"logo paper m-25"},[_c('img',{attrs:{"src":_vm.logo}})]),_vm._v(" "),_c('h1',{staticClass:"title"},[_vm._v("广东航道通")]),_vm._v(" "),_c('div',{staticClass:"version"},[_vm._v("版本: "+_vm._s(_vm.version))]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('router-link',{staticClass:"db p-15 tc color-primary",attrs:{"to":{name: 'about-feedback'}}},[_vm._v("\n                欢迎对广东航道通客户端提出宝贵意见和建议\n            ")]),_vm._v(" "),_c('div',{staticClass:"APP-Information mt-20 p-15 color-primary",on:{"click":function($event){_vm.agree = true}}},[_vm._v("\n                《广东航道通移动客户端用户使用协议》\n            ")])],1)]),_vm._v(" "),_c('mu-dialog',{attrs:{"title":"广东航道通移动客户端用户使用协议","width":"500px","max-width":"86%","open":_vm.agree,"scrollable":"","lock-scroll":""},on:{"update:open":function($event){_vm.agree=$event}}},[_c('service-agreement')],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"abstract"},[_c('p',[_vm._v("为提升广东航道公共服务水平，广东省航道事务中心开发了“广东航道通”APP，现上线测试。")]),_vm._v(" "),_c('p',[_vm._v("\n                    该APP采用智能手机客户端的方式，提供在线电子航道图、航标、桥梁通航尺度、水位等助航信息，为社会公众提供更加直观、高效的航道信息展示和移动互联的助航信息服务。测试阶段开通航线、助航、资讯、动态圈等栏目。欢迎参与测试的用户向我们反馈使用意见和建议。")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setter_related = (esExports);
// CONCATENATED MODULE: ./src/views/about/setter/related.vue
function injectStyle (ssrContext) {
  __webpack_require__("YVZ3")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  related,
  setter_related,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_setter_related = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=35.js.map