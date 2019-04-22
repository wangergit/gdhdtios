webpackJsonp([48],{

/***/ "Q+y0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/setter/help.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var help = ({
    name: "help",
    data: function data() {
        return {
            open: '',
            helpList: [{
                title: "图层控制",
                content: "以地图引擎为基础。主程序页面绘制航道地图.支持对电子航道图进行放大和缩小查看不同比例尺下的展示信息；支持平移或上下滑动查看更多电子航道图展示信息。为其它通航要素或船舶在电子航道图进行图标化展示提供地图服务。"
            }, {
                title: "综合查询",
                content: "在电子航道图上综合查询栏输入船舶名称或船舶MMSI关键字信息进行查询，查看船舶的基本信息（船名、MMSI、船长、船宽、船舶类型等）和动态信息（船舶的位置、航向、航速、更新时间等）。"
            }, {
                title: "定位和导航",
                content: "通过移动端设备定位功能获取当前定位位置，并在电子航道图上进行可视化展示，可以查看当前定位所属航道信息、临近水位站信息、天气情况和其它通航环境信息。还可以查看当前定位周边的船舶信息，选中周边船舶可以查看定位与船舶的距离和方向。"
            }, {
                title: "航线规划",
                content: "可以根据常用地名或输入经纬度坐标作为起止点，结合起止点间的航道等级、航道里程、桥梁实时净高和其他通航要素，计算出不同条件下的航行规划，根据船方使用习惯向船方推荐最佳航线。"
            }, {
                title: "助航消息服务",
                content: "通过广东航道通移动APP将助航消息推送至船方，助航消息包含了航标信息、桥梁信息、天气信息、通航公告以及航道尺度信息，用户可以点击查看助航消息详情，通过助航消息及时了解各类通航情况，方便船舶实现安全航行目的。"
            }, {
                title: "标注",
                content: "在电子航道图上实现用户手动标注功能，支持对标注进行共享标注操作，标注共享时所有人均可以在电子航道图上查看该标注。在电子航道图上实现用户手动标注功能，支持对标注进行本地标注操作，本地标注时仅供标注人在电子航道图上查看该标注。"
            }, {
                title: "离线地图",
                content: "用户可在网络良好的情况下下载航道地图瓦片存储到本地存储卡。方便用户在没有网络的情况下直接读取本地存储航道瓦片地图.绘制到主页面航道图页面。仍可以浏览航道地图和从本地数据库读取的（航标、船舶、水道、码头、标注点）图例和基本信息。"
            }, {
                title: "资讯信息",
                content: "展示服务后端抓取有关航道最新的资讯信息,包含（航道通告、海运新闻、海事新闻、港口新闻、船员动态、调度计划、水情气象）和有关航道方面的新闻和动态。用户上拉资讯信息列表查看更多历史资讯消息.下拉资讯信息列表查看广东航道发布的最新航道资讯信息。制定定时任务每四小抓取一次航道资讯信息。保证资讯信息同广东航道官网信息同步更新。"
            }, {
                title: "动态圈",
                content: "展示所有用户发表的动态圈信息,根据发布时选择的动态（动态、货源、待运、求职、招聘）类型不同显示相对应类型动态信息。用户发布动态圈信息时可选择发布文本信息、动态图片（最多9张）、录制小视频（最长15s）、动态表情包和共享当前地理位置。用户在动态圈列表可以对已发布动态圈信息进行点赞和评论。同时发布者可以对评论的帖子进行回复。实时展示回复帖子内容和回复时间。"
            }]
        };
    },

    methods: {
        toggle: function toggle(index) {
            this.open = index;
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-09d5dd52","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/setter/help.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"help"},[_c('navigate',{attrs:{"title":"功能介绍","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-list',{staticClass:"list",attrs:{"toggle-nested":""}},[_vm._l((_vm.helpList),function(item,index){return [_c('mu-list-item',{class:{'border-1px-b': index < _vm.helpList.length - 1},attrs:{"ripple":false,"open":_vm.open === index,"nested":"","button":""},on:{"toggle-nested":function($event){_vm.toggle(index)}}},[_c('mu-list-item-title',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{staticClass:"toggle-icon",attrs:{"size":"24","value":"keyboard_arrow_down"}})],1),_vm._v(" "),_c('div',{staticClass:"nested",attrs:{"slot":"nested"},slot:"nested"},[_vm._v("\n                        "+_vm._s(item.content)+"\n                    ")])],1)]})],2)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setter_help = (esExports);
// CONCATENATED MODULE: ./src/views/about/setter/help.vue
function injectStyle (ssrContext) {
  __webpack_require__("SU71")
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
  help,
  setter_help,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_setter_help = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "SU71":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=48.js.map