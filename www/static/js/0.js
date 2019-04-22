webpackJsonp([0],{

/***/ "/AjF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/dhU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "24wo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(__webpack_require__("ArwO"));

var _touch = _interopRequireDefault(__webpack_require__("pNwR"));

var _event = __webpack_require__("NrR7");

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      class: _vm.b('track'),
      style: _vm.trackStyle,
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": _vm.onTouchMove,
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd,
        "transitionend": function transitionend($event) {
          _vm.$emit('change', _vm.activeIndicator);
        }
      }
    }, [_vm._t("default")], 2), _vm._t("indicator", [_vm.showIndicators && _vm.count > 1 ? _c('div', {
      class: _vm.b('indicators', {
        vertical: _vm.vertical
      })
    }, _vm._l(_vm.count, function (index) {
      return _c('i', {
        class: _vm.b('indicator', {
          active: index - 1 === _vm.activeIndicator
        })
      });
    })) : _vm._e()])], 2);
  },
  name: 'swipe',
  mixins: [_touch.default],
  props: {
    autoplay: Number,
    vertical: Boolean,
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  mounted: function mounted() {
    this.initialize();

    if (!this.$isServer) {
      (0, _event.on)(window, 'resize', this.onResize, true);
    }
  },
  destroyed: function destroyed() {
    this.clear();

    if (!this.$isServer) {
      (0, _event.off)(window, 'resize', this.onResize, true);
    }
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    trackStyle: function trackStyle() {
      var _ref;

      return _ref = {}, _ref[this.vertical ? 'height' : 'width'] = this.trackSize + "px", _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.vertical && this.direction === 'vertical' || this.direction === 'horizontal') {
        event.preventDefault();
        event.stopPropagation();
        this.move(0, Math.min(Math.max(this.delta, -this.size), this.size));
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move(offset > 50 ? this.delta > 0 ? -1 : 1 : 0);
      }

      this.swiping = false;
      this.autoPlay();
    },
    move: function move(_move, offset) {
      if (_move === void 0) {
        _move = 0;
      }

      if (offset === void 0) {
        offset = 0;
      }

      var delta = this.delta,
          active = this.active,
          count = this.count,
          swipes = this.swipes,
          trackSize = this.trackSize;
      var atFirst = active === 0;
      var atLast = active === count - 1;
      var outOfBounds = !this.loop && (atFirst && (offset > 0 || _move < 0) || atLast && (offset < 0 || _move > 0));

      if (outOfBounds || count <= 1) {
        return;
      }

      swipes[0].offset = atLast && (delta < 0 || _move > 0) ? trackSize : 0;
      swipes[count - 1].offset = atFirst && (delta > 0 || _move < 0) ? -trackSize : 0;

      if (_move && active + _move >= -1 && active + _move <= count) {
        this.active += _move;
      }

      this.offset = offset - this.active * this.size;
    },
    swipeTo: function swipeTo(index) {
      var _this = this;

      this.swiping = true;
      this.correctPosition();
      setTimeout(function () {
        _this.swiping = false;

        _this.move(index % _this.count - _this.active);
      }, 30);
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move(this.count);
      }

      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          setTimeout(function () {
            _this2.swiping = false;

            _this2.move(1);

            _this2.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  }
});

exports.default = _default;

/***/ }),

/***/ "5zde":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("zQR9");
__webpack_require__("qyJz");
module.exports = __webpack_require__("FeBl").Array.from;


/***/ }),

/***/ "9fcw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9nkg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9xn2":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xL5C");
__webpack_require__("9fcw");

/***/ }),

/***/ "ACuM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/base/shelter/shelter.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var shelter = ({
    name: "shelter",
    data: function data() {
        return {
            visible: false,
            closed: true,
            onClose: null,
            zIndex: 2000,
            backgroundColor: 'rgba(0, 0, 0, 0.33)'
        };
    },

    methods: {
        destroyElement: function destroyElement() {
            this.$el.removeEventListener('transitionend', this.destroyElement);
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        close: function close() {
            this.visible = false;
        },
        onClick: function onClick() {
            if (this.closed) {
                this.close();
            }
            this.$emit('click', this.$el);
        }
    },
    watch: {
        visible: function visible(value) {
            if (!value) {
                if (typeof this.onClose === 'function') {
                    this.onClose(this);
                }

                this.$el.addEventListener('transitionend', this.destroyElement);
            }
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-620d7e6d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/base/shelter/shelter.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"shelter"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"shelter",style:({
             backgroundColor: _vm.backgroundColor,
             zIndex: _vm.zIndex,
         }),on:{"click":_vm.onClick}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var shelter_shelter = (esExports);
// CONCATENATED MODULE: ./src/base/shelter/shelter.vue
function injectStyle (ssrContext) {
  __webpack_require__("YH8C")
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
  shelter,
  shelter_shelter,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var base_shelter_shelter = (Component.exports);

// CONCATENATED MODULE: ./src/base/shelter/index.js



var ShelterController = vue_esm["default"].extend(base_shelter_shelter);

var instance = void 0;

var shelter_Shelter = function Shelter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (vue_esm["default"].prototype.$isServer) return;

    var userOnClose = options.onClose;

    var id = 'shelter_component';

    options.onClose = function () {
        Shelter.close(userOnClose);

        instance = undefined;
    };

    instance = new ShelterController({
        data: options
    });

    instance.id = id;

    instance.vm = instance.$mount();

    if (options.element) {
        options.element.appendChild(instance.vm.$el);
    } else {
        document.body.appendChild(instance.vm.$el);
    }

    instance.vm.visible = true;

    instance.dom = instance.vm.$el;

    return instance.vm;
};

shelter_Shelter.show = function (options) {
    return shelter_Shelter(options);
};

shelter_Shelter.close = function (userOnClose) {
    instance && instance.close();

    typeof userOnClose === 'function' && userOnClose();
};

/* harmony default export */ var base_shelter = __webpack_exports__["a"] = (shelter_Shelter);

/***/ }),

/***/ "BTmN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(__webpack_require__("ArwO"));

var _clickoutside = _interopRequireDefault(__webpack_require__("lfQ0"));

var _touch = _interopRequireDefault(__webpack_require__("pNwR"));

var THRESHOLD = 0.15;

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "clickoutside",
        rawName: "v-clickoutside:touchstart",
        value: _vm.onClick,
        expression: "onClick",
        arg: "touchstart"
      }],
      class: _vm.b(),
      on: {
        "click": function click($event) {
          _vm.onClick('cell');
        },
        "touchstart": _vm.startDrag,
        "touchmove": _vm.onDrag,
        "touchend": _vm.endDrag,
        "touchcancel": _vm.endDrag
      }
    }, [_c('div', {
      class: _vm.b('wrapper'),
      style: _vm.wrapperStyle,
      on: {
        "transitionend": function transitionend($event) {
          _vm.swipe = false;
        }
      }
    }, [_vm.leftWidth ? _c('div', {
      class: _vm.b('left'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.onClick('left');
        }
      }
    }, [_vm._t("left")], 2) : _vm._e(), _vm._t("default"), _vm.rightWidth ? _c('div', {
      class: _vm.b('right'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.onClick('right');
        }
      }
    }, [_vm._t("right")], 2) : _vm._e()], 2)]);
  },
  name: 'swipe-cell',
  mixins: [_touch.default],
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },
  directives: {
    Clickoutside: _clickoutside.default
  },
  data: function data() {
    return {
      offset: 0,
      draging: false
    };
  },
  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        transform: "translate3d(" + this.offset + "px, 0, 0)",
        transition: this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      };
    }
  },
  methods: {
    open: function open(position) {
      var offset = position === 'left' ? this.leftWidth : -this.rightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = offset;
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.open('right'); // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.open('left');
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.draging = true;
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.offset;
      }
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);
      var deltaX = this.deltaX;

      if (deltaX < 0 && (-deltaX > this.rightWidth || !this.rightWidth) || deltaX > 0 && (deltaX > this.leftWidth || deltaX > 0 && !this.leftWidth)) {
        return;
      }

      if (this.direction === 'horizontal') {
        event.preventDefault();
        this.swipeMove(deltaX);
      }

      ;
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.draging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1);
      }

      ;
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  }
});

exports.default = _default;

/***/ }),

