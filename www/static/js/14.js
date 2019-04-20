webpackJsonp([14],{

/***/ "AUk/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BPou":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/number/parse-int.js
var parse_int = __webpack_require__("gBtx");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

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

            this.cacheView = true;
            this.resetSpeech();
            this.resetText();
            this.resetBrightness();
            this.resetTheme();
            this.resetSpeechGender();
            this.resetLayers();
            this.resetMaps();
            this.resetRoutes();
            this.clearRouteHistory();
            this.clearRouteSearchHistory();
            this.clearSearchHistory();

            Object(search["a" /* getParams */])('imgPrefixPath').then(function (res) {
                Object(app["E" /* setResources */])(res);

                vue_esm["default"].prototype.$images = "" + res;

                console.log("%c\u56FE\u7247\u8D44\u6E90\u670D\u52A1\u5668\u5730\u5740\uFF1A " + res, 'color: #66ccff');
            });

            var _document$documentEle = document.documentElement,
                offsetWidth = _document$documentEle.offsetWidth,
                offsetHeight = _document$documentEle.offsetHeight;

            this.setScreen({ width: offsetWidth, height: offsetHeight });

            document.documentElement.addEventListener('size', function () {
                var _document$documentEle2 = document.documentElement,
                    offsetWidth = _document$documentEle2.offsetWidth,
                    offsetHeight = _document$documentEle2.offsetHeight;

                _this.setScreen({ width: offsetWidth, height: offsetHeight });
            });

            cordova["a" /* app */].version().then(function (res) {
                _this.setVersion(res);
            });

            /***
             * 初始化
             */
            document.documentElement.addEventListener('touchstart', this.touchStart);
            document.documentElement.addEventListener('touchend', this.touchEnd);

            // 是否打开 GPS & 网络
            window.Arcgis && window.Arcgis.registerNetReceiver();
            window.Arcgis && window.Arcgis.observeWifiSwitch();

            // 路地图
            Object(map["d" /* changeTieldLayerVisible */])(this.landMap);
            // 电子航道图
            Object(map["a" /* changeChartLayerVisible */])(this.channelMap);

            // 图层点
            var layers = this.layers.map(function (item, index) {
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

            this.setLayers(layers);

            // 主题
            Object(map["c" /* changeTheme */])(this.theme);

            this.setModeTiming();

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

            Object(map["e" /* clearHistory */])();

            var timer = setInterval(function (time) {
                _this.progress += parse_int_default()(Math.random() * 500) / 100;

                if (_this.progress >= 100) {
                    _this.cacheView = false;

                    _this.progress = 0;

                    _this.getCacheSize();

                    clearInterval(timer);
                }
            }, 100);
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6ca332d3","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/setter/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"setter"},[_c('navigate',{attrs:{"title":"设置","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper",staticStyle:{"padding-top":"15px"}},[_c('mu-list',{staticStyle:{"background-color":"#fff","padding":"0"}},[_c('mu-list-item',{staticClass:"list-item border-1px-b",attrs:{"to":"/about/setter/brightness","button":""}},[_c('mu-list-item-title',[_vm._v("屏幕亮度")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right","color":"rgba(0,0,0,.12)"}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item border-1px-b",attrs:{"to":"/about/setter/mode","button":""}},[_c('mu-list-item-title',[_vm._v("模式切换")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right","color":"rgba(0,0,0,.12)"}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item",attrs:{"to":"/about/setter/notice","button":""}},[_c('mu-list-item-title',[_vm._v("消息通知")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right","color":"rgba(0,0,0,.12)"}})],1)],1)],1),_vm._v(" "),_c('div',{staticStyle:{"height":"15px"}}),_vm._v(" "),_c('mu-list',{staticStyle:{"background-color":"#fff","padding":"0"}},[_c('mu-list-item',{staticClass:"list-item border-1px-b",attrs:{"to":"/about/setter/update","button":""}},[_c('mu-list-item-title',[_vm._v("检查更新")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right","color":"rgba(0,0,0,.12)"}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item",attrs:{"button":""},on:{"click":_vm._initAppDefault}},[_c('mu-list-item-title',[_vm._v("清除缓存"),_c('span',{staticClass:"cache-size"},[_vm._v(_vm._s(_vm.cacheSize)+"M")])]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right","color":"rgba(0,0,0,.12)"}})],1)],1)],1),_vm._v(" "),_c('div',{staticStyle:{"height":"15px"}}),_vm._v(" "),_c('mu-list',{staticStyle:{"background-color":"#fff","padding":"0"}},[_c('mu-list-item',{staticClass:"list-item border-1px-b",attrs:{"to":"/about/setter/related","button":""}},[_c('mu-list-item-title',[_vm._v("关于")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right","color":"rgba(0,0,0,.12)"}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item",attrs:{"to":"/about/setter/help","button":""}},[_c('mu-list-item-title',[_vm._v("功能介绍")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right","color":"rgba(0,0,0,.12)"}})],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"list-item border-1px-b",attrs:{"to":"/controller","button":""},on:{"click":_vm.guideClick}},[_c('mu-list-item-title',[_vm._v("新手指引")]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right","color":"rgba(0,0,0,.12)"}})],1)],1)],1)],1),_vm._v(" "),_c('mu-dialog',{attrs:{"open":_vm.cacheView,"width":"80%","dialog-class":"dialog-style","esc-press-close":false,"overlay-close":false,"lock-scroll":""},on:{"close":_vm.dialogClose}},[_c('img',{staticStyle:{"display":"block","width":"90px","height":"90px","margin":"0 auto 10px"},attrs:{"src":_vm.cacheIcon}}),_vm._v(" "),_c('m-progress',{attrs:{"progress":_vm.progress}}),_vm._v(" "),_c('p',{staticStyle:{"padding-top":"20px","text-align":"center"}},[_vm._v("清除缓存中 ...")])],1),_vm._v(" "),_c('transition',{attrs:{"name":"views-left"}},[_c('keep-alive',[_c('router-view',{staticClass:"views"})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var about_setter = (esExports);
// CONCATENATED MODULE: ./src/views/about/setter/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("AUk/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6ca332d3"
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

/***/ "L9LW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PYT0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/number/parse-int.js
var parse_int = __webpack_require__("gBtx");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/base/progress/progress.vue

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var progress = ({
    name: "m-progress",
    props: {
        progress: {
            type: Number,
            default: 0
        },
        size: {
            type: [Number, String],
            default: 20
        },
        max: {
            type: Number,
            default: 100
        }
    },
    computed: {
        progressText: function progressText() {
            return parse_int_default()(this.progress / this.max * 10000) / 100 + "%";
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-02261b9b","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/base/progress/progress.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-wrapper"},[_c('mu-linear-progress',{staticStyle:{"border-radius":"100px"},attrs:{"mode":"determinate","value":_vm.progress,"max":_vm.max,"size":_vm.size}}),_vm._v(" "),_c('span',{staticClass:"progress-text"},[_vm._v(_vm._s(_vm.progressText))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var progress_progress = (esExports);
// CONCATENATED MODULE: ./src/base/progress/progress.vue
function injectStyle (ssrContext) {
  __webpack_require__("L9LW")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-02261b9b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  progress,
  progress_progress,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var base_progress_progress = __webpack_exports__["a"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=14.js.map