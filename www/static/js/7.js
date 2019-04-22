webpackJsonp([7],{

/***/ "8pSg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/api/sys.js
var sys = __webpack_require__("DEHg");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/feedback/feedback.vue


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






/* harmony default export */ var feedback = ({
    name: "feedback",
    mixins: [mixins["i" /* userMixins */]],
    data: function data() {
        return {
            loading: false,
            params: {
                content: '',
                contact: '',
                imgPath: '',
                token: ''
            },
            image: ''
        };
    },
    activated: function activated() {
        this.params = {
            content: '',
            contact: this.user.phone || '',
            imgPath: '',
            token: ''
        };

        this.image = '';
    },

    methods: {
        // 提交
        submit: function submit() {
            var _this = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this.loading = true;

                                _this.$toast({
                                    message: '正在提交 ...',
                                    duration: 0
                                });

                                if (!(!_this.params.content && !_this.image)) {
                                    _context.next = 5;
                                    break;
                                }

                                _this.loading = false;
                                return _context.abrupt("return", _this.$toast('请填写您的反馈意见'));

                            case 5:
                                if (!_this.image) {
                                    _context.next = 9;
                                    break;
                                }

                                _context.next = 8;
                                return Object(sys["e" /* upload */])(_this.$refs.file.files[0]);

                            case 8:
                                _this.params.imgPath = _context.sent;

                            case 9:

                                Object(personal["u" /* saveOrUpdateFeedback */])(_this.params).then(function (res) {
                                    _this.loading = false;

                                    _this.$toast('提交成功!');

                                    _this.$router.back();
                                }).catch(function (err) {
                                    _this.$toast('提交失败');
                                });

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },

        // 更换图片
        handlerPictureChange: function handlerPictureChange() {
            var image = this.$refs.file.files[0];

            if (!image) return;

            this.image = URL.createObjectURL(image);
        },

        // 添加图片
        handlerAddImage: function handlerAddImage() {
            this.$refs.file.click();
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-25114f9b","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/feedback/feedback.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feedback"},[_c('navigate',{attrs:{"title":"意见反馈","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"feedback-form paper"},[_c('div',{staticClass:"field-wrapper"},[_c('mu-text-field',{attrs:{"rows":5,"rows-max":5,"placeholder":"您的意见将帮助我们改善产品和服务","full-width":"","multi-line":"","solo":""},model:{value:(_vm.params.content),callback:function ($$v) {_vm.$set(_vm.params, "content", $$v)},expression:"params.content"}})],1),_vm._v(" "),_c('div',{staticClass:"picture-wrapper theme-text-secondary",class:{empty: !_vm.image},style:({backgroundImage: ("url(" + (_vm.params.imgPath || _vm.image) + ")")}),on:{"click":_vm.handlerAddImage}})]),_vm._v(" "),_c('div',{staticClass:"feedback-phone paper"},[_c('mu-text-field',{attrs:{"placeholder":"请输入您的联系方式","full-width":"","solo":""},model:{value:(_vm.params.contact),callback:function ($$v) {_vm.$set(_vm.params, "contact", $$v)},expression:"params.contact"}})],1),_vm._v(" "),_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"db ma w90 mb-30 background-primary",attrs:{"color":"#fff","disabled":_vm.loading,"data-mu-loading-size":"24","flat":""},on:{"click":_vm.submit}},[_vm._v("提交\n        ")]),_vm._v(" "),_c('div',{staticStyle:{"visibility":"hidden"}},[_c('input',{ref:"file",attrs:{"type":"file","accept":"image/*"},on:{"change":_vm.handlerPictureChange}})])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var feedback_feedback = (esExports);
// CONCATENATED MODULE: ./src/views/about/feedback/feedback.vue
function injectStyle (ssrContext) {
  __webpack_require__("sNKW")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25114f9b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  feedback,
  feedback_feedback,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_feedback_feedback = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sNKW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=7.js.map