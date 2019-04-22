webpackJsonp([2],{

/***/ "1ZNP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/base/shelter/index.js + 3 modules
var shelter = __webpack_require__("ACuM");

// EXTERNAL MODULE: ./src/common/js/mixins/index.js
var mixins = __webpack_require__("HOuZ");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var common_mixins = __webpack_require__("gDrV");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/map/address-button/address-button.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var address_button = ({
    name: "map-address-button",
    mixins: [common_mixins["i" /* userMixins */], mixins["a" /* MapMixins */]],
    data: function data() {
        return {
            open: false,
            loading: false,
            list: [],
            params: {
                pageNumber: 0,
                pageSize: 10
            },
            more: {
                loading: false,
                loadedAll: false
            }
        };
    },

    props: {
        cs: {
            type: String,
            default: ''
        }
    },
    computed: extends_default()({}, Object(vuex_esm["c" /* mapGetters */])({
        novice: 'novice/novice'
    })),
    methods: {
        // 点击按钮
        handlerClick: function handlerClick() {
            var _this = this;

            if (this.novice === 1) return;

            if (this.loading) {
                return;
            }

            if (this.isLogin) {
                this.loading = true;
                this.params.pageNumber = 0;

                Object(personal["h" /* queryIAddress */])(this.params).then(function (res) {
                    if (res.content.length) {
                        _this.list = res.content;
                        _this.open = true;
                    } else {
                        _this.$toast('您还没有添加常用地址');
                    }

                    _this.loading = false;
                });
            } else {
                this.$toast('您还没有登录，不能查看常用地址');
            }
        },

        // 点击选项
        onClickItem: function onClickItem(item) {
            this.setCenter(item.longitude, item.latitude);
            this.open = false;
        },
        handlerLoad: function handlerLoad() {
            var _this2 = this;

            this.params.pageNumber++;
            this.more.loading = true;

            Object(personal["h" /* queryIAddress */])(this.params).then(function (res) {
                if (res && res.content && res.content.length) {
                    var _list;

                    (_list = _this2.list).push.apply(_list, toConsumableArray_default()(res.content));
                    _this2.more.loading = false;
                } else {
                    _this2.more.loading = false;
                    _this2.more.loadedAll = true;
                }
            });
        }
    },
    watch: {
        open: function open(value) {
            var _this3 = this;

            if (value) {
                shelter["a" /* default */].show({
                    zIndex: '12000',
                    onClose: function onClose() {
                        _this3.open = false;
                    }
                });
            } else {
                this.more.loadedAll = false;

                shelter["a" /* default */].close();
            }
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0d18dacc","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/map/address-button/address-button.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mu-ripple',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"map-address-button fc aic",attrs:{"data-mu-loading-size":"15"},on:{"click":_vm.handlerClick}},[_c('mu-icon',{attrs:{"value":":GDHDT-icons-button-address","size":"20"}}),_vm._v(" "),_c('span',{staticClass:"fz-12 lh"},[_vm._v("地址")]),_vm._v(" "),_c('mu-popover',{staticClass:"popover border-1px",class:_vm.cs,attrs:{"placement":"top","open":_vm.open}},[_c('div',{staticClass:"map-address-button-content"},[_c('mu-load-more',{attrs:{"loading":_vm.more.loading},on:{"load":_vm.handlerLoad}},_vm._l((_vm.list),function(item){return _c('div',{staticClass:"item border-1px-b",on:{"click":function($event){_vm.onClickItem(item)}}},[_c('div',{staticClass:"mr-10"},[_c('img',{staticClass:"icon",attrs:{"src":__webpack_require__("HoBz")}})]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v(_vm._s(item.name))])])}))],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var address_button_address_button = (esExports);
// CONCATENATED MODULE: ./src/components/map/address-button/address-button.vue
function injectStyle (ssrContext) {
  __webpack_require__("YhbO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d18dacc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  address_button,
  address_button_address_button,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var map_address_button_address_button = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Dpvh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HoBz":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODdmNjg4ZjAtZTEyYy1kMTQxLThiMjYtMzY3MzRiMWZlNGFmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNDMEUxMTFBRDM3MTExRTg4MzExOEZDQUFCMjQzQzQyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNDMEUxMTE5RDM3MTExRTg4MzExOEZDQUFCMjQzQzQyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZmM0M2QzMi1jYWM4LTFkNDYtYjc3Mi01YzE5MDU3YmJjMWIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODdmNjg4ZjAtZTEyYy1kMTQxLThiMjYtMzY3MzRiMWZlNGFmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3MdwVQAAA2xJREFUeNrcmlloE1EYhSepdSlptCqiEcW1mtrFFnwQRBSKS93AFZdCUYwboqIIPiv4oG++BSqIglXRigsqStGHpi644oNSxYKKCxUraFFpjec3J9AHk7kzucPM5IePJp3JnZy7/ufeBJLJpJEP0S/9Ih6PO1H+AlDH5yRAE+hxVIgDsRccAQG+30ZhG8Fv3Q8LOiSiAhzsIyId60GDEw90SshuMCjDNWmZYX4QUgVWZrk+3eS6Z4RsB2GTezaDIV4WImNjtcJ91Yr3uSZkh2JNy3O3gGIvComCNRbur9Q5VnQK2Wqx38saFgMhLwkpBRtsfG4GWO4lIdIaQ218roAzWLEXhEziim03ZoLFbgsJcxUfkUMZ0iq7OPjDdgtRTRpDHMhjwTTOUPJ3DJisoVVrQAv4BDrAC/IUvAdd4IcVIYWgBEwkMojL+YVHgdEO5WaFzL+EMqb+EmKW3oDP4B14Al6B1/z/l3QBATFW8CLy5feAWtbwYBbu1fgFvoI74LC0XEEkEinCizNgE2u+iP3W64YwxN6yCDTLYF8HFvrY5Url1wc5aP0eNSKkMw+EdIuQq+Cbj0X0gtPBWCwmU9pOp3Y3HA6Zng9IY/xb2SHmJPOl7z4SITsx+7lTk+ybojQygevygYifYB84minXauJ07OUJoJtO9JhZ0ngNLAVvPShCJqUGcFw1+20Dy0C7h0R00ryds5rGP6anfu4BER/BWnDFrh95RjFtLoqQrHcFuJWrsXoJloDbLohoZ1KY0OUQJe8/74KQu+wVWq1utQtCKlV9kaoQ8SdVLggZqepKVYU4aXOzRQn9hjYhUthwF4T0Z/fSJqTMcPaYLltM1Smk3MV1pFSnkKiLQipUurWKkDC7lluR3mfLWcgEw4HDSwsx0FDYzVQRMsVI7XXZjVZwM0cxUR1C7C6E94zUpt8cMI8e5zp9ttWQrh3IVch4iw+VBE+O4GppgNKbGpeN1PGBbAbesFjmOLNeoSJEdWa7D+rBXHA2w0ZGL0XU0bi1KJY9QEeLtJpcf0j7KQJOGWq/M/kDLoH59BpmfueRYXKsoCKkkT7+fwLEes4CJ7gpYDWk210As2ngEhk8ySGzsaWSdkhNyOG+nIvL4eUH1uBFQ9+vfHrod5rBKoqSQ6UH3PLpMCsgkC8/PPsrwADE4pxXoPwHSwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "NQLl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/common/js/mixins/index.js
var mixins = __webpack_require__("HOuZ");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var common_mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/map/location-button/location-button.vue

//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var location_button = ({
    name: "map-location-button",
    mixins: [common_mixins["a" /* appMixins */], mixins["a" /* MapMixins */]],
    data: function data() {
        return {
            loading: false
        };
    },

    computed: extends_default()({}, Object(vuex_esm["c" /* mapGetters */])({
        novice: 'novice/novice'
    })),
    methods: {
        // 点击定位
        handlerLocation: function handlerLocation() {
            var _this = this;

            if (this.novice === 0) return;

            if (!this.gps) {
                this.$toast('定位服务未开启！');
                return;
            }

            this.loading = true;

            this.getLocation().then(function (res) {
                _this.setCenter(res.x, res.y, true).then(function (res) {
                    _this.loading = false;
                }).catch(function (err) {
                    _this.loading = false;
                    _this.$toast(err);
                });
            }).catch(function (error) {
                _this.loading = false;
                _this.$toast(error);
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-14138808","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/map/location-button/location-button.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mu-ripple',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"data-mu-loading-overlay-color":"#fff","data-mu-loading-size":"15","data-mu-loading-color":"#7e8c8d","data-mu-loading-class":"load"},on:{"click":_vm.handlerLocation}},[_c('mu-icon',{attrs:{"value":":GDHDT-icons-button-position","size":"20"}}),_vm._v(" "),_c('span',{staticClass:"fz-12 lh"},[_vm._v("定位")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var location_button_location_button = (esExports);
// CONCATENATED MODULE: ./src/components/map/location-button/location-button.vue
function injectStyle (ssrContext) {
  __webpack_require__("Dpvh")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14138808"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  location_button,
  location_button_location_button,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var map_location_button_location_button = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "PGS6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/map/center-button/center-button.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var center_button = ({
    name: "mp-center-button",
    props: {
        panel: {
            type: Boolean,
            default: true
        },
        confirmText: {
            type: String,
            default: '新增'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        showCancel: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        confirm: function confirm() {
            this.$emit('confirm');
        },
        cancel: function cancel() {
            this.$emit('cancel');
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b662358","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/map/center-button/center-button.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"map-center-icon",attrs:{"data-enable":"true"},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.$emit('click', $event)}}},[(_vm.panel)?_c('div',{staticClass:"paper paper-before map-center-selected",class:{'map-center-route': !_vm.showCancel},attrs:{"data-enable":"true"}},[_c('div',{staticClass:"button",attrs:{"data-enable":"true"},on:{"click":_vm.confirm}},[_vm._v(_vm._s(_vm.confirmText))]),_vm._v(" "),(_vm.showCancel)?[_c('div',{staticClass:"line border-1px-l",attrs:{"data-enable":"true"}}),_vm._v(" "),_c('div',{staticClass:"button",attrs:{"data-enable":"true"},on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.cancelText))])]:_vm._e()],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var center_button_center_button = (esExports);
// CONCATENATED MODULE: ./src/components/map/center-button/center-button.vue
function injectStyle (ssrContext) {
  __webpack_require__("RiTZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b662358"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  center_button,
  center_button_center_button,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var map_center_button_center_button = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "RiTZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YhbO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YpZA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ck1B":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODdmNjg4ZjAtZTEyYy1kMTQxLThiMjYtMzY3MzRiMWZlNGFmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0MjBBNjY1RDM3MjExRThBMDU4QzY3NDU0NEM0N0I3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0MjBBNjY0RDM3MjExRThBMDU4QzY3NDU0NEM0N0I3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZmM0M2QzMi1jYWM4LTFkNDYtYjc3Mi01YzE5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"

/***/ }),

/***/ "iSTt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/components/map/location-button/location-button.vue + 2 modules
var location_button = __webpack_require__("NQLl");

// EXTERNAL MODULE: ./src/components/map/address-button/address-button.vue + 2 modules
var address_button = __webpack_require__("1ZNP");

// EXTERNAL MODULE: ./src/components/map/center-button/center-button.vue + 2 modules
var center_button = __webpack_require__("PGS6");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// EXTERNAL MODULE: ./src/api/navigation.js
var navigation = __webpack_require__("LNF3");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/common/js/cordova/map.js
var map = __webpack_require__("HHe6");

// EXTERNAL MODULE: ./src/types/index.js + 5 modules
var types = __webpack_require__("NaSR");

// EXTERNAL MODULE: ./src/base/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("vdH4");

// EXTERNAL MODULE: ./src/types/tips.js
var tips = __webpack_require__("O+yR");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/selection/index.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















var selection_name = 'SELECTION';

/* harmony default export */ var views_selection = ({
    name: selection_name,
    mixins: [mixins["a" /* appMixins */], mixins["g" /* routeMixins */]],
    data: function data() {
        return {
            query: '',
            list: [],
            loading: false,
            panel: true,
            showCancel: false,
            tips: tips["a" /* tips */].map_tips.map
        };
    },

    computed: {
        title: function title() {
            switch (this.$route.name) {
                case 'selection-sn':
                    return '选择起点';
                case 'selection-en':
                    return '选择终点';
                case 'selection-cl':
                    return '收藏地点';
                default:
                    return '地图选点';
            }
        },
        confirmText: function confirmText() {

            if (this.$route.name !== 'selection-cl') this.panel = true;
            return this.$route.name === 'selection-cl' ? '添加' : '确认';
        }
    },
    activated: function activated() {
        var _this = this;

        // 地图移动，刷新
        window.$types.map.selection.move = Object(types["a" /* debounce */])(this.moveEnd, 300);

        window.Arcgis && window.Arcgis.getSelectCenter(function (res) {
            _this.moveEnd();
        });
    },

    methods: {
        // 搜索
        search: function search() {
            this.moveEnd();
        },

        // 清空搜索框
        clear: function clear() {
            this.query = '';

            this.moveEnd();
        },
        getPosition: function getPosition() {
            var _$refs$center$$el = this.$refs.center.$el,
                offsetTop = _$refs$center$$el.offsetTop,
                offsetLeft = _$refs$center$$el.offsetLeft,
                offsetWidth = _$refs$center$$el.offsetWidth,
                offsetHeight = _$refs$center$$el.offsetHeight;
            var _x$y = { x: offsetLeft + offsetWidth / 2, y: offsetTop + offsetHeight },
                x = _x$y.x,
                y = _x$y.y;


            return Object(map["r" /* screenToLocation */])(x, y).then(function (point) {
                console.log('当前位置: ', point, '屏幕位置: ', { x: x, y: y });

                return promise_default.a.resolve(point);
            });
        },

        // 移动地图获取数据
        moveEnd: function moveEnd() {
            var _this2 = this;

            return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                var point;
                return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this2.loading = true;

                                _context.next = 3;
                                return _this2.getPosition();

                            case 3:
                                point = _context.sent;
                                _context.t0 = types["c" /* isArray */];
                                _context.next = 7;
                                return Object(navigation["a" /* getNavigationPoint */])({
                                    name: _this2.query,
                                    centerPoint: {
                                        latitude: point.y,
                                        longitude: point.x
                                    },
                                    distance: 3
                                });

                            case 7:
                                _context.t1 = _context.sent;
                                _this2.list = (0, _context.t0)(_context.t1);


                                _this2.loading = false;

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }))();
        },

        // 选中某一项
        selection: function selection(item) {
            var _this3 = this;

            this.handlerCancel();

            if (this.$route.name === 'selection-sn') {
                this.setRouteSn(item);
                this.$router.go(-2);
            }

            if (this.$route.name === 'selection-en') {
                this.setRouteEn(item);
                this.$router.go(-2);
            }

            if (this.$route.name === 'selection-cl') {
                item.loading = true;

                Object(personal["v" /* saveOrUpdateIAddress */])({
                    name: item.name,
                    longitude: item.longitude,
                    latitude: item.latitude
                }).then(function (res) {
                    _this3.$toast('收藏成功');

                    _this3.$router.back();
                }).catch(function (err) {
                    _this3.$toast('收藏失败');

                    item.loading = false;
                });
            }
        },

        // 筛选
        findTypes: function findTypes() {
            return vue_esm["default"].filter('formatFind').apply(undefined, arguments);
        },
        handlerConfirm: function handlerConfirm() {
            var _this4 = this;

            this.getPosition().then(function (point) {
                if (_this4.$route.name === 'selection-cl') {
                    _this4.$prompt('请给当前位置命名？', '提示', {
                        validator: function validator(value) {
                            return {
                                valid: !!value,
                                message: '请给您当前选择的位置命名！'
                            };
                        }
                    }).then(function (_ref) {
                        var result = _ref.result,
                            value = _ref.value;

                        result && _this4.selection({
                            name: value,
                            latitude: point.y,
                            longitude: point.x
                        });
                    });
                } else {
                    _this4.selection({
                        name: '地图选点位置',
                        latitude: point.y,
                        longitude: point.x
                    });
                }
            });
        },
        handlerCancel: function handlerCancel() {
            this.panel = false;
        }
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */],
        CenterButton: center_button["a" /* default */],
        LocationButton: location_button["a" /* default */],
        AddressButton: address_button["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-07281345","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/selection/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"selection",attrs:{"data-enable":"true"}},[_c('navigate',{attrs:{"title":"地图选点","position":"absolute"}}),_vm._v(" "),(_vm.$route.name === 'selection-cl')?_c('div',{staticClass:"selection-search paper flex aic shadow"},[_c('mu-text-field',{attrs:{"placeholder":"输入关键字搜索距离您最近的地址 ...","action-icon":_vm.query ? 'close' : '',"action-click":_vm.clear,"full-width":"","solo":""},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.search($event)}},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}}),_vm._v(" "),_c('mu-icon',{staticClass:"extend-click ml-10",attrs:{"value":"search"},on:{"click":_vm.search}})],1):_vm._e(),_vm._v(" "),_c('location-button',{staticClass:"map-button shadow map-location-button"}),_vm._v(" "),_c('address-button',{staticClass:"map-button shadow map-address-button",attrs:{"cs":"selection-cs"}}),_vm._v(" "),_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"place-wrapper paper border-1px-t shadow",attrs:{"data-mu-loading-size":"30"}},[(_vm.list.length)?_c('div',{staticClass:"scroll-wrapper"},[_c('mu-list',{staticClass:"place-list"},_vm._l((_vm.list),function(item,index){return _c('mu-list-item',{key:index,staticClass:"place-list-item border-1px-b"},[_c('mu-list-item-action',[_c('mu-avatar',{attrs:{"color":_vm._f("formatFind")(item.typeId,_vm.icons, 'color', 'typeId')}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:({
                                         error: __webpack_require__("ck1B"),
                                         src: _vm.findTypes(item.typeId, _vm.icons, 'value', 'typeId')
                            }),expression:"{\n                                         error: require('../../../static/image/error-place.png'),\n                                         src: findTypes(item.typeId, icons, 'value', 'typeId')\n                            }"}],staticClass:"types-icon"})])],1),_vm._v(" "),_c('mu-list-item-content',[_c('mu-list-item-title',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('mu-list-item-sub-title',[_vm._v("\n                            "+_vm._s(_vm._f("formatDistance")(item.dist,item.dist > 1000 ? 100 : 1))+"\n                            "+_vm._s(item.dist > 1000 ? '公里' : '米')+"\n                        ")])],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-button',{directives:[{name:"loading",rawName:"v-loading",value:(item.loading),expression:"item.loading"}],attrs:{"color":"primary","data-mu-loading-size":"16","disabled":item.loading,"flat":""},on:{"click":function($event){_vm.selection(item, index)}}},[_vm._v("\n                            确认\n                        ")])],1)],1)}))],1):_c('no-success',{attrs:{"text":"附近没有推荐地点","height":"100%"}})],1),_vm._v(" "),_c('center-button',{ref:"center",attrs:{"panel":_vm.panel,"showCancel":_vm.showCancel,"confirm-text":_vm.confirmText},on:{"click":function($event){_vm.panel = !_vm.panel},"confirm":_vm.handlerConfirm,"cancel":_vm.handlerCancel}}),_vm._v(" "),_c('div',{staticClass:"selection-map-tip"},[_vm._v(_vm._s(_vm.tips))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_views_selection = (esExports);
// CONCATENATED MODULE: ./src/views/selection/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("YpZA")
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
  views_selection,
  selectortype_template_index_0_src_views_selection,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_selection = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=2.js.map