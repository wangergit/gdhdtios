webpackJsonp([32],{

/***/ "EXQL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

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

// EXTERNAL MODULE: ./src/api/search.js
var search = __webpack_require__("8stH");

// EXTERNAL MODULE: ./src/types/index.js + 5 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/index.js
var image_preview = __webpack_require__("Mqtp");
var image_preview_default = /*#__PURE__*/__webpack_require__.n(image_preview);

// EXTERNAL MODULE: ./src/api/sys.js
var sys = __webpack_require__("DEHg");

// EXTERNAL MODULE: ./src/common/js/cordova/camera.js
var camera = __webpack_require__("akCl");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dynamic/supply-info.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var supply_info = ({
    name: "supply",
    data: function data() {
        var _this = this;

        return {
            visible: false,
            addVisible: true,
            form: {
                name: "",
                type: "",
                weight: "",
                price: "",
                time: "",
                loadingPort: "",
                unloadingPort: "",
                phone: ""
            },
            images: [],
            defaultList: [],
            submitFlag: false,
            /***
             * 表单验证
             */
            nameRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写货物名称' }, { validate: function validate(val) {
                    return val.length >= 2;
                }, message: '货物名称长度大于或等于 2 ' }],
            weightRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写货物重量' }, { validate: function validate(val) {
                    return (/^(-?\d+)(\.\d{1,2})?$/.test(val)
                    );
                }, message: '请精确到小数点后两位' }],
            priceRules: [{ validate: function validate(val) {
                    return (/^(-?\d+)(\.\d{1,2})?$/.test(val)
                    );
                }, message: '请精确到小数点后两位' }],
            timeRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须选择装货时间' }],
            goodsRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须选择货物类型' }, {
                validate: function validate(val) {
                    return _this.goodsTypeOptions.findIndex(function (item) {
                        return item.name === val;
                    }) !== -1;
                },
                message: '请选择正确的货物类型'
            }],
            portRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须选择港口' }, {
                validate: function validate(val) {
                    return _this.portTypeOptions.findIndex(function (item) {
                        return item.name === val;
                    }) !== -1;
                },
                message: '请选择正确的港口类型'
            }],
            phoneRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写手机号码' }, { validate: function validate(val) {
                    return (/^1\d{10}$/.test(val)
                    );
                }, message: '请输入正确的手机号码' }],
            /***
             * 下拉选项：
             *      value:  值
             *      name:  名称
             */
            goodsTypeOptions: [],
            portTypeOptions: []
        };
    },
    created: function created() {
        this.queryTypeDictByFid();
    },
    activated: function activated() {
        this.form = {
            name: "",
            type: "",
            weight: "",
            price: "",
            time: "",
            loadingPort: "",
            unloadingPort: "",
            phone: ""
        };

        this.images = [];
        this.defaultList = [];
    },

    methods: {
        queryTypeDictByFid: function queryTypeDictByFid() {
            var _this2 = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.t0 = types["c" /* isArray */];
                                _context.next = 3;
                                return Object(search["c" /* queryTypeDictByFid */])('009');

                            case 3:
                                _context.t1 = _context.sent;
                                _this2.goodsTypeOptions = (0, _context.t0)(_context.t1);
                                _context.t2 = types["c" /* isArray */];
                                _context.next = 8;
                                return Object(search["c" /* queryTypeDictByFid */])('019');

                            case 8:
                                _context.t3 = _context.sent;
                                _this2.portTypeOptions = (0, _context.t2)(_context.t3);

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }))();
        },
        handlerSubmit: function handlerSubmit() {
            var _this3 = this;

            this.$refs.form.validate().then(function (result) {
                if (result) {
                    _this3.submit();
                }
            });
        },
        submit: function submit() {
            var _this4 = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
                var loading, data, images;
                return regenerator_default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                loading = _this4.$loading();
                                data = {
                                    content: _this4.splicingContent(),
                                    type: '004002',
                                    mediaType: '003002',
                                    status: '020002'
                                };

                                if (!_this4.images.length) {
                                    _context2.next = 7;
                                    break;
                                }

                                _context2.next = 5;
                                return promise_default.a.all(_this4.images.map(function (item) {
                                    return Object(sys["f" /* uploadBase64 */])(item);
                                }));

                            case 5:
                                images = _context2.sent;


                                data.mediaPath = Object(types["c" /* isArray */])(images).join(';');

                            case 7:
                                _context2.next = 9;
                                return Object(dynamic["j" /* saveMoment */])(data);

                            case 9:

                                loading.close();

                                _this4.$toast('发表成功！');

                                _this4.$emit('refresh');

                                _this4.$router.go(-2);

                            case 13:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this4);
            }))();
        },

        /***
         * 拼接提交内容
         */
        splicingContent: function splicingContent() {
            return "<p>\u8D27\u7269\u540D\u79F0:" + this.form.name + "</p><p>\u8D27\u7269\u7C7B\u578B:" + this.form.type + "</p><p>\u8D27\u7269\u91CD\u91CF:" + this.form.weight + "\u5428</p><p>\u6700\u9AD8\u9650\u4EF7:" + this.form.price + "</p><p>\u88C5\u8D27\u65F6\u95F4:" + Object(time["b" /* formatDate */])(this.form.time, 'YYYY-MM-DD HH:mm:ss') + "</p><p>\u88C5\u8D27\u6E2F:" + this.form.loadingPort + "</p><p>\u5378\u8D27\u6E2F:" + this.form.unloadingPort + "</p><p>\u8054\u7CFB\u65B9\u5F0F:" + this.form.phone + "</p>";
        },

        /***
         * 点击选择图片
         */
        handlerPicture: function handlerPicture() {
            var _this5 = this;

            Object(camera["b" /* getPictures */])(4, this.defaultList).then(function (images) {
                _this5.images = [];
                _this5.defaultList = [];

                Array.prototype.map.call(images, function (item) {
                    _this5.defaultList.push(item.path);

                    Object(camera["a" /* getBase64 */])(item).then(function (res) {
                        _this5.images.push("data:image/jpeg;base64," + res.thumbnailBase64);
                    });
                });
            });
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ae1eeef8","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dynamic/supply-info.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"supply"},[_c('navigate',{attrs:{"title":"货源信息","position":"absolute"}},[_c('mu-button',{attrs:{"slot":"right","color":"#fff","flat":""},on:{"click":_vm.handlerSubmit},slot:"right"},[_vm._v("发送")])],1),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"picture-wrapper border-1px-b"},[_vm._l((_vm.images),function(item,index){return (item)?_c('div',{key:index,staticClass:"picture",style:(("background-image: url(" + item + ")")),on:{"click":function($event){_vm.handlerBrowse(index)}}},[_c('mu-button',{attrs:{"color":"#f44336","icon":"","small":""},on:{"click":function($event){$event.stopPropagation();_vm.onDeletePicture(item, index)}}},[_c('mu-icon',{attrs:{"value":"delete"}})],1)],1):_vm._e()}),_vm._v(" "),(_vm.images < 4)?_c('mu-ripple',{staticClass:"picture mu-picker-display",on:{"click":_vm.handlerPicture}},[_c('mu-icon',{staticClass:"append",attrs:{"color":"#fafafa","value":"add_a_photo","size":"50"}})],1):_vm._e()],2),_vm._v(" "),_c('mu-form',{ref:"form",staticClass:"form",attrs:{"model":_vm.form,"label-position":"left","label-width":"100"}},[_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"name","label":"货物名称","rules":_vm.nameRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入货物名称","prop":"name","solo":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"type","label":"货物类型","rules":_vm.goodsRules}},[_c('mu-select',{attrs:{"placeholder":"请输入货物类型","solo":""},model:{value:(_vm.form.type),callback:function ($$v) {_vm.$set(_vm.form, "type", $$v)},expression:"form.type"}},_vm._l((_vm.goodsTypeOptions),function(option,index){return _c('mu-option',{key:option.name,attrs:{"label":option.name,"value":option.name}})}))],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"weight","label":"货物重量","rules":_vm.weightRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入货物重量","suffix":"吨","prop":"weight","type":"number","solo":""},model:{value:(_vm.form.weight),callback:function ($$v) {_vm.$set(_vm.form, "weight", $$v)},expression:"form.weight"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"price","label":"最高限价","rules":_vm.priceRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入最高限价","suffix":"元/吨","prop":"price","type":"number","solo":""},model:{value:(_vm.form.price),callback:function ($$v) {_vm.$set(_vm.form, "price", $$v)},expression:"form.price"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"label":"装货时间","prop":"time","rules":_vm.timeRules}},[_c('mu-date-input',{attrs:{"type":"dateTime","view-type":"list","container":"bottomSheet","placeholder":"请选择装货时间","solo":""},model:{value:(_vm.form.time),callback:function ($$v) {_vm.$set(_vm.form, "time", $$v)},expression:"form.time"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"loadingPort","label":"装货港","rules":_vm.portRules}},[_c('mu-select',{attrs:{"placeholder":"请输入装货港","solo":""},model:{value:(_vm.form.loadingPort),callback:function ($$v) {_vm.$set(_vm.form, "loadingPort", $$v)},expression:"form.loadingPort"}},_vm._l((_vm.portTypeOptions),function(option,index){return _c('mu-option',{key:option.name,attrs:{"label":option.name,"value":option.name}})}))],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"unloadingPort","label":"卸货港","rules":_vm.portRules}},[_c('mu-select',{attrs:{"placeholder":"请输入卸货港","solo":""},model:{value:(_vm.form.unloadingPort),callback:function ($$v) {_vm.$set(_vm.form, "unloadingPort", $$v)},expression:"form.unloadingPort"}},_vm._l((_vm.portTypeOptions),function(option,index){return _c('mu-option',{key:option.name,attrs:{"label":option.name,"value":option.name}})}))],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"phone","label":"联系方式","rules":_vm.phoneRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入联系方式","solo":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var dynamic_supply_info = (esExports);
// CONCATENATED MODULE: ./src/views/dynamic/supply-info.vue
function injectStyle (ssrContext) {
  __webpack_require__("a25g")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ae1eeef8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  supply_info,
  dynamic_supply_info,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_dynamic_supply_info = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "a25g":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=32.js.map