webpackJsonp([38],{

/***/ "CnDZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FHu+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/remind/index.vue
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




/* harmony default export */ var remind = ({
    name: "remind",
    mixins: [mixins["a" /* appMixins */]],
    data: function data() {
        return {
            events: true,
            phone: false,
            gender: false
        };
    },

    methods: {
        handlerSpeech: function handlerSpeech(value) {
            this.setSpeech(value);
        },
        handlerText: function handlerText(value) {
            this.setText(value);
        },
        toggleSpeechGender: function toggleSpeechGender(value) {
            value = value ? this.SPEECH_GENDER_WOMAN.value : this.SPEECH_GENDER_MAN.value;

            this.setSpeechGender(value);
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6f530f1c","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/remind/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"remind"},[_c('navigate',{attrs:{"title":"航行提醒","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-list',{staticClass:"pn"},[_c('mu-list-item',{staticClass:"border-1px-b",attrs:{"avatar":""}},[_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v("语音播报提醒")]),_vm._v(" "),_c('mu-list-item-sub-title',[_vm._v("在航行中实时向您播报安全信息")])],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.speech},on:{"change":_vm.handlerSpeech}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"border-1px-b",attrs:{"avatar":""}},[_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v("文字提醒")]),_vm._v(" "),_c('mu-list-item-sub-title',[_vm._v("将助航信息以文字形式显示在地图上方")])],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-switch',{attrs:{"input-value":_vm.text},on:{"change":_vm.handlerText}})],1)],1),_vm._v(" "),_c('mu-list-item',{attrs:{"avatar":""}},[_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v("语音性别")]),_vm._v(" "),_c('mu-list-item-sub-title',[_vm._v("切换航行提醒的声音主题")])],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-checkbox',{attrs:{"input-value":_vm.speechGender === _vm.SPEECH_GENDER_WOMAN.value,"value":_vm.SPEECH_GENDER_WOMAN.value,"color":"secondary","uncheck-icon":"sentiment_satisfied_alt","checked-icon":"face"},on:{"change":_vm.toggleSpeechGender}})],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var about_remind = (esExports);
// CONCATENATED MODULE: ./src/views/about/remind/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("CnDZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f530f1c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  remind,
  about_remind,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_about_remind = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=38.js.map