webpackJsonp([3],{

/***/ "VWi4":
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

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/api/search.js
var search = __webpack_require__("8stH");

// EXTERNAL MODULE: ./src/types/index.js + 3 modules
var types = __webpack_require__("NaSR");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/tagging/editor.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            show: true,
            hide: false,
            loading: false,
            taggingTypes: [],
            reportTypes: [],
            form: {
                title: "",
                type: "",
                shared: false,
                image: '',
                detail: "",
                longitude: "",
                latitude: ""
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
            if (this.$route.name === 'selection-point') {
                return '添加标注';
            }

            if (this.$route.name === 'about-tagging-editor') {
                return '修改标注';
            }

            if (this.$route.name === 'selection-report') {
                return '危险上报';
            }

            return '';
        },
        mode: function mode() {
            if (this.$route.name === 'selection-point') {
                return 'tagging';
            }

            if (this.$route.name === 'about-tagging-editor') {
                return 'tagging';
            }

            if (this.$route.name === 'selection-report') {
                return 'report';
            }

            return '';
        },
        types: function types() {
            if (this.$route.name === 'about-tagging-editor') {
                return this.taggingTypes;
            }

            if (this.$route.name === 'selection-point') {
                return this.taggingTypes;
            }

            if (this.$route.name === 'selection-report') {
                return [];
            }

            return [];
        }
    },
    created: function created() {
        var _this = this;

        Object(search["c" /* queryTypeDictByFid */])('001').then(function (res) {
            _this.taggingTypes = res;
        });
    },
    activated: function activated() {
        var _this2 = this;

        this.form = {
            title: '',
            type: '',
            shared: false,
            image: '',
            detail: '',
            longitude: '',
            latitude: ''
        };

        if (this.mode === 'tagging') {
            this.id && Object(personal["k" /* queryILabelDetail */])(this.id).then(function (res) {
                _this2.form = res;
            });
        }

        if (this.mode === 'report') {}
    },

    methods: {
        handlerAppend: function handlerAppend() {
            this.$refs.file && this.$refs.file.click();
        },

        /***
         * 添加图片
         */
        appendImages: function appendImages(event) {
            var _this3 = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return Object(types["a" /* blobToBase64 */])(event.target.files[0]);

                            case 2:
                                _this3.form.image = _context.sent;


                                event.target.value = null;

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this3);
            }))();
        },

        /***
         * 删除图片
         */
        deletePicture: function deletePicture() {
            this.form.image = '';
        },

        // 切换类型
        handlerToggleType: function handlerToggleType(typeId) {
            this.form.type = typeId;
        },

        // 类型
        type: function type(value) {
            console.log("value", value);
            var result = this.types.find(function (item) {
                return item.id === value;
            });
            return result || {};
        },

        // 提交
        handlerSubmit: function handlerSubmit() {
            var _this4 = this;

            this.loading = true;

            this.$toast({
                type: 'loading',
                position: 'center',
                message: '正在上传 ...',
                duration: 0
            });

            var data = {
                title: this.form.title,
                type: this.form.type,
                shared: this.form.shared,
                detail: this.form.detail,
                createTime: Object(time["b" /* formatDate */])(Date.now(), 'YYYY-MM-DD HH:mm:ss'),
                longitude: this.form.longitude || this.longitude,
                latitude: this.form.latitude || this.latitude
            };

            if (this.id) {
                data.id = this.id;
            }
            if (!data.type) {
                this.loading = false;
                this.$toast({
                    message: '请选择标注类型'
                });
                return;
            }

            if (data.title == "") {
                this.loading = false;
                return this.$toast({ message: '请输入标注名称' });
            }
            Object(personal["u" /* saveOrUpdateILabel */])(data).then(function (res) {
                _this4.loading = false;
                _this4.$emit('update');
                if (_this4.id) {
                    _this4.$toast({
                        message: '修改成功'
                    });

                    _this4.$router.back();
                } else {
                    _this4.$toast({
                        message: '添加成功'
                    });

                    window.Arcgis && window.Arcgis.refreshMapLayers();

                    _this4.$router.replace('/');
                }
            }).catch(function (error) {
                _this4.$toast('添加失败');

                _this4.loading = false;
            });
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    },
    filters: {
        formatDate: time["b" /* formatDate */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6e15590e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/tagging/editor.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tagging-editor"},[_c('navigate',{attrs:{"title":_vm.title,"position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-form',{staticClass:"form",attrs:{"model":_vm.form,"label-position":"left"}},[_c('mu-form-item',{staticClass:"form-item border-1px-b",attrs:{"label":"标注名称","prop":"title"}},[_c('mu-text-field',{attrs:{"placeholder":"请输入标注名称 ...","solo":""},model:{value:(_vm.form.title),callback:function ($$v) {_vm.$set(_vm.form, "title", $$v)},expression:"form.title"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item border-1px-b",attrs:{"label":"类型","prop":"type"},nativeOn:{"click":function($event){_vm.open = true}}},[_c('div',{staticClass:"form-item-types"},[(_vm.form.type)?_c('span',[_vm._v(_vm._s(_vm.type(_vm.form.type).name))]):_c('span',[_vm._v("请选择")])])]),_vm._v(" "),(_vm.mode === 'tagging')?_c('mu-form-item',{staticClass:"form-item",attrs:{"label":"共享","prop":"shared"}},[_c('div',{staticClass:"form-item-types"},[_c('mu-switch',{model:{value:(_vm.form.shared),callback:function ($$v) {_vm.$set(_vm.form, "shared", $$v)},expression:"form.shared"}})],1)]):_vm._e(),_vm._v(" "),(_vm.mode === 'report')?[_c('div',{staticStyle:{"height":"20px","background-color":"#efefef"}}),_vm._v(" "),_c('mu-form-item',{staticClass:"picture",attrs:{"prop":"image","label-position":"top"}},[_c('div',{staticClass:"picture-label border-1px-b",attrs:{"slot":"label"},slot:"label"},[_vm._v("照片")]),_vm._v(" "),_c('div',{staticClass:"picture-wrapper"},[(!_vm.form.image)?_c('div',{staticClass:"picture border-1px",on:{"click":_vm.handlerAppend}},[_c('mu-icon',{staticClass:"append",attrs:{"value":"add"}})],1):_c('div',{staticClass:"picture",style:({backgroundImage: ("url('" + (_vm.form.image) + "')")})},[_c('mu-button',{attrs:{"color":"#f44336","icon":"","small":""},on:{"click":function($event){$event.stopPropagation();return _vm.deletePicture($event)}}},[_c('mu-icon',{attrs:{"value":"delete"}})],1)],1)])])]:_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"height":"20px","background-color":"#efefef"}}),_vm._v(" "),_c('mu-form-item',{staticClass:"abstract",attrs:{"prop":"detail","label-position":"top"}},[_c('div',{staticClass:"abstract-label border-1px-b",attrs:{"slot":"label"},slot:"label"},[_vm._v("描述")]),_vm._v(" "),_c('mu-text-field',{staticClass:"abstract-input border-1px-b",attrs:{"placeholder":"请输入描述","rows":8,"max-length":300,"full-width":"","multi-line":"","solo":""},model:{value:(_vm.form.detail),callback:function ($$v) {_vm.$set(_vm.form, "detail", $$v)},expression:"form.detail"}})],1)],2),_vm._v(" "),_c('div',{staticClass:"form-item-button"},[_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"button",attrs:{"color":"#fff","data-mu-loading-size":"24","disabled":_vm.loading,"flat":""},on:{"click":_vm.handlerSubmit}},[_vm._v("提交\n            ")])],1)],1),_vm._v(" "),_c('mu-bottom-sheet',{attrs:{"open":_vm.open,"lock-scroll":""},on:{"update:open":function($event){_vm.open=$event}}},[_c('mu-list',{on:{"item-click":function($event){_vm.open = false}}},_vm._l((_vm.types),function(item,index){return _c('mu-list-item',{key:index,attrs:{"button":""},on:{"click":function($event){_vm.handlerToggleType(item.id)}}},[_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"room","color":_vm.form.type === item.id ? 'orange' : ''}})],1),_vm._v(" "),_c('mu-list-item-title',[_vm._v(_vm._s(item.name))])],1)}))],1),_vm._v(" "),_c('div',{staticStyle:{"position":"absolute","top":"-10px","right":"-10px","width":"0","height":"0","overflow":"hidden"}},[_c('input',{ref:"file",attrs:{"type":"file"},on:{"change":_vm.appendImages}})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var tagging_editor = (esExports);
// CONCATENATED MODULE: ./src/views/about/tagging/editor.vue
function injectStyle (ssrContext) {
  __webpack_require__("cPMl")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e15590e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  editor,
  tagging_editor,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_tagging_editor = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "cPMl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=3.js.map