/***/ "G3JL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/agreement/service-agreement.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var service_agreement = ({
    name: "service-agreement"
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-024d79dc","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/agreement/service-agreement.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"service-agreement"},[_c('p',[_vm._v("\n        广东航道通移动客户端（以下简称“广东航道通”）由广东省航道事务中心提供。在使用前，请认真阅读《广东航道通移动客户端用户使用协议》（以下简称“本协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权下载、安装或使用本“广东航道通”及其相关服务。您一旦下载、安装、复制或以其它方式使用“广东航道通”产品，将视为对本“协议”的接受，即表示您同意接受本“协议”各项条款的约束。如果您不同意本“协议”中的条款，请勿下载、安装、复制或以其它方式使用广东航道通移动客户端软件。“本协议”是用户与广东航道事务中心之间关于用户下载、安装、使用、复制的法律协议。")]),_vm._v(" "),_c('h4',[_vm._v("一、总则")]),_vm._v(" "),_c('p',[_vm._v("1.1本协议双方为广东航道通与“广东航道通”的用户（以下简称“您”）。")]),_vm._v(" "),_c('p',[_vm._v("\n        1.2自您首次使用“广东航道通”时起，本协议即在广东省航道事务中心和您之间产生法律效力。本协议条款将构成对您具有约束力的法律文件，同时还表明您已完全同意并承认广东省航道事务中心已经履行了相关的提示和通知义务。")]),_vm._v(" "),_c('p',[_vm._v("1.3广东省航道事务中心有权修改或重新制定本协议，并通过公告形式告知您。您在公告之日后使用“广东航道通”的行为视为接受广东省航道事务中心对本协议的修改或重新制定。")]),_vm._v(" "),_c('h4',[_vm._v("二、使用“广东航道通”")]),_vm._v(" "),_c('p',[_vm._v("\n        2.1“广东航道通”由广东省航道事务中心研发，包括电子航道图显示和浏览、定位和助航、查询和搜索、AIS船舶显示和信息查询、船舶编组和管理、助航信息等相关的服务，具体服务内容由广东省航道事务中心按照“现状”向您提供。广东省航道事务中心有权自行确定“广东航道通”的形式和具体内容，广东省航道事务中心有权自行变更、中止或终止“广东航道通”的部分或全部服务，有权发布新版本并要求您使用。\n        "),_c('br'),_vm._v("\n        请您务必在确保安全的前提下使用“广东航道通”服务，以防发生事故或其他危险情况。“广东航道通”所提供的数据、信息及服务仅供参考，请不要以此作为船舶航行的唯一依据，在您行驶时以实际的航道状况为准，严格遵守相关法律法规。\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n        2.2“广东航道通”的部分服务有账号注册功能，请您按照页面提示完成账号注册程序。其中的部分服务可能在注册账号后才能使用。在注册成功后，您将开通一个用户账号，请您自行负责保管。如果您已拥有账号，您可以通过账号直接登录。在账号注册过程中，您应当按照法律法规要求，根据页面提示准确提供账号注册所需个人资料，包括但不限于密码、手机号码等（统称为“个人资料”）。您保证您提供的个人资料均真实、完整、准确，并在注册资料发生任何变更时，及时更新最新资料。如有合理理由认为您提供的个人资料不实、不完整、不准确，或者未及时更新的，广东省航道事务中心有权向您询问并发出要求更正的通知，并有权自行删除相关资料，直至暂停、终止对您服务的部分或全部功能。您自行承担因此产生的全部后果和损失，广东省航道事务中心对此不承担责任。")]),_vm._v(" "),_c('p',[_vm._v("\n        请您自行妥善保管您的账号、密码及其他注册资料，并对您的用户账号下发生的一切行为承担责任。如果由于您未能妥善保管账号、密码及其他注册资料而使您自己、广东省航道事务中心、其他用户或任何第三方造成损害，您自行承担因此产生的全部后果和损失。")]),_vm._v(" "),_c('p',[_vm._v("\n        您所注册账号的所有权归属于广东省航道事务中心，使用权仅归属于您，除非有其他合法事由，并经过广东省航道事务中心同意，您不得将账号赠与、转让、售卖、借用或租用给他人。如果发生前述事项，您同意自行承担因此产生的全部后果和损失，广东省航道事务中心对此不承担责任，并保留追究相关行为人法律责任的权利。")]),_vm._v(" "),_c('p',[_vm._v("\n        如果发现您的账号存在未获授权的使用，或者其他可能危害您的账号安全的情形时，您应立即修改密码，并立即以有效方式通知广东省航道事务中心，要求广东省航道事务中心暂停相关服务。您理解广东省航道事务中心对您的请求采取行动需要合理时间，广东省航道事务中心对在采取行动前已经产生的后果（包括但不限于您的任何损失）不承担法律法规明确规定之外的责任。对于非因广东省航道事务中心的原因导致他人利用您的账号所进行的任何行为及因此而产生的后果或损失，请您向相应责任人索赔，广东省航道事务中心将提供必要的合理协助。")]),_vm._v(" "),_c('p',[_vm._v("\n        如果您遗失账号或遗忘密码，您应当按照广东省航道事务中心提示的途径申请找回账号或修改密码。您应当妥善保管注册资料与密码保护资料，如果由于您提供的资料不真实、不完整、不准确、不真实或由于广东省航道事务中心以外的原因导致您的资料被他人知悉，您可能无法找回账号或修改密码。广东省航道事务中心通过识别您所提供资料与系统保存资料的一致性进行判断，广东省航道事务中心不保证您一定可以通过前述方式找回账号或修改密码。")]),_vm._v(" "),_c('p',[_vm._v("\n        如您连续六个月未使用您的账号，广东省航道事务中心有权对该账号进行注销，您将不能再通过该账号登录或使用“广东航道通”的部分服务。")]),_vm._v(" "),_c('p',[_vm._v("\n        2.3为达到您使用“广东航道通”服务的目的，广东省航道事务中心在此授予您一项个人的、不可转让的、不可转授权的、非排他性的、可撤销的普通使用许可，以使得您能够以本协议许可的方式使用“广东航道通”相关服务。")]),_vm._v(" "),_c('p',[_vm._v("\n        本协议未明确的其他一切权利归广东省航道事务中心所有，本协议未授予您任何其他未明示的权利。如您使用其他权利，您需要及时联系广东省航道事务中心，事先获得广东省航道事务中心的书面许可，并与广东省航道事务中心另行签订书面协议。")]),_vm._v(" "),_c('h4',[_vm._v("三、用户行为要求")]),_vm._v(" "),_c('p',[_vm._v("\n        3.1您声明并保证，您对您通过“广东航道通”服务上报或以其它方式向广东省航道事务中心提供的任何信息，包括但不限于文字、声音、图片、视频、音频等信息（统称为“用户内容”），拥有合法权利或有效的许可或授权。否则，广东省航道事务中心有权自行决定对您的用户内容屏蔽或删除。您理解并同意，广东省航道事务中心不承担必须公布您提供的用户内容的义务，除另有约定之外，广东省航道事务中心对您提交的用户内容不会提供任何报酬。")]),_vm._v(" "),_c('p',[_vm._v("\n        您理解并同意，您对您通过“广东航道通”服务所提交内容的真实性、准确性、完整性、及时性负责，并且该等内容不违反任何法律法规，不侵犯任何第三方权益，不涉及或鼓励侵权行为或其他非法行为。否则，您应自行承担因此产生的责任和后果。\n        3.2您理解并同意，“广东航道通”服务需要结合相关设备使用，您保证您为所使用设备的合法所有者或使用者，否则您应当立即停止使用“广东航道通”产品并将设备归还给设备所有人。如果您对您使用的设备进行任何形式的刷机、拆卸、改装等可能影响设备性能的操作，可能会导致“广东航道通”的部分或全部服务无法使用，您理解并自行承担此风险，广东省航道事务中心对此不承担任何责任。如果您将您使用的设备赠与、转让、售卖、借用或租用给他人，您应当充分告知“广东航道通”服务的存在及本协议的内容，您务必在交付设备前登出您使用的账号。否则，由此产生的任何后果和损失均由您自行承担责任，广东省航道事务中心对此不承担任何责任。")]),_vm._v(" "),_c('p',[_vm._v("\n        您理解并同意，在使用“广东航道通”时，您应遵守所有适用的法律、法规、规章、规范、政策、行政命令及社会公序良俗。您在使用“广东航道通”过程中，不得以任何方式实施，也不得同意、授权或指示任何其他主体从事包括但不限于下列任何行为：")]),_vm._v(" "),_c('p',[_vm._v("(1)反对宪法所确定的基本原则的行为；")]),_vm._v(" "),_c('p',[_vm._v("(2)宣扬或实施危害国家主权、国家安全、国家秘密、国家统一、国家荣誉、国家利益、民族关系、民族团结、社会秩序、社会稳定、公序良俗的行为；")]),_vm._v(" "),_c('p',[_vm._v("\n        (3)宣扬或实施煽动民族仇恨或民族歧视的、破坏民族团结的、破坏国家宗教政策的、宣扬邪教和封建迷信的、散布谣言的、扰乱社会秩序的、破坏社会稳定的、侮辱的、诽谤的、淫秽的、色情的、暴力的、恐怖的、教唆犯罪的行为；")]),_vm._v(" "),_c('p',[_vm._v("(4)宣扬或实施含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵或其它道德上令人反感的内容的行为；")]),_vm._v(" "),_c('p',[_vm._v("(5)宣扬或提供关于非法行为的说明信息；")]),_vm._v(" "),_c('p',[_vm._v("\n        (6)宣扬或实施侵害他人的人身财产、名誉权、肖像权、知识产权、商业秘密权等合法权益的行为；(7)上载、张贴、发表、发布、传送、传播、存储任何广告信息、垃圾信息、病毒或旨在危害计算机软硬件正常运转的代码、文档或其他任何违法信息；")]),_vm._v(" "),_c('p',[_vm._v("(8)制作、发布、传播用于窃取他人的账号、财产及个人信息的网站、软件或服务，或利用“广东航道通”跟踪、追踪、监视、骚扰或伤害他人；")]),_vm._v(" "),_c('p',[_vm._v("(9)收集或存储有关其他用户的个人数据，用于法律法规或本协议禁止的行为或活动；")]),_vm._v(" "),_c('p',[_vm._v("(10)进行任何可能对互联网或其它通信网络的正常运转造成不利影响的行为；")]),_vm._v(" "),_c('p',[_vm._v("\n        (11)对“广东航道通”服务及数据内容进行修改、复制、发布、传输、公开展示、展览、播放、翻制、翻译、发行、出版、授权、从其创建衍生产品、转让、出售、逆向工程、反编译，或试图从“广东航道通”服务或其任何部分提取源代码或获取原始数据；")]),_vm._v(" "),_c('p',[_vm._v("(12)使用任何漫游器、抓取工具、网站搜索/检索应用程序或其他工具检索或索引“广东航道通”服务的任一部分，或出于任何未经授权的目的收集关于用户的信息；")]),_vm._v(" "),_c('p',[_vm._v("(13)脱离“广东航道通”服务单独使用或展示相关内容，为了商业运营目的印刷包含相关内容截图的销售材料，或将相关内容作为核心内容整合到印刷品中；")]),_vm._v(" "),_c('p',[_vm._v("\n        (14)对“广东航道通”服务或者其运行过程中展示的任何航道数据或其它数据，以及“广东航道通”客户端与服务器端的交互数据进行更改、修改或创作任何衍生作品，包括但不限于使用插件、外挂或非经授权的第三方工具或服务接入“广东航道通”服务；")]),_vm._v(" "),_c('p',[_vm._v("(15)转让根据本协议授予的任何使用许可，或基于对“广东航道通”服务的使用权设置担保权益；")]),_vm._v(" "),_c('p',[_vm._v("(16)将“广东航道通”服务以收费或其他营利方式进行提供，无论是否为直接经济或金钱收益；")]),_vm._v(" "),_c('p',[_vm._v("(17)其他以任何不合法的方式、为任何不合法的目的或以任何与本协议不一致的方式使用“广东航道通”服务，或进行其他未经广东省航道事务中心明确许可的行为。")]),_vm._v(" "),_c('p',[_vm._v("3.3\n        您理解并同意，您对您使用“广东航道通”服务的一切行为负责。广东省航道事务中心有权依据合理判断对违反法律法规或本协议的行为作出处理，并保留对该等违反行为采取法律所能提供的所有补救手段的全部权利。广东省航道事务中心有权对违反法律法规及本协议的任何用户调查并采取适当的法律行动，包括民事诉讼。广东省航道事务中心有权根据违法违规行为的严重程度，将上述违法违规行为的线索和您的个人信息报告司法机关或其他执法机关，并配合司法机关或其他执法机关进行的调查、听证、起诉等。您自行承担由此产生的任何法律责任。")]),_vm._v(" "),_c('p',[_vm._v("\n        您理解并同意，如果因为您违反法律法规或本协议而导致广东省航道事务中心、其他用户或任何第三方造成损害，引起任何和全部索赔、请求、损失、责任和费用，您自行承担因此产生的全部后果和损失，包括但不限于罚款、赔偿金、诉讼费、律师费等，广东省航道事务中心对此不承担任何责任。")]),_vm._v(" "),_c('h4',[_vm._v("四、知识产权归属")]),_vm._v(" "),_c('p',[_vm._v("\n        4.1广东省航道事务中心拥有“广东航道通”服务及相关内容的著作权、商标权、专利权等所有法定权利、资格和利益（不论这些权利是否已注册、不论这些权利可能存在于世界何处），包括但不限于“广东航道通”产品中的航道图数据、源代码、文档、商标、标志等。这些权利受著作权法、商标法、专利法、反不正当竞争法等相关法律法规和以及国际条约的保护。此外，经由“广东航道通”服务向您呈现的第三方服务、广告或其他信息所包含的内容，亦受到著作权、商标权、专利权或其他法律保护。")]),_vm._v(" "),_c('p',[_vm._v("\n        您对本协议的同意和对“广东航道通”服务的使用，不涉及上述任何知识产权的转让，上述全部知识产权仍归广东省航道事务中心或相应权利人所有。未经广东省航道事务中心和/或相应权利人事先书面同意，您不能自行实施、利用、转让或许可任何三方实施、利用、转让上述知识产权，您亦不能修改、租借、出售、制作衍生作品或以其他方式使用任何部分或全部上述知识产权。您不得以任何方式删除、掩藏、修改或替换“广东航道通”服务中所附的或包含的任何专有权利声明，或广东省航道事务中心及其合作伙伴的任何版权标识、商标、服务标记、标识、商号、企业名称、域名、审图号、出版号及其它明显的标志。")]),_vm._v(" "),_c('p',[_vm._v("\n        除非您与广东省航道事务中心或相应权利人另行达成书面协议，您不能使用广东省航道事务中心及相应权利人的任何标志。本协议没有授予您以任何形式或目的使用“广东航道通”服务标志的权利，也没有授予您使用任何广东省航道事务中心其它标志或任何第三方标志的权利。")]),_vm._v(" "),_c('p',[_vm._v("\n        4.2您理解并同意，为持续改善广东省航道事务中心为您提供的各项服务，除非有相反证明，您使用“广东航道通”服务上传、发布或传输内容即代表了您有权且同意在全世界范围内，永久性的、不可撤销的、免费的授予广东省航道事务中心及其关联方对该内容的存储、使用、发布、复制、修改、改编、出版、翻译、据以创作衍生作品、传播、表演和展示等权利；将内容的全部或部分编入其他任何形式的作品、媒体、技术中的权利；对您的上传、发布的内容进行商业开发的权利；通过有线或无线网络向计算机终端、移动通讯终端（包括但不限于便携式通讯设备如手机和智能平板电脑等）、手持数字影音播放设备、电视接收设备（模拟信号接收设备、数字信号接收设备、数字电视、IPTV、电视机机顶盒、视频投影仪、车载电视、互联网电视/OTT终端、智能电视等带互联网接入功能的播放设备等）、其他智能硬件终端（包括但不限于智能机器人、智能冰箱、智能音箱等）等提供信息的下载、点播、数据传输、移动视频业务（包括但不限于SMS、MMS、WAP、IVR、Streaming、3G、手机视频等无线服务）及其相关宣传和推广等服务的权利；以及再授权给其他第三方以上述方式使用的权利。")]),_vm._v(" "),_c('p',[_vm._v("\n        您理解并同意，尽管有上述约定，您通过“广东航道通”服务上报、反馈、分享、添加、标注、纠正或以其他方式向广东省航道事务中心提交航道信息、航标信息、问题截图、纠错信息、问题反馈、改进建议或意见等内容或类似内容时，前述任何内容的全部知识产权、所有权及其他现行及未来法律规定的全部法律权利自您提交之时全部自动转让给广东省航道事务中心，并且广东省航道事务中心无需向您支付任何费用。")]),_vm._v(" "),_c('h4',[_vm._v("五、隐私权政策")]),_vm._v(" "),_c('p',[_vm._v("本隐私权政策旨在帮助您了解广东省航道事务中心会收集哪些数据、为什么收集这些数据、会利用这些数据做什么以及我们如何保护这些数据。")]),_vm._v(" "),_c('p',[_vm._v("\n        5.1您理解并同意广东省航道事务中心将用户的使用记录上传到服务器。用户使用记录包括“广东航道通”功能使用频次、搜索记录、位置信息、设备信息、用户在“广东航道通”中新建的数据（标注信息、船队信息、注册用户信息）等。这些数据将用于分析大多数用户的使用习惯，以便于广东省航道事务中心更好地改善“广东航道通”功能。")]),_vm._v(" "),_c('p',[_vm._v("5.2广东省航道事务中心会以高度负责的态度对待您的信息，不会与广东省航道事务中心及其下属组织之外的任何公司、组织和个人分享您的个人信息。但以下情况除外：")]),_vm._v(" "),_c('p',[_vm._v("（1）事先获得您的明确授权和同意。")]),_vm._v(" "),_c('p',[_vm._v("（2）根据适用的法律法规、法律程序的要求或强制性的政府要求或司法裁定广东省航道事务中心必须提供。")]),_vm._v(" "),_c('p',[_vm._v("（3）在法律要求和允许的范围内，为了保护广东省航道事务中心、广东省航道事务中心所服务的用户或社会公众的利益、财产或安全免遭损害而有必要提供。")]),_vm._v(" "),_c('p',[_vm._v("（4）基于学术研究而使用。")]),_vm._v(" "),_c('p',[_vm._v("（5）基于符合法律法规的社会公共利益而使用。")]),_vm._v(" "),_c('p',[_vm._v("（6）符合与您签署的其它法律文件（如本条款）的约定而使用。")]),_vm._v(" "),_c('p',[_vm._v("（7）由于“广东航道通”服务由系统开发商开发，广东省航道事务中心可能会向系统开发商提供您的个人信息。“广东航道通”系统开发商无权将您的个人信息用于其它用途。")]),_vm._v(" "),_c('p',[_vm._v("\n        5.3广东省航道事务中心会采取适当的符合业界标准的安全措施和技术手段存储和保护您的个人信息，以防止其丢失、被误用、受到未授权访问或泄露、被篡改或毁坏，如采用HTTPS加密传输、信息加密存储、严格限制数据中心的访问、使用专用网络通道及网络代理。您的个人信息存放在有密码控制的服务器中，访问均是受到限制的。")]),_vm._v(" "),_c('p',[_vm._v("5.4本政策的执行、解释及争议的解决均使用中华人民共和国法律，且不考虑任何冲突法。")]),_vm._v(" "),_c('p',[_vm._v("您和广东省航道事务中心就本政策内容或执行发生任何争议的，双方应友好协商解决；如双方无法协商解决争议时，双方同意应将争议提交至被告所住地人民法院裁决。")]),_vm._v(" "),_c('p',[_vm._v("六、 免责及责任限制\n        6.1您理解并同意，“广东航道通”服务可能会受到多种因素影响，包括但不限于您的原因、网络设备维护、网络连接故障、网络信号未覆盖、网络传输延时或中断、电子终端、通讯或其他系统的故障或误差、电力故障、罢工、劳动争议、暴乱、骚乱、火灾、洪水、风暴、爆炸、战争、政府行为、司法行政机关的命令、其他不可抗力或第三方的不作为等不可抗力；“广东航道通”服务也可能受到各种安全问题的侵扰，例如您下载安装的其它软件或访问的其他网站中含有病毒、木马或其他恶意程序，威胁到您的设备和数据安全，进而影响“广东航道通”服务的使用等。除法律法规明确规定要求广东省航道事务中心承担责任之外，因本款所述原因给您造成的任何损失由您本人自行承担，广东省航道事务中心对此不承担责任。")]),_vm._v(" "),_c('p',[_vm._v("\n        6.2您理解并同意，除法律法规明确规定要求广东省航道事务中心承担责任之外，您使用“广东航道通”服务及通过“广东航道通”服务获得任何商品、服务或内容所可能引发的任何风险和后果由您本人自行承担，广东省航道事务中心对此不承担责任。在所有情况下，广东省航道事务中心对于任何不能合理预见的损失或损害不承担责任。")]),_vm._v(" "),_c('p',[_vm._v("\n        6.3“广东航道通”服务中可能包括其他用户或第三方提交的内容，提供此类不属于广东省航道事务中心的内容仅为向您提供便利，该等内容由其发布者承担全部责任。广东省航道事务中心可能会审查相关内容，以确定其是否违反法律法规或广东省航道事务中心相关政策，且在广东省航道事务中心有合理理由时将其删除或拒绝显示，但这并不意味着广东省航道事务中心有义务或必然会审查该等内容。您对其他用户或第三方所提交内容的使用表明您同意您将自行对其进行评估，并承担与之相关的所有风险和后果。")]),_vm._v(" "),_c('p',[_vm._v("\n        6.4广东省航道事务中心作为服务提供商，根据相关法律法规的要求对非法转载、虚假发布、盗版行为的发生会进行必要监控，但不保证会发现所有上述行为。除法律法规明确规定要求广东省航道事务中心承担责任之外，广东省航道事务中心对您或他人实施的此类违法或侵权行为不承担任何责任。")]),_vm._v(" "),_c('p',[_vm._v("七、服务的变更、中止和终止\n        广东省航道事务中心有权自行选择发出或者不发出通知，以变更、中止或终止提供“广东航道通”服务，也有权自行选择变更、中止或终止您对“广东航道通”服务的使用。如因服务器或系统的维护、升级需要或其他原因需要暂停或终止“广东航道通”服务的全部或者部分内容，广东省航道事务中心将尽可能事先公告。如果广东省航道事务中心永久终止提供“广东航道通”服务，广东省航道事务中心将在服务终止前提前在相关软件或网站上公告，您同意广东省航道事务中心无需单独通知您。除法律法规明确要求广东省航道事务中心承担责任之外，广东省航道事务中心无需因“广东航道通”服务的任何变更、中止和终止向您或者任何第三方承担任何责任。")]),_vm._v(" "),_c('h4',[_vm._v("八、期限及终止")]),_vm._v(" "),_c('p',[_vm._v("8.1本协议的生效日期为您同意本协议之日或使用“广东航道通”服务之日中的较早日期，并且无固定的终止日期，除非根据以下情形而终止：")]),_vm._v(" "),_c('p',[_vm._v("(1)您丧失民事权利能力或民事行为能力，或丧失其他主体的法律授权；")]),_vm._v(" "),_c('p',[_vm._v("(2)广东省航道事务中心因为任何原因终止向您提供“广东航道通”服务；")]),_vm._v(" "),_c('p',[_vm._v("(3)您主动地不再使用“广东航道通”服务；")]),_vm._v(" "),_c('p',[_vm._v("(4)其他导致本协议终止的原因。")]),_vm._v(" "),_c('p',[_vm._v("\n        8.2本协议由于任何原因终止时，您根据本协议所获得的一切权利及许可将全部同时终止。届时，您将无法继续使用“广东航道通”服务的任何部分，包括但不限于您的用户账号及用户内容。此外，您同意的相关单独附加条款也同时终止。")]),_vm._v(" "),_c('p',[_vm._v("\n        8.3您理解并同意，本协议终止后，广东省航道事务中心将继续保存通过“广东航道通”服务收集的您的所有信息，并根据本协议使用，除法律法规明确规定的情形外，广东省航道事务中心无义务向您或者任何第三方披露您账号中的任何信息。")]),_vm._v(" "),_c('p',[_vm._v("\n        8.4在本协议终止后，广东省航道事务中心仍然可以依据相关法律法规及本协议向您追究违反法律法规或违反本协议行为的责任，本协议中关于个人信息保护、知识产权、担保与保证、责任承担、免责及责任限制、法律适用和争议解决的条款始终有效。")]),_vm._v(" "),_c('h4',[_vm._v("九、其他")]),_vm._v(" "),_c('p',[_vm._v("\n        9.1您理解并同意，广东省航道事务中心就有关“广东航道通”服务的任何通知可通过如下任一途径向您发送：在软件及网站张贴一般通知；向您提供的移动通讯号码发送短信通知；前述通知自发布或发送之日即视为已经对您送达，您理解并同意您有义务查收任何上述通知。")]),_vm._v(" "),_c('p',[_vm._v("9.2\n        如果本协议的任何约定与适用的法律法规冲突的，以适用的法律法规的规定为准。如本协议中的任何约定无论因何种原因无效或不可执行，其在不影响其他约定的情况下从本协议中被移除，各方应以具有相同效果的有效、可执行的且最能体现本协议内容和意图的条款（或部分）予以替换。本协议中的其余约定仍应保持有效并且具有完全的法律拘束力。")]),_vm._v(" "),_c('p',[_vm._v("9.3未经广东省航道事务中心的事先书面同意，您不得向任何第三方转让本协议及其项下的任何权利和义务。任何违反本协议的转让行为均是无效的。")]),_vm._v(" "),_c('p',[_vm._v("\n        9.4本协议（包括补充条款、附加条款及其他相关条款）构成您与广东省航道事务中心之间就访问和使用“广东航道通”服务的全部协议和理解，并取代您与广东省航道事务中心先前存在的关于前述问题的任何及全部的协议或理解。")]),_vm._v(" "),_c('p',[_vm._v("9.5除非广东省航道事务中心以书面方式确认并同意，广东省航道事务中心未履行本协议中任何权利或条款的行为不构成广东省航道事务中心对相关权利或条款的放弃。")]),_vm._v(" "),_c('p',[_vm._v("\n        9.6本协议的订立、效力、解释、履行、修改和终止，访问和使用“广东航道通”服务以及争议的解决均适用中国法律。因访问和使用“广东航道通”服务而发生的任何争议，双方应首先通过友好协商的方式加以解决。协商不成时，任何一方均可向广东省航道事务中心所在地武汉市XXX法院提起诉讼。因访问和使用“广东航道通”服务而发生任何争议或任何争议正在进行诉讼时，除争议的事项外，双方仍应继续行使各自的其他权利并履行各自的其他义务。")]),_vm._v(" "),_c('p',[_vm._v("9.7广东省航道事务中心在法律法规许可的范围内对本协议享有解释权。")]),_vm._v(" "),_c('p',[_vm._v("9.8您对广东省航道事务中心或“广东航道通”服务或本条款的意见及建议可通过拨打服务电话"),_c('a',{attrs:{"href":"tel:13922298050"}},[_vm._v("13922298050")]),_vm._v("与服务人员进行联系。")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var agreement_service_agreement = (esExports);
// CONCATENATED MODULE: ./src/components/agreement/service-agreement.vue
function injectStyle (ssrContext) {
  __webpack_require__("ePOg")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-024d79dc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  service_agreement,
  agreement_service_agreement,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_agreement_service_agreement = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Gu7T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("c/Tr");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "HOuZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapMixins; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cordova_map__ = __webpack_require__("HHe6");


// 地图保存信息
var MapMixins = {
    methods: {
        // 初始化
        reload: function reload() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["j" /* getMapReload */]();
        },

        // 定位
        getLocation: function getLocation() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["i" /* getMapLocation */]();
        },

        // 设置地图是否可用
        enable: function enable(_enable) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["v" /* setMapEnable */](_enable);
        },

        // 设置图层展示
        visibility: function visibility(visible) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["y" /* setMapVisibility */](visible);
        },

        // 设置缩放级别
        zoom: function zoom() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["z" /* setMapZoom */]();
        },

        // 放大
        enlarge: function enlarge() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["A" /* setMapZoomIn */]();
        },

        // 缩小
        reduce: function reduce() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["B" /* setMapZoomOut */]();
        },

        // 获取比例尺
        getScale: function getScale() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["k" /* getMapScale */]();
        },

        // 设置比例尺
        setScale: function setScale() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["w" /* setMapScale */]();
        },

        // 设置地图中心点
        setCenter: function setCenter(x, y, scale) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["t" /* setMapCenterAt */](x, y, scale);
        },

        // 获取地图中心点
        getCenter: function getCenter() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["g" /* getMapCenter */]();
        },

        // 对比坐标点是否在范围内
        getContrastPoint: function getContrastPoint(_ref, _ref2) {
            var x = _ref.x,
                y = _ref.y;
            var maxX = _ref2.maxX,
                maxY = _ref2.maxY,
                minX = _ref2.minX,
                minY = _ref2.minY;

            return x < maxX && x > minX && y < maxY && y > minY;
        },

        // 屏幕点转中心点
        screenToLocation: function screenToLocation(x, y) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["r" /* screenToLocation */](x, y);
        },

        // 地图点转换屏幕点
        locationToScreen: function locationToScreen(x, y) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["o" /* locationToScreen */](x, y);
        },

        // 获取样式
        style: function style() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["l" /* getStyle */]();
        },

        // 设置样式
        setStyle: function setStyle(style) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["D" /* setStyle */](style);
        },

        // 设置要素
        // setElementList(data) {
        //     for (let key in data) {
        //         if (key === 'beacon' && isArray(data.beacon).length) {
        //             map.listNavInfos(data.beacon)
        //         }
        //         else if (key === 'water' && isArray(data.water).length) {
        //             map.listWaterStationInfos(data.water)
        //         }
        //         else if (key === 'ship' && isArray(data.ship).length) {
        //             map.listAISInfos(data.ship)
        //         }
        //         else if (key === 'build' && isArray(data.build).length) {
        //             map.listRegulationInfos(data)
        //         }
        //     }
        // },

        // 显示隐藏要素点
        setLayersVisible: function setLayersVisible() {
            var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var visible = arguments[1];

            var index = arr[0];
        },

        // 定位要素
        positionElement: function positionElement(id, type, items) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["q" /* positioningElement */](id, type, items);
        },

        // 路径规划
        pathPlanning: function pathPlanning(start, end) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["p" /* pathPlanning */](start, end);
        },

        // 语音播报
        speak: function speak(message) {
            __WEBPACK_IMPORTED_MODULE_0__cordova_map__["F" /* speak */](message);
        },

        // 设置语音类别
        setSpeaker: function setSpeaker(theme) {
            __WEBPACK_IMPORTED_MODULE_0__cordova_map__["C" /* setSpeaker */](theme);
        },

        // 设置视角
        setMapVisualAngle: function setMapVisualAngle(visible) {
            if (visible) {
                return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["x" /* setMapTruenorth */]();
            } else {
                return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["u" /* setMapCompassMode */]();
            }
        },

        // 设置水深
        setMapDepth: function setMapDepth(data) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["s" /* setMapAirworthiness */](data);
        },

        // 获取中心点
        getMapExtent: function getMapExtent() {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["h" /* getMapExtent */]();
        },
        changeMapChartLayer: function changeMapChartLayer(visible) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["a" /* changeChartLayerVisible */](visible);
        },
        changeMapTieldLayer: function changeMapTieldLayer(visible) {
            return __WEBPACK_IMPORTED_MODULE_0__cordova_map__["d" /* changeTieldLayerVisible */](visible);
        }
    }
};

