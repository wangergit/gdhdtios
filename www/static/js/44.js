webpackJsonp([44],{

/***/ "FmvV":
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

// EXTERNAL MODULE: ./src/api/dynamic.js
var dynamic = __webpack_require__("IGLS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dynamic/job-info.vue


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




/* harmony default export */ var job_info = ({
    name: "job",
    data: function data() {
        return {
            content: ""
        };
    },
    activated: function activated() {
        this.content = '';
    },

    methods: {
        handlerSubmit: function handlerSubmit() {
            var _this = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                var loading, data;
                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                loading = _this.$loading();

                                if (_this.content) {
                                    _context.next = 4;
                                    break;
                                }

                                _this.$toast('请填写个人信息!');

                                return _context.abrupt("return", loading.close());

                            case 4:
                                data = {
                                    type: '004004',
                                    mediaType: '003002',
                                    status: '020002',
                                    content: _this.content
                                };
                                _context.next = 7;
                                return Object(dynamic["j" /* saveMoment */])(data);

                            case 7:

                                loading.close();

                                _this.$toast('发表成功！');

                                _this.$emit('refresh');

                                _this.$router.go(-2);

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4f22c456","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dynamic/job-info.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"job"},[_c('navigate',{attrs:{"title":"发布求职","position":"absolute"}},[_c('mu-button',{attrs:{"slot":"right","color":"#fff","flat":""},on:{"click":_vm.handlerSubmit},slot:"right"},[_vm._v("发送")])],1),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-text-field',{staticStyle:{"padding":"10px 15px"},attrs:{"placeholder":"个人信息","rows":20,"multi-line":"","full-width":"","solo":""},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var dynamic_job_info = (esExports);
// CONCATENATED MODULE: ./src/views/dynamic/job-info.vue
function injectStyle (ssrContext) {
  __webpack_require__("W72z")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f22c456"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  job_info,
  dynamic_job_info,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_dynamic_job_info = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "W72z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=44.js.map