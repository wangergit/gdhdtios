webpackJsonp([36],{

/***/ "36gj":
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/ship/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var ship = ({
    name: "myShips",
    data: function data() {
        return {
            /***
             * 刷新和加载更多
             */
            refresh: false,
            loading: false,
            /***
             * 我的船舶列表
             */
            list: [],
            /***
             * 检索信息
             */
            params: {
                pageNumber: 0,
                pageSize: 10
            }
        };
    },
    activated: function activated() {
        this.queryIBoatList();
    },

    methods: {
        /***
         * 查看 我的船舶 详情
         */
        handlerMessageItem: function handlerMessageItem(item) {
            this.$router.push({
                name: 'about-ship-detail',
                query: {
                    typeId: '013001',
                    hideCollection: true
                },
                params: {
                    type: '013001',
                    id: item.boat.mmsi
                }
            });
        },

        /***
         * 获取 我的船舶 列表
         */
        queryIBoatList: function queryIBoatList() {
            var _this = this;

            this.params.pageNumber = 0;

            return Object(personal["i" /* queryIBoatList */])(this.params).then(function (res) {
                _this.list = res;
                _this.refresh = false;
            });
        },

        /***
         * 下拉刷新
         */
        onRefresh: function onRefresh() {
            this.refresh = true;
            this.$refs.scrollWrapper.scrollTop = 0;

            this.queryIBoatList();
        },

        /***
         * 上拉加载
         */
        onLoad: function onLoad() {
            var _this2 = this;

            this.loading = true;
            this.params.pageNumber++;

            Object(personal["i" /* queryIBoatList */])(this.params).then(function (res) {
                var _list;

                (_list = _this2.list).push.apply(_list, toConsumableArray_default()(res));
                _this2.loading = false;
            });
        },

        /***
         * 删除
         * @param item  item.id => 收藏 ID
         * @param index 索引
         */
        handlerDelete: function handlerDelete(item, index) {
            var _this3 = this;

            Object(personal["c" /* deleteIBoatById */])(item.id).then(function (res) {
                _this3.$toast('删除成功');
                _this3.list.splice(index, 1);
            });
        }
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */],
        SwipeCell: swipe_cell_default.a
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7fd244ea","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/ship/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"my-ships"},[_c('navigate',{attrs:{"title":"我的船舶","position":"absolute"}}),_vm._v(" "),_c('div',{ref:"scrollWrapper",staticClass:"scroll-wrapper"},[(_vm.list.length)?_c('mu-load-more',{attrs:{"refreshing":_vm.refresh,"loading":_vm.loading},on:{"refresh":_vm.onRefresh,"load":_vm.onLoad}},[_c('mu-list',{staticClass:"pn"},_vm._l((_vm.list),function(item,index){return _c('swipe-cell',{key:index,class:{'border-1px-b': index < _vm.list.length - 1},attrs:{"right-width":88}},[_c('mu-list-item',{attrs:{"avatar":""},nativeOn:{"click":function($event){_vm.handlerMessageItem(item, index)}}},[_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v(_vm._s(item.boat.name))]),_vm._v(" "),_c('mu-list-item-sub-title',[_vm._v("MMSI："+_vm._s(item.boat.mmsi))])],1)],1),_vm._v(" "),_c('mu-button',{staticClass:"delete",attrs:{"slot":"right","color":"#fff","flat":""},on:{"click":function($event){_vm.handlerDelete(item, index)}},slot:"right"},[_vm._v("\n                        删除\n                    ")])],1)}))],1):_c('no-success',{attrs:{"text":"您还没有添加任何船舶"}})],1),_vm._v(" "),_c('transition',{attrs:{"name":"views-left"}},[_c('keep-alive',[_c('router-view',{staticClass:"views"})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var about_ship = (esExports);
// CONCATENATED MODULE: ./src/views/about/ship/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("SaXC")
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
  ship,
  about_ship,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_about_ship = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "SaXC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=36.js.map