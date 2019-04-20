webpackJsonp([36],{

/***/ "aeNn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/data/password.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var data_password = ({
    name: 'reset-password',
    mixins: [mixins["i" /* userMixins */]],
    data: function data() {
        var _this = this;

        return {
            loading: false,
            visibility1: false,
            visibility2: false,
            visibility3: false,
            /***
             * 验证
             */
            passwordRules1: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写原密码' }, { validate: function validate(val) {
                    return (/^[a-zA-Z\d]{6,16}$/.test(val)
                    );
                }, message: '请输入6-16位密码，不支持特殊符号' }],
            passwordRules2: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写新密码' }, { validate: function validate(val) {
                    return (/^[a-zA-Z\d]{6,16}$/.test(val)
                    );
                }, message: '请输入6-16位密码，不支持特殊符号' }],
            passwordRules3: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写确认新密码' }, { validate: function validate(val) {
                    return (/^[a-zA-Z\d]{6,16}$/.test(val)
                    );
                }, message: '请输入6-16位密码，不支持特殊符号' }, { validate: function validate(val) {
                    return val === _this.form.newPwd;
                }, message: '两次输入密码不一致' }],
            /***
             * 表单内容
             *      oldPwd: 旧密码
             *      newPwd: 新密码
             */
            form: {
                oldPwd: '',
                newPwd: '',
                confirmPwd: ''
            }
        };
    },

    computed: {
        /***
         * 导航栏标题
         * @return {string}
         */
        navigateTitle: function navigateTitle() {
            return '修改密码';
        }
    },
    activated: function activated() {
        this.$refs.form.clear();

        this.form = {
            oldPwd: '',
            newPwd: '',
            confirmPwd: ''
        };
    },

    methods: {
        /***
         * 提交 修改密码
         */
        submit: function submit() {
            var _this2 = this;

            this.$refs.form.validate().then(function (result) {
                if (result) {
                    _this2.loading = true;
                    Object(personal["x" /* updateUserPassword */])(_this2.form).then(function (res) {
                        _this2.loading = false;

                        _this2.$toast('您的密码已更改，请重新登录');

                        _this2.logout();

                        _this2.$router.replace('/login');
                    }).catch(function (err) {
                        console.log(err);
                        _this2.loading = false;
                    });
                }
            });
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3eacda75","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/data/password.vue
var render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-editor-password"},[_c('navigate',{attrs:{"title":_vm.navigateTitle,"position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-form',{ref:"form",staticClass:"form",attrs:{"model":_vm.form,"label-position":"left","label-width":"100"}},[_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"oldPwd","label":"原密码","rules":_vm.passwordRules1}},[_c('mu-text-field',{attrs:{"placeholder":"请填写原密码","action-icon":_vm.visibility1 ? 'visibility' : 'visibility_off',"action-click":function () {this$1.visibility1 = !this$1.visibility1},"type":_vm.visibility1 ? 'text' : 'password',"solo":"","full-width":""},model:{value:(_vm.form.oldPwd),callback:function ($$v) {_vm.$set(_vm.form, "oldPwd", $$v)},expression:"form.oldPwd"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"newPwd","label":"新密码","rules":_vm.passwordRules2}},[_c('mu-text-field',{attrs:{"placeholder":"6-20位字母、数字和符号","action-icon":_vm.visibility2 ? 'visibility' : 'visibility_off',"action-click":function () {this$1.visibility2 = !this$1.visibility2},"type":_vm.visibility2 ? 'text' : 'password',"solo":"","full-width":""},model:{value:(_vm.form.newPwd),callback:function ($$v) {_vm.$set(_vm.form, "newPwd", $$v)},expression:"form.newPwd"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"confirmPwd","label":"确认新密码","rules":_vm.passwordRules3}},[_c('mu-text-field',{attrs:{"placeholder":"6-20位字母、数字和符号","action-icon":_vm.visibility3 ? 'visibility' : 'visibility_off',"action-click":function () {this$1.visibility3 = !this$1.visibility3},"type":_vm.visibility3 ? 'text' : 'password',"solo":"","full-width":""},model:{value:(_vm.form.confirmPwd),callback:function ($$v) {_vm.$set(_vm.form, "confirmPwd", $$v)},expression:"form.confirmPwd"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"button-wrapper"},[_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"button",attrs:{"color":"#fff","data-mu-loading-size":"24","disabled":_vm.loading,"flat":""},on:{"click":_vm.submit}},[_vm._v("提交\n            ")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var about_data_password = (esExports);
// CONCATENATED MODULE: ./src/views/about/data/password.vue
function injectStyle (ssrContext) {
  __webpack_require__("eYBu")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3eacda75"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  data_password,
  about_data_password,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_about_data_password = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "eYBu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=36.js.map