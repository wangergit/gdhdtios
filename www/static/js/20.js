webpackJsonp([20],{

/***/ "4+bB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = downloadFile;
/* harmony export (immutable) */ __webpack_exports__["b"] = downloadFilePause;
/* harmony export (immutable) */ __webpack_exports__["c"] = downloadFileSatus;
/* unused harmony export downloadFileClear */
/* unused harmony export getDeviceBaseFilePath */
/* harmony export (immutable) */ __webpack_exports__["d"] = getSavePath;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

/**
 * 下载文件
 * @param fileUrl
 * @param savePath
 * @param successCallback
 * @param errorCallback
 * @returns {Promise<any>}
 */
function downloadFile(fileUrl, savePath, successCallback, errorCallback) {
    if (!window.Arcgis || typeof window.Arcgis.downloadFile !== 'function') {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject('没有找到下载文件方法');
    }

    window.Arcgis.downloadFile(fileUrl, savePath, successCallback, errorCallback);
}

/**
 * 下载暂停
 * @param id
 * @returns {Promise<any>}
 */
function downloadFilePause(id) {
    if (!window.Arcgis || typeof window.Arcgis.downloadFilePause !== 'function') {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject('没有找到下载暂停方法');
    }

    window.Arcgis.downloadFilePause(id);
}

/**
 * 下载状态
 * @param fileUrl
 * @param savePath
 * @param successCallback
 * @param errorCallback
 * @returns {Promise<any>}
 */
function downloadFileSatus(fileUrl, savePath, successCallback) {
    console.log("fileSatus");
    if (!window.Arcgis || typeof window.Arcgis.downloadFileSatus !== 'function') {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject('没有找到获取下载状态方法');
    }

    window.Arcgis.downloadFileSatus(fileUrl, savePath, successCallback);
}

/**
 * 删除文件
 * @param fileUrl
 * @param savePath
 * @param successCallback
 * @param errorCallback
 * @returns {Promise<any>}
 */
function downloadFileClear(fileUrl, savePath, successCallback, errorCallback) {
    if (!window.Arcgis || typeof window.Arcgis.downloadFileClear !== 'function') {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject('没有找到删除文件方法');
    }

    window.Arcgis.downloadFileClear(fileUrl, savePath, successCallback, errorCallback);
}

/**
 * 获取设备文件存储基本路径
 * @returns {Promise<any>}
 */
function getDeviceBaseFilePath() {
    if (!window.cordova) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject('没有找到cordova对象');
    }
    var filePath = window.cordova.file.externalRootDirectory;
    return filePath.toString().replace("file://", "");
}

/**
 * 获取文件存储路径
 * @returns {Promise<any>}
 */
function getSavePath() {
    return getDeviceBaseFilePath() + 'gdhdt/map/';
}

/***/ }),

/***/ "PDfA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Qkwk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/api/sys.js
var sys = __webpack_require__("DEHg");

