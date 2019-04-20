webpackJsonp([26],{

/***/ "NpNM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./node_modules/vant/lib/field/index.js
var field = __webpack_require__("MyDk");
var field_default = /*#__PURE__*/__webpack_require__.n(field);

// EXTERNAL MODULE: ./node_modules/vant/lib/field/style/index.js
var style = __webpack_require__("wvM5");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/index.js
var image_preview = __webpack_require__("Mqtp");
var image_preview_default = /*#__PURE__*/__webpack_require__.n(image_preview);

// EXTERNAL MODULE: ./node_modules/vant/lib/image-preview/style/index.js
var image_preview_style = __webpack_require__("i9vB");
var image_preview_style_default = /*#__PURE__*/__webpack_require__.n(image_preview_style);

// EXTERNAL MODULE: ./src/base/shelter/index.js + 3 modules
var shelter = __webpack_require__("ACuM");

// EXTERNAL MODULE: ./src/api/dynamic.js
var dynamic = __webpack_require__("IGLS");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/dynamic/detail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "dynamic-detail",
    mixins: [mixins["i" /* userMixins */]],
    data: function data() {
        return {
            visible: true,
            replyTo: null,
            content: "",
            detail: {
                isFabulous: false
            },
            commentList: [],
            fabulous: [],
            params: {
                pageNumber: 0,
                pageSize: 20
            },
            loading: {
                fabulous: false,
                comment: false
            }
        };
    },

    props: {
        id: {
            type: String,
            default: ""
        }
    },
    computed: {
        picture: function picture() {
            if (this.detail.images) {
                return this.detail.images.length > 4 ? "picture-max" : "picture-" + this.detail.images.length;
            }

            return "";
        },
        fabulousString: function fabulousString() {
            return this.fabulous.map(function (item) {
                return '<span class="fabulous">' + item + '</span>';
            }).join("、") + "赞过";
        },
        placeholder: function placeholder() {
            return this.replyTo ? '\u56DE\u590D ' + this.replyTo.alias + ': ' : '\u8BC4\u8BBA';
        }
    },
    activated: function activated() {
        this.commentList = [];
        this.fabulous = [];

        this.detail = this.$route.params;

        this.queryCommentList();
        this.queryFabulousAll();
        this.queryCircleMessageWithUF();
    },

    methods: {
        queryCircleMessageWithUF: function queryCircleMessageWithUF() {
            Object(dynamic["e" /* queryCircleMessageWithUF */])(this.id).then(function (res) {
                console.log(res);
            });
        },

        // 点击图片，打开图片查看器
        handlerPicture: function handlerPicture(images, index) {
            image_preview_default()({ images: images, startPosition: index });
        },

        /***
         * 点击发送评论
         */
        onSubmit: function onSubmit() {
            this.saveComment();

            return false;
        },

        /***
         * 获取评论列表
         */
        queryCommentList: function queryCommentList() {
            var _this = this;

            this.params.msgId = this.id;

            Object(dynamic["f" /* queryCommentList */])(this.params).then(function (res) {
                _this.commentList = res;
            });
        },

        /***
         * 获取所有点赞人
         */
        queryFabulousAll: function queryFabulousAll() {
            var _this2 = this;

            Object(dynamic["g" /* queryFabulousAll */])({ msgId: this.id }).then(function (res) {
                _this2.fabulous = res;
            });
        },

        // 点击更多
        handlerMoreOpen: function handlerMoreOpen() {
            shelter["a" /* default */].show({
                zIndex: 20000
            });
        },

        // 点赞 or 取消点赞
        handlerFabulous: function handlerFabulous() {
            var _this3 = this;

            if (this.loading.fabulous) {
                return;
            }

            this.loading.fabulous = true;

            if (this.detail.isFabulous) {
                Object(dynamic["a" /* deleteFabulous */])({ msgId: this.detail.id }).then(function (res) {
                    _this3.detail.isFabulous = !_this3.detail.isFabulous;

                    _this3.queryFabulousAll();

                    _this3.$emit('refresh');

                    _this3.loading.fabulous = false;
                });
            } else {
                Object(dynamic["i" /* saveFabulous */])({ msgId: this.detail.id }).then(function (res) {
                    _this3.detail.isFabulous = !_this3.detail.isFabulous;

                    _this3.queryFabulousAll();

                    _this3.$emit('refresh');

                    _this3.loading.fabulous = false;
                });
            }
        },

        /***
         * 点击评论按钮
         */
        handlerComment: function handlerComment() {
            this.visible = false;

            this.replyTo = null;
        },

        // 评论
        saveComment: function saveComment() {
            var _this4 = this;

            if (!this.content || this.loading.comment) {
                return;
            }

            this.loading.comment = true;

            var data = {
                msgId: this.id,
                content: this.content,
                status: "020002"
            };

            if (this.replyTo) {
                data.commentId = this.replyTo.id;

                console.log('\u4F60\u56DE\u590D\u4E86 ' + this.replyTo.alias + ': ' + this.content);
            } else {
                console.log('\u4F60\u53D1\u8868\u4E86\u8BC4\u8BBA: ' + this.content);
            }

            Object(dynamic["h" /* saveComment */])(data).then(function (res) {
                _this4.content = "";

                _this4.queryCommentList();

                _this4.$emit('refresh');

                _this4.visible = true;

                _this4.loading.comment = false;
            });
        },
        handlerMoreItem: function handlerMoreItem(item) {
            this.replyTo = item;

            item.MoreOpen = !item.MoreOpen;

            shelter["a" /* default */].close();

            this.visible = false;
        }
    },
    watch: {
        visible: function visible(value) {
            var _this5 = this;

            if (!value) {
                this.$nextTick(function () {
                    _this5.$refs.field && _this5.$refs.field.$refs && _this5.$refs.field.$refs.input && _this5.$refs.field.$refs.input.focus && _this5.$refs.field.$refs.input.focus();
                });
            }
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */],
        Field: field_default.a
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a7f458d6","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/dynamic/detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dynamic-detail"},[_c('navigate',{attrs:{"title":"详情","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('div',{staticClass:"dy-container"},[_c('div',{staticClass:"dynamic-head"},[_c('div',{staticClass:"source"},[_c('mu-avatar',{attrs:{"size":"50"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.AvatarImage(_vm.$images + _vm.detail.portrait, _vm.detail.alias)),expression:"AvatarImage($images + detail.portrait, detail.alias)"}]})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"nickname"},[_vm._v(_vm._s(_vm.detail.alias))]),_vm._v(" "),_c('div',{staticClass:"time"},[_vm._v(_vm._s(_vm.detail.createTime))])])],1),_vm._v(" "),_c('div',{staticClass:"msg",domProps:{"innerHTML":_vm._s(_vm.detail.content)}},[_vm._v(_vm._s(_vm.detail.content))]),_vm._v(" "),_c('div',{staticClass:"picture-box"},_vm._l((_vm.detail.images),function(item,index){return (item)?_c('div',{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:(item),expression:"item",arg:"background-image"}],staticClass:"picture",class:_vm.picture,on:{"click":function($event){_vm.handlerPicture(_vm.detail.images, index)}}}):_vm._e()})),_vm._v(" "),(_vm.fabulous.length)?_c('div',{staticClass:"liker"},[_c('mu-icon',{staticStyle:{"margin-top":"1.8px","margin-bottom":"1px"},attrs:{"value":"thumb_up","size":"14"}}),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.fabulousString)}})],1):_vm._e()]),_vm._v(" "),_c('div',{staticStyle:{"height":"15px"}}),_vm._v(" "),(_vm.commentList.length)?_c('div',{staticClass:"interact"},[_c('div',{staticClass:"comment"},_vm._l((_vm.commentList),function(item,index){return _c('div',{key:index,staticClass:"comment-item border-1px-b"},[_c('mu-avatar',{attrs:{"size":"50"}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.AvatarImage(_vm.$images + item.portrait, _vm.detail.alias)),expression:"AvatarImage($images + item.portrait, detail.alias)"}]})]),_vm._v(" "),_c('div',{staticClass:"message"},[_c('div',{staticClass:"nickname"},[_vm._v(_vm._s(item.alias))]),_vm._v(" "),_c('div',{staticClass:"time"},[_c('span',{staticStyle:{"margin-right":"0.5em"}},[_vm._v("第"+_vm._s(index + 1)+"楼")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.createTime))])]),_vm._v(" "),_c('div',{staticClass:"comment-content"},[_vm._v(_vm._s(item.content))]),_vm._v(" "),_vm._l((item.subComments),function(rItem){return _c('div',{staticClass:"reply border-1px-t"},[_c('div',{staticStyle:{"margin-bottom":"8px"}},[_c('span',{staticClass:"reply-name"},[_vm._v(_vm._s(rItem.alias))]),_vm._v(" "),_c('span',{staticClass:"time"},[_vm._v(_vm._s(rItem.createTime))])]),_vm._v(" "),_c('div',{staticClass:"reply-content"},[_vm._v("\n                                    "+_vm._s(rItem.content)+"\n                                ")])])})],2),_vm._v(" "),_c('mu-menu',{staticClass:"more",attrs:{"popover-class":"more-popover","placement":"right","open":item.MoreOpen},on:{"update:open":function($event){_vm.$set(item, "MoreOpen", $event)},"open":_vm.handlerMoreOpen}},[_c('mu-icon',{attrs:{"size":"22","value":"more_horiz","color":"#3899D7"}}),_vm._v(" "),_c('mu-list',{staticClass:"more-list",attrs:{"slot":"content"},slot:"content"},[_c('mu-list-item',{nativeOn:{"click":function($event){_vm.handlerMoreItem(item)}}},[_c('mu-list-item-title',[_vm._v("回复")])],1)],1)],1)],1)}))]):_vm._e()])]),_vm._v(" "),_c('transition-group',{staticClass:"dy-bottom-wrapper",attrs:{"tag":"div","name":"fade-bottom"}},[(_vm.visible)?_c('div',{key:"b",staticClass:"button-wrapper"},[_c('mu-ripple',{staticClass:"item",on:{"click":_vm.handlerComment}},[_c('mu-icon',{attrs:{"value":"speaker_notes","size":"22"}}),_vm._v(" "),_c('span',{staticStyle:{"margin-left":".5em"}},[_vm._v("评论")])],1),_vm._v(" "),_c('div',{staticClass:"line border-1px-l"}),_vm._v(" "),_c('mu-ripple',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading.fabulous),expression:"loading.fabulous"}],staticClass:"item",class:{'my-like': _vm.detail.isFabulous},attrs:{"data-mu-loading-size":"24"},on:{"click":_vm.handlerFabulous}},[_c('mu-icon',{attrs:{"value":"thumb_up","size":"22"}}),_vm._v(" "),_c('span',{staticStyle:{"margin-left":".5em"}},[_vm._v(_vm._s(_vm.detail.isFabulous ? '已赞' : '赞'))])],1)],1):_c('form',{key:"i",staticClass:"input-box-wrapper",attrs:{"action":"javascript:"},on:{"submit":_vm.onSubmit}},[_c('field',{ref:"field",attrs:{"maxlength":"120","placeholder":_vm.placeholder},on:{"blur":function($event){_vm.visible = true}},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var dynamic_detail = (esExports);
// CONCATENATED MODULE: ./src/views/dynamic/detail.vue
function injectStyle (ssrContext) {
  __webpack_require__("TJrK")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a7f458d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  detail,
  dynamic_detail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_dynamic_detail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TJrK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=26.js.map