webpackJsonp([33],{

/***/ "NQVT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/data/info.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var data_info = ({
    name: "info",
    mixins: [mixins["i" /* userMixins */]],
    data: function data() {
        return {
            /***
             * 表单验证
             */
            aliasRules: [{ validate: function validate(val) {
                    return !!val;
                }, message: '必须填写用户昵称' }, { validate: function validate(val) {
                    return val.length >= 2;
                }, message: '用户昵称长度大于或等于 2 ' }],
            ageRules: [{ validate: function validate(val) {
                    return (/^\d{1,2}$/.test(val)
                    );
                }, message: '请输入正确的年龄 ' }],
            workAgeRules: [{ validate: function validate(val) {
                    return (/^\d{1,2}$/.test(val)
                    );
                }, message: '请输入正确的从业年限 ' }],
            companyRules: [{ validate: function validate(val) {
                    return val.length >= 2;
                }, message: '公司名称长度大于或等于 2 ' }],

            /***
             * 表单内容：
             *    alias: 昵称
             */
            form: {
                alias: '',
                sex: '',
                age: 0,
                workAge: 0,
                birthDate: null,
                workTime: null,
                company: ''
            },
            open: false,
            mode: 0,
            loading: false
        };
    },

    computed: {
        navigateTitle: function navigateTitle() {
            switch (this.mode) {
                case 1:
                    return '修改个人资料';
                default:
                    return '个人资料';
            }
        }
    },
    activated: function activated() {
        this.init();
    },

    methods: {
        init: function init() {
            var _this = this;

            this.mode = 0;

            this.form = {
                alias: '',
                sex: '',
                age: 0,
                workAge: 0,
                birthDate: null,
                workTime: null,
                company: ''
            };

            this.open = false;
            this.mode = 0;
            this.loading = false;

            Object(personal["i" /* queryIInfo */])().then(function (res) {
                _this.form = res;

                if (_this.form.birthDate) {
                    _this.form.age = _this.getAgeByDate(_this.form.birthDate);
                }
                if (_this.form.workTime) {
                    _this.form.workAge = _this.getAgeByDate(_this.form.workTime);
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        submit: function submit() {
            var _this2 = this;

            this.$refs.form.validate().then(function (result) {
                if (result) {
                    _this2.loading = true;

                    _this2.form.birthDate = _this2.getDateByAge(_this2.form.age);
                    _this2.form.workTime = _this2.getDateByAge(_this2.form.workAge);

                    Object(personal["t" /* saveOrUpdateIInfo */])(_this2.form).then(function (res) {
                        _this2.loading = false;

                        _this2.$toast('修改成功');

                        _this2.form.pwd = _this2.user.pwd;

                        var info = assign_default()({}, _this2.user, _this2.form);

                        _this2.login(info);

                        _this2.$router.replace('/about/data');

                        _this2.$emit('update');
                    }).catch(function (err) {
                        _this2.loading = false;
                    });
                } else {
                    _this2.loading = false;
                }
            });
        },
        clear: function clear() {
            this.$refs.form.clear();

            this.form = {
                alias: '',
                sex: '',
                age: '',
                workAge: '',
                birthDate: null,
                workTime: null,
                company: ''
            };
        },
        over: function over() {
            this.mode = 0;

            this.init();
        },
        handlerToggleMode: function handlerToggleMode() {
            this.mode = 1;
        },

        // 切换性别
        handlerToggleGender: function handlerToggleGender(item) {
            this.form.sex = item;
        },

        // 点击选择性别
        handlerSelected: function handlerSelected() {
            this.open = true;
        },

        // 关闭
        closeBottomSheet: function closeBottomSheet() {
            this.open = false;
        },
        getDateByAge: function getDateByAge(age) {
            return time["a" /* default */].formatDate(new Date(new Date().getFullYear() - age, new Date().getMonth()), 'YYYY-MM');
        },
        getAgeByDate: function getAgeByDate(date) {
            return new Date().getFullYear() - time["a" /* default */].formatDate(date, "YYYY");
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    },
    created: function created() {
        this.form.alias = this.$route.query.alias;
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4faf5d95","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/data/info.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-info-editor"},[_c('navigate',{attrs:{"title":_vm.navigateTitle,"position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-form',{ref:"form",staticClass:"form",attrs:{"model":_vm.form,"label-position":"left","label-width":"100"}},[_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"alias","label":"昵称","rules":_vm.aliasRules}},[_c('mu-text-field',{attrs:{"prop":"alias","placeholder":_vm.mode !== 1 ? '' : '请输入昵称',"disabled":_vm.mode !== 1,"solo":""},model:{value:(_vm.form.alias),callback:function ($$v) {_vm.$set(_vm.form, "alias", $$v)},expression:"form.alias"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"gender","label":"性别"}},[_c('mu-text-field',{attrs:{"prop":"sex","placeholder":_vm.mode !== 1 ? '' : '请输入性别',"disabled":_vm.mode !== 1,"solo":""},on:{"click":_vm.handlerSelected},model:{value:(_vm.form.sex),callback:function ($$v) {_vm.$set(_vm.form, "sex", $$v)},expression:"form.sex"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"age","label":"年龄","rules":_vm.ageRules}},[_c('mu-text-field',{attrs:{"prop":"age","placeholder":_vm.mode !== 1 ? '' : '请输入年龄',"disabled":_vm.mode !== 1,"solo":""},model:{value:(_vm.form.age),callback:function ($$v) {_vm.$set(_vm.form, "age", $$v)},expression:"form.age"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"workAge","label":"从业年限","rules":_vm.workAgeRules}},[_c('mu-text-field',{attrs:{"prop":"workAge","placeholder":_vm.mode !== 1 ? '' : '请输入从业年限',"disabled":_vm.mode !== 1,"solo":""},model:{value:(_vm.form.workAge),callback:function ($$v) {_vm.$set(_vm.form, "workAge", $$v)},expression:"form.workAge"}})],1),_vm._v(" "),_c('mu-form-item',{staticClass:"form-item-s border-1px-b",attrs:{"prop":"company","label":"公司名称","rules":_vm.companyRules}},[_c('mu-text-field',{attrs:{"prop":"company","placeholder":_vm.mode !== 1 ? '' : '请输入公司名称',"disabled":_vm.mode !== 1,"solo":""},model:{value:(_vm.form.company),callback:function ($$v) {_vm.$set(_vm.form, "company", $$v)},expression:"form.company"}})],1),_vm._v(" "),(_vm.mode === 1)?_c('div',{staticClass:"form-item-buttons"},[_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"button",attrs:{"data-mu-loading-size":"24","disabled":_vm.loading,"flat":""},on:{"click":_vm.submit}},[_vm._v("提交\n                ")]),_vm._v(" "),_c('mu-button',{staticClass:"button clear",attrs:{"flat":""},on:{"click":_vm.clear}},[_vm._v("重置")]),_vm._v(" "),_c('mu-button',{staticClass:"button clear",attrs:{"flat":""},on:{"click":_vm.over}},[_vm._v("取消")])],1):_vm._e()],1),_vm._v(" "),(_vm.mode !== 1)?_c('div',{staticClass:"form-button-wrapper"},[_c('mu-button',{staticClass:"button",attrs:{"color":"#fff","flat":""},on:{"click":_vm.handlerToggleMode}},[_vm._v("修改")])],1):_vm._e()],1),_vm._v(" "),_c('mu-bottom-sheet',{attrs:{"open":_vm.open,"lock-scroll":""},on:{"update:open":function($event){_vm.open=$event}}},[_c('mu-list',{on:{"item-click":_vm.closeBottomSheet}},[_c('mu-list-item',{attrs:{"button":""},on:{"click":function($event){_vm.handlerToggleGender('男')}}},[_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"sentiment_satisfied","color":"#2196f3"}})],1),_vm._v(" "),_c('mu-list-item-title',[_vm._v("男")])],1),_vm._v(" "),_c('mu-list-item',{attrs:{"button":""},on:{"click":function($event){_vm.handlerToggleGender('女')}}},[_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"face","color":"#e91e63"}})],1),_vm._v(" "),_c('mu-list-item-title',[_vm._v("女")])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var about_data_info = (esExports);
// CONCATENATED MODULE: ./src/views/about/data/info.vue
function injectStyle (ssrContext) {
  __webpack_require__("O7oR")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4faf5d95"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  data_info,
  about_data_info,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_about_data_info = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "O7oR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=33.js.map