/***/ }),

/***/ "Hn/3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IGLS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deleteComment */
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteFabulous;
/* unused harmony export deleteInfo */
/* unused harmony export deleteMessage */
/* unused harmony export deleteResource */
/* unused harmony export deleteTemplate */
/* unused harmony export deleteType */
/* unused harmony export deleteTypeSetting */
/* unused harmony export queryComments */
/* harmony export (immutable) */ __webpack_exports__["f"] = queryCommentList;
/* unused harmony export queryFabulous */
/* harmony export (immutable) */ __webpack_exports__["g"] = queryFabulousAll;
/* unused harmony export queryInfo */
/* unused harmony export queryMoment */
/* harmony export (immutable) */ __webpack_exports__["e"] = queryCircleMessageWithUF;
/* unused harmony export queryMomentList */
/* unused harmony export queryMyMomentList */
/* unused harmony export queryMyFabulousList */
/* unused harmony export queryMyList */
/* unused harmony export queryResource */
/* unused harmony export queryTemplate */
/* unused harmony export queryTypes */
/* unused harmony export queryTypeSetting */
/* harmony export (immutable) */ __webpack_exports__["i"] = saveFabulous;
/* harmony export (immutable) */ __webpack_exports__["h"] = saveComment;
/* unused harmony export saveInfo */
/* harmony export (immutable) */ __webpack_exports__["j"] = saveMoment;
/* unused harmony export saveResource */
/* unused harmony export saveTemplate */
/* unused harmony export saveTypes */
/* unused harmony export saveTypeSetting */
/* harmony export (immutable) */ __webpack_exports__["b"] = queryCircleMessageList;
/* harmony export (immutable) */ __webpack_exports__["d"] = queryCircleMessageListBeFabulousByUserId;
/* harmony export (immutable) */ __webpack_exports__["c"] = queryCircleMessageListBeCommentByUserId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_axios__ = __webpack_require__("2MJX");


