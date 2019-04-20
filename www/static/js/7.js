webpackJsonp([7],{

/***/ "/iyE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/components/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("amha");

// EXTERNAL MODULE: ./node_modules/vant/lib/actionsheet/index.js
var actionsheet = __webpack_require__("OjEV");
var actionsheet_default = /*#__PURE__*/__webpack_require__.n(actionsheet);

// EXTERNAL MODULE: ./node_modules/vant/lib/actionsheet/style/index.js
var style = __webpack_require__("yZCJ");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// EXTERNAL MODULE: ./src/api/news.js
var news = __webpack_require__("L9TO");

// EXTERNAL MODULE: ./src/api/search.js
var search = __webpack_require__("8stH");

// EXTERNAL MODULE: ./src/types/index.js + 3 modules
var types = __webpack_require__("NaSR");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/news/index.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var views_news = ({
    name: "news",
    data: function data() {
        return {
            /***
             * 区域选择器
             */
            active: false,
            actions: [],
            assortment: '全部',
            /***
             * 导航栏样式
             */
            color: "#fff",
            shadow: false,
            bgc: "transparent",
            scrollTop: 0,
            /***
             * 下拉刷新&上拉加载
             */
            refreshing: false,
            loading: false,
            /***
             * 搜索条件
             */
            params: {
                pageNumber: 0,
                pageSize: 15
            },
            /***
             * 头部导航列表
             */
            header: [],
            /***
             * 搜索结果列表
             */
            list: []
        };
    },
    created: function created() {
        var _this = this;

        return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
            return regenerator_default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.header = [{
                                "id": "001",
                                "typeKey": "scale",
                                "typeName": "航道尺度",
                                "typeState": "1",
                                "icon": "static/icon/news_scale.png",
                                "activeIcon": "static/icon/news_scale_current.png"
                            }, {
                                "id": "002",
                                "typeKey": "weather",
                                "typeName": "航道天气",
                                "typeState": "1",
                                "icon": "static/icon/news_weather.png",
                                "activeIcon": "static/icon/news_water_level_current.png"
                            }, {
                                "id": "003",
                                "typeKey": "notice",
                                "typeName": "航道通告",
                                "typeState": "1",
                                "icon": "static/icon/news_notice.png",
                                "activeIcon": "static/icon/news_notice_current.png"
                            }, {
                                "id": "004",
                                "typeKey": "news",
                                "typeName": "航道新闻",
                                "typeState": "1",
                                "icon": "static/icon/news_news.png",
                                "activeIcon": "static/icon/news_news_current.png"
                            }, {
                                "id": "005",
                                "typeKey": "law",
                                "typeName": "法律法规",
                                "typeState": "1",
                                "icon": "static/icon/news_law.png",
                                "activeIcon": "static/icon/news_law_current.png"
                            }];

                            _context.next = 3;
                            return Object(search["c" /* queryTypeDictByFid */])('029');

                        case 3:
                            _this.actions = _context.sent;


                            _this.assortment = _this.actions[0];

                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    activated: function activated() {
        this.refresh();
    },

    methods: {
        /***
         * 点击头部导航按钮
         * @param type  => 类型
         */
        goTypeList: function goTypeList(type) {
            if (this.$route.query.type_id === type.id) {
                this.$router.replace("/news");
            } else {
                this.$router.replace("/news?type_id=" + type.id + "&type_name=" + type.typeName);
            }

            this.assortment = this.actions[0];

            this.refresh();
        },

        // 点击单条新闻
        handlerNewItem: function handlerNewItem(item, index, typeName) {
            this.$router.push({
                name: "news-detail",
                params: {
                    id: item.id,
                    typeName: typeName
                }
            });
        },

        /***
         * 顶部导航样式调整
         */
        onScroll: function onScroll() {
            var top = this.$refs.scroll.scrollTop;
            var max = this.$refs.header.offsetHeight - 40;

            if (top > max) {
                this.color = "#fff";
                this.bgc = '';
                this.shadow = true;
            } else {
                this.color = "#fff";
                this.bgc = "transparent";
                this.shadow = false;
            }
        },

        // 刷新
        refresh: function refresh() {
            this.refreshing = true;
            this.$refs.content.scrollTop = 0;

            this.getNewList();
        },

        //  加载
        load: function load() {
            var _this2 = this;

            this.loading = true;
            this.params.pageNumber++;

            if (this.$route.query.type_id) {
                this.params.typeId = this.$route.query.type_id;

                if (this.$route.query.type_name === '航道通告') {
                    var params = {
                        areaId: this.assortment.id,
                        pageNumber: this.params.pageNumber,
                        pageSize: this.params.pageSize
                    };

                    Object(news["d" /* getbyarea */])(params).then(function (res) {
                        var _list;

                        (_list = _this2.list).push.apply(_list, toConsumableArray_default()(Object(types["d" /* isArray */])(res)));
                        _this2.loading = false;
                    });
                } else {
                    Object(news["a" /* getByType */])(this.params).then(function (res) {
                        var _list2;

                        (_list2 = _this2.list).push.apply(_list2, toConsumableArray_default()(Object(types["d" /* isArray */])(res)));
                        _this2.loading = false;
                    });
                }
            } else {
                this.params.typeId = undefined;

                Object(news["c" /* getNewList */])(this.params).then(function (res) {
                    var _list3;

                    (_list3 = _this2.list).push.apply(_list3, toConsumableArray_default()(Object(types["d" /* isArray */])(res)));
                    _this2.loading = false;
                });
            }
        },

        /***
         * 获取导航列表
         */
        getNewList: function getNewList() {
            var _this3 = this;

            if (this.$route.query.type_id) {
                this.params.pageNumber = 0;
                this.params.typeId = this.$route.query.type_id;

                if (this.$route.query.type_name === '航道通告') {
                    var params = {
                        areaId: this.assortment.id,
                        pageNumber: this.params.pageNumber,
                        pageSize: this.params.pageSize
                    };

                    Object(news["d" /* getbyarea */])(params).then(function (res) {
                        _this3.list = Object(types["d" /* isArray */])(res);
                        _this3.refreshing = false;
                        _this3.$toast.clear();
                    });
                } else {
                    Object(news["a" /* getByType */])(this.params).then(function (res) {
                        _this3.list = Object(types["d" /* isArray */])(res);
                        _this3.refreshing = false;
                        _this3.$toast.clear();
                    });
                }
            } else {
                this.params.typeId = undefined;
                this.params.pageNumber = 0;

                Object(news["c" /* getNewList */])(this.params).then(function (res) {
                    _this3.list = Object(types["d" /* isArray */])(res);
                    _this3.refreshing = false;
                    _this3.$toast.clear();
                });
            }
        },
        onSelect: function onSelect(item) {
            this.active = false;
            this.assortment = item;

            this.getNewList();
        },
        onCancel: function onCancel() {
            this.active = false;
        }
    },
    filters: {
        formatPast: time["a" /* default */].formatPast
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */],
        Actionsheet: actionsheet_default.a
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2f0183cb","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/news/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views news"},[_c('navigate',{attrs:{"title":"资讯中心","position":"fixed","color":_vm.color,"backgroundColor":_vm.bgc,"shadow":_vm.shadow}}),_vm._v(" "),_c('div',{ref:"scroll",staticClass:"scroll-wrapper",on:{"scroll":_vm.onScroll}},[_c('div',{ref:"header",staticClass:"header"},[_c('div',{staticClass:"list"},_vm._l((_vm.header),function(item,index){return _c('div',{key:index,staticClass:"list-item",class:{'list-item-active': _vm.$route.query.type_id === item.id},on:{"click":function($event){_vm.goTypeList(item)}}},[_c('img',{staticClass:"list-item-icon",attrs:{"src":_vm.$route.query.type_id === item.id ? item.activeIcon : item.icon}}),_vm._v(" "),_c('span',{staticClass:"list-item-label"},[_vm._v(_vm._s(item.typeName))])])}))]),_vm._v(" "),_c('div',{staticClass:"news-content"},[(_vm.$route.query.type_name === '航道通告')?_c('div',{staticClass:"assortment border-1px-b",on:{"click":function($event){_vm.active = true}}},[_c('span',{staticStyle:{"margin-right":"0.5em"}},[_vm._v(_vm._s(_vm.assortment.name))]),_vm._v(" "),_c('mu-icon',{class:{active: _vm.active},attrs:{"value":"expand_more"}})],1):_vm._e(),_vm._v(" "),_c('mu-load-more',{ref:"content",staticStyle:{"min-height":"50vh"},attrs:{"refreshing":_vm.refreshing,"loading":_vm.loading},on:{"refresh":_vm.refresh,"load":_vm.load}},[(_vm.list.length)?_c('div',{staticClass:"list"},_vm._l((_vm.list),function(item,index){return _c('mu-ripple',{key:index,staticClass:"list-item border-1px-b",on:{"click":function($event){_vm.handlerNewItem(item, index, _vm.$route.query.type_name)}}},[(item.pic)?_c('div',{staticClass:"pic",style:({backgroundImage: ("url(" + (item.pic) + ")")})}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"new"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',[_vm._v(_vm._s(item.publisher))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm._f("formatPast")(item.createTime)))])])])])})):_c('no-success',{attrs:{"text":("暂时没有查询到《" + (_vm.$route.query.type_name || '新闻资讯') + "》列表"),"height":"60vh"}})],1)],1)]),_vm._v(" "),_c('actionsheet',{attrs:{"actions":_vm.actions,"cancel-text":"取消"},on:{"select":_vm.onSelect,"cancel":_vm.onCancel},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}}),_vm._v(" "),_c('transition',{attrs:{"name":"fade-left"}},[_c('keep-alive',[_c('router-view',{staticClass:"views"})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_views_news = (esExports);
// CONCATENATED MODULE: ./src/views/news/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("zmxg")
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
  views_news,
  selectortype_template_index_0_src_views_news,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_news = __webpack_exports__["default"] = (Component.exports);


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

/***/ }),

/***/ "OjEV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(__webpack_require__("ArwO"));

var _popup = _interopRequireDefault(__webpack_require__("/4KT"));

var _default2 = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": "van-slide-bottom"
      }
    }, [_vm.shouldRender ? _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: _vm.b({
        'withtitle': _vm.title
      })
    }, [_vm.title ? _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b('header')
    }, [_c('div', {
      domProps: {
        "textContent": _vm._s(_vm.title)
      }
    }), _c('icon', {
      attrs: {
        "name": "close"
      },
      on: {
        "click": _vm.onCancel
      }
    })], 1) : _c('ul', {
      staticClass: "van-hairline--bottom"
    }, _vm._l(_vm.actions, function (item) {
      return _c('li', {
        class: [_vm.b('item', {
          disabled: item.disabled || item.loading
        }), item.className, 'van-hairline--top'],
        on: {
          "click": function click($event) {
            $event.stopPropagation();

            _vm.onSelect(item);
          }
        }
      }, [!item.loading ? [_c('span', {
        class: _vm.b('name')
      }, [_vm._v(_vm._s(item.name))]), item.subname ? _c('span', {
        class: _vm.b('subname')
      }, [_vm._v(_vm._s(item.subname))]) : _vm._e()] : _c('loading', {
        class: _vm.b('loading'),
        attrs: {
          "size": "20px"
        }
      })], 2);
    })), _vm.cancelText ? _c('div', {
      class: [_vm.b('cancel'), 'van-hairline--top'],
      domProps: {
        "textContent": _vm._s(_vm.cancelText)
      },
      on: {
        "click": _vm.onCancel
      }
    }) : _c('div', {
      class: _vm.b('content')
    }, [_vm._t("default")], 2)]) : _vm._e()]);
  },
  name: 'actionsheet',
  mixins: [_popup.default],
  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onSelect: function onSelect(item) {
      if (!item.disabled && !item.loading) {
        item.callback && item.callback(item);
        this.$emit('select', item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
});

exports.default = _default2;

/***/ }),

/***/ "UJur":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yZCJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xL5C");
__webpack_require__("itIU");
__webpack_require__("UJur");

/***/ }),

/***/ "zmxg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=7.js.map