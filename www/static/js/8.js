webpackJsonp([8],{

/***/ "e9iN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/common/utils/time.js
var time = __webpack_require__("NZXN");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/message/chat.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var chat = ({
    name: "chat",
    data: function data() {
        return {
            message: '',
            defaultAvatar: 'static/image/bg.png',
            list: [],
            timer: null,
            queryParam: {
                userId: null,
                receiverId: null,
                pageSize: 10,
                pageNumber: 0
            },
            webSocket: null
        };
    },

    props: {
        id: {
            type: String,
            default: ''
        }
    },
    computed: {
        messageList: function messageList() {
            if (this.list.length === 0) {
                return;
            }
            var list = [[this.list[0]]];
            var index = 0;
            for (var i = 0; i < this.list.length - 1; i++) {
                // if (this.list[i].createTime - this.list[i + 1].createTime < 2 * 60 * 1000) {
                list[index].push(this.list[i + 1]);
                // } else {
                //     index++
                //     list[index].push(this.list[i + 1])
                // }
            }

            return list.reverse();
        }
    },
    created: function created() {
        this.queryParam.userId = this.$route.query.userId;
        this.queryParam.receiverId = this.$route.query.receiverId;
        this.queryIMessageDetail();
        // this.initWebsocket()
        console.log('%c\u2014\u2014\u2014\u2014\u2014\u2014 request ' + this.id + ' message \u2014\u2014\u2014\u2014\u2014\u2014', 'color: #009688');
    },
    mounted: function mounted() {
        this.handlerScrollHeight();
    },
    beforeDestroy: function beforeDestroy() {
        clearInterval(this.timer);
    },

    methods: {
        onError: function onError(event) {
            event.target.setAttribute('data-src', event.target.getAttribute('src'));
            event.target.setAttribute('src', null);
        },
        handlerSubmit: function handlerSubmit() {
            if (!this.message) {
                return this.$toast('请输入内容');
            }

            this.list.push({
                avatar: 'static/image/bg.png',
                title: '哈哈哈',
                content: this.message,
                use: true,
                time: Date.now()
            });

            // this.doSend(this.message)

            this.message = '';
        },

        // 列表再最后
        handlerScrollHeight: function handlerScrollHeight() {
            var _this = this;

            setTimeout(function (time) {
                _this.$refs.MessageListWrapper.scrollTo(0, _this.$refs.MessageList.offsetHeight);
            }, 60);
        },
        queryIMessageDetail: function queryIMessageDetail() {
            var _this2 = this;

            Object(personal["n" /* queryIMessageDetail */])(this.queryParam).then(function (res) {
                _this2.list = res;
            }).catch(function (error) {
                console.log(error);
            });
        },
        initWebsocket: function initWebsocket() {
            this.websocket = new WebSocket('ws://localhost:8080/websocket?user=1');
            this.websocket.onmessage = function (evt) {
                console.log(evt.data);
            };
        },
        doSend: function doSend(message) {
            this.websocket.send("hello");
        }
    },
    filters: {
        formatPast: time["a" /* default */].formatPast
    },
    components: {
        Navigate: navigate_navigate["a" /* default */]
    },
    watch: {
        list: function list() {
            this.handlerScrollHeight();
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-07e3e88e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/message/chat.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat"},[_c('navigate',{attrs:{"title":"广东航道","position":"absolute"}}),_vm._v(" "),_c('div',{ref:"MessageListWrapper",staticClass:"message-list-wrapper"},[_c('div',{ref:"MessageList"},[_vm._l((_vm.messageList),function(list){return [_c('div',{staticClass:"time"},[_vm._v(_vm._s(_vm._f("formatPast")(list[0].createTime)))]),_vm._v(" "),_c('div',{staticClass:"message-list"},[_c('transition-group',{attrs:{"name":"fade-chat"}},_vm._l((list),function(item,index){return _c('div',{key:index,staticClass:"item",class:item.self ? 'item-right' : 'item-left'},[_c('mu-avatar',{attrs:{"size":"45"}},[_c('img',{attrs:{"src":item.avatar,"alt":item.title},on:{"error":_vm.onError}})]),_vm._v(" "),_c('div',{staticClass:"content-wrapper"},[_c('p',{staticClass:"content"},[_vm._v(_vm._s(item.content))])])],1)}))],1)]})],2)]),_vm._v(" "),_c('div',{staticClass:"message-input-wrapper"},[_c('form',{staticClass:"message-input-form",attrs:{"action":"javascrpt:;"},on:{"submit":_vm.handlerSubmit}},[_c('label',{staticClass:"input-box"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.message),expression:"message"}],attrs:{"type":"text"},domProps:{"value":(_vm.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.message=$event.target.value}}})]),_vm._v(" "),_c('mu-button',{staticClass:"submit",attrs:{"color":"#fff","flat":""},on:{"click":_vm.handlerSubmit}},[_vm._v("发送")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var message_chat = (esExports);
// CONCATENATED MODULE: ./src/views/about/message/chat.vue
function injectStyle (ssrContext) {
  __webpack_require__("eIUs")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07e3e88e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  chat,
  message_chat,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var about_message_chat = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "eIUs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=8.js.map