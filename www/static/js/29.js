webpackJsonp([29],{

/***/ "3Sph":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/search.js
var search = __webpack_require__("8stH");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/types/index.js + 3 modules
var types = __webpack_require__("NaSR");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/data/add-ship.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var add_ship = ({
    name: "add-ship",
    data: function data() {
        var _this = this;

        return {
            /***
             * 表单验证
             */
            shipNameRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写船舶名称' }, { validate: function validate(val) {
                    return val.length >= 2;
                }, message: '船舶名称长度大于或等于 2 ' }],
            MMSIRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写 MMSI' }, { validate: function validate(val) {
                    return (/^\d{9}$/.test(val)
                    );
                }, message: '请填写正确的 MMSI' }],
            lengthRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写船长度' }, { validate: function validate(val) {
                    return (/^(-?\d+)(\.\d{1,2})?$/.test(val)
                    );
                }, message: '请精确到小数点后两位' }],
            widthRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写船宽度' }, { validate: function validate(val) {
                    return (/^(-?\d+)(\.\d{1,2})?$/.test(val)
                    );
                }, message: '请精确到小数点后两位' }],
            draftRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写设计吃水深度' }, { validate: function validate(val) {
                    return (/^(-?\d+)(\.\d{1,2})?$/.test(val)
                    );
                }, message: '请精确到小数点后两位' }],
            pureHeightRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写高度' }, { validate: function validate(val) {
                    return (/^(-?\d+)(\.\d{1,2})?$/.test(val)
                    );
                }, message: '请精确到小数点后两位' }],
            shipTypeRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须选择船舶类型' }, { validate: function validate(val) {
                    return _this.typeOptions.findIndex(function (item) {
                        return item.id === val;
                    }) !== -1;
                }, message: '请选择正确的船舶类型' }],
            /***
             * 表单内容：
             *    name: 船舶名称
             *    mmsi: mmsi 号码  -> 手机号码
             *    length: 船长度  ->  单位（米）
             *    width: 船宽度  ->  单位（米）
             *    draft: 设计吃水  ->  单位（米）
             *    pureHeight: 高度  ->  单位（米）
             *    船舶类型: 船舶类型  ->  queryTypeDictByFid 获取
             */
            form: {
                name: '',
                mmsi: '',
                length: '',
                width: '',
                draft: '',
                pureHeight: '',
                shipType: '',
                default: false
            },
            /***
             * 下拉选项：
             *      value:  值
             *      name:  名称
             */
            typeOptions: [],
            loading: false
        };
    },

    computed: {
        navigateTitle: function navigateTitle() {
            return this.$route.params.id ? '修改船舶' : '新增船舶';
        }
    },
    created: function created() {
        this.queryTypeDictByFid();
    },
    activated: function activated() {
        if (this.$route.params.id) {
            this.form = this.$route.params;
        } else {
            this.form = {
                name: '',
                mmsi: '',
                length: '',
                width: '',
                draft: '',
                pureHeight: '',
                shipType: '',
                default: false
            };
        }
    },

    methods: {
        queryTypeDictByFid: function queryTypeDictByFid() {
            var _this2 = this;

            Object(search["c" /* queryTypeDictByFid */])('010').then(function (res) {
                _this2.typeOptions = Object(types["d" /* isArray */])(res);
            });
        },
        submit: function submit() {
            var _this3 = this;

            this.$refs.form.validate().then(function (result) {
                if (result) {
                    _this3.loading = true;
                    _this3.form.isDefault = _this3.form.default;
                    Object(personal["v" /* saveOrUpdateIShip */])(_this3.form).then(function (res) {
                        _this3.loading = false;

                        _this3.$router.replace('/about/data');

                        _this3.$emit('update');
                    }).catch(function (err) {
                        _this3.loading = false;

                        _this3.$toast('保存失败');
                    });
                }
            });
        },
        clear: function clear() {
            this.$refs.form.clear();

            this.form = {
                name: '',
                mmsi: '',
                length: null,
                width: null,
                draft: null,
                pureHeight: '',
                shipType: '',
                default: false
            };
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7cdabfb5","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/data/add-ship.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"add-ship"},[_c('navigate',{attrs:{"title":_vm.navigateTitle,"position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-form',{ref:"form",staticClass:"form",attrs:{"model":_vm.form,"label-position":"left","label-width":"100"}},[_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"name","label":"船舶名称","rules":_vm.shipNameRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入船舶名称","prop":"name","solo":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"mmsi","label":"MMSI","rules":_vm.MMSIRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入 MMSI","prop":"mmsi","solo":""},model:{value:(_vm.form.mmsi),callback:function ($$v) {_vm.$set(_vm.form, "mmsi", $$v)},expression:"form.mmsi"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"length","label":"船长","rules":_vm.lengthRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入船长","suffix":"米","prop":"length","type":"number","solo":""},model:{value:(_vm.form.length),callback:function ($$v) {_vm.$set(_vm.form, "length", $$v)},expression:"form.length"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"width","label":"船宽","rules":_vm.widthRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入船宽","suffix":"米","type":"number","prop":"width","solo":""},model:{value:(_vm.form.width),callback:function ($$v) {_vm.$set(_vm.form, "width", $$v)},expression:"form.width"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"pureHeight","label":"船高","rules":_vm.pureHeightRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入船高","suffix":"米","type":"number","prop":"pureHeight","solo":""},model:{value:(_vm.form.pureHeight),callback:function ($$v) {_vm.$set(_vm.form, "pureHeight", $$v)},expression:"form.pureHeight"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"draft","label":"设计吃水","rules":_vm.draftRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入设计吃水","suffix":"米","type":"number","prop":"draft","solo":""},model:{value:(_vm.form.draft),callback:function ($$v) {_vm.$set(_vm.form, "draft", $$v)},expression:"form.draft"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"shipType","label":"船舶类型","rules":_vm.shipTypeRules}},[_c('mu-select',{attrs:{"solo":""},model:{value:(_vm.form.shipType),callback:function ($$v) {_vm.$set(_vm.form, "shipType", $$v)},expression:"form.shipType"}},_vm._l((_vm.typeOptions),function(option,index){return _c('mu-option',{key:option.id,attrs:{"label":option.name,"value":option.id}})}))],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"default","label":"设为默认船舶","label-width":"90%"}},[_c('mu-switch',{model:{value:(_vm.form.default),callback:function ($$v) {_vm.$set(_vm.form, "default", $$v)},expression:"form.default"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-buttons"},[_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"button",attrs:{"data-mu-loading-size":"24","disabled":_vm.loading,"flat":""},on:{"click":_vm.submit}},[_vm._v("提交\n                ")]),_vm._v(" "),_c('mu-button',{staticClass:"button clear",attrs:{"flat":""},on:{"click":_vm.clear}},[_vm._v("重置")])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var data_add_ship = (esExports);
// CONCATENATED MODULE: ./src/views/about/data/add-ship.vue
function injectStyle (ssrContext) {
  __webpack_require__("j2Fs")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7cdabfb5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  add_ship,
  data_add_ship,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_data_add_ship = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "j2Fs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=29.js.map