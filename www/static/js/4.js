webpackJsonp([4],{

/***/ "0cLX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "723a":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "SYky":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// EXTERNAL MODULE: ./src/base/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("vdH4");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/collection/collection.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var collection = ({
    name: "collection",
    data: function data() {
        return {
            params: {
                pageNumber: 0,
                pageSize: 20
            },
            list: []
        };
    },

    props: {
        value: {}
    },
    activated: function activated() {
        this.queryIAddress();
    },

    methods: {
        // 点击返回
        handlerBack: function handlerBack() {
            this.$emit('input', false);
        },

        // 点击列表
        handlerItem: function handlerItem(item) {
            item.name = item.name || item.title;
            item.x = item.x || item.longitude;
            item.y = item.y || item.latitude;

            this.$emit('change', item);
        },
        queryIAddress: function queryIAddress() {
            var _this = this;

            this.params.pageNumber = 0;
            Object(personal["h" /* queryIAddress */])(this.params).then(function (res) {
                _this.list = res.content;
            });
        },
        queryILabel: function queryILabel() {
            var _this2 = this;

            this.params.pageNumber = 0;
            Object(personal["k" /* queryILabel */])(this.params).then(function (res) {
                _this2.list = res.content;
            });
        }
    },
    filters: {
        formatDate: time["a" /* default */].formatDate
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-739e46d0","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/collection/collection.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views collection"},[_c('navigate',{attrs:{"title":"我的收藏","position":"absolute","back":""},on:{"back":_vm.handlerBack}}),_vm._v(" "),(_vm.list.length)?_c('div',{staticClass:"collection-container scroll-wrapper"},[_c('mu-list',{staticStyle:{"padding":"0"}},_vm._l((_vm.list),function(item,index){return _c('mu-list-item',{key:index,staticClass:"border-1px-b",attrs:{"avatar":"","button":""},on:{"click":function($event){_vm.handlerItem(item)}}},[_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v(_vm._s(item.name || item.title))]),_vm._v(" "),_c('mu-list-item-sub-title',[_vm._v("距离："+_vm._s(item.distance)+" 公里\n                    ")])],1),_vm._v(" "),_c('mu-list-item-action',[_vm._v(_vm._s(_vm._f("formatDate")(item.time,'YYYY-MM-DD')))])],1)}))],1):_c('no-success',{attrs:{"text":"暂时没有搜索到 我的收藏 列表"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var collection_collection = (esExports);
// CONCATENATED MODULE: ./src/views/about/collection/collection.vue
function injectStyle (ssrContext) {
  __webpack_require__("0cLX")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-739e46d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  collection,
  collection_collection,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_collection_collection = (Component.exports);

// EXTERNAL MODULE: ./src/common/js/mixins/index.js
var mixins = __webpack_require__("HOuZ");

// EXTERNAL MODULE: ./src/api/navigation.js
var navigation = __webpack_require__("LNF3");

// EXTERNAL MODULE: ./src/types/index.js + 5 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var common_mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/navigation/search.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var search = ({
    name: "navigation-search",
    mixins: [common_mixins["a" /* appMixins */], mixins["a" /* MapMixins */], common_mixins["g" /* routeMixins */]],
    data: function data() {
        return {
            visible: false,
            params: {
                types: [],
                name: '',
                pageNumber: 1,
                pageSize: 30
            },
            list: []
        };
    },
    activated: function activated() {
        if (this.$route.name === 'route-sn') {
            this.params.name = this.sn.name;
        }
        if (this.$route.name === 'route-en') {
            this.params.name = this.en.name;
        }

        this.list = [];

        if (this.params.name) {
            this.getNavigationList();
        }

        var input = this.$refs.locationInput.$el.querySelector('input');

        setTimeout(function () {
            input.focus();
            input.select();
        }, 200);
    },
    deactivated: function deactivated() {
        this.visible = false;
    },

    methods: {
        // 退出导航位置搜索
        handlerBackNavigation: function handlerBackNavigation() {
            this.$router.back();
        },

        // 搜索
        getNavigationList: function getNavigationList() {
            var _this = this;

            this.$toast({
                type: 'loading',
                position: 'center',
                message: '正在查询，请稍等 ...',
                duration: 0
            });

            this.params.pageNumber = 1;

            Object(navigation["c" /* getNavigationals */])(this.params).then(function (res) {
                _this.list = Object(types["c" /* isArray */])(res);

                if (_this.list.length < 1) {
                    _this.$toast('没有搜索到结果');
                } else {
                    _this.$toast.clear();
                }

                _this.saveRouteSearchHistory(_this.params.name);
            }).catch(function (err) {
                console.log(err);

                _this.$toast.clear();
            });
        },
        load: function load() {
            var _this2 = this;

            this.params.pageNumber++;

            Object(navigation["c" /* getNavigationals */])(this.params).then(function (res) {
                var _list;

                (_list = _this2.list).push.apply(_list, toConsumableArray_default()(Object(types["c" /* isArray */])(res)));
            });
        },

        // 点击搜索
        searchLocationInfo: function searchLocationInfo() {
            if (!this.params.name) {
                this.list = [];

                return this.$toast('请输入关键词');
            }

            this.getNavigationList();
        },

        // 点击添加位置信息
        addRoute: function addRoute(item) {
            if (this.$route.name === 'route-sn') {
                this.setRouteSn(item);
            }
            if (this.$route.name === 'route-en') {
                this.setRouteEn(item);
            }

            this.$router.back();
        },

        // 点击我的位置
        handlerMyLocation: function handlerMyLocation() {
            if (!this.gps) {
                return this.$toast('定位服务未开启！');
            }

            this.addRoute({
                name: '我的位置'
            });
        },

        // 点击我的收藏
        handlerCollection: function handlerCollection() {
            this.visible = true;
        },

        // 点击历史纪录
        handlerHistory: function handlerHistory(item) {
            this.params.name = item;

            this.getNavigationList();
        },
        remove: function remove(item) {
            this.deleteRouteSearchHistory(item);
        },
        clear: function clear() {
            this.clearRouteSearchHistory();
        },
        handlerSelection: function handlerSelection() {
            if (this.$route.name === 'route-sn') {
                this.$router.push({
                    name: 'selection-sn'
                });
            }
            if (this.$route.name === 'route-en') {
                this.$router.push({
                    name: 'selection-en'
                });
            }
        }
    },
    components: {
        Collection: about_collection_collection
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-25c1fb0a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/navigation/search.vue
var search_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation-search"},[_c('div',{staticClass:"search-wrapper paper shadow"},[_c('div',{staticClass:"back",on:{"click":function($event){$event.stopPropagation();return _vm.handlerBackNavigation($event)}}},[_c('mu-icon',{attrs:{"value":"navigate_before","size":"30"}})],1),_vm._v(" "),_c('label',{staticClass:"input-wrapper"},[_c('mu-text-field',{ref:"locationInput",attrs:{"type":"search","placeholder":"请输入关键字搜索","solo":""},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.searchLocationInfo($event)}},model:{value:(_vm.params.name),callback:function ($$v) {_vm.$set(_vm.params, "name", $$v)},expression:"params.name"}})],1),_vm._v(" "),_c('mu-button',{staticStyle:{"height":"100%"},attrs:{"flat":""},on:{"click":_vm.searchLocationInfo}},[_vm._v("搜索")])],1),_vm._v(" "),_c('div',{staticClass:"tool paper shadow"},[_c('div',{staticClass:"item",on:{"click":_vm.handlerMyLocation}},[_c('mu-icon',{attrs:{"value":"place","color":"#0DEC42","size":"17"}}),_vm._v(" "),_c('span',[_vm._v("我的位置")])],1),_vm._v(" "),_c('div',{staticClass:"item",on:{"click":_vm.handlerCollection}},[_c('mu-icon',{attrs:{"value":"star","color":"#e91e63","size":"17"}}),_vm._v(" "),_c('span',[_vm._v("我的收藏")])],1),_vm._v(" "),_c('div',{staticClass:"item",on:{"click":_vm.handlerSelection}},[_c('mu-icon',{attrs:{"value":"pin_drop","color":"#4fc3f7","size":"17"}}),_vm._v(" "),_c('span',[_vm._v("地图选点")])],1)]),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper shadow"},[(_vm.list.length)?_c('mu-load-more',{staticClass:"list paper",on:{"load":_vm.load}},[_c('mu-list',{staticClass:"pn"},_vm._l((_vm.list),function(item,index){return _c('mu-list-item',{key:item.id,staticClass:"border-1px-b",nativeOn:{"click":function($event){_vm.addRoute(item)}}},[_c('mu-list-item-action',[_c('mu-icon',{attrs:{"color":"grey","value":"place"}})],1),_vm._v(" "),_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v(_vm._s(item.name))]),_vm._v(" "),(item.distance)?_c('mu-list-item-sub-title',[_vm._v("距离："+_vm._s(item.distance)+"公里")]):_vm._e()],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"color":"grey","value":"reply"}})],1)],1)}))],1):_c('div',{staticClass:"historical paper"},[_vm._l((_vm.searchHistory),function(item){return (_vm.searchHistory.length)?_c('div',{staticClass:"historical-item border-1px-b"},[_c('div',{staticClass:"text",on:{"click":function($event){_vm.handlerHistory(item)}}},[_vm._v(_vm._s(item))]),_vm._v(" "),_c('mu-icon',{attrs:{"value":"close","size":"16","color":"grey"},on:{"click":function($event){$event.stopPropagation();_vm.remove(item)}}})],1):_vm._e()}),_vm._v(" "),(!_vm.searchHistory.length)?_c('div',{staticClass:"border-1px-b"},[_c('div',{staticStyle:{"width":"100%","height":"46px","line-height":"46px","text-align":"center","font-size":"14px"}},[_vm._v("\n                    暂时没有历史纪录\n                ")])]):_vm._e(),_vm._v(" "),_c('div',[_c('mu-button',{staticStyle:{"width":"100%","height":"46px"},attrs:{"flat":""},on:{"click":_vm.clear}},[_vm._v("清空历史纪录")])],1)],2)],1),_vm._v(" "),_c('transition',{attrs:{"name":"views-left"}},[_c('keep-alive',[(_vm.visible)?_c('collection',{on:{"change":_vm.addRoute},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}}):_vm._e()],1)],1)],1)}
var search_staticRenderFns = []
var search_esExports = { render: search_render, staticRenderFns: search_staticRenderFns }
/* harmony default export */ var navigation_search = (search_esExports);
// CONCATENATED MODULE: ./src/views/navigation/search.vue
function search_injectStyle (ssrContext) {
  __webpack_require__("723a")
}
var search_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var search___vue_template_functional__ = false
/* styles */
var search___vue_styles__ = search_injectStyle
/* scopeId */
var search___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var search___vue_module_identifier__ = null
var search_Component = search_normalizeComponent(
  search,
  navigation_search,
  search___vue_template_functional__,
  search___vue_styles__,
  search___vue_scopeId__,
  search___vue_module_identifier__
)

/* harmony default export */ var views_navigation_search = __webpack_exports__["default"] = (search_Component.exports);


/***/ })

});
//# sourceMappingURL=4.js.map