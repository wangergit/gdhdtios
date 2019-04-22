webpackJsonp([47],{

/***/ "XVVD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/user.js
var user = __webpack_require__("vMJZ");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/user/login.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var login = ({
    name: "login",
    data: function data() {
        return {
            form: {
                phone: '',
                password: ''
            },
            loading: false
        };
    },

    computed: {
        validate: function validate() {
            var phone = /^[\u4e00-\u9fa5a-zA-Z\d]{2,20}$/.test(this.form.phone);
            var password = /^[a-zA-Z\d]{6,16}$/.test(this.form.password);

            if (!phone) {
                return '请输入正确的账号';
            }
            if (!password) {
                return '请输入密码';
            }

            return '登录';
        }
    },
    activated: function activated() {
        this.form = {
            phone: '',
            password: ''
        };
    },

    methods: extends_default()({
        handlerLogin: function handlerLogin() {
            var _this = this;

            this.loading = true;
            var data = {
                loginName: this.form.phone,
                password: this.form.password
            };

            Object(user["c" /* login */])(data).then(function (res) {
                _this.login(res);

                _this.loading = false;
                _this.$router.back();
            }).catch(function (err) {
                _this.loading = false;
            });
        },
        forgetPwd: function forgetPwd() {
            this.$router.push({
                name: 'forget-password'
            });
        },
        goRegister: function goRegister() {
            this.$router.push({
                name: 'register'
            });
        }
    }, Object(vuex_esm["b" /* mapActions */])({
        login: 'user/login'
    })),
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1a65535c","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/user/login.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[_c('navigate',{attrs:{"title":"用户登录","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"login-form"},[_c('div',{staticClass:"step1-form"},[_c('div',{staticClass:"form-item border-1px-tb mt-20 paper"},[_c('mu-text-field',{attrs:{"icon":"perm_identity","placeholder":"请输入账号/手机号码","solo":"","full-width":""},model:{value:(_vm.form.phone),callback:function ($$v) {_vm.$set(_vm.form, "phone", $$v)},expression:"form.phone"}})],1),_vm._v(" "),_c('div',{staticClass:"form-item border-1px-b paper"},[_c('mu-text-field',{attrs:{"icon":"lock","type":"password","placeholder":"6-16个字符，必须是字母或数字","solo":"","full-width":""},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1),_vm._v(" "),_c('div',{staticClass:"login-button"},[_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"mu-primary-color bg",attrs:{"color":"#fff","data-mu-loading-size":"24","disabled":_vm.loading || _vm.validate !== '登录',"large":"","flat":""},on:{"click":_vm.handlerLogin}},[_vm._v("\n                    "+_vm._s(_vm.validate)+"\n                ")])],1),_vm._v(" "),_c('div',{staticClass:"form-button"},[_c('mu-button',{staticClass:"forget-btn",attrs:{"flat":""},on:{"click":_vm.forgetPwd}},[_vm._v("忘记密码")]),_vm._v(" "),_c('i',{staticClass:"line"}),_vm._v(" "),_c('mu-button',{attrs:{"flat":"","color":"primary"},on:{"click":_vm.goRegister}},[_vm._v("我要注册")])],1)])]),_vm._v(" "),_c('transition',{attrs:{"name":"views-left"}},[_c('keep-alive',[_c('router-view',{staticClass:"views"})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var user_login = (esExports);
// CONCATENATED MODULE: ./src/views/user/login.vue
function injectStyle (ssrContext) {
  __webpack_require__("yTOY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a65535c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  login,
  user_login,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_user_login = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "yTOY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=47.js.map