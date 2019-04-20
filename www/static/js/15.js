webpackJsonp([15],{

/***/ "GF2Y":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZWik":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/number/parse-int.js
var parse_int = __webpack_require__("gBtx");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// EXTERNAL MODULE: ./src/components/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("amha");

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-cell/index.js
var swipe_cell = __webpack_require__("BTmN");
var swipe_cell_default = /*#__PURE__*/__webpack_require__.n(swipe_cell);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-cell/style/index.js
var style = __webpack_require__("9xn2");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/navigation/history.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var navigation_history = ({
    name: "navigation-history",
    mixins: [mixins["g" /* routeMixins */]],
    computed: {
        routes: function routes() {
            return this.history.map(function (item) {
                var route = void 0;
                try {
                    route = JSON.parse(item);
                } catch (e) {
                    console.log(e);
                    route = {
                        sn: {},
                        en: {}
                    };
                }

                return route;
            });
        }
    },
    methods: {
        handlerItem: function handlerItem(item) {
            this.$emit('change', item);
        },
        handlerClear: function handlerClear() {
            this.clearRouteHistory();
        },
        deleteRoute: function deleteRoute(item) {
            this.deleteRouteHistory(item);
        }
    },
    components: {
        SwipeCell: swipe_cell_default.a,
        NoSuccess: no_success["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6d58463d","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/navigation/history.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation-routes-history"},[(_vm.routes.length)?_c('div',{staticClass:"scroll-wrapper"},[_c('mu-list',_vm._l((_vm.routes),function(item,index){return _c('swipe-cell',{key:index,attrs:{"right-width":88}},[_c('mu-list-item',{staticClass:"border-1px-b",nativeOn:{"click":function($event){_vm.handlerItem(item)}}},[_c('mu-list-item-content',{staticStyle:{"display":"flex","align-items":"center","line-height":"1.5em"}},[_c('span',{staticClass:"no-wrap",staticStyle:{"display":"inline-block","width":"45%","max-height":"3em","color":"#2e7bff"}},[_vm._v(_vm._s(item.sn.name))]),_vm._v(" "),_c('span',{staticStyle:{"margin":"0 0.5em"}},[_vm._v("-")]),_vm._v(" "),_c('span',{staticClass:"no-wrap",staticStyle:{"display":"inline-block","width":"45%","max-height":"3em","color":"#2e7bff"}},[_vm._v(_vm._s(item.en.name))])]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-button',{attrs:{"color":"#2E7BFF","icon":""}},[_c('mu-icon',{attrs:{"size":"16","value":"near_me"}})],1)],1)],1),_vm._v(" "),_c('div',{staticStyle:{"width":"88px","height":"100%"},attrs:{"slot":"right"},slot:"right"},[_c('mu-button',{staticStyle:{"height":"100%","width":"100%","color":"#fff","background-color":"#f44336"},attrs:{"flat":""},on:{"click":function($event){_vm.deleteRoute(item)}}},[_vm._v("删除\n                    ")])],1)],1)})),_vm._v(" "),_c('div',{staticClass:"clear-button-wrapper"},[_c('mu-button',{staticClass:"button",attrs:{"flat":""},on:{"click":_vm.handlerClear}},[_vm._v("清空历史纪录")])],1)],1):_c('no-success',{attrs:{"text":"还没有留下历史数据"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_navigation_history = (esExports);
// CONCATENATED MODULE: ./src/views/navigation/history.vue
function injectStyle (ssrContext) {
  __webpack_require__("uE2d")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d58463d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  navigation_history,
  views_navigation_history,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_navigation_history = (Component.exports);

// EXTERNAL MODULE: ./src/common/js/cordova/map.js
var map = __webpack_require__("HHe6");

// EXTERNAL MODULE: ./src/api/navigation.js
var navigation = __webpack_require__("LNF3");

// EXTERNAL MODULE: ./src/types/index.js + 3 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/navigation/index.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var views_navigation = ({
    name: "navigation",
    mixins: [mixins["i" /* userMixins */], mixins["g" /* routeMixins */]],
    data: function data() {
        return {
            id: '',
            routes: [],
            reverseIcon: 'static/icon/navigation_line.png',
            speed: 0,
            draft: 0,
            pureHeight: 0
        };
    },

    computed: {
        visible: function visible() {
            return !(this.sn.name && this.en.name);
        }
    },
    created: function created() {
        var _this = this;

        var plan = Object(types["b" /* debounce */])(function () {
            _this.planRoutes();
        }, 500);

        this.$watch('sail', plan, { deep: true });
    },
    activated: function activated() {
        if (stringify_default()(this.$route.query) === '{}') {
            this.speed = 0;
            this.draft = 0;
            this.pureHeight = 0;

            return;
        }

        this.speed = this.$route.query.speed;
        this.draft = this.$route.query.draft;
        this.pureHeight = this.$route.query.pureHeight;

        if (!this.sail) {
            this.routes = [];
        }
    },

    methods: {
        // 更改助航线路
        change: function change(item) {
            this.setRouteSn(item.sn);
            this.setRouteEn(item.en);

            var route = stringify_default()({
                sn: item.sn,
                en: item.en
            });

            this.saveRouteHistory(route);
        },

        // 点击返回
        handlerBack: function handlerBack() {
            window.Arcgis && window.Arcgis.cancelPathPlanning('');

            this.resetRoutes();

            this.$router.back();
        },

        // 点击进入助航地点选择
        handlerRoute: function handlerRoute(name) {
            this.$router.push({ name: name });
        },

        // 点击切换
        reverse: function reverse() {
            this.reverseRoutes();
        },

        // 点击切换当前方案 &*
        handlerToggleNavigation: function handlerToggleNavigation(item, index) {
            var _this2 = this;

            this.$toast({
                position: 'center',
                type: 'loading',
                message: '请等待 ...',
                duration: 0
            });

            window.Arcgis && window.Arcgis.changeRoute(parse_int_default()(item.attributes.ObjectID), function (res) {
                _this2.id = item.attributes.ObjectID;

                _this2.$toast.clear();

                console.log('%c—————— 切换路线方案 ——————', 'color: #2196f3', item);
            });
        },

        // 点击开始助航
        start: function start() {
            var _this3 = this;

            if (!this.isLogin) {
                this.$toast({
                    type: 'fail',
                    position: 'center',
                    message: '您需要登录才能进行助航！'
                });

                return;
            }

            this.$toast({
                type: 'loading',
                position: 'center',
                message: '正在规划线路, 请等待 ...',
                duration: 0
            });

            var route = stringify_default()({
                sn: this.sn,
                en: this.en
            });

            this.saveRouteHistory(route);

            this.routes = [];

            window.Arcgis && window.Arcgis.realGuide(this.id, function (res) {
                try {
                    res = JSON.parse(res);
                } catch (e) {
                    console.log(e);

                    res = {
                        speed: 0,
                        polar: 0,
                        distance: 0,
                        word: ''
                    };
                }

                _this3.$toast.clear();

                _this3.$router.replace({
                    name: 'sail',
                    params: {
                        speed: res.speed,
                        polar: res.polar,
                        distance: res.distance,
                        word: res.word
                    }
                });
            }, function (err) {
                _this3.$toast.clear();
            });
        },
        guide: function guide() {
            var _this4 = this;

            this.$toast({
                type: 'loading',
                position: 'center',
                message: '正在规划线路, 请等待 ...',
                duration: 0
            });

            var route = stringify_default()({
                sn: this.sn,
                en: this.en
            });

            this.saveRouteHistory(route);

            this.routes = [];

            window.Arcgis && window.Arcgis.navigationStarting(this.id, function (res) {
                try {
                    res = JSON.parse(res);
                } catch (e) {
                    console.log(e);

                    res = {
                        speed: 0,
                        polar: 0,
                        distance: 0,
                        word: ''
                    };
                }

                _this4.$toast.clear();

                _this4.$router.replace({
                    name: 'sail',
                    params: {
                        speed: res.speed,
                        polar: res.polar,
                        distance: res.distance,
                        word: res.word
                    }
                });
            }, function (err) {
                _this4.$toast.clear();
            });
        },

        // 路线规划
        planRoutes: function planRoutes() {
            var _this5 = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                var sn, en, point;
                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                sn = _this5.sn, en = _this5.en, point = void 0;

                                // 如果没有添加任何线路，则不进行线路规划

                                if (!(!sn.name || !en.name)) {
                                    _context.next = 3;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 3:
                                if (!(sn.name === '我的位置')) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 6;
                                return Object(map["i" /* getMapLocation */])();

                            case 6:
                                point = _context.sent;


                                sn = assign_default()({}, sn, { longitude: point.x, latitude: point.y });

                            case 8:
                                if (!(en.name === '我的位置')) {
                                    _context.next = 13;
                                    break;
                                }

                                _context.next = 11;
                                return Object(map["i" /* getMapLocation */])();

                            case 11:
                                point = _context.sent;


                                en = assign_default()({}, en, { longitude: point.x, latitude: point.y });

                            case 13:

                                console.log("\u8D77\u59CB\u70B9\u4F4D\u4FE1\u606F: ", sn);
                                console.log("\u7ED3\u675F\u70B9\u4F4D\u4FE1\u606F: ", en);

                                // 获取线路
                                _this5.getRoutes(sn, en);

                            case 16:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this5);
            }))();
        },

        // 获取路线
        getRoutes: function getRoutes(sn, en) {
            var _this6 = this;

            var data = {
                startCoordinate: {
                    longitude: sn.longitude,
                    latitude: sn.latitude
                },
                goalCoordinate: {
                    longitude: en.longitude,
                    latitude: en.latitude
                },
                vehicle: {
                    vehicleID: "Passenger",
                    deadWeightTonnage: 0,
                    lengthOverall: 0,
                    mouldedBreadth: 0,
                    mouldedDepth: 0,
                    loadedDraft: this.draft,
                    freeboardHeight: this.pureHeight
                },
                averageSpeed: this.speed
            };

            console.log(data, '正在获取助航线路 ...');

            Object(navigation["b" /* getNavigationRoute */])(data).then(function (res) {
                if (!res) return;

                _this6.routes = res.routes.features;

                _this6.id = _this6.routes[0].attributes.ObjectID;

                window.Arcgis && window.Arcgis.pathPlanning(res, [sn, en], console.log);
            }).catch(console.log);
        }
    },
    filters: {
        secondToDate: time["d" /* secondToDate */]
    },
    components: {
        routes: src_views_navigation_history
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-699e1c2c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/navigation/index.vue
var navigation_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views navigation",attrs:{"data-enable":"true"}},[_c('div',{staticClass:"routes border-1px-b shadow"},[_c('div',{staticClass:"routes-back",on:{"click":_vm.handlerBack}},[_c('mu-icon',{attrs:{"value":"navigate_before","size":"30"}})],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"route-group"},[_c('div',{staticClass:"route sn no-wrap",on:{"click":function($event){_vm.handlerRoute('route-sn')}}},[_c('span',{class:{p: !_vm.sn.name}},[_vm._v("\n                    "+_vm._s(_vm.sn.name || _vm.sn.p)+"\n                ")])]),_vm._v(" "),_c('div',{staticClass:"route en no-wrap",on:{"click":function($event){_vm.handlerRoute('route-en')}}},[_c('span',{class:{p: !_vm.en.name}},[_vm._v("\n                    "+_vm._s(_vm.en.name || _vm.en.p)+"\n                ")])]),_vm._v(" "),_c('img',{staticClass:"route-reverse",attrs:{"src":_vm.reverseIcon},on:{"click":_vm.reverse}})])]),_vm._v(" "),_c('transition',{attrs:{"name":"views-down"}},[(_vm.visible)?_c('div',{staticClass:"routes-wrapper"},[_c('routes',{on:{"change":_vm.change}})],1):_vm._e()]),_vm._v(" "),_c('transition',{attrs:{"name":"up-move"}},[(_vm.routes.length > 0)?_c('div',{staticClass:"navigation-panel"},[_c('div',{staticClass:"navigation-panel-info"},_vm._l((_vm.routes),function(item,index){return _c('div',{staticClass:"item",class:{selected: _vm.id === item.attributes.ObjectID},on:{"click":function($event){_vm.handlerToggleNavigation(item)}}},[_c('div',{staticClass:"type"},[_vm._v(_vm._s(index === 0 ? '推荐航线' : '备选航线'))]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"left"},[_vm._v("\n                            "+_vm._s(_vm._f("formatDistance")(item.attributes.Shape_Length))),_c('br'),_vm._v("\n                            "+_vm._s(item.attributes.Shape_Length > 1000 ? '公里' : '米')+"\n                        ")]),_vm._v(" "),_c('div',{staticClass:"right"},[_c('p',{staticClass:"channel"},[_vm._v(_vm._s(item.attributes.Bridge_Number)+" 座桥梁")]),_vm._v(" "),_c('p',{staticClass:"channel"},[_vm._v(_vm._s(item.attributes.ShipLock_Number)+" 座船闸")]),_vm._v(" "),_c('p',{staticClass:"time"},[_vm._v("\n                                "+_vm._s(_vm._f("secondToDate")(item.attributes.Total_TravelTime * 60))+"\n                            ")])])])])})),_vm._v(" "),_c('div',{staticClass:"navigation-panel-button"},[_c('mu-button',{staticClass:"button",attrs:{"round":"","flat":""},on:{"click":_vm.guide}},[_vm._v("模拟助航")]),_vm._v(" "),_c('mu-button',{staticClass:"button",attrs:{"round":"","flat":""},on:{"click":_vm.start}},[_vm._v("开始助航")])],1)]):_vm._e()]),_vm._v(" "),_c('transition',{attrs:{"name":"views-left"}},[_c('keep-alive',[_c('router-view',{staticClass:"views"})],1)],1)],1)}
var navigation_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"point-group"},[_c('i',{staticClass:"point sn"}),_vm._v(" "),_c('i',{staticClass:"point"}),_vm._v(" "),_c('i',{staticClass:"point"}),_vm._v(" "),_c('i',{staticClass:"point"}),_vm._v(" "),_c('i',{staticClass:"point en"})])}]
var navigation_esExports = { render: navigation_render, staticRenderFns: navigation_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_views_navigation = (navigation_esExports);
// CONCATENATED MODULE: ./src/views/navigation/index.vue
function navigation_injectStyle (ssrContext) {
  __webpack_require__("GF2Y")
}
var navigation_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var navigation___vue_template_functional__ = false
/* styles */
var navigation___vue_styles__ = navigation_injectStyle
/* scopeId */
var navigation___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var navigation___vue_module_identifier__ = null
var navigation_Component = navigation_normalizeComponent(
  views_navigation,
  selectortype_template_index_0_src_views_navigation,
  navigation___vue_template_functional__,
  navigation___vue_styles__,
  navigation___vue_scopeId__,
  navigation___vue_module_identifier__
)

/* harmony default export */ var src_views_navigation = __webpack_exports__["default"] = (navigation_Component.exports);


/***/ }),

/***/ "uE2d":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=15.js.map