webpackJsonp([18],{

/***/ "2/3v":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VuIw":
/***/ (function(module, exports) {



/***/ }),

/***/ "ris2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/types/index.js + 3 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/storage/index.js
var storage = __webpack_require__("VuIw");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage);

// EXTERNAL MODULE: ./src/api/user.js
var user = __webpack_require__("vMJZ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/data/phone.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var phone = ({
    name: "phone",
    data: function data() {
        return {
            /***
             * 表单验证
             */
            phoneRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写手机号码' }, { validate: function validate(val) {
                    return (/^1\d{10}$/.test(val)
                    );
                }, message: '请输入正确的手机号码' }],
            codeRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写验证码' }, { validate: function validate(val) {
                    return (/^\d{4,6}$/.test(val)
                    );
                }, message: '请输入正确的验证码' }],
            /***
             * 表单内容
             *      phone: 手机号码
             */
            form: {
                phone: '',
                code: ''
            },
            /***
             * 验证码
             */
            validate: {
                disabled: false,
                text: '获取验证码',
                timer: null,
                type: 1
            },
            loading: false
        };
    },

    computed: {
        /***
         * 导航栏标题
         * @return {string}
         */
        navigateTitle: function navigateTitle() {
            return this.$route.query.phone ? '修改手机号码' : '绑定手机号码';
        }
    },
    activated: function activated() {
        this.$refs.form.clear();

        this.form = {
            phone: '',
            code: ''
        };
    },

    methods: {
        /***
         * 提交 更换手机号码 表单验证
         */
        submit: function submit() {
            var _this = this;

            this.$refs.form.validate().then(function (result) {
                if (result) {
                    _this.loading = true;
                    Object(user["g" /* resetPhone */])(_this.form).then(function (res) {
                        _this.loading = false;

                        var info = assign_default()({}, _this.user, { phone: _this.form.phone });

                        _this.login(info);

                        _this.$router.replace('/about/data');
                    }).catch(function (err) {
                        _this.loading = false;
                        _this.$toast('手机号码更换失败');
                    });
                }
            });
        },

        // 获取验证码
        getValidate: function getValidate() {
            var _this2 = this;

            Object(user["b" /* getValidate */])(this.validate.type, this.form.phone).then(function (res) {
                Object(types["e" /* validate */])(_this2.validate);
            });
        }
    },
    watch: {
        'form.phone': function formPhone(value) {
            this.validate.phone = value;

            Object(types["e" /* validate */])(this.validate, true);
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-67d64f44","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/data/phone.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-editor-phone"},[_c('navigate',{attrs:{"title":_vm.navigateTitle,"position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-form',{ref:"form",staticClass:"form",attrs:{"model":_vm.form,"label-position":"left","label-width":"100"}},[_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"phone","label":"手机号码","rules":_vm.phoneRules}},[_c('mu-text-field',{attrs:{"placeholder":"请输入手机号码","prop":"phone","solo":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"code","label":"验证码","rules":_vm.codeRules}},[_c('div',{staticClass:"code-wrapper"},[_c('mu-text-field',{attrs:{"placeholder":"请输入验证码","prop":"code","solo":""},model:{value:(_vm.form.code),callback:function ($$v) {_vm.$set(_vm.form, "code", $$v)},expression:"form.code"}}),_vm._v(" "),_c('mu-button',{staticClass:"code-btn",attrs:{"disabled":_vm.validate.disabled,"color":"primary","small":"","flat":""},on:{"click":_vm.getValidate}},[_vm._v(_vm._s(_vm.validate.text)+"\n                    ")])],1)])],1),_vm._v(" "),_c('div',{staticClass:"button-wrapper"},[_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"button",attrs:{"color":"#fff","data-mu-loading-size":"24","disabled":_vm.loading,"flat":""},on:{"click":_vm.submit}},[_vm._v("提交\n            ")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var data_phone = (esExports);
// CONCATENATED MODULE: ./src/views/about/data/phone.vue
function injectStyle (ssrContext) {
  __webpack_require__("2/3v")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-67d64f44"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  phone,
  data_phone,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_data_phone = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=18.js.map