// EXTERNAL MODULE: ./src/common/js/cordova/download.js
var cordova_download = __webpack_require__("4+bB");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/offline-map/offline-map.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var offline_map = ({
    name: "offlineMap",
    data: function data() {
        return {
            params: {
                pageNumber: 1,
                pageSize: 10
            },
            list: []
        };
    },
    activated: function activated() {
        this.downloadMapList();
        Object(cordova_download["a" /* downloadFile */])("", "", function (successData) {
            console.log(successData);
        }, function (errorData) {
            console.log(errorData);
        });
    },

    methods: {
        downloadMapList: function downloadMapList() {
            var _this = this;

            Object(sys["b" /* downloadMapList */])(this.params).then(function (res) {
                _this.list = res;
            });
        },
        handlerDownload: function handlerDownload(item) {
            switch (item.style) {
                case 'loading':
                    this.pause(item);
                    return;
                case 'update':
                    return;
                default:
                    this.download(item);
                    return;
            }
        },
        download: function download(item) {
            if (item.style === "done") {
                return;
            }
            // const url = this.$images + item.file_path
            if (!item.file_path) {
                return this.$toast('无效下载地址');
            }

            item.style = 'loading';

            var url = item.file_path;

            // 文件存储路径
            var savePath = Object(cordova_download["d" /* getSavePath */])() + item.name + '.vtpk';

            // 下载文件地址存储到指定路径
            Object(cordova_download["a" /* downloadFile */])(url, savePath, function (success) {
                console.log(success);
                var data = JSON.parse(success.toString());
                if (data.type === "completed") {
                    item.style = "done";
                } else if (data.type === "progress") {
                    item.id = data.id;
                    item.md5 = (Math.round(parseInt(data.soFarBytes) / parseFloat(data.totalBytes) * 10000) / 100).toFixed(0);
                }
            }, function (error) {});
        },
        pause: function pause(item) {
            item.style = 'pause';

            Object(cordova_download["b" /* downloadFilePause */])(item.id);
        },
        downloadFileStatus: function downloadFileStatus(item) {
            // const url = this.$images + item.file_path
            if (!item.file_path) {
                return;
            }

            var url = item.file_path;

            var savePath = Object(cordova_download["d" /* getSavePath */])() + item.name + '.vtpk';

            Object(cordova_download["c" /* downloadFileSatus */])(url, savePath, function (success) {
                console.log(success);

                var data = JSON.parse(success.toString());

                if (data.status === -2) {
                    item.style = 'pause';
                } else if (data.status === -3) {
                    if (data.soFarBytes === data.totalBytes) {
                        item.style = 'done';
                    }
                }
            });
        },
        downloadFileClear: function downloadFileClear(item) {},
        initStatus: function initStatus(item) {
            this.downloadFileStatus(item);
            return '';
        },
        thatStatus: function thatStatus(item) {
            switch (item.style) {
                case 'loading':
                    return '下载中';
                case 'update':
                    return '更新';
                case 'pause':
                    return '暂停';
                case 'done':
                    return '完成';
                default:
                    return '下载';
            }
        },
        thatIcon: function thatIcon(item) {
            switch (item.style) {
                case 'update':
                    return 'sync';
                case 'pause':
                    return 'pause_circle_outline';
                case 'done':
                    return 'done';
                default:
                    return 'arrow_downward';
            }
        },
        thatColor: function thatColor(item) {
            switch (item.style) {
                case 'download':
                    return '#03a9f4';
                case 'update':
                    return '#4caf50';
                case 'done':
                    return '#4caf50';
                case 'pause':
                    return '#03a9f4';
                default:
                    return '#ffeb3b';
            }
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    },
    computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-06a57ea7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/offline-map/offline-map.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"offline-map"},[_c('navigate',{attrs:{"title":"离线地图","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"offline-map-container scroll-wrapper"},[_vm._m(0),_vm._v(" "),_vm._l((_vm.list),function(item,index){return [_c('div',{staticClass:"div-container"},[_c('mu-row',[_c('mu-col',{staticClass:"text-container",attrs:{"span":"9"}},[_c('div',{staticClass:"div-container-title"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('div',{staticClass:"div-container-desc"},[_vm._v(_vm._s(item.detail))])]),_vm._v(" "),_c('mu-col',{staticClass:"div-flex icon-container",attrs:{"span":"3"},on:{"click":function($event){_vm.handlerDownload(item)}}},[(item.style === 'loading')?_c('div',{staticClass:"circular-progress-wrapper"},[_c('mu-circular-progress',{attrs:{"mode":"determinate","color":"#4caf50","value":item.md5,"size":26}})],1):_c('div',{staticClass:"icon-wrapper"},[_c('mu-icon',{attrs:{"value":_vm.thatIcon(item),"color":_vm.thatColor(item),"size":"32"}})],1),_vm._v(" "),_c('div',{staticClass:"icon-container-title"},[_vm._v(_vm._s(_vm.thatStatus(item)))]),_vm._v(" "),_c('div',{staticClass:"icon-container-desc"},[_vm._v(_vm._s((item.size/(1024*1024)).toFixed(2))+"M")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}]},[_vm._v(_vm._s(_vm.initStatus(item)))])])],1)],1),_vm._v(" "),_c('div',{staticStyle:{"height":"20px"}})]})],2)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"div-title"},[_vm._v("下载离线地图,节省90%流量!")]),_vm._v(" "),_c('div',{staticClass:"div-tips"},[_vm._v("(推荐在无线网络环境下载,其他环境下载可能会产生数据费用)")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var offline_map_offline_map = (esExports);
// CONCATENATED MODULE: ./src/views/about/offline-map/offline-map.vue
function injectStyle (ssrContext) {
  __webpack_require__("PDfA")
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
  offline_map,
  offline_map_offline_map,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_offline_map_offline_map = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=20.js.map