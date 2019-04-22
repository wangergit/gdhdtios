webpackJsonp([41],{

/***/ "5Ksj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MI+4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/number/parse-int.js
var parse_int = __webpack_require__("gBtx");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/base/progress/progress.vue + 2 modules
var progress = __webpack_require__("PYT0");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// EXTERNAL MODULE: ./src/api/sys.js
var sys = __webpack_require__("DEHg");

// EXTERNAL MODULE: ./src/common/js/cordova/map.js
var map = __webpack_require__("HHe6");

// EXTERNAL MODULE: ./src/common/js/cordova/download.js
var download = __webpack_require__("4+bB");

// EXTERNAL MODULE: ./src/types/index.js + 5 modules
var types = __webpack_require__("NaSR");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/setter/update.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var update = ({
    name: "update",
    mixins: [mixins["a" /* appMixins */]],
    data: function data() {
        return {
            loading: false,
            tip: '',
            news: {
                visible: false,
                version: '0.0.0',
                file: {
                    size: 0,
                    url: '',
                    savePath: ''
                },
                uploadTime: '',
                uploadContent: ''
            },
            progress: {
                visible: false,
                value: 0,
                max: 100
            }
        };
    },
    activated: function activated() {
        this.loading = false;
        this.tip = '';

        this.checkUpdate();
    },

    methods: {
        checkUpdate: function checkUpdate() {
            var _this = this;

            this.loading = true;
            this.$toast({
                position: 'center',
                type: 'loading',
                message: '正在查询 ……',
                duration: 0
            });

            Object(sys["a" /* checkUpdate */])(this.version).then(function (res) {
                if (res && res.version && Object(types["e" /* versionContrast */])(_this.version, res.version)) {
                    _this.news.visible = true;
                    _this.news.version = res.version;
                    _this.news.file.size = (res.file_size / 1024 / 1024).toFixed(2);
                    _this.news.file.url = res.file_url;
                    _this.news.uploadTime = res.upload_time;
                    _this.news.uploadContent = res.detail;
                    _this.tip = '发现新版本';
                } else {
                    _this.tip = '已经是最新版本';
                }

                _this.loading = false;
                _this.$toast.clear();
            });
        },
        downloadApk: function downloadApk() {
            var _this2 = this;

            this.progress.visible = true;
            // this.news.file.url = this.$images + this.news.file.url
            if (!this.news.file.url) {
                return this.$toast('无效下载地址');
            }

            console.log("%c\u65B0\u7248\u672C\u4E0B\u8F7D\u5730\u5740: " + this.news.file.url, 'color: #9c27b0');

            this.news.file.savePath = Object(download["d" /* getSavePath */])() + this.version + ".apk";

            Object(download["a" /* downloadFile */])(this.news.file.url, this.news.file.savePath, function (success) {
                var data = JSON.parse(success.toString());

                //下载完成安装apk
                if (data.type === "completed") {
                    _this2.progress.visible = false;
                    _this2.news.visible = false;

                    Object(map["n" /* installationApkfile */])(_this2.news.file.savePath);
                }

                if (data.type === "progress") {
                    _this2.progress.value = parse_int_default()(data.soFarBytes);
                    _this2.progress.max = parse_int_default()(data.totalBytes);
                }
            }, console.log);
        }
    },
    components: {
        MProgress: progress["a" /* default */],
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f212996","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/setter/update.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"update"},[_c('navigate',{attrs:{"title":"更新","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"box paper"},[_c('div',{staticClass:"news-icon-wrapper mu-primary-color"},[_c('mu-icon',{attrs:{"value":"arrow_upward","size":"70","color":"#fff"}})],1),_vm._v(" "),_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"por version-status pt-15 pb-10",attrs:{"data-mu-loading-size":"16"}},[_vm._v(_vm._s(_vm.tip)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"version"},[_vm._v(_vm._s(_vm.version))]),_vm._v(" "),_c('mu-expand-transition',[(_vm.news.visible)?_c('div',{staticClass:"new-version"},[_c('div',{staticClass:"header border-1px-b"},[_c('span',{staticClass:"title"},[_vm._v("发现新版本")]),_vm._v(" "),_c('div',{staticClass:"btn"},[_c('mu-button',{staticClass:"ignore-btn",attrs:{"flat":"","small":""},on:{"click":function($event){_vm.news.visible = false}}},[_vm._v("忽略")]),_vm._v(" "),_c('mu-button',{staticClass:"version-btn",attrs:{"color":"success","flat":"","small":""},on:{"click":_vm.downloadApk}},[_vm._v("升级\n                            ")])],1)]),_vm._v(" "),_c('ul',[_c('li',{staticClass:"lhp"},[_vm._v("版本："+_vm._s(_vm.news.version))]),_vm._v(" "),_c('li',{staticClass:"lhp"},[_vm._v("大小："+_vm._s(_vm.news.file.size)+"M")]),_vm._v(" "),_c('li',{staticClass:"lhp"},[_vm._v("更新时间："+_vm._s(_vm.news.uploadTime))]),_vm._v(" "),_c('li',{staticClass:"lhp"},[_vm._v("更新内容：")]),_vm._v(" "),_vm._l((_vm.news.uploadContent.split(/\n/)),function(item){return _c('li',{staticClass:"pl-25 lht"},[_vm._v(_vm._s(item))])})],2)]):_vm._e()])],1),_vm._v(" "),(!_vm.news.visible)?_c('div',{staticClass:"button-wrapper"},[_c('mu-button',{staticClass:"button mu-primary-color",attrs:{"color":"#fff","flat":""},on:{"click":_vm.checkUpdate}},[_vm._v("检查更新")])],1):_vm._e(),_vm._v(" "),_c('mu-dialog',{attrs:{"open":_vm.progress.visible,"width":"80%","lock-scroll":""},on:{"update:open":function($event){_vm.$set(_vm.progress, "visible", $event)}}},[_c('mu-sub-header',[_vm._v("正在下载...")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('m-progress',{attrs:{"progress":_vm.progress.value,"max":_vm.progress.max}}),_vm._v(" "),_c('br')],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setter_update = (esExports);
// CONCATENATED MODULE: ./src/views/about/setter/update.vue
function injectStyle (ssrContext) {
  __webpack_require__("5Ksj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f212996"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  update,
  setter_update,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_setter_update = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=41.js.map