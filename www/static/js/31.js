webpackJsonp([31],{

/***/ "0XU1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FWxB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/base/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("vdH4");

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-cell/index.js
var swipe_cell = __webpack_require__("BTmN");
var swipe_cell_default = /*#__PURE__*/__webpack_require__.n(swipe_cell);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-cell/style/index.js
var style = __webpack_require__("9xn2");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/common/js/mixins/index.js
var mixins = __webpack_require__("HOuZ");

// EXTERNAL MODULE: ./src/types/index.js + 5 modules
var types = __webpack_require__("NaSR");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/report/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var report = ({
    name: "tagging",
    mixins: [mixins["a" /* MapMixins */]],
    data: function data() {
        return {
            icon: 'static/icon/search_label.png',
            refresh: false,
            loading: false,
            params: {
                userId: "111",
                pageNumber: 0,
                pageSize: 10
            },
            list: []
        };
    },
    activated: function activated() {
        this.queryReport();
    },

    methods: {
        // 点击选项
        handlerItem: function handlerItem(item) {
            var _this = this;

            this.$toast({
                message: '定位中 ...',
                duration: 0
            });
            this.setCenter(item.longitude, item.latitude).then(function (res) {
                _this.$toast('定位成功');

                _this.$router.push('/');
            }).catch(function (err) {
                _this.$toast('定位失败');
            });
        },

        // 下拉刷新
        onRefresh: function onRefresh() {
            this.refresh = true;
            this.$refs.scrollWrapper.scrollTop = 0;
            this.queryReport();
        },

        // 上拉加载
        onLoad: function onLoad() {
            var _this2 = this;

            this.loading = true;
            this.params.pageNumber++;

            Object(personal["r" /* queryReport */])(this.params).then(function (res) {
                var _list;

                (_list = _this2.list).push.apply(_list, toConsumableArray_default()(res));
                _this2.loading = false;
            });
        },

        // 搜索
        queryReport: function queryReport() {
            var _this3 = this;

            this.params.pageNumber = 0;

            Object(personal["r" /* queryReport */])(this.params).then(function (res) {
                _this3.list = Object(types["c" /* isArray */])(res);
                _this3.refresh = false;
            });
        },

        // 删除
        handlerDelete: function handlerDelete(item, index) {
            var _this4 = this;

            Object(personal["f" /* deleteReportInfo */])(item.id).then(function (res) {
                _this4.list.splice(index, 1);

                window.Arcgis && window.Arcgis.refreshMapLayers();
            });
        },

        /***
         * 点击进入修改标注信息界面
         * @param item
         * @param index
         */
        handlerSave: function handlerSave(item, index) {
            this.$router.push({
                name: 'about-report-detail',
                params: {
                    id: item.id
                }
            });
        }
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */],
        SwipeCell: swipe_cell_default.a
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c17548e0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/report/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tagging"},[_c('navigate',{attrs:{"title":"我的上报","position":"absolute"}}),_vm._v(" "),_c('div',{ref:"scrollWrapper",staticClass:"scroll-wrapper"},[(_vm.list.length)?_c('mu-load-more',{attrs:{"refreshing":_vm.refresh,"loading":_vm.loading},on:{"refresh":_vm.onRefresh,"load":_vm.onLoad}},[_c('mu-list',{staticClass:"pn"},_vm._l((_vm.list),function(item,index){return _c('swipe-cell',{key:item.id,staticClass:"border-1px-b",attrs:{"right-width":120}},[_c('mu-list-item',{attrs:{"avatar":""},nativeOn:{"click":function($event){_vm.handlerItem(item)}}},[_c('mu-list-item-content',{staticClass:"tagging-content"},[_c('mu-list-item-title',[_vm._v(_vm._s(item.type.name))]),_vm._v(" "),_c('mu-list-item-sub-title',[(item.status=='032001')?_c('span',[_vm._v(" 描述："+_vm._s(item.describe))]):_vm._e(),_vm._v(" "),(item.status=='032002')?_c('span',{staticStyle:{"color":"#13ce66"}},[_vm._v("已确认")]):_vm._e()])],1)],1),_vm._v(" "),_c('div',{staticClass:"flex h",attrs:{"slot":"right"},slot:"right"},[_c('mu-button',{staticClass:"flex-1 h bdrsn modify",attrs:{"color":"#fff","flat":""},on:{"click":function($event){_vm.handlerSave(item, index)}}},[_vm._v("\n                            修改\n                        ")]),_vm._v(" "),_c('mu-button',{staticClass:"flex-1 h bdrsn delete",attrs:{"color":"#fff","flat":""},on:{"click":function($event){_vm.handlerDelete(item, index)}}},[_vm._v("\n                            删除\n                        ")])],1)],1)}))],1):_c('no-success',{attrs:{"text":"您还没有任何上报信息"}})],1),_vm._v(" "),_c('transition',{attrs:{"name":"fade-left"}},[_c('keep-alive',[_c('router-view',{staticClass:"views",on:{"update":_vm.onRefresh}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var about_report = (esExports);
// CONCATENATED MODULE: ./src/views/about/report/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("0XU1")
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
  report,
  about_report,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_about_report = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=31.js.map