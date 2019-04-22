webpackJsonp([28],{

/***/ "8rkz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/base/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("vdH4");

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-cell/index.js
var swipe_cell = __webpack_require__("BTmN");
var swipe_cell_default = /*#__PURE__*/__webpack_require__.n(swipe_cell);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-cell/style/index.js
var style = __webpack_require__("9xn2");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./src/common/js/mixins/index.js
var mixins = __webpack_require__("HOuZ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/address/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var address = ({
    name: "common-address",
    mixins: [mixins["a" /* MapMixins */]],
    data: function data() {
        return {
            /***
             * 上拉刷新&下拉加载
             */
            refresh: false,
            loading: false,
            /***
             * 常用地址 列表
             */
            list: [],
            /***
             * 请求数据
             */
            params: {
                pageNumber: 0,
                pageSize: 20
            }
        };
    },
    activated: function activated() {
        this.queryIAddress();
    },

    methods: {
        /***
         * 搜索常用地址
         */
        queryIAddress: function queryIAddress() {
            var _this = this;

            this.params.pageNumber = 0;

            Object(personal["h" /* queryIAddress */])(this.params).then(function (res) {
                _this.list = res.content;
                _this.refresh = false;
            });
        },

        /***
         * 删除常用地址
         * @param item    => 删除对象
         * @param index   => 索引
         */
        handlerDelete: function handlerDelete(item, index) {
            var _this2 = this;

            Object(personal["a" /* deleteIAddress */])(item.id).then(function (res) {
                _this2.$toast('删除成功');
                _this2.list.splice(index, 1);
            });
        },

        /***
         * 下拉刷新
         */
        onRefresh: function onRefresh() {
            this.refresh = true;
            this.$refs.scrollWrapper.scrollTop = 0;

            this.queryIAddress();
        },

        /***
         * 下拉加载
         */
        onLoad: function onLoad() {
            var _this3 = this;

            this.loading = true;
            this.params.pageNumber++;

            Object(personal["h" /* queryIAddress */])(this.params).then(function (res) {
                var _list;

                if (res.content.length) (_list = _this3.list).push.apply(_list, toConsumableArray_default()(res.content));else _this3.params.pageNumber--;

                _this3.loading = false;
            });
        },

        /***
         * 定位
         * @param item   =>  定位对象
         */
        handlerLocation: function handlerLocation(item) {
            var _this4 = this;

            this.$toast({
                message: '定位中 ...',
                duration: 3000,
                forbidClick: true
            });

            /***
             * 设置地图中心点
             */
            this.setCenter(item.longitude, item.latitude).then(function (res) {
                _this4.$toast('定位成功');

                // 定位成功后跳转至图层页
                _this4.$router.push('/');
            }).catch(function (err) {
                _this4.$toast('定位失败');
            });
        },

        /***
         * 修改&新增常用地址
         */
        saveAddress: function saveAddress() {
            this.$router.push({
                name: 'selection-cl'
            });
        },
        handlerItem: function handlerItem(item) {
            // this.$router.push(`/detail/${item.typeId}/${item.id}`)
        },
        handlerSave: function handlerSave() {
            this.onRefresh();
        }
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */],
        SwipeCell: swipe_cell_default.a
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dc816eac","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/address/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"common-address"},[_c('navigate',{attrs:{"title":"常用地址","position":"absolute"}}),_vm._v(" "),_c('div',{ref:"scrollWrapper",staticClass:"scroll-wrapper"},[_c('mu-load-more',{attrs:{"refreshing":_vm.refresh,"loading":_vm.loading},on:{"refresh":_vm.onRefresh,"load":_vm.onLoad}},[_c('mu-sub-header',{staticClass:"theme-text-secondary"},[_vm._v("以下信息仅用于为您航线规划、推荐内容等")]),_vm._v(" "),(_vm.list.length)?_c('mu-list',_vm._l((_vm.list),function(item,index){return _c('swipe-cell',{key:index,attrs:{"right-width":88}},[_c('mu-list-item',{staticClass:"border-1px-b",attrs:{"ripple":false,"button":""},nativeOn:{"click":function($event){_vm.handlerItem(item)}}},[_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v(_vm._s(item.name))]),_vm._v(" "),(item.address)?_c('mu-list-item-sub-title',[_vm._v(_vm._s(item.address))]):_vm._e()],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-button',{attrs:{"color":"info","flat":""},on:{"click":function($event){_vm.handlerLocation(item)}}},[_vm._v("定位")])],1)],1),_vm._v(" "),_c('mu-button',{staticClass:"h bdrsn delete",attrs:{"slot":"right","color":"#fff","flat":""},on:{"click":function($event){_vm.handlerDelete(item, index)}},slot:"right"},[_vm._v("\n                        删除\n                    ")])],1)})):_c('no-success',{attrs:{"text":"您还没有添加常用地址","height":"75vh"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"common-address-add-button"},[_c('mu-button',{staticClass:"db w background-primary",attrs:{"color":"#fff","flat":""},on:{"click":_vm.saveAddress}},[_vm._v("添加")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var about_address = (esExports);
// CONCATENATED MODULE: ./src/views/about/address/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("zjdV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dc816eac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  address,
  about_address,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_about_address = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zjdV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=28.js.map