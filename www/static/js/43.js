webpackJsonp([43],{

/***/ "BPou":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/number/parse-int.js
var parse_int = __webpack_require__("gBtx");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/base/progress/progress.vue + 2 modules
var progress = __webpack_require__("PYT0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// EXTERNAL MODULE: ./src/api/sys.js
var sys = __webpack_require__("DEHg");

// EXTERNAL MODULE: ./src/api/search.js
var search = __webpack_require__("8stH");

// EXTERNAL MODULE: ./src/common/js/cordova/index.js
var cordova = __webpack_require__("HM3N");

// EXTERNAL MODULE: ./src/common/js/cordova/map.js
var map = __webpack_require__("HHe6");

// EXTERNAL MODULE: ./src/storage/app.js
var app = __webpack_require__("EzHk");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/setter/index.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var setter = ({
    name: "setter",
    mixins: [mixins["a" /* appMixins */], mixins["b" /* elementMixins */], mixins["c" /* layerMixins */], mixins["d" /* mapMixins */], mixins["g" /* routeMixins */], mixins["h" /* searchMixins */], mixins["i" /* userMixins */]],
    data: function data() {
        return {
            cacheView: false,
            progress: 0,
            cacheIcon: 'static/image/Spin.gif',
            cacheSize: 0
        };
    },
    activated: function activated() {
        this.progress = 0;

        this.getCacheSize();
    },

    methods: extends_default()({
        _initAppDefault: function _initAppDefault() {
            var _this = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                var resources, _document$documentEle, offsetWidth, offsetHeight, layers, timer;

                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (_this.cacheSize) {
                                    _context.next = 3;
                                    break;
                                }

                                _this.$alert('缓存已为您清理完毕。', '清除缓存');

                                return _context.abrupt("return");

                            case 3:

                                _this.cacheView = true;

                                _context.next = 6;
                                return Object(map["e" /* clearHistory */])();

                            case 6:

                                _this.resetSpeech();
                                _this.resetText();
                                _this.resetBrightness();
                                _this.resetSpeechGender();
                                _this.resetLayers();
                                _this.resetMaps();
                                _this.resetRoutes();
                                _this.clearRouteHistory();
                                _this.clearRouteSearchHistory();
                                _this.clearSearchHistory();
                                _this.resetTheme();

                                _context.next = 19;
                                return Object(search["a" /* getParams */])('imgPrefixPath');

                            case 19:
                                resources = _context.sent;


                                console.log("%c\u56FE\u7247\u8D44\u6E90\u670D\u52A1\u5668\u5730\u5740\uFF1A " + resources, 'color: #66ccff');

                                Object(app["E" /* setResources */])(resources);

                                vue_esm["default"].prototype.$images = "" + resources;

                                _document$documentEle = document.documentElement, offsetWidth = _document$documentEle.offsetWidth, offsetHeight = _document$documentEle.offsetHeight;


                                _this.setScreen({ width: offsetWidth, height: offsetHeight });

                                document.documentElement.addEventListener('size', function () {
                                    var _document$documentEle2 = document.documentElement,
                                        offsetWidth = _document$documentEle2.offsetWidth,
                                        offsetHeight = _document$documentEle2.offsetHeight;


                                    _this.setScreen({ width: offsetWidth, height: offsetHeight });
                                });

                                _context.t0 = _this;
                                _context.next = 29;
                                return cordova["a" /* app */].version();

                            case 29:
                                _context.t1 = _context.sent;

                                _context.t0.setVersion.call(_context.t0, _context.t1);

                                /***
                                 * 初始化
                                 */
                                document.documentElement.addEventListener('touchstart', _this.touchStart);
                                document.documentElement.addEventListener('touchend', _this.touchEnd);

                                // // 是否打开 GPS & 网络
                                // window.Arcgis && window.Arcgis.registerNetReceiver()
                                // window.Arcgis && window.Arcgis.observeWifiSwitch()

                                // 路地图
                                Object(map["d" /* changeTieldLayerVisible */])(_this.landMap);
                                // 电子航道图
                                Object(map["a" /* changeChartLayerVisible */])(_this.channelMap);

                                // 图层点
                                layers = _this.layers.map(function (item, index) {
                                    if (item.id === "013006") {
                                        Object(map["b" /* changeMapFramesServerState */])(item.status);
                                    } else if (item.status) {
                                        Object(map["E" /* showLayers */])([item.id]);
                                    } else {
                                        Object(map["m" /* hideLayers */])([item.id]);
                                    }

                                    return assign_default()({}, item, {
                                        icon: _this.LAYERS[index].icon,
                                        id: _this.LAYERS[index].id,
                                        name: _this.LAYERS[index].name,
                                        color: _this.LAYERS[index].color
                                    });
                                });


                                _this.setLayers(layers);

                                // 主题
                                Object(map["c" /* changeTheme */])(_this.theme);

                                _this.setModeTiming();

                                // 搜索结果图标
                                Object(sys["c" /* getSetters */])({ key: 'SEARCH_RESULT_ICO' }).then(function (res) {
                                    Array.isArray(res) && res.length > 0 && _this.saveSearchIcons(res);
                                });

                                // 搜索类型图标
                                Object(sys["c" /* getSetters */])({ key: 'SEARCH_TYPE_ICO' }).then(function (res) {
                                    Array.isArray(res) && res.length > 0 && _this.setIcons(res);
                                });

                                // 搜索类型列表
                                Object(sys["c" /* getSetters */])({ key: 'SEARCH_TYPE_LIST' }).then(function (res) {
                                    Array.isArray(res) && res.length > 0 && _this.saveSearchList(res);
                                });

                                timer = setInterval(function () {
                                    _this.progress += parse_int_default()(Math.random() * 500) / 100;

                                    if (_this.progress >= 100) {
                                        _this.cacheView = false;

                                        _this.progress = 0;

                                        _this.getCacheSize();

                                        clearInterval(timer);
                                    }
                                }, 100);

                            case 43:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },

        // 关闭弹出层
        dialogClose: function dialogClose() {
            clearInterval(this.timer);
        },
        guideClick: function guideClick() {
            this.resetNovice();

            this.$router.push('/');
        },
        getCacheSize: function getCacheSize() {
            var _this2 = this;

            Object(map["f" /* getAppCache */])().then(function (res) {
                var size = void 0;
                try {
                    size = JSON.parse(res.toString()).cachesize;
                } catch (e) {
                    size = 0;
                }

                _this2.cacheSize = (Math.round(size / 1024 / 1024 * 100) / 100).toFixed(0);
            });
        }
    }, Object(vuex_esm["b" /* mapActions */])({
        resetNovice: 'novice/resetNovice'
    })),
    components: {
        MProgress: progress["a" /* default */],
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4f4c2f0d","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/setter/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"setter"},[_c('navigate',{attrs:{"title":"设置","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-list',[_c('mu-list-item',{staticClass:"border-1px-b",attrs:{"to":"/about/setter/brightness","button":""}},[_c('mu-list-item-title',[_vm._v("屏幕亮度")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right"}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"border-1px-b",attrs:{"to":"/about/setter/mode","button":""}},[_c('mu-list-item-title',[_vm._v("模式切换")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right"}})],1)],1),_vm._v(" "),_c('mu-list-item',{attrs:{"to":"/about/setter/notice","button":""}},[_c('mu-list-item-title',[_vm._v("消息通知")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right"}})],1)],1)],1),_vm._v(" "),_c('mu-list',[_c('mu-list-item',{staticClass:"list-item border-1px-b",attrs:{"to":"/about/setter/update","button":""}},[_c('mu-list-item-title',[_vm._v("检查更新")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right"}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item",attrs:{"button":""},on:{"click":_vm._initAppDefault}},[_c('mu-list-item-title',[_vm._v("清除缓存"),_c('span',{staticClass:"cache-size"},[_vm._v(_vm._s(_vm.cacheSize)+"M")])]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right"}})],1)],1)],1),_vm._v(" "),_c('mu-list',[_c('mu-list-item',{staticClass:"list-item border-1px-b",attrs:{"to":"/about/setter/related","button":""}},[_c('mu-list-item-title',[_vm._v("关于")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right"}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item border-1px-b",attrs:{"to":"/about/setter/help","button":""}},[_c('mu-list-item-title',[_vm._v("功能介绍")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right"}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item",attrs:{"to":"/controller","button":""},on:{"click":_vm.guideClick}},[_c('mu-list-item-title',[_vm._v("新手指引")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right"}})],1)],1)],1)],1),_vm._v(" "),_c('mu-dialog',{attrs:{"open":_vm.cacheView,"width":"80%","dialog-class":"dialog-style","esc-press-close":false,"overlay-close":false,"lock-scroll":""},on:{"close":_vm.dialogClose}},[_c('img',{staticStyle:{"display":"block","width":"90px","height":"90px","margin":"0 auto 10px"},attrs:{"src":_vm.cacheIcon}}),_vm._v(" "),_c('m-progress',{attrs:{"progress":_vm.progress}}),_vm._v(" "),_c('p',{staticStyle:{"padding-top":"20px","text-align":"center"}},[_vm._v("清除缓存中 ...")])],1),_vm._v(" "),_c('transition',{attrs:{"name":"views-left"}},[_c('keep-alive',[_c('router-view',{staticClass:"views"})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var about_setter = (esExports);
// CONCATENATED MODULE: ./src/views/about/setter/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("EUNk")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f4c2f0d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  setter,
  about_setter,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_about_setter = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "EUNk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=43.js.map