webpackJsonp([24],{

/***/ "/He8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getNavigationList;
/* harmony export (immutable) */ __webpack_exports__["a"] = getNavigationDetail;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_axios__ = __webpack_require__("2MJX");


/***
 * 助航信息
 * @param data
 * @param data.types          类型 ID
 * @param data.name           标题 为空查全部
 * @param data.pageNumber     页码
 * @param data.pageSize       每页显示条数
 * @returns {*}
 */
function getNavigationList(params) {
  var url = '/search/channel';
  // const url = `https://www.gdhdswzx.xyz:10001/app/search/channel`

  return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].get(url, { params: params });
}

/***
 * 助航资讯详情
 * @param params.typeId  // 类型
 * @param params.id    // id
 * @returns {*}
 */
function getNavigationDetail(params) {
  var url = '/channel/navi/queryinfo';

  return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].get(url, { params: params });
}

/***/ }),

/***/ "4Vq9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/navigational.js
var navigational = __webpack_require__("/He8");

// EXTERNAL MODULE: ./src/types/index.js + 3 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/address/editor.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var editor = ({
    name: "about-address-editor",
    data: function data() {
        return {
            /***
             * 搜索关键词
             */
            query: '',
            /***
             * 地址列表
             */
            list: []
        };
    },

    computed: {
        /***
         * 导航栏标题
         * @return {string}
         */
        navigateTitle: function navigateTitle() {
            return this.$route.query.id ? '修改常用地址' : '添加常用地址';
        }
    },
    created: function created() {
        var _this = this;

        /***
         * 监听关键词变化提供搜索结果
         */
        this.$watch('query', Object(types["b" /* debounce */])(function (value) {
            if (!value) return;

            var data = {
                typeId: '013008',
                name: value,
                pageNumber: 1,
                pageSize: 100
            };

            Object(navigational["b" /* getNavigationList */])(data).then(function (res) {
                _this.list = res;
            });
        }, 300));
    },
    activated: function activated() {
        this.query = '';
    },

    methods: {
        handlerItem: function handlerItem(item) {
            var _this2 = this;

            var data = {
                name: item.name,
                longitude: item.longitude,
                latitude: item.latitude
            };

            Object(personal["r" /* saveOrUpdateIAddress */])(data).then(function (res) {
                _this2.$toast('添加成功');
                _this2.$router.back();
                _this2.$emit('save');
            });
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7c2df7b9","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/address/editor.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-address-editor"},[_c('navigate',{attrs:{"title":_vm.navigateTitle,"position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"wrapper"},[_c('div',{staticClass:"border-1px-b"},[_c('mu-text-field',{attrs:{"icon":"search","placeholder":"请输入地名搜索","full-width":"","solo":""},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}})],1),_vm._v(" "),_c('mu-load-more',[_c('mu-list',_vm._l((_vm.list),function(item,index){return _c('mu-list-item',{key:index,staticClass:"border-1px-b shrink",nativeOn:{"click":function($event){_vm.handlerItem(item)}}},[_c('mu-list-item-title',[_vm._v(_vm._s(item.name))])],1)}))],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var address_editor = (esExports);
// CONCATENATED MODULE: ./src/views/about/address/editor.vue
function injectStyle (ssrContext) {
  __webpack_require__("s1tZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c2df7b9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  editor,
  address_editor,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_address_editor = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "s1tZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=24.js.map