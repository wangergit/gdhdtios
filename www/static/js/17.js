webpackJsonp([17],{

/***/ "1/1o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/number/parse-int.js
var parse_int = __webpack_require__("gBtx");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// EXTERNAL MODULE: ./src/api/sys.js
var sys = __webpack_require__("DEHg");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/sail/over.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var over = ({
    name: "sail-over",
    mixins: [mixins["g" /* routeMixins */]],
    // data() {
    //     return {
    //         info: {
    //             sn_name: '',
    //             en_name: '',
    //             sn_time: '',
    //             en_time: '',
    //             actual_distance: '',
    //             plan_distance: '',
    //             actual_time: '',
    //             plan_time: '',
    //             passed_bridge: '',
    //             passed_lock: ''
    //         }
    //     }
    // },
    computed: {
        info: function info() {
            return this.$route.query.data || {};
        }
    },
    activated: function activated() {
        var ship = this.$route.query.ship || {};

        window.Arcgis && window.Arcgis.setFinishMask("1", function (e) {
            console.log(e);
        });

        Object(sys["d" /* submitLogger */])('route', {
            shipId: ship.id,
            actualDrivingDistance: this.info.actual_distance,
            actualDrivingTime: parse_int_default()(this.info.actual_time / 60),
            planDistanceTime: parse_int_default()(this.info.plan_time / 60),
            clearanceHeight: ship.pureHeight,
            draught: ship.draft,
            startTime: Object(time["b" /* formatDate */])(this.info.sn_time, 'YYYY-MM-DD HH:mm:ss'),
            endTime: Object(time["b" /* formatDate */])(this.info.en_time, 'YYYY-MM-DD HH:mm:ss'),
            goalName: this.info.en_name,
            startName: this.info.sn_name,
            planDistance: this.info.plan_distance,
            startLatitude: this.info.startLatitude,
            startLongitude: this.info.startLongitude,
            actualLatitude: this.info.actualLatitude,
            actualLongitude: this.info.actualLongitude,
            goalLatitude: this.info.goalLatitude,
            goalLongitude: this.info.goalLongitude
        });
    },

    methods: {
        close: function close() {
            this.resetRoutes();

            window.Arcgis && window.Arcgis.clearMask();

            this.$router.replace('/');
        }
    },
    filters: {
        formatDate: time["b" /* formatDate */],
        secondToDate: time["e" /* secondToDate */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-60a5e905","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/sail/over.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sail-over paper"},[_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"location-info"},[_c('div',{staticClass:"sn"},[_vm._v(_vm._s(_vm.info.sn_name))]),_vm._v(" "),_c('div',{staticClass:"en"},[_vm._v(_vm._s(_vm.info.en_name))])]),_vm._v(" "),_c('div',{staticClass:"sail-info theme-background-default"},[_c('div',{staticClass:"sail-info-item"},[_c('div',[_c('div',{staticClass:"text"},[_vm._v("开始时间")]),_vm._v(" "),_c('div',{staticClass:"value theme-text-secondary"},[_vm._v(_vm._s(_vm._f("formatDate")(_vm.info.sn_time,'MM-DD HH:mm')))])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"text"},[_vm._v("结束时间")]),_vm._v(" "),_c('div',{staticClass:"value theme-text-secondary"},[_vm._v(_vm._s(_vm._f("formatDate")(_vm.info.en_time,'MM-DD HH:mm')))])])]),_vm._v(" "),_c('i',{staticClass:"line"}),_vm._v(" "),_c('div',{staticClass:"sail-info-item"},[_c('div',[_c('div',{staticClass:"text"},[_vm._v("实际航行里程")]),_vm._v(" "),_c('div',{staticClass:"value theme-text-secondary"},[_vm._v("\n                        "+_vm._s(_vm._f("formatDistance")(_vm.info.actual_distance))+"\n                        "+_vm._s(_vm.info.actual_distance > 1000 ? 'km' : 'm')+"\n                    ")])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"text"},[_vm._v("规划航行里程")]),_vm._v(" "),_c('div',{staticClass:"value theme-text-secondary"},[_vm._v("\n                        "+_vm._s(_vm._f("formatDistance")(_vm.info.plan_distance))+"\n                        "+_vm._s(_vm.info.plan_distance > 1000 ? 'km' : 'm')+"\n                    ")])])]),_vm._v(" "),_c('i',{staticClass:"line"}),_vm._v(" "),_c('div',{staticClass:"sail-info-item"},[_c('div',[_c('div',{staticClass:"text"},[_vm._v("实际航行时间")]),_vm._v(" "),_c('div',{staticClass:"value theme-text-secondary"},[_vm._v(_vm._s(_vm._f("secondToDate")(_vm.info.actual_time,'', true)))])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"text"},[_vm._v("规划航行时间")]),_vm._v(" "),_c('div',{staticClass:"value theme-text-secondary"},[_vm._v(_vm._s(_vm._f("secondToDate")(_vm.info.plan_time,'', true)))])])])]),_vm._v(" "),_c('div',{staticClass:"other-info border-1px-b"},[_c('img',{attrs:{"src":__webpack_require__("J4Wn")}}),_vm._v(" "),_c('p',[_vm._v("\n                经过了\n                "),_c('span',{staticClass:"theme-text-color"},[_vm._v(_vm._s(_vm.info.passed_bridge))]),_vm._v("\n                座桥梁，\n                "),_c('span',{staticClass:"theme-text-color"},[_vm._v(_vm._s(_vm.info.passed_lock))]),_vm._v("\n                个船闸\n            ")])]),_vm._v(" "),_c('div',{staticClass:"button-wrapper"},[_c('mu-button',{staticClass:"button",attrs:{"flat":""},on:{"click":_vm.close}},[_vm._v("返回首页")])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var sail_over = (esExports);
// CONCATENATED MODULE: ./src/views/sail/over.vue
function injectStyle (ssrContext) {
  __webpack_require__("ig4v")
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
  over,
  sail_over,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_sail_over = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "J4Wn":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA71pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODdmNjg4ZjAtZTEyYy1kMTQxLThiMjYtMzY3MzRiMWZlNGFmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM3ODU0Nzk2RjQ4MjExRTg4QUU5QjgzQ0ZEQUZEQUM4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM3ODU0Nzk1RjQ4MjExRTg4QUU5QjgzQ0ZEQUZEQUM4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTYyOThGRkY3N0Y0RTgxMUI5NTFFOTZGM0RC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"

/***/ }),

/***/ "ig4v":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=17.js.map