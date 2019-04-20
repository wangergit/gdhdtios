webpackJsonp([11],{

/***/ "X5Ai":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YfZk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bPjd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/map/map-speech-button/map-speech-button.vue
//
//
//
//
//
//

/* harmony default export */ var map_speech_button = ({
    name: "map-speech-button",
    props: {
        value: {}
    },
    methods: {
        click: function click() {
            this.$emit('input', !this.value);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1b18d921","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/map/map-speech-button/map-speech-button.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"click":_vm.click}},[_c('mu-icon',{class:{'speech-button__status': _vm.value},attrs:{"value":"record_voice_over"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var map_speech_button_map_speech_button = (esExports);
// CONCATENATED MODULE: ./src/components/map/map-speech-button/map-speech-button.vue
function injectStyle (ssrContext) {
  __webpack_require__("mrgD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b18d921"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  map_speech_button,
  map_speech_button_map_speech_button,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var map_map_speech_button_map_speech_button = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/map/map-word-button/map-word-button.vue
//
//
//
//
//
//

/* harmony default export */ var map_word_button = ({
    name: "map-word-button",
    props: {
        value: {}
    },
    methods: {
        click: function click() {
            this.$emit('input', !this.value);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-df50cc52","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/map/map-word-button/map-word-button.vue
var map_word_button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"click":_vm.click}},[_c('mu-icon',{class:{'map-word-button__status': _vm.value},attrs:{"value":"translate"}})],1)}
var map_word_button_staticRenderFns = []
var map_word_button_esExports = { render: map_word_button_render, staticRenderFns: map_word_button_staticRenderFns }
/* harmony default export */ var map_word_button_map_word_button = (map_word_button_esExports);
// CONCATENATED MODULE: ./src/components/map/map-word-button/map-word-button.vue
function map_word_button_injectStyle (ssrContext) {
  __webpack_require__("YfZk")
}
var map_word_button_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var map_word_button___vue_template_functional__ = false
/* styles */
var map_word_button___vue_styles__ = map_word_button_injectStyle
/* scopeId */
var map_word_button___vue_scopeId__ = "data-v-df50cc52"
/* moduleIdentifier (server only) */
var map_word_button___vue_module_identifier__ = null
var map_word_button_Component = map_word_button_normalizeComponent(
  map_word_button,
  map_word_button_map_word_button,
  map_word_button___vue_template_functional__,
  map_word_button___vue_styles__,
  map_word_button___vue_scopeId__,
  map_word_button___vue_module_identifier__
)

/* harmony default export */ var map_map_word_button_map_word_button = (map_word_button_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/map/sail-speech-gender-button/sail-speech-gender-button.vue
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var sail_speech_gender_button = ({
    name: "sail-speech-gender-button",
    mixins: [mixins["a" /* appMixins */]],
    methods: {
        toggleSpeechGender: function toggleSpeechGender(value) {
            value = value ? this.SPEECH_GENDER_WOMAN.value : this.SPEECH_GENDER_MAN.value;

            this.setSpeechGender(value);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a03df158","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/map/sail-speech-gender-button/sail-speech-gender-button.vue
var sail_speech_gender_button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('mu-checkbox',{staticClass:"speech-gender",attrs:{"color":"#e91e63","input-value":_vm.speechGender === _vm.SPEECH_GENDER_WOMAN.value,"value":_vm.SPEECH_GENDER_WOMAN.value,"uncheck-icon":"sentiment_satisfied","checked-icon":"face"},on:{"change":_vm.toggleSpeechGender}})],1)}
var sail_speech_gender_button_staticRenderFns = []
var sail_speech_gender_button_esExports = { render: sail_speech_gender_button_render, staticRenderFns: sail_speech_gender_button_staticRenderFns }
/* harmony default export */ var sail_speech_gender_button_sail_speech_gender_button = (sail_speech_gender_button_esExports);
// CONCATENATED MODULE: ./src/components/map/sail-speech-gender-button/sail-speech-gender-button.vue
function sail_speech_gender_button_injectStyle (ssrContext) {
  __webpack_require__("X5Ai")
}
var sail_speech_gender_button_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var sail_speech_gender_button___vue_template_functional__ = false
/* styles */
var sail_speech_gender_button___vue_styles__ = sail_speech_gender_button_injectStyle
/* scopeId */
var sail_speech_gender_button___vue_scopeId__ = "data-v-a03df158"
/* moduleIdentifier (server only) */
var sail_speech_gender_button___vue_module_identifier__ = null
var sail_speech_gender_button_Component = sail_speech_gender_button_normalizeComponent(
  sail_speech_gender_button,
  sail_speech_gender_button_sail_speech_gender_button,
  sail_speech_gender_button___vue_template_functional__,
  sail_speech_gender_button___vue_styles__,
  sail_speech_gender_button___vue_scopeId__,
  sail_speech_gender_button___vue_module_identifier__
)

/* harmony default export */ var map_sail_speech_gender_button_sail_speech_gender_button = (sail_speech_gender_button_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/sail/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var sail = ({
    name: "sail",
    mixins: [mixins["g" /* routeMixins */], mixins["a" /* appMixins */]],
    data: function data() {
        return {
            info: {
                speed: 0,
                polar: 0,
                distance: 0
            },
            word: '',
            speechStatus: true,
            wordStatus: true,
            courseStatus: true,

            // 动画
            firstClick: false
        };
    },
    created: function created() {
        window.$types.map.navigation.setData = this.setData;
        window.$types.map.navigation.setWord = this.setWord;
        window.$types.map.navigation.close = this.close;
    },
    activated: function activated() {
        this.firstClick = false;

        if (stringify_default()(this.$route.params) !== '{}') {
            this.info.speed = this.$route.params.speed;
            this.info.polar = this.$route.params.polar;
            this.info.distance = this.$route.params.distance;
            this.word = this.$route.params.word;
        }

        this.courseStatus = true;

        this.speechStatus = this.speech;
        this.wordStatus = this.text;

        this.currentX = 0;
        this.opacity = 0;
        this.translateX = 0;
    },

    methods: {
        /***
         * 退出助航
         */
        retreat: function retreat() {
            this.resetRoutes();

            window.Arcgis && window.Arcgis.cancelPathPlanning('');

            this.$router.replace('/');
        },

        /***
         * 修改助航数据
         * @param info  JSON String
         */
        setData: function setData(info) {
            try {
                info = JSON.parse(info);
            } catch (e) {
                console.log(e);
                info = {
                    speed: 0,
                    polar: 0,
                    distance: 0
                };
            }

            this.info = info;
        },

        /***
         * 助航结束
         */
        close: function close(data) {
            try {
                data = JSON.parse(data);
            } catch (err) {
                console.log(err);

                data = {};
            }

            this.$router.replace({
                name: 'sail-over',
                query: data
            });
        },

        /***
         * 助航状态下切换视角
         * @param value
         */
        handlerToggle: function handlerToggle(value) {
            var _this = this;

            var type = value ? 'trueNorth' : 'course';

            window.Arcgis && window.Arcgis.changeNavigationType(type, function () {
                _this.courseStatus = !value;
            });
        },

        /***
         * 开关助航语音
         */
        handlerSpeech: function handlerSpeech(value) {
            if (value) {
                window.Arcgis && window.Arcgis.resumeBroadcast();
            } else {
                window.Arcgis && window.Arcgis.pauseBroadcast();
            }
        },
        setWord: function setWord(data) {
            this.word = data;
        }
    },
    components: {
        SpeechButton: map_map_speech_button_map_speech_button, WordButton: map_map_word_button_map_word_button,
        SpeechGenderButton: map_sail_speech_gender_button_sail_speech_gender_button
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4608c021","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/sail/index.vue
var sail_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"views sail",attrs:{"data-enable":"true"}},[_c('div',{staticClass:"sail-info panel"},[_c('span',[_vm._v("\n            速度：\n            "),_c('span',[_c('span',[_vm._v(_vm._s(_vm.info.speed))]),_vm._v("\n                km/h\n            ")])]),_vm._v(" "),_c('i',{staticClass:"line"}),_vm._v(" "),_c('span',[_vm._v("\n            极坐标：\n            "),_c('span',[_c('span',[_vm._v(_vm._s(_vm.info.polar))]),_vm._v("\n                度\n            ")])])]),_vm._v(" "),_c('speech-button',{staticClass:"map-button shadow speech-button",on:{"input":_vm.handlerSpeech},model:{value:(_vm.speechStatus),callback:function ($$v) {_vm.speechStatus=$$v},expression:"speechStatus"}}),_vm._v(" "),_c('word-button',{staticClass:"map-button shadow word-button",model:{value:(_vm.wordStatus),callback:function ($$v) {_vm.wordStatus=$$v},expression:"wordStatus"}}),_vm._v(" "),_c('div',{staticClass:"sail-tip"},[_vm._v("航线仅供参考")]),_vm._v(" "),(_vm.wordStatus && _vm.word)?_c('div',{staticClass:"word-wrapper shadow"},[_c('p',{staticClass:"words"},[_vm._v(_vm._s(_vm.word))])]):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(!_vm.firstClick)?_c('div',{staticClass:"sail-control panel shadow"},[_c('mu-button',{staticClass:"button",attrs:{"color":"#F5F5F5","flat":""},on:{"click":function($event){_vm.firstClick = true}}},[_vm._v("退出")]),_vm._v(" "),_c('div',{staticClass:"distance border-1px-l border-1px-r"},[_vm._v("\n                剩余 "),_c('span',[_vm._v(_vm._s(_vm._f("formatDistance")(_vm.info.distance)))]),_vm._v("\n                "+_vm._s(Number.parseFloat(_vm.info.distance) > 1000 ? '公里' : '米')+"\n            ")]),_vm._v(" "),_c('mu-button',{staticClass:"button",attrs:{"color":"#F5F5F5","flat":""},on:{"click":function($event){_vm.handlerToggle(_vm.courseStatus)}}},[_vm._v("\n                "+_vm._s(_vm.courseStatus ? '正北' : '航向')+"\n            ")])],1):_c('div',{staticClass:"slider panel shadow"},[_c('mu-button',{staticClass:"button",attrs:{"color":"#F5F5F5","flat":""},on:{"click":function($event){_vm.firstClick = false}}},[_vm._v("取消")]),_vm._v(" "),_c('mu-ripple',{ref:"slider",staticClass:"slider-inner border-1px-l",on:{"click":_vm.retreat}},[_vm._v("\n                退出助航\n            ")])],1)])],1)}
var sail_staticRenderFns = []
var sail_esExports = { render: sail_render, staticRenderFns: sail_staticRenderFns }
/* harmony default export */ var views_sail = (sail_esExports);
// CONCATENATED MODULE: ./src/views/sail/index.vue
function sail_injectStyle (ssrContext) {
  __webpack_require__("osWm")
}
var sail_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var sail___vue_template_functional__ = false
/* styles */
var sail___vue_styles__ = sail_injectStyle
/* scopeId */
var sail___vue_scopeId__ = "data-v-4608c021"
/* moduleIdentifier (server only) */
var sail___vue_module_identifier__ = null
var sail_Component = sail_normalizeComponent(
  sail,
  views_sail,
  sail___vue_template_functional__,
  sail___vue_styles__,
  sail___vue_scopeId__,
  sail___vue_module_identifier__
)

/* harmony default export */ var src_views_sail = __webpack_exports__["default"] = (sail_Component.exports);


/***/ }),

/***/ "mrgD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "osWm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=11.js.map