webpackJsonp([22],{

/***/ "DdWT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yYCR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/dynamic.js
var dynamic = __webpack_require__("IGLS");

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/index.js
var image_preview = __webpack_require__("Mqtp");
var image_preview_default = /*#__PURE__*/__webpack_require__.n(image_preview);

// EXTERNAL MODULE: ./src/api/sys.js
var sys = __webpack_require__("DEHg");

// EXTERNAL MODULE: ./src/types/index.js + 5 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/common/js/cordova/camera.js
var camera = __webpack_require__("akCl");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dynamic/issue.vue



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








/* harmony default export */ var issue = ({
    name: "dynamicIssue",
    data: function data() {
        return {
            content: "",
            images: [],
            defaultList: []
        };
    },
    activated: function activated() {
        this.content = '';
        this.defaultList = [];
        this.images = [];
    },

    methods: {
        /***
         * 点击选择图片
         */
        handlerPicture: function handlerPicture() {
            var _this = this;

            // this.$refs.file.click()
            Object(camera["b" /* getPictures */])(9, this.defaultList).then(function (images) {
                _this.images = [];
                _this.defaultList = [];

                Array.prototype.map.call(images, function (item) {
                    _this.defaultList.push(item.path);

                    Object(camera["a" /* getBase64 */])(item).then(function (res) {
                        _this.images.push("data:image/jpeg;base64," + res.thumbnailBase64);
                    });
                });
            });
        },

        /***
         * 提交
         */
        handlerSubmit: function handlerSubmit() {
            var _this2 = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                var loading, data, images;
                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                loading = _this2.$loading();
                                data = {
                                    content: _this2.content,
                                    type: '004001',
                                    mediaType: '003002',
                                    status: '020002'
                                };

                                if (!_this2.images.length) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 5;
                                return promise_default.a.all(_this2.images.map(function (item) {
                                    // return upload(item.file)
                                    return Object(sys["f" /* uploadBase64 */])(item);
                                }));

                            case 5:
                                images = _context.sent;


                                data.mediaPath = Object(types["c" /* isArray */])(images).join(';');

                            case 7:
                                _context.next = 9;
                                return Object(dynamic["j" /* saveMoment */])(data);

                            case 9:

                                loading.close();

                                _this2.$toast('发表成功！');

                                _this2.$emit('refresh');

                                _this2.$router.go(-2);

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }))();
        },

        /***
         * 点击浏览图片
         */
        handlerBrowse: function handlerBrowse(index) {
            image_preview_default()({
                images: this.images,
                startPosition: index
            });
        },

        /***
         * 点击删除图片
         */
        onDeletePicture: function onDeletePicture(item, index) {
            this.images.splice(index, 1);

            this.defaultList.splice(index, 1);
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f8bf488a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dynamic/issue.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dynamic-issue"},[_c('mu-appbar',{staticClass:"appbar navigator",attrs:{"title":"发布动态"}},[_c('mu-button',{attrs:{"slot":"left","color":"#fff","icon":""},on:{"click":function($event){_vm.$router.back()}},slot:"left"},[_c('mu-icon',{attrs:{"value":"navigate_before"}})],1),_vm._v(" "),_c('mu-button',{attrs:{"slot":"right","color":"#fff","flat":""},on:{"click":_vm.handlerSubmit},slot:"right"},[_vm._v("\n            发布\n        ")])],1),_vm._v(" "),_c('div',{staticClass:"dynamic-issue-content scroll-wrapper"},[_c('div',{staticClass:"input-wrapper border-1px-b"},[_c('mu-text-field',{attrs:{"placeholder":"分享新鲜事 ...","rows":5,"rows-max":8,"multi-line":"","full-width":"","solo":""},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1),_vm._v(" "),_c('div',{staticClass:"picture-wrapper"},[_vm._l((_vm.images),function(item,index){return _c('div',{key:index,staticClass:"picture",style:(("background-image: url(" + item + ")")),on:{"click":function($event){_vm.handlerBrowse(index)}}},[_c('mu-button',{attrs:{"color":"#f44336","small":"","icon":""},on:{"click":function($event){$event.stopPropagation();_vm.onDeletePicture(item, index)}}},[_c('mu-icon',{attrs:{"value":"delete"}})],1)],1)}),_vm._v(" "),(_vm.images.length < 9)?_c('mu-ripple',{staticClass:"picture border-1px",on:{"click":_vm.handlerPicture}},[_c('mu-icon',{staticClass:"append",attrs:{"value":"add","size":"50"}})],1):_vm._e()],2)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var dynamic_issue = (esExports);
// CONCATENATED MODULE: ./src/views/dynamic/issue.vue
function injectStyle (ssrContext) {
  __webpack_require__("DdWT")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f8bf488a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  issue,
  dynamic_issue,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_dynamic_issue = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=22.js.map