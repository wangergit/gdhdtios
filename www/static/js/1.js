webpackJsonp([1],{

/***/ "/He8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getNavigationList;
/* harmony export (immutable) */ __webpack_exports__["a"] = getNavigationDetail;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_axios__ = __webpack_require__("2MJX");


/***
 * 助航信息
 * @param data
 * @param data.types          类型 ID
 * @param data.name           标题 为空查全部
 * @param data.pageNumber     页码
 * @param data.pageSize       每页显示条数
 * @returns {*}
 */
function getNavigationList(params) {
    var url = '/search/channel';
    // const url = `https://www.gdhdswzx.xyz:10001/app/search/channel`

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].get(url, { params: params });
}

/***
 * 助航资讯详情
 * @param params.typeId  // 类型
 * @param params.id    // id
 * @returns {*}
 */
function getNavigationDetail(params) {
    var url = '/channel/navi/queryinfo';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].get(url, { params: params });
}

/***/ }),

/***/ "GgE9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contrastFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detailContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return elementPanelContrast; });
var MANDEP = '管理单位';

var contrastFormat = function contrastFormat(instance, contrast) {
    var list = [];

    for (var key in contrast) {
        var value = instance[key] ? instance[key] : '',
            title = contrast[key];

        if (Object.prototype.toString.call(title) === '[object Object]') {
            if (typeof title.format === 'function') {
                value = title.format(value, instance, contrast);
            } else if (typeof title.unit === 'string') {
                value = value ? '' + value + title.unit : '';
            }

            title = title.value;
        }

        value !== null && list.push({ title: title, value: value });
    }

    return list;
};

