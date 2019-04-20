webpackJsonp([19],{

/***/ "BAan":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JPkf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/common/types/time.js
var time = __webpack_require__("NAPh");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/ship/ship-detail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var ship_detail = ({
    name: "shipDetail",
    data: function data() {
        return {
            refresh: false,
            loading: false,
            defaultUrl: "static/bg.png",
            shipData: {
                imgUrl: null,
                name: "珠江一号1206",
                mmis: "32465871",
                height: 44,
                width: 13,
                length: 27,
                draft: 3,
                longitude: "119-23.324E",
                latitude: "32-12.380N",
                headOrientation: 219,
                trailOrientation: 261,
                speed: 20,
                place: "珠江支流",
                shipType: "货船",
                status: "在航",
                createTime: 1539051258853,
                updateTime: 1539051258853
            }
        };
    },

    methods: {
        handlerLocation: function handlerLocation() {
            console.log(this.shipData.longitude);
            console.log(this.shipData.latitude);
        },
        handlerCollection: function handlerCollection() {
            console.log(this.shipData.mmis);
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    },
    filters: {
        formatDate: time["a" /* default */].formatDate
    },
    mounted: function mounted() {
        var _this = this;

        Object(personal["g" /* queryIShipDetail */])(this.$route.params.id).then(function (res) {
            _this.shipData = res;
            console.log(res);
        }).catch(function (error) {
            console.log(error);
        });
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-59e26b04","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/ship/ship-detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ship-detail"},[_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"ship-msg"},[_c('img',{staticClass:"ship-img",attrs:{"src":_vm.shipData.imgUrl == null ? _vm.defaultUrl : _vm.shipData.imgUrl,"alt":"船舶"}}),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.shipData.name))]),_vm._v(" "),_c('div',{staticClass:"msg"},[_c('div',[_vm._v("船舶类型："+_vm._s(_vm.shipData.shipType))]),_vm._v(" "),_c('div',[_vm._v("MMSI："+_vm._s(_vm.shipData.mmis))])])])]),_vm._v(" "),_c('mu-divider'),_vm._v(" "),_c('div',{staticClass:"btns"},[_c('mu-button',{staticClass:"btn",attrs:{"flat":"","color":"primary"},on:{"click":_vm.handlerLocation}},[_vm._v("定位")]),_vm._v(" "),_c('mu-button',{staticClass:"btn",attrs:{"flat":"","color":"primary"},on:{"click":_vm.handlerCollection}},[_vm._v("收藏")])],1),_vm._v(" "),_c('div',{staticClass:"basic"},[_c('div',{staticClass:"title"},[_vm._v("基本信息")]),_vm._v(" "),_c('mu-divider'),_vm._v(" "),_c('ul',[_c('li',[_vm._v("状态："+_vm._s(_vm.shipData.status === "0" ? "在航" : "停泊"))]),_vm._v(" "),_c('li',[_vm._v("船长："+_vm._s(_vm.shipData.length)+"米")]),_vm._v(" "),_c('li',[_vm._v("船宽："+_vm._s(_vm.shipData.width)+"米")]),_vm._v(" "),_c('li',[_vm._v("船高："+_vm._s(_vm.shipData.height)+"米")]),_vm._v(" "),_c('li',[_vm._v("吃水："+_vm._s(_vm.shipData.draft)+"米")]),_vm._v(" "),_c('li',[_vm._v("纬度："+_vm._s(_vm.shipData.latitude))]),_vm._v(" "),_c('li',[_vm._v("经度："+_vm._s(_vm.shipData.longitude))]),_vm._v(" "),_c('li',[_vm._v("船首向："+_vm._s(_vm.shipData.headOrientation)+"度")]),_vm._v(" "),_c('li',[_vm._v("船迹向："+_vm._s(_vm.shipData.trailOrientation)+"度")]),_vm._v(" "),_c('li',[_vm._v("航速："+_vm._s(_vm.shipData.speed)+"节")]),_vm._v(" "),_c('li',[_vm._v("船舶位置："+_vm._s(_vm.shipData.place))]),_vm._v(" "),_c('li',[_vm._v("更新时间："+_vm._s(_vm._f("formatDate")(_vm.shipData.updateTime,'YYYY-MM-DD HH:mm:ss')))])])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var ship_ship_detail = (esExports);
// CONCATENATED MODULE: ./src/views/about/ship/ship-detail.vue
function injectStyle (ssrContext) {
  __webpack_require__("BAan")
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
  ship_detail,
  ship_ship_detail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_ship_ship_detail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=19.js.map