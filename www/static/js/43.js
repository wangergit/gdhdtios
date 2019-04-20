webpackJsonp([43],{

/***/ "CL89":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ycbT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/components/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("amha");

// EXTERNAL MODULE: ./src/common/utils/elements.js
var utils_elements = __webpack_require__("O0RF");

// EXTERNAL MODULE: ./src/api/navigation.js
var navigation = __webpack_require__("LNF3");

// EXTERNAL MODULE: ./src/types/index.js + 3 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/navigational/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var navigational = ({
    name: "navigational",
    mixins: [mixins["a" /* appMixins */]],
    data: function data() {
        return {
            /***
             * 导航选项列表
             */
            items: utils_elements["a" /* default */].list,
            /***
             * 上拉刷新&下拉加载
             */
            refreshing: false,
            loading: false,
            /***
             * 结果列表
             */
            list: [],
            /***
             * 搜索条件
             */
            params: {
                typeId: '',
                name: '',
                pageNumber: 1,
                pageSize: 20
            },
            /***
             * 导航栏样式
             */
            styles: {
                itemsWrapper: {
                    width: undefined,
                    maxHeight: 500
                },
                items: {
                    width: undefined,
                    scrollLeft: 0
                },
                item: {
                    width: undefined
                }
            }
        };
    },
    created: function created() {
        var _this = this;

        this.$watch('params.name', Object(types["b" /* debounce */])(function (value) {
            _this.onRefresh();
        }, 300));

        this.$watch('params.typeId', function (value) {
            _this.$router.replace({
                name: 'navigational',
                query: {
                    id: value
                }
            });

            _this.onRefresh();
        });

        var width = this.screen.width;


        this.styles.itemsWrapper.width = width;
        this.styles.items.width = width;
        this.styles.item.width = width * 0.2;
    },
    activated: function activated() {
        this.params.name = '';

        if (this.$route.query.id) {
            this.handlerNavigationItem(this.$route.query.id);
        }
    },

    methods: {
        // 点击导航
        handlerNavigationItem: function handlerNavigationItem(id) {
            var width = this.screen.width;


            if (this.params.typeId === id) {
                this.params.typeId = '';
                this.styles.item.width = width * 0.2;
                this.styles.items.width = width;
                this.styles.items.scrollLeft = 0;
                this.styles.itemsWrapper.maxHeight = 500;
            } else {
                this.params.typeId = id;

                this.styles.item.width = 0.2 * width;
                this.styles.items.width = this.items.length * 0.2 * width;
                this.styles.itemsWrapper.maxHeight = 90;

                this.animation();
            }

            this.params.name = '';
        },

        // 刷新
        onRefresh: function onRefresh() {
            this.refreshing = true;
            this.$refs.content.scrollTop = 0;

            this.getNavigationals();
        },

        // 加载更多
        load: function load() {
            var _this2 = this;

            this.loading = true;
            this.params.pageNumber++;

            if (this.params.typeId) {
                this.params.types = [this.params.typeId];

                Object(navigation["c" /* getNavigationals */])(this.params).then(function (res) {
                    var _list;

                    (_list = _this2.list).push.apply(_list, toConsumableArray_default()(Object(types["d" /* isArray */])(res)));

                    _this2.loading = false;
                });
            }
        },

        // 获取指定助航信息
        getNavigationals: function getNavigationals() {
            var _this3 = this;

            this.params.pageNumber = 1;

            if (this.params.typeId) {
                this.params.types = [this.params.typeId];

                Object(navigation["c" /* getNavigationals */])(this.params).then(function (res) {
                    _this3.list = Object(types["d" /* isArray */])(res);

                    _this3.refreshing = false;

                    _this3.$toast.clear();
                });
            } else {
                this.list = [];
            }
        },

        /***
         * 查询详情
         */
        handlerListItem: function handlerListItem(item) {
            this.$router.push({
                name: 'navigational-details',
                params: {
                    type: item.subType || item.typeId || this.$route.query.id || this.params.typeId,
                    id: item.id
                },
                query: {
                    typeId: item.typeId
                }
            });
        },

        /***
         * 动画
         */
        animation: function animation() {
            var _this4 = this;

            clearTimeout(this.timer);

            var index = this.items.findIndex(function (item) {
                return _this4.params.typeId === item.id;
            });

            if (index === -1) {
                return;
            }

            var width = this.screen.width;
            var max = this.styles.items.width - width;

            var current = index * (width * 0.2) - width * 0.8 / 2;

            if (current < 0) {
                current = 0;
            }

            if (current > max) {
                current = max;
            }

            this.styles.items.scrollLeft = -current;
        },

        /***
         * 滚动动画
         * @param event
         */
        onTouchstart: function onTouchstart(event) {
            clearTimeout(this.timer);
            this.$refs.items.style.transition = 'none';
            this.scrollX = event.touches[0].pageX;
        },
        onTouchmove: function onTouchmove(event) {
            var current = event.touches[0].pageX - this.scrollX + this.styles.items.scrollLeft;

            var MAX = this.styles.items.width - this.styles.itemsWrapper.width;
            var MIN = 0;

            if (current > MIN) {
                current = MIN;
            }

            if (current < -MAX) {
                current = -MAX;
            }

            this.styles.items.scrollLeft = current;

            this.scrollX = event.touches[0].pageX;
        },
        onTouchend: function onTouchend() {
            this.$refs.items.style.transition = 'all 1s';
            this.timer = setTimeout(this.animation, 2000);
        }
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1980840a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/navigational/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigational"},[_c('navigate',{attrs:{"title":"助航信息","position":"absolute","color":"#fff","backgroundColor":"#3899D7"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{ref:"itemsWrapper",staticClass:"items-wrapper",style:({maxHeight: _vm.styles.itemsWrapper.maxHeight + 'px'})},[_c('div',{ref:"items",staticClass:"items",style:({
                            width: _vm.styles.items.width + 'px',
                            transform: ("translate3d(" + (_vm.styles.items.scrollLeft) + "px, 0, 0)")
                         }),on:{"touchstart":_vm.onTouchstart,"touchmove":_vm.onTouchmove,"touchend":_vm.onTouchend}},_vm._l((_vm.items),function(item,index){return _c('div',{ref:"item",refInFor:true,staticClass:"items-item",class:{'items-item-active': _vm.params.typeId === item.id},style:({width: _vm.styles.item.width + 'px'}),attrs:{"data-id":item.id},on:{"click":function($event){_vm.handlerNavigationItem(item.id)}}},[_c('img',{attrs:{"src":_vm._f("formatFind")(item.id,_vm.icons, 'value', 'typeId')}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.name))])])}))]),_vm._v(" "),_c('transition',{attrs:{"name":"fade-shelter"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.params.typeId),expression:"params.typeId"}],staticClass:"search-box-wrapper"},[_c('div',{staticClass:"search-box border-1px"},[_c('mu-icon',{attrs:{"size":"22","value":"search","color":"#ccc"}}),_vm._v(" "),_c('mu-text-field',{staticClass:"demo-divider-form",attrs:{"placeholder":"请输入搜索内容","solo":"","full-width":""},model:{value:(_vm.params.name),callback:function ($$v) {_vm.$set(_vm.params, "name", $$v)},expression:"params.name"}})],1)])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.params.typeId),expression:"params.typeId"}],ref:"content",staticClass:"content-wrapper"},[_c('mu-load-more',{directives:[{name:"show",rawName:"v-show",value:(_vm.list.length),expression:"list.length"}],attrs:{"refreshing":_vm.refreshing,"loading":_vm.loading},on:{"refresh":_vm.onRefresh,"load":_vm.load}},_vm._l((_vm.list),function(item,index){return _c('div',{key:item.id,staticClass:"search-list-item border-1px-b"},[_c('div',{staticClass:"info"},[_c('span',{staticClass:"badge"},[_vm._v("【"+_vm._s(item.typeName)+"】")]),_vm._v(_vm._s(item.name)+"\n                    ")]),_vm._v(" "),_c('mu-button',{staticClass:"button",attrs:{"color":"#6B9CF2","small":"","flat":""},on:{"click":function($event){_vm.handlerListItem(item)}}},[_vm._v("查看\n                    ")])],1)})),_vm._v(" "),_c('no-success',{directives:[{name:"show",rawName:"v-show",value:(!_vm.list.length),expression:"!list.length"}],attrs:{"text":"暂未查询到数据"}})],1)],1),_vm._v(" "),_c('transition',{staticClass:"views-left"},[_c('keep-alive',[_c('router-view',{staticClass:"views"})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_navigational = (esExports);
// CONCATENATED MODULE: ./src/views/navigational/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("CL89")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1980840a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  navigational,
  views_navigational,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_navigational = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=43.js.map