var detailContrast = {
    // 桥梁
    '013002': {
        // bridgeType: "桥梁类型",
        // bridgeStructure: "桥梁结构形式",
        // bridgeWidth: "桥面宽度（米）",
        holesNumber: "通航孔个数",
        widthScale: {
            value: '实测通航净宽',
            unit: '米'
        },
        highScale: {
            value: "实测通航净高",
            unit: '米'
        },
        // isRtch: "是否安装桥梁净高显示",
        blgnam: "所在航道名称",
        realTime: {
            value: '实时桥梁净高',
            format: function format(value, instance) {
                return instance.isRtch === '是' ? value : null;
            }
        }
        // manageDepartment: "管理单位"
    },
    // 固定码头
    '013003': {
        // dockNumber: "码头编号",
        dockType: "码头类型",
        mainUses: "码头用途",
        berthingCapacity: "码头靠泊能力"
        // dockNature: "码头性质",
        // shorelineApproval: "岸线批文",
        // manageDepartment: "管理单位",
        // structureType: "结构形式",
        // designYear: "设计使用年限",
        // buildState: "建设状态",
        // ashore: "岸别"
    },
    // 浮码头
    '013004': {
        // dockNumber: "码头编号",
        // dockType: "码头类型",
        // dockNature: "码头性质",
        mainUses: "码头用途"
        // shorelineApproval: "岸线批文",
        // manageDepartment: "管理单位",
        // structureType: "结构形式",
        // berthingCapacity: "码头靠泊能力",
        // designYear: "设计使用年限",
        // buildState: "建设状态",
        // ashore: "岸别"
    },
    // 船闸
    '013005': {
        crossLevel: "船闸级别",
        loblin: "线数",
        // lockChamber: "闸室",
        lockLength: {
            value: '船闸有效长度',
            unit: '米'
        },
        lockWidth: {
            value: '船闸有效宽度',
            unit: '米'
        },
        lockDepth: {
            value: '船闸门槛最小水深',
            unit: '米'
        }
        // crossLogin: "通过登录",
        // buildYear: "建设年份",
        // manageDepartment: "管理单位",
        // numberCode: "线数代码",
        // doorWidth: "闸首口门宽",
        // minDepth: "闸槛最小水深"
    },
    // 航标
    '013007': {
        markNumber: "航标编号",
        // naviMarkType: "航标类型",
        // markStatus: "航标状态",
        markType: "标志类型",
        // designType: "设计类型",
        setPosition: "设置位置",
        ashore: "岸别",
        btColour: "颜色",
        btShape: "形状",
        bsPattern: "图案",
        dbColour: "顶标颜色",
        dbShape: "顶标形状",
        lightColour: "灯色",
        lightCharacter: "灯质",
        // buildingProperty: "建筑结构性质",
        // hbycykhm: "航标遥测遥控号码",
        flashCycle: "闪光周期",
        // rotateAngle: "旋转角度",
        signalSequence: "信号序列"
        // minScale: "最小比例尺",
        // bzjggg: "标志结构规格",
        // buildState: "建设状态",
        // manageCategory: "管理类别",
        // manageDepartment: "管理单位"
        // maintainDepartment: "维护单位"
    },
    // 过江线缆
    '013016': {
        cableType: "线缆类型",
        // buildState: "建设状态",
        // objectId: "对应空间数据库",
        // cableLength: "线缆长度(米)",
        // safeSpacing: "线缆安全间距",
        // biddingSituation: "管道设标情况",
        // cableStatus: "线缆状况",
        // cableState: "线缆状态",
        typeuse: "线缆用途",
        catngm: "标志类型",
        hnwpcab: "线缆通航净高",
        burialDepth: {
            value: '线缆的埋设深度',
            unit: '米'
        }
        // manageDepartment: "管理单位",
        // remark: "备注",
    },
    // 锚地
    '013012': {
        roadsteadType: "锚地类型",
        // berthMode: "停泊方式",
        // waterDepth: "锚泊区水深",
        // buoyNumber: "浮筒个数",
        // mooringAbility: "系泊能力",
        // mooringNumber: "锚泊艘数",
        // bottomAbility: "锚泊区底质",
        // area: "锚泊区面积",
        describe: "描述"
    },
    // 危险区域
    '013014': {
        dangerareaType: "危险区域类型"
        // location: "位置",
        // remark: "备注"
    },
    // 浅滩
    '013015': {
        shoalLength: "浅滩长度",
        shoalType: "浅滩类型",
        describe: "描述"
    },
    // 服务点
    '013008': {
        describe: "描述"
    },
    // 供给点
    '013009': {
        servicepointType: "服务点类型",
        describe: "描述"
    },
    // 禁锚区
    '013013': {
        describe: "描述"
    },
    // 水位站
    '013010': {
        // manageDepartment: "管理部门",
        reportTime: "上报时间",
        waterLevel: {
            value: '水位值',
            unit: '米'
        },
        describe: "描述"
    },
    // 船舶
    '013001': {
        boatWidth: {
            value: '船宽',
            unit: '米'
        },
        boatHeight: {
            value: '船高',
            unit: '米'
        },
        boatLength: {
            value: '船长',
            unit: '米'
        },
        draught: {
            value: '设计吃水',
            unit: '米'
        },
        year: "出厂年度",
        mmsi: "MMSI",
        callNumber: "呼号",
        imo: "IMO",
        speed: {
            value: '船速',
            unit: '节'
        },
        heading: {
            value: '航向',
            unit: '度'
        },
        manageUnit: "单位",
        boatType: "船舶类型",
        buildingPlant: "船舶建造场",
        designUnit: "设计单位",
        department: "组织机构",
        totalTon: "总吨",
        netTon: "净吨",
        fixedPerson: "定员",
        mTime: "更新时间"
    },
    // 天气
    '013011': {
        province: "省份",
        city: "城市",
        weatherDescribe: "天气描述",
        temperature: {
            value: '温度',
            unit: '摄氏度'
        },
        bodyTemperature: {
            value: '体表温度',
            unit: '摄氏度'
        },
        windDirection: "风向",
        windSpeed: {
            value: '风速',
            unit: '公里/小时'
        },
        windScale: "风力等级",
        humidity: "湿度",
        pa: {
            value: '压强',
            unit: '百帕'
        },
        precipitation: {
            value: "降水量",
            unit: '毫米'
        },
        visibility: {
            value: "能见度",
            unit: '公里'
        },
        updateTime: "更新时间",
        dataSources: "数据源"
    },
    // 过江管道
    '013017': {
        "plpeLength": {
            value: '管道长度',
            unit: '米'
        },
        "minDepth": {
            value: '最小埋设深度',
            unit: '米'
        },
        "safetyDistance": {
            value: '管道安全间距',
            unit: '米'
        },
        "embedmentDepth": {
            value: '埋设深度',
            unit: '米'
        },
        "maxDepth": {
            value: '最大埋设深度',
            unit: '米'
        },
        "status": "状态"
    },
    // 架空线缆
    '013018': {
        "info": "中文信息",
        "cableType": "线缆类型",
        "minScale": "最小比例尺",
        "cableLength": {
            value: '线缆长度',
            unit: '米'
        },
        "cableWidth": {
            value: '线缆通航净宽',
            unit: '米'
        },
        "maxNavigableWaterLevel": {
            value: '线缆最高通航水位',
            unit: '米'
        },
        "measuredSagHeight": {
            value: '线缆实测弧垂高度',
            unit: '米'
        },
        "status": '状态'

    },
    '013019': {
        "describe": '描述'
    },
    //标注详细
    '001001': {
        detail: "描述"
    }
};