function deleteComment(data) {
    var url = '/circle/deleteCircleComment';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function deleteFabulous(data) {
    var url = '/circle/deleteCircleFabulous';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function deleteInfo(data) {
    var url = '/circle/deleteCircleInfo';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function deleteMessage(data) {
    var url = '/circle/deleteCircleMessage';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function deleteResource(data) {
    var url = '/circle/deleteCircleResource';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function deleteTemplate(data) {
    var url = '/circle/deleteCircleTemplate';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function deleteType(data) {
    var url = '/circle/deleteCircleType';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function deleteTypeSetting(data) {
    var url = '/circle/deleteCircleTypeSetting';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryComments(data) {
    var url = '/circle/queryCircleComment';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryCommentList(data) {
    var url = '/circle/queryCircleCommentListByMsgId';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryFabulous(data) {
    var url = '/circle/queryCircleFabulous';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryFabulousAll(data) {
    var url = '/circle/queryCircleFabulousUserListByMsgId';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryInfo(data) {
    var url = '/circle/queryCircleInfo';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryMoment(data) {
    var url = '/circle/queryCircleMessage';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryCircleMessageWithUF(id) {
    var url = '/circle/queryCircleMessageWithUF';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

function queryMomentList(data) {
    var url = '/circle/queryCircleMessageList';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryMyMomentList(data) {
    var url = '/circle/queryCircleMessageListBeCommentByUserId';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryMyFabulousList(data) {
    var url = '/circle/queryCircleMessageListBeFabulousByUserId';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryMyList(data) {
    var url = '/circle/queryCircleMessageListBeSelf';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryResource(data) {
    var url = '/circle/queryCircleResource';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryTemplate(data) {
    var url = '/circle/queryCircleTemplate';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryTypes(data) {
    var url = '/circle/queryCircleType';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function queryTypeSetting(data) {
    var url = '/circle/queryCircleTypeSetting';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function saveFabulous(data) {
    var url = '/circle/saveCircleFabulous';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function saveComment(data) {
    var url = '/circle/saveOrUpdateCircleComment';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function saveInfo(data) {
    var url = '/circle/saveOrUpdateCircleInfo';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function saveMoment(data) {
    var url = '/circle/saveOrUpdateCircleMessage';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function saveResource(data) {
    var url = '/circle/saveOrUpdateCircleResource';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function saveTemplate(data) {
    var url = '/circle/saveOrUpdateCircleTemplate';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function saveTypes(data) {
    var url = '/circle/saveOrUpdateCircleTemplate';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

function saveTypeSetting(data) {
    var url = '/circle/saveOrUpdateCircleTypeSetting';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/**
 * 查询所有动态圈列表
 * @param data
 * @returns {AxiosPromise<any>}
 */
function queryCircleMessageList(data) {
    var url = '/circle/queryCircleMessageList';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/**
 * 查询被我点赞的动态圈列表
 * @param data
 * @returns {AxiosPromise<any>}
 */
function queryCircleMessageListBeFabulousByUserId(data) {
    var url = '/circle/queryCircleMessageListBeFabulousByUserId';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/**
 * 查询被我评论的动态圈列表
 * @param data
 * @returns {AxiosPromise<any>}
 */
function queryCircleMessageListBeCommentByUserId(data) {
    var url = '/circle/queryCircleMessageListBeCommentByUserId';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***/ }),

/***/ "LNF3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getNavigationRoute;
/* harmony export (immutable) */ __webpack_exports__["a"] = getNavigationPoint;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNavigationals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_js_axios__ = __webpack_require__("2MJX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vant_lib_toast__ = __webpack_require__("4vvA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vant_lib_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vant_lib_toast__);




/***
 * 获取导航路线
 * @param data
 * @param data.StartCoordinate 起点
 * @param data.GoalCoordinate 终点
 * @param data.Vehicle 船舶
 * @return {*}
 */
function getNavigationRoute(data) {
    var url = '/route';

    __WEBPACK_IMPORTED_MODULE_2_vant_lib_toast___default()({
        position: 'center',
        type: 'loading',
        message: '线路规划中，请稍等 ...',
        duration: 0
    });

    return __WEBPACK_IMPORTED_MODULE_1__common_js_axios__["c" /* json */].post(url, data).then(function (res) {
        try {
            res = JSON.parse(res);
        } catch (err) {
            console.log(err);
        }

        __WEBPACK_IMPORTED_MODULE_2_vant_lib_toast___default.a.clear();
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    });
}

/***
 * 获取导航路线
 * @param data
 * @param data.centerPoint.longitude
 * @param data.centerPoint.latitude
 * @param data.distance  范围
 * @param data.types  搜索类别
 * @return {*}
 */
function getNavigationPoint(data) {
    var url = '/search/geofilt';

    return __WEBPACK_IMPORTED_MODULE_1__common_js_axios__["c" /* json */].post(url, data);
}

function getNavigationals(data) {
    var url = '/search/channel';

    return __WEBPACK_IMPORTED_MODULE_1__common_js_axios__["c" /* json */].post(url, data);
}

/***/ }),

/***/ "Mqtp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__("7+uW"));

var _ImagePreview = _interopRequireDefault(__webpack_require__("MybO"));

var _utils = __webpack_require__("VxeN");

var instance;

var initInstance = function initInstance() {
  instance = new (_vue.default.extend(_ImagePreview.default))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

var ImagePreview = function ImagePreview(images, startPosition) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var config = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  instance.value = true;
  instance.images = config.images;
  instance.showIndex = config.showIndex || true;
  instance.startPosition = config.startPosition || 0;
  instance.$on('input', function (show) {
    instance.value = show;

    if (!show) {
      instance.$off('input');
      config.onClose && config.onClose();
    }
  });
  return instance;
};

ImagePreview.install = function () {
  _vue.default.use(_ImagePreview.default);
};

var _default = ImagePreview;
exports.default = _default;

/***/ }),

/***/ "MybO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(__webpack_require__("ArwO"));

var _popup = _interopRequireDefault(__webpack_require__("/4KT"));

var _touch = _interopRequireDefault(__webpack_require__("pNwR"));

var _swipe = _interopRequireDefault(__webpack_require__("24wo"));

var _swipeItem = _interopRequireDefault(__webpack_require__("beN6"));

var _utils = __webpack_require__("VxeN");

var MAX_ZOOM = 3;
var MIN_ZOOM = 1 / 3;

var _default2 = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.value ? _c('div', {
      class: _vm.b(),
      on: {
        "touchstart": _vm.onWrapperTouchStart,
        "touchend": _vm.onWrapperTouchEnd,
        "touchcancel": _vm.onWrapperTouchEnd
      }
    }, [_vm.showIndex ? _c('div', {
      class: _vm.b('index')
    }, [_vm._v(_vm._s(_vm.active + 1) + "/" + _vm._s(_vm.count))]) : _vm._e(), _c('swipe', {
      ref: "swipe",
      attrs: {
        "initial-swipe": _vm.startPosition,
        "show-indicators": false
      },
      on: {
        "change": _vm.onChange
      }
    }, _vm._l(_vm.images, function (item, index) {
      return _c('swipe-item', {
        key: index
      }, [_c('img', {
        class: _vm.b('image'),
        style: index === _vm.active ? _vm.imageStyle : null,
        attrs: {
          "src": item
        },
        on: {
          "touchstart": _vm.onTouchStart,
          "touchmove": _vm.onTouchMove,
          "touchend": _vm.onTouchEnd,
          "touchcancel": _vm.onTouchEnd
        }
      })]);
    }))], 1) : _vm._e();
  },
  name: 'image-preview',
  mixins: [_popup.default, _touch.default],
  components: {
    Swipe: _swipe.default,
    SwipeItem: _swipeItem.default
  },
  props: {
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startPosition: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: String,
      default: 'van-image-preview__overlay'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: this.startPosition
    };
  },
  computed: {
    count: function count() {
      return this.images.length;
    },
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    startPosition: function startPosition(active) {
      this.active = active;
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      event.preventDefault();
      var deltaTime = new Date() - this.touchStartTime;
      var _this$$refs$swipe = this.$refs.swipe,
          offsetX = _this$$refs$swipe.offsetX,
          offsetY = _this$$refs$swipe.offsetY; // prevent long tap to close component

      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false);
        this.resetScale();
      }
    },
    getDistance: function getDistance(touches) {
      return Math.sqrt(Math.abs((touches[0].clientX - touches[1].clientX) * (touches[0].clientY - touches[1].clientY)));
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = this.getDistance(event.touches);
    },
    onTouchStart: function onTouchStart(event) {
      var touches = event.touches;
      var offsetX = this.$refs.swipe.offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      } else if (touches.length === 2 && !offsetX) {
        this.startZoom(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = (0, _utils.range)(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = (0, _utils.range)(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = this.getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = (0, _utils.range)(scale, MIN_ZOOM, MAX_ZOOM);
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    },
    onChange: function onChange(active) {
      this.resetScale();
      this.active = active;
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    }
  }
});

exports.default = _default2;

/***/ }),

/***/ "YH8C":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YkBq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["v"] = saveOrUpdateIAddress;
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteIAddress;
/* harmony export (immutable) */ __webpack_exports__["h"] = queryIAddress;
/* harmony export (immutable) */ __webpack_exports__["y"] = saveOrUpdateILabel;
/* harmony export (immutable) */ __webpack_exports__["t"] = saveFaultReport;
/* harmony export (immutable) */ __webpack_exports__["s"] = queryReportDetail;
/* harmony export (immutable) */ __webpack_exports__["r"] = queryReport;
/* harmony export (immutable) */ __webpack_exports__["f"] = deleteReportInfo;
/* harmony export (immutable) */ __webpack_exports__["d"] = deleteILabelInfo;
/* harmony export (immutable) */ __webpack_exports__["k"] = queryILabel;
/* harmony export (immutable) */ __webpack_exports__["l"] = queryILabelDetail;
/* unused harmony export saveOrUpdateIMessage */
/* unused harmony export deleteIMessage */
/* harmony export (immutable) */ __webpack_exports__["m"] = queryIMessage;
/* unused harmony export queryNotice */
/* harmony export (immutable) */ __webpack_exports__["g"] = queryAllNotice;
/* harmony export (immutable) */ __webpack_exports__["q"] = queryNoticeDetail;
/* harmony export (immutable) */ __webpack_exports__["n"] = queryIMessageDetail;
/* unused harmony export saveOrUpdateINotice */
/* unused harmony export deleteINoticeInfo */
/* unused harmony export queryINotice */
/* harmony export (immutable) */ __webpack_exports__["z"] = saveOrUpdateIShip;
/* harmony export (immutable) */ __webpack_exports__["e"] = deleteIShip;
/* harmony export (immutable) */ __webpack_exports__["p"] = queryIShip;
/* unused harmony export deleteIBoat */
/* unused harmony export queryIShipDetail */
/* harmony export (immutable) */ __webpack_exports__["i"] = queryIBoatList;
/* unused harmony export queryIBoatDetail */
/* harmony export (immutable) */ __webpack_exports__["x"] = saveOrUpdateIInfo;
/* harmony export (immutable) */ __webpack_exports__["j"] = queryIInfo;
/* harmony export (immutable) */ __webpack_exports__["B"] = updateUserPassword;
/* unused harmony export updateUserPhone */
/* harmony export (immutable) */ __webpack_exports__["C"] = updateUserPortrait;
/* harmony export (immutable) */ __webpack_exports__["o"] = queryIPersonalDatum;
/* unused harmony export updateUserAlias */
/* harmony export (immutable) */ __webpack_exports__["A"] = updateIDefaultShip;
/* harmony export (immutable) */ __webpack_exports__["w"] = saveOrUpdateIBoat;
/* harmony export (immutable) */ __webpack_exports__["b"] = deleteIBoatByBoatId;
/* harmony export (immutable) */ __webpack_exports__["c"] = deleteIBoatById;
/* unused harmony export checkBoatIsSaved */
/* harmony export (immutable) */ __webpack_exports__["u"] = saveOrUpdateFeedback;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_axios__ = __webpack_require__("2MJX");


/***
 * 【保存或修改】我的常用地址
 *  @param data
 *  @param data.id          主键ID
 *  @param data.userId      用户ID
 *  @param data.name        地址名称
 *  @param data.longitude   经度
 *  @param data.latitude    纬度
 *  @param data.createTime  收藏时间
 *  @returns {AxiosPromise<any>}
 */
function saveOrUpdateIAddress(data) {
    var url = '/personal/saveOrUpdateIAddress';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【删除】我的地址
 * @param id    地址ID
 * @returns {AxiosPromise<any>}
 */
function deleteIAddress(id) {
    var url = '/personal/deleteIAddress';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 【查询】我的地址
 *  @param data
 *  @param data.userId      用户ID
 *  @param data.pageNumber  页码
 *  @param data.pageSize    每页展示条数
 *  @returns {AxiosPromise<any>}
 */
function queryIAddress(data) {
    var url = '/personal/queryIAddress';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【保存或修改】我的标注
 *  @param data
 *  @param data.id               主键ID
 *  @param data.userId           用户ID
 *  @param data.title            标题
 *  @param data.type             类型，1 点 2 线 3面
 *  @param data.isShared         是否分享，0私有，1共享
 *  @param data.detail           描述
 *  @param data.createTime       创建时间
 *  @param data.longitude        经度
 *  @param data.latitude         纬度
 *  @returns {*}
 */
function saveOrUpdateILabel(data) {
    var url = '/personal/saveOrUpdateILabel';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【保存或修改】故障上报
 * @param data
 * @returns {AxiosPromise<any>}
 */
function saveFaultReport(data) {
    var url = '/personal/trouble';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["c" /* json */].post(url, data);
}
/***
 * 【详细】我的上报
 * @param id   上报ID
 * @returns {AxiosPromise<any>}
 */
function queryReportDetail(id) {
    var url = '/personal/trouble/get';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { "reportId": id });
}
/***
 * 【查询】我的上报
 *  @param data
 *  @param data.userId      用户ID
 *  @param data.pageNumber  页码
 *  @param data.pageSize    每页展示条数
 *  @returns {AxiosPromise<any>}
 */
function queryReport(data) {
    var url = '/personal/queryReport';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}
/***
 * 【删除】我的上报
 * @param id    上报ID
 * @returns {AxiosPromise<any>}
 */
function deleteReportInfo(id) {
    var url = '/personal/trouble/delete';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { "reportId": id });
}

/***
 * 【删除】我的标注
 * @param id    标注ID
 * @returns {AxiosPromise<any>}
 */
function deleteILabelInfo(id) {
    var url = '/personal/deleteILabelInfo';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 【查询】我的标注
 *  @param data
 *  @param data.userId      用户ID
 *  @param data.pageNumber  页码
 *  @param data.pageSize    每页展示条数
 *  @returns {AxiosPromise<any>}
 */
function queryILabel(data) {
    var url = '/personal/queryILabel';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【查询】我的标注详细信息
 *  @param id   标注ID
 *  @returns {AxiosPromise<any>}
 */
function queryILabelDetail(id) {
    var url = '/personal/queryILabelDetail';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 【保存或修改】我的消息
 *  @param data
 *  @param data.id           主键ID
 *  @param data.userId       用户ID
 *  @param data.title        标题
 *  @param data.receiverId   接收者ID
 *  @param data.content      消息内容
 *  @param data.type         消息类型(0:个人 1:系统)
 *  @param data.createTime   消息创建时间
 *  @param data.readTime     消息读取时间
 *  @param data.isReaded     消息读取状态( 0 未读 1 已读)
 *  @returns {AxiosPromise<any>}
 */
function saveOrUpdateIMessage(data) {
    var url = '/personal/saveOrUpdateIMessage';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【删除】我的消息
 * @param id    消息ID
 * @returns {AxiosPromise<any>}
 */
function deleteIMessage(id) {
    var url = '/personal/deleteIMessage';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 我的消息
 * @param data
 * @param data.userId      用户ID
 * @param data.pageNumber  页码
 * @param data.pageSize    每页展示条数
 * @returns {*}
 */
function queryIMessage(data) {
    var url = '/personal/queryIMessage';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 我的公告列表
 * @param data
 * @param data.userId      用户ID
 * @param data.pageNumber  页码
 * @param data.pageSize    每页展示条数
 * @returns {*}
 */
function queryNotice(data) {
    var url = '/personal/queryINotice';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 我的公告列表(所有)
 * @param data
 * @param data.userId      用户ID
 * @param data.pageNumber  页码
 * @param data.pageSize    每页展示条数
 * @returns {*}
 */
function queryAllNotice(data) {
    var url = '/personal/queryAllNotice';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 我的公告详情
 * @param data
 * @param data.userId      用户ID
 * @param data.pageNumber  页码
 * @param data.pageSize    每页展示条数
 * @returns {*}
 */
function queryNoticeDetail(data) {
    var url = '/personal/queryINoticeDetail';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【查询】我的消息详细
 *  @param data
 *  @param data.userId      用户ID
 *  @param data.receiverId  接收者ID
 *  @param data.pageNumber  页码
 *  @param data.pageSize    每页展示条数
 *  @param data
 *  @returns {AxiosPromise<any>}
 */
function queryIMessageDetail(data) {
    var url = '/personal/queryIMessageDetail';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【保存或修改】我的公告
 *  @param dto
 *  @param dto.id           主键ID
 *  @param dto.userId       用户ID
 *  @param dto.title        标题
 *  @param dto.state        状态(0:编辑中 1:已发布 2:已删除)
 *  @param dto.isTop        是否置顶
 *  @param dto.abs          摘要
 *  @param dto.createTime   创建时间
 *  @param dto.publishTime  发布时间
 *  @param dto.content      公告内容
 *  @returns {AxiosPromise<any>}
 */
function saveOrUpdateINotice(data) {
    var url = '/personal/saveOrUpdateINotice';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【删除】我的公告
 * @param id    公告Id
 * @returns {AxiosPromise<any>}
 */
function deleteINoticeInfo(id) {
    var url = '/personal/deleteINoticeInfo';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 【查询】我的公告
 *  @param data
 *  @param data.userId      用户ID
 *  @param data.pageNumber  页码
 *  @param data.pageSize    每页展示条数
 *  @returns {AxiosPromise<any>}
 */
function queryINotice(data) {
    var url = '/personal/queryINotice';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【保存或修改】我的船舶
 *  @param data
 *  @param data.id                   主键ID
 *  @param data.name                 船舶名称
 *  @param data.mmsi                 船舶标识
 *  @param data.length               船长(米)
 *  @param data.width                船宽(米)
 *  @param data.draft                吃水深度(米)
 *  @param data.pureheight           船高(米)
 *  @param data.shipType             船舶类型
 *  @returns {AxiosPromise<any>}
 */
function saveOrUpdateIShip(data) {
    var url = '/personal/saveOrUpdateIShip';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【删除】我的船舶
 * @param id    船舶ID
 * @returns {AxiosPromise<any>}
 */
function deleteIShip(id) {
    var url = '/personal/deleteIShip';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 【查询】我的船舶
 *  @param data
 *  @returns {AxiosPromise<any>}
 */
function queryIShip(data) {
    var url = '/personal/queryIShip';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【删除】我的收藏船舶
 * @param id    船舶ID
 * @returns {AxiosPromise<any>}
 */
function deleteIBoat(id) {
    var url = '/personal/deleteIBoat';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 【查询】我的船舶详细信息
 *  @param id     标注ID
 *  @returns {AxiosPromise<any>}
 */
function queryIShipDetail(id) {
    var url = '/personal/queryIShipDetail';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 【查询】我的收藏船舶列表
 *  @param data
 *  @param data.userId      用户ID
 *  @param data.pageNumber  页码
 *  @param data.pageSize    每页展示条数
 *  @returns {AxiosPromise<any>}
 */
function queryIBoatList(data) {
    var url = '/personal/queryIBoatList';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【查询】我的收藏船舶详细信息
 *  @param id     标注ID
 *  @returns {AxiosPromise<any>}
 */
function queryIBoatDetail(id) {
    var url = '/personal/queryIBoatDetail';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 【保存或修改】我的信息
 *  @param data
 *  @param data.id               主键ID
 *  @param data.name             用户名
 *  @param data.email            登陆邮箱
 *  @param data.pwd              登陆密码
 *  @param data.status           登陆状态(0:未激活 1:正常 2:冻结 3:锁定)
 *  @param data.phone            登陆手机号码
 *  @param data.registerTime     注册时间
 *  @param data.alias            别名(用户自定义称呼)
 *  @param data.isBinding        手机绑定状态(0:未绑定 1:已绑定)
 *  @param data.portrait         头像地址
 *  @param data.sex              性别：1 男 2 女
 *  @param data.birthDate        出生日期
 *  @param data.company          公司
 *  @param data.signature        个人介绍
 *  @param data.workTime         工作时间
 *  @returns {AxiosPromise<any>}
 */
function saveOrUpdateIInfo(data) {
    var url = '/personal/saveOrUpdateIInfo';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【查询】我的信息
 *  @returns {AxiosPromise<any>}
 */
function queryIInfo() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var url = '/personal/queryIInfo';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【更改】我的密码
 *  @param data
 *  @param data.id      用户ID
 *  @param data.pwd     密码
 *  @returns {AxiosPromise<any>}
 */
function updateUserPassword(data) {
    var url = '/personal/updateUserPassword';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【更改】我的手机绑定或解绑
 *  @param data
 *  @param data.id              用户ID
 *  @param data.code            手机验证码
 *  @param data.phoneStatus     手机状态码：0解绑，1绑定
 *  @returns {AxiosPromise<any>}
 */
function updateUserPhone(data) {
    var url = '/personal/updateUserPhone';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【更改】我的头像
 *  @param image     头像图片
 *  @returns {AxiosPromise<any>}
 */
function updateUserPortrait(image) {
    var url = '/personal/updateUserPortrait';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { portraitImg: image });
}

/***
 * 【查询】我的个人资料信息
 * @param data
 * @returns {AxiosPromise<any>}
 */
function queryIPersonalDatum() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var url = '/personal/queryIPersonalDatum';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data);
}

/***
 * 【修改】我的昵称
 * @param alias
 * @returns {AxiosPromise<any>}
 */
function updateUserAlias(alias) {
    var url = '/personal/updateUserAlias';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { alias: alias });
}

/***
 * 设置默认船舶
 * @param alias
 * @returns {AxiosPromise<any>}
 */
function updateIDefaultShip(id) {
    var url = '/personal/updateIDefaultShip';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 收藏船舶
 * @param alias
 * @returns {AxiosPromise<any>}
 */
function saveOrUpdateIBoat(id) {
    var url = '/personal/saveOrUpdateIBoat';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { 'boat.id': id });
}

/**
 * 取消收藏
 * @param id
 * @returns {AxiosPromise<any>}
 */
function deleteIBoatByBoatId(id) {
    var url = '/personal/deleteIBoatByBoatId';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/**
 * 删除我的收藏列表里的船舶
 * @param id
 * @returns {AxiosPromise<any>}
 */
function deleteIBoatById(id) {
    var url = '/personal/deleteIBoatById';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/**
 * 检查改船舶是否收藏
 * @param id
 * @returns {AxiosPromise<any>}
 */
function checkBoatIsSaved(id) {
    var url = '/personal/checkBoatIsSaved';
    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, { id: id });
}

/***
 * 意见反馈
 * @param data
 * @param data.content 内容
 * @param data.contact 联系方式
 * @param data.imgPath 图片
 *
 * @returns {AxiosPromise<any>}
 */
function saveOrUpdateFeedback(data) {
    var url = '/sys/feedback/saveOrUpdateFeedback';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["a" /* default */].post(url, data, { isTransferToken: true });
}

/***/ }),

/***/ "akCl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export savePicture */
/* harmony export (immutable) */ __webpack_exports__["b"] = getPictures;
/* harmony export (immutable) */ __webpack_exports__["a"] = getBase64;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);


function savePicture() {
    return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        if (window.ImagePicker && typeof window.ImagePicker.getPictures === 'function') {
            return reject('无法打开相册');
        }

        window.ImagePicker.getPictures(function (result) {
            resolve(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(result));
        }, reject);
    });
}

function getPictures() {
    var maxCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;
    var defaultList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        if (!window.MediaPicker || typeof window.MediaPicker.getMedias !== 'function') {
            return reject('无法打开相册');
        }

        var options = {
            'selectMode': 100, //101=picker image and video , 100=image , 102=video
            'maxSelectCount': maxCount, //default 40 (Optional)
            'maxSelectSize': 10485760, //10485760=10M (Optional)
            'defaultSelectedList': defaultList
        };

        window.MediaPicker.getMedias(options, resolve, reject);
    });
}

function getBase64(item) {
    return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        if (!window.MediaPicker || typeof window.MediaPicker.extractThumbnail !== 'function') {
            return reject('没有找到转换文件方法');
        }

        window.MediaPicker.extractThumbnail(item, resolve, reject);
    });
}

/***/ }),

/***/ "beN6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("R6lU");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(__webpack_require__("ArwO"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b(),
      style: _vm.style
    }, [_vm._t("default")], 2);
  },
  name: 'swipe-item',
  data: function data() {
    return {
      offset: 0
    };
  },
  computed: {
    style: function style() {
      var _this$$parent = this.$parent,
          vertical = _this$$parent.vertical,
          computedWidth = _this$$parent.computedWidth,
          computedHeight = _this$$parent.computedHeight;
      return {
        width: computedWidth + 'px',
        height: vertical ? computedHeight + 'px' : '100%',
        transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
      };
    }
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
});

exports.default = _default;

/***/ }),

/***/ "c/Tr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("5zde"), __esModule: true };

/***/ }),

/***/ "ePOg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fBQ2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "i9vB":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xL5C");
__webpack_require__("itIU");
__webpack_require__("9nkg");
__webpack_require__("Hn/3");

/***/ }),

/***/ "lfQ0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _event = __webpack_require__("NrR7");

/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */
var context = '@@clickoutsideContext';
var _default = {
  bind: function bind(el, binding) {
    var handler = function handler(event) {
      if (!el.contains(event.target)) {
        el[context].callback();
      }
    };

    el[context] = {
      handler: handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    };
    (0, _event.on)(document, el[context].arg, handler);
  },
  update: function update(el, binding) {
    el[context].callback = binding.value;
  },
  unbind: function unbind(el) {
    (0, _event.off)(document, el[context].arg, el[context].handler);
  },
  install: function install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "qyJz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("+ZMJ");
var $export = __webpack_require__("kM2E");
var toObject = __webpack_require__("sB3e");
var call = __webpack_require__("msXi");
var isArrayIter = __webpack_require__("Mhyx");
var toLength = __webpack_require__("QRG4");
var createProperty = __webpack_require__("fBQ2");
var getIterFn = __webpack_require__("3fs2");

$export($export.S + $export.F * !__webpack_require__("dY0y")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "uyDV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/base/navigate/navigate.vue
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigate_name = 'NAVIGATE';

/* harmony default export */ var navigate_navigate = ({
    name: navigate_name,
    data: function data() {
        return {};
    },

    props: {
        title: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'relative'
        },
        color: {
            type: String,
            default: '#fff'
        },
        backgroundColor: {
            type: String,
            default: ''
        },
        shadow: {
            type: Boolean,
            default: false
        },
        back: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        boxShadow: function boxShadow() {
            return this.shadow ? '0 0 7px -1px rgba(0, 0, 0, .33)' : 'none';
        },
        style: function style() {
            var style = {
                position: this.position,
                color: this.color,
                boxShadow: this.boxShadow
            };

            return style;
        }
    },
    methods: {
        handlerClickBack: function handlerClickBack() {
            if (!this.back) {
                this.$router.back();
            }
            this.$emit('back');
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5c875f67","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/base/navigate/navigate.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mu-appbar',{staticClass:"navigator",style:(_vm.style),attrs:{"title":_vm.title}},[_c('mu-button',{attrs:{"slot":"left","color":"#fff","icon":""},on:{"click":_vm.handlerClickBack},slot:"left"},[_c('mu-icon',{attrs:{"size":"25","value":"navigate_before"}})],1),_vm._v(" "),_vm._t("right",[_c('mu-button',{attrs:{"slot":"right","color":"#fff","icon":""},slot:"right"},[_c('mu-icon',{attrs:{"size":"25","value":"0"}})],1)],{slot:"right"})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var base_navigate_navigate = (esExports);
// CONCATENATED MODULE: ./src/base/navigate/navigate.vue
function injectStyle (ssrContext) {
  __webpack_require__("/dhU")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c875f67"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  navigate_navigate,
  base_navigate_navigate,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_base_navigate_navigate = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "vMJZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkPhone;
/* harmony export (immutable) */ __webpack_exports__["b"] = getValidate;
/* harmony export (immutable) */ __webpack_exports__["e"] = register;
/* harmony export (immutable) */ __webpack_exports__["c"] = login;
/* harmony export (immutable) */ __webpack_exports__["d"] = loginOut;
/* harmony export (immutable) */ __webpack_exports__["f"] = resetPassword;
/* harmony export (immutable) */ __webpack_exports__["g"] = resetPhone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_axios__ = __webpack_require__("2MJX");


// 验证手机号码
function checkPhone(phone) {
    var url = '/oauth/checkPhone';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["b" /* formdata */].post(url, { phone: phone });
}

/***
 * 获取验证码
 * @param type
 * @param phone
 * @return {AxiosPromise<any>}
 */
function getValidate(type, phone) {
    var url = '/oauth/getValidateCode';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["b" /* formdata */].post(url, { type: type, phone: phone });
}

/***
 * 注册
 * @param data
 * @param data.phone  用户电话
 * @param data.code   验证码
 * @param data.pwd    密码
 * @param data.name   昵称
 * @returns {*}
 */
function register(data) {
    var url = '/oauth/registerUser';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["c" /* json */].post(url, data);
}

/***
 * 登录
 * @param data
 * @param data.phone  // 手机号码
 * @param data.pwd    // 密码
 * @returns {*}
 */
function login(data) {
    var url = '/oauth/login';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["c" /* json */].post(url, data);
}

/***
 * 退出登录
 * @returns {AxiosPromise<any>}
 */
function loginOut() {
    var url = '/oauth/logout';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["c" /* json */].post(url);
}

/***
 * 重置密码
 * @param data
 * @param data.code  // 验证码
 * @param data.phone // 手机号
 * @param data.pwd   // 密码
 * @returns {AxiosPromise<any>}
 */
function resetPassword(data) {
    var url = '/oauth/resetPwd';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["b" /* formdata */].post(url, data);
}

/***
 * 重置手机号码
 * @param data
 * @return {*|AxiosPromise<any>|void}
 */
function resetPhone(data) {
    var url = '/oauth/resetPhone';

    return __WEBPACK_IMPORTED_MODULE_0__common_js_axios__["c" /* json */].post(url, data);
}

/***/ }),

/***/ "vdH4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/base/no-success/no-success.vue
//
//
//
//
//
//
//
//
//

/* harmony default export */ var no_success = ({
    name: "no-success",
    props: {
        text: {
            type: String,
            default: '暂无数据'
        },
        height: {
            type: String,
            default: '100%'
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5d4c095a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/base/no-success/no-success.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"no-success",style:({height: _vm.height})},[_c('div',[_vm._t("default")],2),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.text))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var no_success_no_success = (esExports);
// CONCATENATED MODULE: ./src/base/no-success/no-success.vue
function injectStyle (ssrContext) {
  __webpack_require__("/AjF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d4c095a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  no_success,
  no_success_no_success,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var base_no_success_no_success = __webpack_exports__["a"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=0.js.map