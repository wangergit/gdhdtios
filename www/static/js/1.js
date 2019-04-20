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

/***/ "KRxI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/common/utils/elements.js
var utils_elements = __webpack_require__("O0RF");

// EXTERNAL MODULE: ./src/components/no-success/no-success.vue + 2 modules
var no_success = __webpack_require__("amha");

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
//
//
//










var contrast = {
    // 服务点
    '013008': {
        describe: "描述"
    },
    // 服务点
    '013009': {
        describe: "描述"
    },
    // 浮码头
    '013004': {
        dockNumber: "码头编号",
        dockType: "码头类型",
        dockNature: "码头性质",
        mainUses: "码头主要用途",
        shorelineApproval: "岸线批文",
        manageDepartment: "管理单位",
        structureType: "结构形式",
        berthingCapacity: "码头靠泊能力",
        designYear: "设计使用年限",
        buildState: "建设状态",
        ashore: "岸别"
    },
    // 固定码头
    '013003': {
        dockNumber: "码头编号",
        dockType: "码头类型",
        dockNature: "码头性质",
        mainUses: "码头主要用途",
        shorelineApproval: "岸线批文",
        manageDepartment: "管理单位",
        structureType: "结构形式",
        berthingCapacity: "码头靠泊能力",
        designYear: "设计使用年限",
        buildState: "建设状态",
        ashore: "岸别"
    },
    // 线缆
    '013016': {
        cableType: "线缆类别",
        burialDepth: "埋设深度(米)",
        buildState: "建设状态",
        manageDepartment: "管理单位",
        remark: "备注",
        objectId: "对应空间数据库",
        cableLength: "线缆长度(米)",
        safeSpacing: "线缆安全间距",
        biddingSituation: "管道设标情况",
        cableStatus: "线缆状况",
        cableState: "线缆状态"
    },
    // 禁锚区
    '013013': {
        describe: "描述"
    },
    // 船闸
    '013005': {
        crossLevel: "通过等级",
        lockChamber: "闸室",
        lockLength: "有效长度(米)",
        lockWidth: "有效宽度(米)",
        lockDepth: "船闸门槛水深(米)",
        crossLogin: "通过登录",
        buildYear: "建设年份",
        manageDepartment: "管理单位",
        numberCode: "线数代码",
        doorWidth: "闸首口门宽",
        minDepth: "闸槛最小水深"
    },
    // 航标
    '013007': {
        // markNumber: "航标编号",
        // naviMarkType: "航标类型",
        // markStatus: "航标状态",
        markType: "标志类型",
        // designType: "设计类型",
        ashore: "岸别",
        setPosition: "设置位置",
        bsColour: "标身颜色",
        bsPattern: "标身图案",
        dbShape: "顶标形状",
        dbColour: "顶标颜色",
        btColour: "标体颜色",
        btShape: "标体形状",
        lightColour: "灯色",
        lightCharacter: "灯质",
        buildingProperty: "建筑结构性质",
        // hbycykhm: "航标遥测遥控号码",
        flashCycle: "闪光周期",
        // rotateAngle: "旋转角度",
        signalSequence: "信号序列",
        // minScale: "最小比例尺",
        // bzjggg: "标志结构规格",
        // buildState: "建设状态",
        // manageCategory: "管理类别",
        manageDepartment: "管理单位"
        // maintainDepartment: "维护单位"
    },
    // 锚地
    '013012': {
        name: "锚地名称",
        describe: "描述",
        roadsteadType: "锚地类型",
        berthMode: "停泊方式",
        waterDepth: "锚泊区水深",
        buoyNumber: "浮筒个数",
        mooringAbility: "系泊能力",
        mooringNumber: "锚泊艘数",
        bottomAbility: "锚泊区底质",
        area: "锚泊区面积"
    },
    // 浅滩
    '013015': {
        shoalLength: "浅滩长度",
        shoalType: "浅滩类型",
        describe: "描述"
    },
    // 水位站
    '013010': {
        manageDepartment: "管理部门",
        reportTime: "上报时间",
        waterLevel: "水位值(米)",
        describe: "描述"
    },
    // 船舶
    '013001': {
        boatWidth: "船宽(米)",
        boatHeight: "船高(米)",
        boatLength: "船长(米)",
        draught: "设计吃水(米)",
        year: "出厂年度",
        mmsi: "MMSI",
        callNumber: "呼号",
        imo: "IMO",
        speed: "船速(节)",
        heading: "航向(度)",
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
    // 桥梁
    '013002': {
        bridgeType: "桥梁类型",
        bridgeStructure: "桥梁结构形式",
        bridgeWidth: "桥面宽度(米)",
        bridgeLength: "桥梁长度(米)",
        holesNumber: "通航孔数(个)",
        pirNumber: "桥墩个数(个)",
        // bridgeState: "桥梁状态",
        highScale: "净空高尺度(米)",
        widthScale: "净宽尺度(米)",
        updateTime: "更新时间"
    },
    // 危险区域
    '013014': {
        dangerareaType: "危险区域类型",
        location: "位置",
        remark: "备注"
    },
    // 天气
    '013011': {
        province: "省份",
        city: "城市",
        weatherDescribe: "天气描述",
        temperature: "温度(摄氏度)",
        bodyTemperature: "体表温度(摄氏度)",
        windDirection: "风向",
        windSpeed: "风速(公里/小时)",
        windScale: "风力等级",
        humidity: "湿度",
        pa: "压强(百帕)",
        precipitation: "降水量(毫米)",
        visibility: "能见度(公里)",
        updateTime: "更新时间",
        dataSources: "数据源"
    },
    //标注详细
    '001001': {
        detail: "描述"
    }
};

/* harmony default export */ var detail = ({
    name: "detail",
    mixins: [mixins["a" /* MapMixins */], common_mixins["i" /* userMixins */], common_mixins["c" /* layerMixins */]],
    data: function data() {
        return {
            detail: {},
            contrast: contrast
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
            return this.$route.query.typeId;
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

            var result = utils_elements["a" /* default */].find(function (item) {
                return item.id === _this.typeId;
            });

            return result ? result.name + '详情' : '详情';
        },

        /***
         * 收藏按钮显示隐藏
         * @return {boolean}
         */
        visibleCollection: function visibleCollection() {
            return this.typeId === '013001' && !this.$route.query.hideCollection;
        },
        collectionColor: function collectionColor() {
            return this.detail.isStar ? "#e91e63" : "#333";
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
                        message: "\u8BF7\u5728\u56FE\u5C42\u63A7\u5236\u9762\u677F\u6253\u5F00" + layer.name + "\u4E13\u9898\u56FE\u56FE\u5C42",
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
                Object(personal["s" /* saveOrUpdateIBoat */])(this.id).then(function (res) {
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
                Object(personal["k" /* queryILabelDetail */])(this.id).then(function (res) {
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
        },
        isUndefined: function isUndefined(obj) {
            return !(typeof obj === 'undefined');
        }
    },
    filters: {
        formatElementName: function formatElementName(id) {
            var result = utils_elements["a" /* default */].find(function (item) {
                return item.id === id;
            });

            return result ? result.name : '';
        }
    },
    components: {
        NoSuccess: no_success["a" /* default */],
        Navigate: navigate_navigate["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-25b3bc02","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/details/detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views detail"},[_c('navigate',{attrs:{"title":_vm.navigateTitle,"position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"header"},[_c('div',{staticClass:"info"},[(_vm.isNull(_vm.detail.name))?_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.detail.name))]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.bridge_category))?_c('div',[_vm._v("\n                    "+_vm._s(_vm._f("formatElementName")(_vm.detail.type))+"类型: "+_vm._s(_vm.detail.bridge_category)+"\n                ")]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.markType))?_c('div',[_vm._v("\n                    标志类型: "+_vm._s(_vm.detail.markType)+"\n                ")]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.isShared))?_c('div',[_vm._v("\n                    标注类型: "+_vm._s(_vm.detail.isShared ? '共享' : '私有')+"\n                ")]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.mmsi))?_c('div',[_vm._v("MMSI: "+_vm._s(_vm.detail.mmsi))]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.beacon_number))?_c('div',[_vm._v("航标编号: "+_vm._s(_vm.detail.beacon_number))]):_vm._e(),_vm._v(" "),(_vm.isNull(_vm.detail.manage_department))?_c('div',[_vm._v("管理部门: "+_vm._s(_vm.detail.manage_department))]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"button-wrapper border-1px-t"},[_c('mu-button',{staticClass:"button border-1px-r",attrs:{"flat":""},on:{"click":_vm.handlerLocation}},[_c('mu-icon',{staticStyle:{"margin-right":".25em"},attrs:{"value":"location_on","size":"16"}}),_vm._v("\n                定位\n            ")],1),_vm._v(" "),(_vm.visibleCollection)?_c('mu-button',{staticClass:"button",style:(("color: " + _vm.collectionColor)),attrs:{"flat":""},on:{"click":_vm.handlerCollection}},[_c('mu-icon',{staticStyle:{"margin-right":".25em"},attrs:{"color":_vm.collectionColor,"value":_vm.detail.isStar ? 'favorite' : 'favorite_border',"size":"18"}}),_vm._v("\n                "+_vm._s(_vm.detail.isStar ? '取消收藏' : '收藏')+"\n            ")],1):_vm._e()],1),_vm._v(" "),_c('div',{staticStyle:{"height":"10px","background-color":"#EFEFEF"}}),_vm._v(" "),_c('div',{staticClass:"data-wrapper"},[_c('div',{staticClass:"border-1px-b",staticStyle:{"padding-bottom":"15px","font-size":"16px"}},[_vm._v("基本信息")]),_vm._v(" "),_vm._l((_vm.contrast[_vm.typeId]),function(item,key,index){return [_c('div',{staticClass:"item"},[_vm._v(_vm._s(_vm.contrast[_vm.typeId][key])+": "+_vm._s(_vm.detail[key]))])]})],2)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var details_detail = (esExports);
// CONCATENATED MODULE: ./src/views/details/detail.vue
function injectStyle (ssrContext) {
  __webpack_require__("Kx17")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25b3bc02"
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

/***/ "Kx17":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sXio":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* muse-ui-toast myron.liu version 0.3.0 */


var config = {
  position: 'bottom',
  time: 2000,
  closeIcon: 'close',
  close: true,
  successIcon: 'check_circle',
  infoIcon: 'info',
  warningIcon: 'priority_high',
  errorIcon: 'warning'
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var isServer = typeof window === 'undefined';
var index = 20141223;
var Message = __WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend({
  name: 'toast-message',
  data: function data() {
    return {
      messages: []
    };
  },

  methods: {
    createAction: function createAction(h, action, actionClick, item) {
      var isIcon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      return h('mu-button', {
        props: {
          icon: isIcon,
          flat: !isIcon,
          color: item.color ? '#fff' : 'secondary'
        },
        style: isIcon ? {
          width: '36px',
          height: '36px'
        } : {},
        slot: 'action',
        on: {
          click: function click() {
            return actionClick && actionClick(item.id);
          }
        }
      }, [action]);
    },
    message: function message(options) {
      var id = 'toast_id_' + index++;
      this.messages.push(_extends({}, options, {
        id: id,
        open: true
      }));
      return id;
    },
    close: function close(id) {
      var _this = this;

      if (!id) return;
      var item = this.messages.filter(function (item) {
        return item.id === id;
      })[0];
      if (!item) return;
      item.open = false;

      setTimeout(function () {
        if (!_this.messages) return;
        var messageIndex = _this.messages.indexOf(item);
        if (messageIndex === -1) return;
        _this.messages.splice(messageIndex, 1);
      }, 500);
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'mu-toast-plugin',
      style: {
        display: 'none'
      }
    }, this.messages.map(function (item) {
      var closeBtn = item.close ? _this2.createAction(h, h('mu-icon', {
        props: {
          value: config.closeIcon
        },
        style: {
          'margin-right': 0
        }
      }), function (id) {
        return _this2.close(id);
      }, item, true) : undefined;

      return h('mu-snackbar', {
        props: {
          color: item.color,
          textColor: item.textColor,
          open: item.open,
          position: item.position
        },
        key: item.id
      }, [item.icon ? h('mu-icon', {
        props: {
          left: true,
          value: item.icon
        }
      }) : ''].concat(toConsumableArray(item.actions && item.actions.length > 0 ? item.actions.map(function (_ref) {
        var action = _ref.action,
            click = _ref.click;
        return _this2.createAction(h, action, click, item);
      }) : []), [item.message, closeBtn]));
    }));
  }
});

var message = void 0;

function openMessage(options) {
  if (isServer) return;
  if (!message) {
    message = new Message({
      el: document.createElement('div')
    });
    document.body.appendChild(message.$el);
  }
  return message.message(options);
}

function closeMessage(id) {
  if (!message) return;
  message.close(id);
}

var Toast = {
  config: function config$$1(options) {
    if (!options || Array.isArray(options) || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') return config;
    for (var key in options) {
      if (!options.hasOwnProperty(key)) continue;
      config[key] = options[key];
    }
    return config;
  },
  message: function message(options) {
    if (!options) return;
    options = typeof options === 'string' ? { message: options } : options;
    var opt = _extends({
      time: config.time,
      position: config.position,
      close: config.close
    }, options);
    var id = openMessage(opt);
    if (opt.time > 0) {
      setTimeout(function () {
        return closeMessage(id);
      }, opt.time);
    }

    return id;
  }
};

['success', 'error', 'info', 'warning'].forEach(function (type) {
  Toast[type] = function (options) {
    if (!options) return;
    options = typeof options === 'string' ? {
      message: options,
      color: type,
      icon: config[type + 'Icon']
    } : _extends({}, options, {
      color: type,
      icon: config[type + 'Icon']
    });
    return Toast.message(options);
  };
});

Toast.close = function (id) {
  return closeMessage(id);
};

Toast.install = function (Vue$$1, options) {
  Toast.config(options);
  Vue$$1.prototype.$toast = Toast;
};

/* harmony default export */ __webpack_exports__["a"] = (Toast);


/***/ })

});
//# sourceMappingURL=1.js.map