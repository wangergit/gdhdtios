webpackJsonp([20],{

/***/ "2OUa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/index.js
var image_preview = __webpack_require__("Mqtp");
var image_preview_default = /*#__PURE__*/__webpack_require__.n(image_preview);

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/style/index.js
var style = __webpack_require__("i9vB");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./src/api/news.js
var news = __webpack_require__("L9TO");

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/news/details.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var details = ({
    name: "newsDetail",
    data: function data() {
        return {
            data: {
                title: '',
                publisher: '',
                publish_time: '',
                content: '',
                type: ''
            }
        };
    },

    props: {
        id: {
            type: String,
            default: ''
        }
    },
    activated: function activated() {
        this.getNewDetail();
    },

    methods: {
        getNewDetail: function getNewDetail() {
            var _this = this;

            Object(news["b" /* getNewDetail */])(this.id).then(function (res) {
                _this.data = res;

                _this.$nextTick(function () {
                    var images = void 0,
                        imageList = _this.$refs.detail.querySelectorAll('img');

                    images = Array.prototype.map.call(imageList, function (img, index) {
                        img.addEventListener('click', function (event) {
                            image_preview_default()({
                                images: images,
                                startPosition: index
                            });
                        });

                        return img.getAttribute('src');
                    });
                });
            });
        }
    },
    filters: {
        formatPast: time["a" /* default */].formatPast
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-499a95d5","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/news/details.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views news-detail"},[_c('navigate',{attrs:{"title":_vm.data.infoType || '资讯详情',"position":"fixed","color":"#fff","backgroundColor":"#3899D7"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"header"},[_c('div',{staticClass:"news-title"},[_vm._v("\n                "+_vm._s(_vm.data.title)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"news-source theme-text-secondary"},[_vm._v("\n                "+_vm._s(_vm.data.publisher)),_c('span',{staticClass:"time"},[_vm._v(_vm._s(_vm._f("formatPast")(_vm.data.createTime)))])])]),_vm._v(" "),_c('div',{ref:"detail",staticClass:"detail theme-text-secondary",domProps:{"innerHTML":_vm._s(_vm.data.content)}})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var news_details = (esExports);
// CONCATENATED MODULE: ./src/views/news/details.vue
function injectStyle (ssrContext) {
  __webpack_require__("I25P")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  details,
  news_details,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_news_details = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "I25P":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "L9TO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getNewHeader */
/* harmony export (immutable) */ __webpack_exports__["c"] = getNewList;
/* harmony export (immutable) */ __webpack_exports__["b"] = getNewDetail;
/* harmony export (immutable) */ __webpack_exports__["a"] = getByType;
/* harmony export (immutable) */ __webpack_exports__["d"] = getbyarea;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_axios__ = __webpack_require__("2MJX");


/**
 * 新闻资讯头部按钮
 * @param params 无参数
 * @returns {*}
 */
function getNewHeader(params) {
    var url = '/info/gettype';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].get(url, { params: params });
}

/**
 * 新闻资讯列表 all
 * @param params
 * @param params.title        标题 为空查全部
 * @param params.pageNumber   页码
 * @param params.pageSize     每页显示条数
 * @returns {*}
 */
function getNewList(params) {
    var url = '/info/getlist';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].get(url, { params: params });
}

/***
 * 新闻资讯详情
 * @param id
 * @returns {*}
 */
function getNewDetail(id) {
    var url = '/info/getcontent';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].get(url, { params: { id: id } });
}

/***
 * 新闻资讯详情
 * @param id
 * @returns {*}
 */
function getByType(params) {
    var url = '/info/getbytype';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].get(url, { params: params });
}

/***
 * 分区域&全部查看航道通告
 * @param params
 * @param params.areaId  区域 ID
 * @return {AxiosPromise<any>}
 */
function getbyarea(params) {
    var url = '/info/getbyarea';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].get(url, { params: params });
}

/***/ })

});
//# sourceMappingURL=20.js.map