var elementPanelContrast = {
    // 标注
    '001001': {
        createTime: '设置时间'
    },
    // 船舶
    '013001': {
        mmsi: 'MMSI',
        updateTime: '更新时间'
    },
    // 桥梁
    '013002': {
        NCHBNO: '通航净高（米）',
        MANDEP: MANDEP
    },
    // 固定码头
    '013003': {
        TERUSE: '码头类型',
        MANDEP: MANDEP
    },
    // 浮码头
    '013004': {
        PONUSE: '码头用途',
        MANDEP: MANDEP
    },
    // 船闸
    '013005': {
        LOBLVL: '船闸级别',
        MANDEP: MANDEP
    },
    // 过江线缆
    '013016': {
        TYPCAB: '线缆类型',
        MANDEP: MANDEP
    },
    // 锚地
    '013012': {
        CATBRT: '锚地类型',
        MANDEP: MANDEP
    },
    // 危险区域
    '013014': {
        CATBRT: '危险区域类型'
    },
    // 浅滩
    '013015': {},
    // 服务点
    '013008': {
        CATBRT: '服务点类型'
    },
    // 航标
    '013007': {
        lightCharacter: '航标灯'
    },
    // 水位站
    '013010': {
        waterLevel: '水位值（米）',
        reportTime: '上报时间'
    },
    // 天气
    '013011': {
        temperature: '温度',
        windDirection: '风向'
    },
    // 过江管道
    '013017': {
        "safetyDistance": '管道安全间距（米）',
        "status": "状态"
    },
    // 架空线缆
    '013018': {
        "cableWidth": '线缆通航净宽（米）',
        "maxNavigableWaterLevel": '线缆最高通航水位（米）'
    },
    '013019': {
        "createTime": '上报时间'
    }
};

/***/ }),

/***/ "KRxI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/base/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("vdH4");

// EXTERNAL MODULE: ./node_modules/muse-ui-toast/dist/muse-ui-toast.esm.js
var muse_ui_toast_esm = __webpack_require__("sXio");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/api/navigational.js
var navigational = __webpack_require__("/He8");

// EXTERNAL MODULE: ./src/common/js/mixins/index.js
var mixins = __webpack_require__("HOuZ");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var common_mixins = __webpack_require__("gDrV");

