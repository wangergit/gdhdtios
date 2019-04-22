webpackJsonp([19],{

/***/ "VuIw":
/***/ (function(module, exports) {



/***/ }),

/***/ "lQwF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mjJu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/user.js
var user = __webpack_require__("vMJZ");

// EXTERNAL MODULE: ./src/storage/index.js
var storage = __webpack_require__("VuIw");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage);

// EXTERNAL MODULE: ./src/types/index.js + 5 modules
var types = __webpack_require__("NaSR");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/user/forget.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var user_forget = ({
    name: "forgetPwd",
    data: function data() {
        return {
            // 步骤
            currentStep: 0,
            loading: false,
            step: [{ title: '忘记密码', backText: '' }, { title: '忘记密码', backText: '上一步' }],
            // 是否查看密码
            visibility1: false,
            visibility2: false,
            // 表单
            form: {
                phone: "",
                code: "",
                password1: "",
                password2: ""
            },
            // 验证码
            validate: {
                timer: null,
                disable: false,
                text: '获取验证码',
                type: 2
            }
        };
    },

    computed: {
        validateFirst: function validateFirst() {
            var phone = /^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\d{8}$/.test(this.form.phone);

            if (!phone) {
                return '手机号码不正确';
            }

            return '获取手机验证码';
        },
        validateLast: function validateLast() {
            var code = /^\d{4,}$/.test(this.form.code);
            var password1 = /^[a-zA-Z\d]{6,16}$/.test(this.form.password1);

            if (!code) {
                return '请输入正确的验证码';
            }

            if (!this.form.password1) {
                return '请输入新密码';
            }

            if (!password1) {
                return '请输入正确的新密码';
            }

            if (!this.form.password2) {
                return '请再次输入新密码';
            }

            if (this.form.password1 !== this.form.password2) {
                return '两次输入的新密码不一致';
            }

            return '立即更改';
        }
    },
    activated: function activated() {
        this.form = {
            phone: "",
            code: "",
            password1: "",
            password2: ""
        };

        this.currentStep = 0;
    },

    methods: {
        // 返回上一步
        onBack: function onBack() {
            if (this.currentStep > 0) {
                this.currentStep--;
            } else {
                this.$router.back();
            }
        },

        // 下一步
        next: function next() {
            if (this.currentStep === 0) {
                !this.validate.disabled && this.getValidate();
            }
        },

        // 获取验证码
        getValidate: function getValidate() {
            var _this = this;

            Object(user["b" /* getValidate */])(this.validate.type, this.form.phone).then(function (res) {
                _this.currentStep = 1;
                Object(types["d" /* validate */])(_this.validate);
            });
        },
        forget: function forget() {
            var _this2 = this;

            this.loading = true;
            var data = {
                phone: this.form.phone,
                code: this.form.code,
                pwd: this.form.password1
            };

            Object(user["f" /* resetPassword */])(data).then(function (res) {
                _this2.$toast('修改成功');

                _this2.loading = false;
                _this2.$router.push({ name: 'login' });
            }).catch(function (err) {
                _this2.loading = false;
            });
        }
    },
    watch: {
        'form.phone': function formPhone(value) {
            this.validate.phone = value;

            Object(types["d" /* validate */])(this.validate, true);
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2325627c","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/user/forget.vue
var render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"forget"},[_c('navigate',{attrs:{"position":"absolute","color":"#fff","backgroundColor":"#3899D7","title":_vm.step[_vm.currentStep].title,"backText":_vm.step[_vm.currentStep].backText,"back":""},on:{"back":_vm.onBack}}),_vm._v(" "),_c('div',{staticClass:"forget-form"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentStep === 0),expression:"currentStep === 0"}]},[_c('mu-form',{ref:"form",staticClass:"paper mb-10",attrs:{"model":_vm.form,"label-position":"left","label-width":"80"}},[_c('mu-form-item',{staticClass:"pl-15 pr-15 pt-10 pb-10 mt-20",attrs:{"label":"手机号码","prop":"phone"}},[_c('mu-text-field',{attrs:{"placeholder":"请输入您的手机号","solo":"","full-width":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})],1)],1),_vm._v(" "),_c('mu-button',{staticClass:"db ma w90 background-primary bg",attrs:{"color":"#fff","disabled":_vm.validateFirst !== '获取手机验证码',"large":"","flat":""},on:{"click":_vm.next}},[_vm._v("\n                "+_vm._s(_vm.validateFirst)+"\n            ")])],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentStep === 1),expression:"currentStep === 1"}]},[_c('mu-form',{attrs:{"model":_vm.form,"label-position":"left","label-width":"80"}},[_c('mu-form-item',{staticClass:"pl-15 pr-15 pt-10 pb-10 border-1px-b",attrs:{"prop":"code","label":"验证码"}},[_c('div',{staticClass:"flex mn"},[_c('mu-text-field',{attrs:{"placeholder":"4位数短信验证码","type":"number","solo":""},model:{value:(_vm.form.code),callback:function ($$v) {_vm.$set(_vm.form, "code", $$v)},expression:"form.code"}}),_vm._v(" "),_c('mu-button',{attrs:{"color":"primary","disabled":_vm.validate.disabled,"small":"","flat":""},on:{"click":_vm.getValidate}},[_vm._v("\n                            "+_vm._s(_vm.validate.text)+"\n                        ")])],1)]),_vm._v(" "),_c('mu-form-item',{staticClass:"pl-15 pr-15 pt-10 pb-10 border-1px-b",attrs:{"prop":"password1","label":"新密码"}},[_c('mu-text-field',{staticClass:"input",attrs:{"placeholder":"6-20位字母、数字和符号","action-icon":_vm.visibility1 ? 'visibility' : 'visibility_off',"action-click":function () {this$1.visibility1 = !this$1.visibility1},"type":_vm.visibility1 ? 'message.vue' : 'password',"solo":"","full-width":""},model:{value:(_vm.form.password1),callback:function ($$v) {_vm.$set(_vm.form, "password1", $$v)},expression:"form.password1"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"pl-15 pr-15 pt-10 pb-10 border-1px-b",attrs:{"prop":"password2","label":"确认密码"}},[_c('mu-text-field',{attrs:{"placeholder":"确认密码","action-icon":_vm.visibility2 ? 'visibility' : 'visibility_off',"action-click":function () {this$1.visibility2 = !this$1.visibility2},"type":_vm.visibility2 ? 'message.vue' : 'password',"solo":"","full-width":""},model:{value:(_vm.form.password2),callback:function ($$v) {_vm.$set(_vm.form, "password2", $$v)},expression:"form.password2"}})],1)],1),_vm._v(" "),_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"db ma w90 background-primary bg",attrs:{"color":"#fff","data-mu-loading-size":"24","disabled":_vm.loading ||_vm.validateLast !== '立即更改',"large":"","flat":""},on:{"click":_vm.forget}},[_vm._v("\n                "+_vm._s(_vm.validateLast)+"\n            ")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_user_forget = (esExports);
// CONCATENATED MODULE: ./src/views/user/forget.vue
function injectStyle (ssrContext) {
  __webpack_require__("lQwF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2325627c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  user_forget,
  views_user_forget,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_user_forget = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=19.js.map