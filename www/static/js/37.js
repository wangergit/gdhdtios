webpackJsonp([37],{

/***/ "nyNS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/base/shelter/index.js + 3 modules
var shelter = __webpack_require__("ACuM");

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/index.js
var image_preview = __webpack_require__("Mqtp");
var image_preview_default = /*#__PURE__*/__webpack_require__.n(image_preview);

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/style/index.js
var style = __webpack_require__("i9vB");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./src/api/dynamic.js
var dynamic = __webpack_require__("IGLS");

// EXTERNAL MODULE: ./src/base/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("vdH4");

// EXTERNAL MODULE: ./src/types/index.js + 5 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dynamic/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var views_dynamic = ({
    name: "dynamicList",
    mixins: [mixins["i" /* userMixins */]],
    data: function data() {
        return {
            open: false,
            refreshing: false,
            loading: false,
            params: {
                pageNumber: 0,
                pageSize: 15
            },
            list: [],
            types: {
                active: '全部',
                list: ["全部", "已赞", "已留言"]
            }
        };
    },
    activated: function activated() {
        this.refresh();
    },

    methods: {
        // 刷新
        refresh: function refresh() {
            this.refreshing = true;
            this.$refs.container.scrollTop = 0;

            this.getList();
        },

        // 点击选项
        handlerItem: function handlerItem(index, item) {
            this.$router.push({
                name: 'dynamic-detail',
                params: {
                    id: item.id,
                    portrait: item.portrait,
                    alias: item.alias,
                    content: item.content,
                    images: item.images,
                    isFabulous: item.ifab,
                    createTime: item.createTime,
                    index: index
                }
            });
        },

        // 切换类型
        handlerToggle: function handlerToggle() {
            this.open = true;
        },

        // 切换列表
        handlerToggleList: function handlerToggleList(type) {
            if (this.types.active !== type) {
                this.types.active = type;
                this.getList();
            }

            this.open = false;
        },

        // 格式化图片样式
        handlerPicture: function handlerPicture(images) {
            return images.length > 4 ? 'picture-max' : 'picture-' + images.length;
        },

        // 点击图片，弹出图片查看器
        onClickPicture: function onClickPicture(images, index) {
            image_preview_default()({
                images: images,
                startPosition: index
            });
        },

        // 加载更多
        load: function load() {
            var _this = this;

            this.loading = true;

            this.params.pageNumber++;

            if (this.types.active === '全部') {
                Object(dynamic["b" /* queryCircleMessageList */])(this.params).then(function (res) {
                    var _list;

                    (_list = _this.list).push.apply(_list, toConsumableArray_default()(Object(types["c" /* isArray */])(res).map(function (item) {
                        if (item.mediaPath) {
                            item.images = item.mediaPath.split(';').map(function (item) {
                                return _this.$images + item;
                            });
                        }

                        return item;
                    })));

                    _this.loading = false;
                });
            }
            if (this.types.active === '已赞') {
                Object(dynamic["d" /* queryCircleMessageListBeFabulousByUserId */])(this.params).then(function (res) {
                    var _list2;

                    (_list2 = _this.list).push.apply(_list2, toConsumableArray_default()(Object(types["c" /* isArray */])(res).map(function (item) {
                        if (item.mediaPath) {
                            item.images = item.mediaPath.split(';').map(function (item) {
                                return _this.$images + item;
                            });
                        }
                        return item;
                    })));

                    _this.loading = false;
                });
            }
            if (this.types.active === '已留言') {
                Object(dynamic["c" /* queryCircleMessageListBeCommentByUserId */])(this.params).then(function (res) {
                    var _list3;

                    (_list3 = _this.list).push.apply(_list3, toConsumableArray_default()(Object(types["c" /* isArray */])(res).map(function (item) {
                        if (item.mediaPath) {
                            item.images = item.mediaPath.split(';').map(function (item) {
                                return _this.$images + item;
                            });
                        }
                        return item;
                    })));

                    _this.loading = false;
                });
            }
        },

        // 获取列表
        getList: function getList() {
            if (this.types.active === '全部') {
                this.queryCircleMessageList();
            }
            if (this.types.active === '已赞') {
                this.queryMyFabulousList();
            }
            if (this.types.active === '已留言') {
                this.queryMyCommentList();
            }
        },
        queryCircleMessageList: function queryCircleMessageList() {
            var _this2 = this;

            this.params.pageNumber = 0;

            Object(dynamic["b" /* queryCircleMessageList */])(this.params).then(function (res) {
                _this2.list = res;

                // 格式化图片列表
                _this2.list.map(function (item) {
                    if (item.mediaPath) {
                        item.images = item.mediaPath.split(';').map(function (item) {
                            return _this2.$images + item;
                        });
                    }
                    return item;
                });

                _this2.loading = false;
                _this2.refreshing = false;
            });
        },
        queryMyFabulousList: function queryMyFabulousList() {
            var _this3 = this;

            this.params.pageNumber = 0;

            Object(dynamic["d" /* queryCircleMessageListBeFabulousByUserId */])(this.params).then(function (res) {
                _this3.list = Object(types["c" /* isArray */])(res).map(function (item) {
                    if (item.mediaPath) {
                        item.images = item.mediaPath.split(';').map(function (item) {
                            return _this3.$images + item;
                        });
                    }
                    return item;
                });

                _this3.refreshing = false;
            });
        },
        queryMyCommentList: function queryMyCommentList() {
            var _this4 = this;

            this.params.pageNumber = 0;

            Object(dynamic["c" /* queryCircleMessageListBeCommentByUserId */])(this.params).then(function (res) {
                _this4.list = res.map(function (item) {
                    if (item.mediaPath) {
                        item.images = item.mediaPath.split(';').map(function (item) {
                            return _this4.$images + item;
                        });
                    }
                    return item;
                });

                _this4.refreshing = false;
            });
        }
    },
    watch: {
        open: function open(value) {
            var _this5 = this;

            if (value) {
                shelter["a" /* default */].show({
                    onClose: function onClose() {
                        _this5.open = false;
                    },
                    element: this.$el
                });
            } else {
                shelter["a" /* default */].close();
            }
        }
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7e31b917","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dynamic/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dynamic"},[_c('mu-appbar',{staticClass:"appbar navigator",style:({zIndex: _vm.open ? 8000 : 1})},[_c('mu-button',{attrs:{"slot":"left","color":"#fff","icon":""},on:{"click":function($event){_vm.$router.back()}},slot:"left"},[_c('mu-icon',{attrs:{"value":"navigate_before"}})],1),_vm._v(" "),_c('mu-button',{staticClass:"w",attrs:{"color":"#fff","flat":""},on:{"click":_vm.handlerToggle}},[_c('span',[_vm._v(_vm._s(_vm.types.active))]),_vm._v(" "),_c('mu-icon',{attrs:{"value":"arrow_drop_down"}})],1),_vm._v(" "),_c('mu-button',{attrs:{"slot":"right","color":"#fff","icon":""},on:{"click":function($event){_vm.$router.push('/dynamic/type')}},slot:"right"},[_c('mu-icon',{attrs:{"value":"add"}})],1)],1),_vm._v(" "),_c('div',{ref:"container",staticClass:"scroll-wrapper"},[_c('mu-load-more',{attrs:{"refreshing":_vm.refreshing,"loading":_vm.loading},on:{"refresh":_vm.refresh,"load":_vm.load}},[_vm._l((_vm.list),function(item,index){return _c('div',{key:item.id,staticClass:"list-item paper",on:{"click":function($event){_vm.handlerItem(index, item)}}},[_c('div',{staticClass:"source"},[_c('mu-avatar',{attrs:{"size":"50"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.AvatarImage(_vm.$images + item.portrait, item.alias)),expression:"AvatarImage($images + item.portrait, item.alias)"}],key:_vm.$images + item.portrait})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"nickname"},[_vm._v(_vm._s(item.alias))]),_vm._v(" "),_c('div',{staticClass:"time theme-text-secondary"},[_vm._v(_vm._s(item.createTime))])])],1),_vm._v(" "),_c('div',{staticClass:"msg",domProps:{"innerHTML":_vm._s(item.content)}},[_vm._v(_vm._s(item.content))]),_vm._v(" "),(item.images)?_c('div',{ref:"images",refInFor:true,staticClass:"picture-box"},_vm._l((item.images),function(image,index){return (image)?_c('div',{directives:[{name:"lazy",rawName:"v-lazy:background-image.container",value:(image),expression:"image",arg:"background-image",modifiers:{"container":true}}],staticClass:"picture border-1px",class:_vm.handlerPicture(item.images),on:{"click":function($event){$event.stopPropagation();_vm.onClickPicture(item.images, index)}}}):_vm._e()})):_vm._e(),_vm._v(" "),_c('div',{staticClass:"interact"},[_c('div',{staticClass:"interact-item"},[_c('mu-icon',{attrs:{"size":"16","value":"thumb_up","color":"#3899D7"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(!item.fnum ? '0' : item.fnum))])],1),_vm._v(" "),_c('div',{staticClass:"interact-item last"},[_c('mu-icon',{attrs:{"size":"16","value":"sms","color":"#3899D7"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(!item.cnum ? '0' : item.cnum))])],1)])])}),_vm._v(" "),(!_vm.list.length)?_c('no-success',{attrs:{"text":"请输入检索内容","height":"90vh"}}):_vm._e()],2)],1),_vm._v(" "),_c('transition',{attrs:{"name":"views-left"}},[_c('keep-alive',[_c('router-view',{staticClass:"views",on:{"refresh":_vm.refresh}})],1)],1),_vm._v(" "),_c('mu-popover',{staticClass:"dynamic-popover",attrs:{"open":_vm.open},on:{"update:open":function($event){_vm.open=$event}}},[_c('div',{staticClass:"list"},_vm._l((_vm.types.list),function(item){return _c('div',{key:item,staticClass:"item border-1px-b",class:{'color-primary': _vm.types.active === item},on:{"click":function($event){_vm.handlerToggleList(item)}}},[_vm._v("\n                "+_vm._s(item)+"\n            ")])}))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_views_dynamic = (esExports);
// CONCATENATED MODULE: ./src/views/dynamic/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("xRnF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e31b917"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  views_dynamic,
  selectortype_template_index_0_src_views_dynamic,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_dynamic = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "xRnF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=37.js.map