// EXTERNAL MODULE: ./src/types/contrast.js
var contrast = __webpack_require__("GgE9");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/details/detail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var detail = ({
    name: "detail",
    mixins: [mixins["a" /* MapMixins */], common_mixins["i" /* userMixins */], common_mixins["c" /* layerMixins */], common_mixins["h" /* searchMixins */]],
    data: function data() {
        return {
            detail: {}
        };
    },

    props: {
        type: {
            type: String,
            default: ''
        },
        id: {
            type: [String, Number],
            default: ''
        }
    },
    computed: {
        /***
         * 获取 type ID
         * @return {*}
         */
        typeId: function typeId() {
            return this.$route.query.typeId || this.type;
        },

        /***
         * 导航栏标题
         * @return {string}
         */
        navigateTitle: function navigateTitle() {
            var _this = this;

            if (this.typeId === '001001') {
                return '标注详情';
            }
            if (this.typeId === '013019') {
                return '上报详情';
            }
            var result = this.searchList.find(function (item) {
                return item.typeId === _this.typeId;
            });

            return result ? result.value + '详情' : '详情';
        },

        /***
         * 收藏按钮显示隐藏
         * @return {boolean}
         */
        visibleCollection: function visibleCollection() {
            return this.typeId === '013001' && !this.$route.query.hideCollection;
        },
        detailGenerate: function detailGenerate() {
            var list = Object(contrast["a" /* contrastFormat */])(this.detail, contrast["b" /* detailContrast */][this.typeId]);

            return list.map(function (item) {
                return "<div class=\"item\">" + item.title + ": " + item.value + "</div>";
            }).join('');
        }
    },
    activated: function activated() {
        this.detail = {};

        this.getNavigationDetail();
    },

    methods: {
        // 定位
        handlerLocation: function handlerLocation() {
            var _this2 = this;

            this.$toast({
                message: '定位中 ...',
                duration: 0
            });

            this.setCenter(this.detail.longitude, this.detail.latitude).then(function (res) {
                var layer = _this2.getLayer(_this2.typeId);

                if (layer && !layer.status) {
                    muse_ui_toast_esm["a" /* default */].message({
                        position: 'bottom',
                        message: "\u672A\u5F00\u542F" + layer.name + "\u4E13\u9898\u56FE\u56FE\u5C42",
                        time: 2500
                    });
                }

                _this2.$router.push('/');
            }).catch(function (err) {
                _this2.$toast({
                    message: err
                });
            });
        },

        // 收藏
        handlerCollection: function handlerCollection() {
            var _this3 = this;

            if (!this.isLogin) return this.$toast('您需要登录才能收藏船舶! ');

            this.detail.isStar = !this.detail.isStar;

            if (this.detail.isStar) {
                Object(personal["w" /* saveOrUpdateIBoat */])(this.id).then(function (res) {
                    _this3.$toast('收藏成功');
                });
            } else {
                Object(personal["b" /* deleteIBoatByBoatId */])(this.id).then(function (res) {
                    _this3.$toast('取消成功');
                });
            }
        },

        // 获取详情
        getNavigationDetail: function getNavigationDetail() {
            var _this4 = this;

            if (this.typeId === '001001') {
                Object(personal["l" /* queryILabelDetail */])(this.id).then(function (res) {
                    res.status = '';
                    res.name = res.title;

                    _this4.detail = res;
                });

                return;
            }
            if (this.typeId === '013019') {
                Object(personal["s" /* queryReportDetail */])(this.id).then(function (res) {
                    res.status = '';
                    res.name = res.title;

                    _this4.detail = res;
                });

                return;
            }

            var params = {
                typeId: this.type,
                id: this.id
            };

            Object(navigational["a" /* getNavigationDetail */])(params).then(function (res) {
                _this4.detail = res;
            });
        },
        isNull: function isNull(obj) {
            return !(typeof obj === 'undefined' || obj === null);
        }
    },
    filters: {
        formatElementName: function formatElementName(id) {
            var result = this.searchList.find(function (item) {
                return item.typeId === id;
            });

            return result ? result.value : '';
        }
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b7642de","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/details/detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detail"},[_c('navigate',{attrs:{"title":_vm.navigateTitle,"position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"header paper border-1px-b"},[_c('div',{staticClass:"info"},[(_vm.isNull(_vm.detail.name))?_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.detail.name))]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.bridge_category))?_c('div',[_vm._v("\n                    "+_vm._s(_vm._f("formatElementName")(_vm.detail.type))+"类型: "+_vm._s(_vm.detail.bridge_category)+"\n                ")]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.markType))?_c('div',[_vm._v("\n                    标志类型: "+_vm._s(_vm.detail.markType)+"\n                ")]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.isShared))?_c('div',[_vm._v("\n                    标注类型: "+_vm._s(_vm.detail.isShared ? '共享' : '私有')+"\n                ")]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.mmsi))?_c('div',[_vm._v("MMSI: "+_vm._s(_vm.detail.mmsi))]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.beacon_number))?_c('div',[_vm._v("航标编号: "+_vm._s(_vm.detail.beacon_number))]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.manage_department))?_c('div',[_vm._v("管理部门: "+_vm._s(_vm.detail.manage_department))]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"button-wrapper paper"},[_c('mu-button',{staticClass:"button border-1px-r",attrs:{"flat":""},on:{"click":_vm.handlerLocation}},[_c('mu-icon',{staticClass:"mr-i",attrs:{"size":"16","value":"location_on"}}),_vm._v("\n                定位\n            ")],1),_vm._v(" "),(_vm.visibleCollection)?_c('mu-button',{staticClass:"button",class:_vm.detail.isStar ? 'mu-secondary-text-color' : '',attrs:{"flat":""},on:{"click":_vm.handlerCollection}},[_c('mu-icon',{staticClass:"mr-i",attrs:{"value":_vm.detail.isStar ? 'favorite' : 'favorite_border',"size":"18"}}),_vm._v("\n                "+_vm._s(_vm.detail.isStar ? '取消收藏' : '收藏')+"\n            ")],1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"data-wrapper paper"},[_c('div',{staticClass:"border-1px-b pb-15 fz-16"},[_vm._v("基本信息")]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.detailGenerate)}})])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var details_detail = (esExports);
// CONCATENATED MODULE: ./src/views/details/detail.vue
function injectStyle (ssrContext) {
  __webpack_require__("ipZt")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b7642de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  detail,
  details_detail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_details_detail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ipZt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=1.js.map