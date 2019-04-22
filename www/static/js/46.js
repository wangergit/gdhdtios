webpackJsonp([46],{

/***/ "1CRz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "g/ET":
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

// EXTERNAL MODULE: ./src/api/search.js
var search = __webpack_require__("8stH");

// EXTERNAL MODULE: ./src/types/index.js + 5 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dynamic/transport-info.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var transport_info = ({
    name: "transport",
    data: function data() {
        var _this = this;

        return {
            form: {
                name: "",
                type: "",
                weight: "",
                length: "",
                width: "",
                transportPort: "",
                time: "",
                detail: ""
            },
            /***
             * 表单验证
             */
            nameRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写船舶名称' }, { validate: function validate(val) {
                    return val.length >= 2;
                }, message: '船舶名称长度大于或等于 2 ' }],
            weightRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写船舶重量' }, { validate: function validate(val) {
                    return (/^(-?\d+)(\.\d{1,2})?$/.test(val)
                    );
                }, message: '请精确到小数点后两位' }],
            lengthRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写船舶长度' }, { validate: function validate(val) {
                    return (/^(-?\d+)(\.\d{1,2})?$/.test(val)
                    );
                }, message: '请精确到小数点后两位' }],
            widthRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写船舶宽度' }, { validate: function validate(val) {
                    return (/^(-?\d+)(\.\d{1,2})?$/.test(val)
                    );
                }, message: '请精确到小数点后两位' }],
            timeRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写装货时间' }],
            shipTypeRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须选择船舶类型' }, {
                validate: function validate(val) {
                    return _this.shipTypeOptions.findIndex(function (item) {
                        return item.name === val;
                    }) !== -1;
                },
                message: '请选择正确的船舶类型'
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
            shipTypeOptions: [],
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
            length: "",
            width: "",
            transportPort: "",
            time: "",
            detail: ""
        };
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
                                return Object(search["c" /* queryTypeDictByFid */])('010');

                            case 3:
                                _context.t1 = _context.sent;
                                _this2.shipTypeOptions = (0, _context.t0)(_context.t1);
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

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
                var result, loading, data;
                return regenerator_default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                result = _this3.$refs.form.validate();

                                if (result) {
                                    _context2.next = 3;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 3:
                                loading = _this3.$loading();
                                data = {
                                    content: _this3.splicingContent(),
                                    type: '004003',
                                    mediaType: '003002',
                                    status: '020002'
                                };
                                _context2.next = 7;
                                return Object(dynamic["j" /* saveMoment */])(data);

                            case 7:

                                loading.close();

                                _this3.$toast('发表成功！');

                                _this3.$emit('refresh');

                                _this3.$router.go(-2);

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this3);
            }))();
        },
        splicingContent: function splicingContent() {
            return "<p>\u8239\u8236\u540D\u79F0:" + this.form.name + "</p><p>\u8239\u8236\u7C7B\u578B:" + this.form.type + "</p><p>\u8F7D\u91CD\u5428:" + this.form.weight + "\u5428</p><p>\u8239\u957F:" + this.form.length + "\u7C73</p><p>\u8239\u5BBD:" + this.form.width + "\u7C73</p><p>\u5F85\u8FD0\u6E2F:" + this.form.transportPort + "</p><p>\u5F85\u8FD0\u65F6\u95F4:" + Object(time["b" /* formatDate */])(this.form.time, 'YYYY-MM-DD HH:mm:ss') + "</p><p>\u5907\u6CE8:" + this.form.detail + "</p>";
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-21e5afe1","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dynamic/transport-info.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"transport"},[_c('navigate',{attrs:{"title":"船舶待运","position":"absolute"}},[_c('mu-button',{attrs:{"slot":"right","color":"#fff","flat":""},on:{"click":_vm.handlerSubmit},slot:"right"},[_vm._v("发送")])],1),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-form',{ref:"form",staticClass:"form",attrs:{"model":_vm.form,"label-position":"left","label-width":"100"}},[_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"name","label":"船舶名称","rules":_vm.nameRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入船舶名称","prop":"name","solo":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"type","label":"船舶类型","rules":_vm.shipTypeRules}},[_c('mu-select',{attrs:{"placeholder":"请输入船舶类型","solo":""},model:{value:(_vm.form.type),callback:function ($$v) {_vm.$set(_vm.form, "type", $$v)},expression:"form.type"}},_vm._l((_vm.shipTypeOptions),function(option,index){return _c('mu-option',{key:option.name,attrs:{"label":option.name,"value":option.name}})}))],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"weight","label":"载重吨","rules":_vm.weightRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入载重吨","suffix":"吨","prop":"weight","type":"number","solo":""},model:{value:(_vm.form.weight),callback:function ($$v) {_vm.$set(_vm.form, "weight", $$v)},expression:"form.weight"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"length","label":"船长","rules":_vm.lengthRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入船长","suffix":"米","prop":"length","type":"number","solo":""},model:{value:(_vm.form.length),callback:function ($$v) {_vm.$set(_vm.form, "length", $$v)},expression:"form.length"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"width","label":"船宽","rules":_vm.widthRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入船宽","suffix":"米","prop":"width","type":"number","solo":""},model:{value:(_vm.form.width),callback:function ($$v) {_vm.$set(_vm.form, "width", $$v)},expression:"form.width"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"transportPort","label":"待运港","rules":_vm.portRules}},[_c('mu-select',{attrs:{"placeholder":"待运港","solo":""},model:{value:(_vm.form.transportPort),callback:function ($$v) {_vm.$set(_vm.form, "transportPort", $$v)},expression:"form.transportPort"}},_vm._l((_vm.portTypeOptions),function(option,index){return _c('mu-option',{key:option.name,attrs:{"label":option.name,"value":option.name}})}))],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"label":"待运时间","prop":"time","rules":_vm.timeRules}},[_c('mu-date-input',{attrs:{"type":"dateTime","view-type":"list","container":"bottomSheet","placeholder":"请选择装货时间","solo":""},model:{value:(_vm.form.time),callback:function ($$v) {_vm.$set(_vm.form, "time", $$v)},expression:"form.time"}})],1),_vm._v(" "),_c('div',[_c('mu-sub-header',[_vm._v("备注")]),_vm._v(" "),_c('mu-text-field',{staticStyle:{"padding":"0 16px 30px"},attrs:{"placeholder":"请描述更多信息","rows":6,"max-length":200,"full-width":"","multi-line":"","solo":""},model:{value:(_vm.form.detail),callback:function ($$v) {_vm.$set(_vm.form, "detail", $$v)},expression:"form.detail"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var dynamic_transport_info = (esExports);
// CONCATENATED MODULE: ./src/views/dynamic/transport-info.vue
function injectStyle (ssrContext) {
  __webpack_require__("1CRz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21e5afe1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  transport_info,
  dynamic_transport_info,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_dynamic_transport_info = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=46.js.map