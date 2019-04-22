webpackJsonp([24],{

/***/ "GeQl":
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

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/api/search.js
var search = __webpack_require__("8stH");

// EXTERNAL MODULE: ./src/common/js/cordova/camera.js
var camera = __webpack_require__("akCl");

// EXTERNAL MODULE: ./src/api/sys.js
var sys = __webpack_require__("DEHg");

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/index.js
var image_preview = __webpack_require__("Mqtp");
var image_preview_default = /*#__PURE__*/__webpack_require__.n(image_preview);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/report/editor.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var editor_name = 'SELECTION_and_TAGGING_and_REPORT_EDITOR';

/* harmony default export */ var editor = ({
    name: editor_name,
    data: function data() {
        return {
            open: false,
            loading: false,
            defaultList: [],
            taggingTypes: [],
            reportTypes: [],
            preHost: this.$images + '\\',
            formReport: {
                images: '',
                type: '',
                longitude: "",
                latitude: "",
                subType: ""
            }
        };
    },

    props: {
        id: {
            type: String,
            default: ''
        },
        longitude: {
            type: [String, Number],
            default: 0
        },
        latitude: {
            type: [String, Number],
            default: 0
        }
    },
    computed: {
        title: function title() {

            return '修改上报';
        },
        mode: function mode() {

            return 'report';
        },
        types: function types() {
            return this.reportTypes;
        }
    },
    created: function created() {
        var _this = this;

        Object(search["c" /* queryTypeDictByFid */])('031').then(function (res) {
            _this.reportTypes = res;
        });
    },
    activated: function activated() {
        var _this2 = this;

        console.log(" this.$images ", this.$images);
        this.preHost = this.$images + '\\';
        this.formReport = {
            images: [],
            type: '',
            longitude: "",
            latitude: ""
        };

        Object(personal["s" /* queryReportDetail */])(this.id).then(function (res) {
            _this2.formReport = res;
        });

        this.defaultList = [];
    },

    methods: {
        /***
         * 点击选择图片
         */
        handlerPicture: function handlerPicture() {
            var _this3 = this;

            Object(camera["b" /* getPictures */])(9, this.defaultList).then(function (images) {
                _this3.formReport.images = [];
                _this3.defaultList = [];
                _this3.preHost = "";
                Array.prototype.forEach.call(images, function (item) {
                    _this3.defaultList.push(item.path);
                    Object(camera["a" /* getBase64 */])(item).then(function (res) {
                        _this3.formReport.images.push("data:image/jpeg;base64," + res.thumbnailBase64);
                    });
                });
            });
        },

        /***
         * 点击浏览图片
         */
        handlerBrowse: function handlerBrowse(index) {
            var perviews = [];
            for (var j = 0, len = this.formReport.images.length; j < len; j++) {
                perviews.push(this.preHost + this.formReport.images[j]);
            }

            image_preview_default()({
                images: perviews,
                startPosition: index
            });
        },

        /***
         * 删除图片
         */
        deletePicture: function deletePicture(item, index) {
            this.formReport.images.splice(index, 1);
            this.defaultList.splice(index, 1);
        },

        // 切换类型
        handlerToggleType: function handlerToggleType(typeId) {

            this.formReport.subType = typeId;
        },

        // 类型
        type: function type(value) {
            var result = this.types.find(function (item) {
                return item.id === value;
            });

            return result || {};
        },

        // 提交
        handlerSubmit: function handlerSubmit() {
            this.loading = true;

            switch (this.mode) {
                case 'report':
                    return this.handlerReport();
                default:
                    this.$toast('当前模式不可使用！');
            }
        },


        // TODO: 添加&修改故障上报
        handlerReport: function handlerReport() {
            var _this4 = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                var images, data;
                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                images = [];

                                _this4.$toast({
                                    type: 'loading',
                                    position: 'center',
                                    message: '正在上传 ...',
                                    duration: 0
                                });

                                if (!_this4.formReport.images.length) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 5;
                                return promise_default.a.all(_this4.formReport.images.map(function (image) {
                                    if (image.split("image/jpeg;base64").length > 1) {
                                        return Object(sys["f" /* uploadBase64 */])(image);
                                    } else {
                                        return image;
                                    }
                                }));

                            case 5:
                                images = _context.sent;

                            case 6:
                                data = {
                                    describe: _this4.formReport.describe,
                                    images: images,
                                    type: _this4.formReport.subType,
                                    longitude: _this4.formReport.longitude || _this4.longitude,
                                    latitude: _this4.formReport.latitude || _this4.latitude
                                };


                                if (_this4.id) {
                                    data.id = _this4.id;
                                }

                                if (data.type) {
                                    _context.next = 12;
                                    break;
                                }

                                _this4.loading = false;
                                _this4.$toast("请选择上报类型");
                                return _context.abrupt("return");

                            case 12:

                                Object(personal["t" /* saveFaultReport */])(data).then(function (res) {

                                    _this4.$toast('修改成功');

                                    _this4.$router.back();

                                    _this4.loading = false;

                                    window.Arcgis && window.Arcgis.refreshMapLayers();

                                    _this4.$emit('update');
                                }).catch(function (error) {
                                    _this4.$toast('修改失败');

                                    _this4.loading = false;
                                });

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this4);
            }))();
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    },
    filters: {
        formatDate: time["b" /* formatDate */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ea75a11c","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/report/editor.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tagging-editor"},[_c('navigate',{attrs:{"title":_vm.title,"position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[(_vm.mode === 'report')?_c('mu-form',{attrs:{"model":_vm.formReport,"label-position":"left","label-width":"80"}},[_c('div',{staticClass:"p-15 fz-14"},[_vm._v(_vm._s(_vm._f("formatDate")(Date.now())))]),_vm._v(" "),_c('mu-form-item',{staticClass:"mn p-15 paper",attrs:{"label":"上报类型","prop":"type"},nativeOn:{"click":function($event){_vm.open = true}}},[_c('mu-row',{staticClass:"mn w h",attrs:{"align-items":"center","justify-content":"end"}},[(_vm.formReport.typeId)?_c('span',{staticClass:"color-primary fz-14"},[_vm._v(_vm._s(_vm.type(_vm.formReport.subType).name))]):_c('span',{staticClass:"color-primary fz-12"},[_vm._v("请选择")])])],1),_vm._v(" "),_c('mu-form-item',{staticClass:"mt-20 paper",attrs:{"prop":"image","label-position":"top","label-width":"100%"}},[_c('div',{staticClass:"p-15 border-1px-b",attrs:{"slot":"label"},slot:"label"},[_vm._v("照片")]),_vm._v(" "),_c('div',{staticClass:"picture-wrapper pt-25"},[(_vm.formReport.images.length < 9)?_c('div',{staticClass:"picture border-1px",on:{"click":_vm.handlerPicture}},[_c('mu-icon',{staticClass:"append",attrs:{"value":"add"}})],1):_vm._e(),_vm._v(" "),_vm._l((_vm.formReport.images),function(item,index){return _c('div',{staticClass:"picture",style:({backgroundImage: ("url('" + (_vm.preHost+item) + "')")}),on:{"click":function($event){_vm.handlerBrowse(index)}}},[_c('mu-button',{staticClass:"scale-small",attrs:{"color":"#f44336","size":"16","fab":""},on:{"click":function($event){$event.stopPropagation();_vm.deletePicture(item, index)}}},[_c('mu-icon',{attrs:{"value":"delete"}})],1)],1)})],2)]),_vm._v(" "),_c('mu-form-item',{staticClass:"paper",attrs:{"prop":"describe","label-position":"top","label-width":"100%"}},[_c('div',{staticClass:"p-15 border-1px-b",attrs:{"slot":"label"},slot:"label"},[_vm._v("描述")]),_vm._v(" "),_c('div',{staticClass:"p-15 w"},[_c('mu-text-field',{attrs:{"placeholder":"请输入描述信息 ...","rows":8,"max-length":300,"full-width":"","multi-line":"","solo":""},model:{value:(_vm.formReport.describe),callback:function ($$v) {_vm.$set(_vm.formReport, "describe", $$v)},expression:"formReport.describe"}})],1)]),_vm._v(" "),_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"db ma w90 background-primary mb-30",attrs:{"color":"#fff","data-mu-loading-size":"24","disabled":_vm.loading,"flat":""},on:{"click":_vm.handlerSubmit}},[_vm._v("提交\n            ")])],1):_vm._e()],1),_vm._v(" "),_c('mu-bottom-sheet',{staticClass:"scroll-y mh50",attrs:{"open":_vm.open,"lock-scroll":""},on:{"update:open":function($event){_vm.open=$event}}},[_c('mu-list',{on:{"item-click":function($event){_vm.open = false}}},_vm._l((_vm.types),function(item,index){return _c('mu-list-item',{key:index,attrs:{"button":""},nativeOn:{"click":function($event){_vm.handlerToggleType(item.id)}}},[_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"room","color":_vm.formReport.subType === item.id ? 'orange' : ''}})],1),_vm._v(" "),_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v(_vm._s(item.name))])],1)],1)}))],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var report_editor = (esExports);
// CONCATENATED MODULE: ./src/views/about/report/editor.vue
function injectStyle (ssrContext) {
  __webpack_require__("l0xL")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ea75a11c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  editor,
  report_editor,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_report_editor = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "l0xL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=24.js.map