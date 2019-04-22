webpackJsonp([14],{

/***/ "T8ly":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-cropper/src/exif-js-min.js
const Exif = {};

Exif.getData = (img) => new Promise((reslove, reject) => {
  let obj = {};
  getImageData(img).then(data => {
    obj.arrayBuffer = data;
    obj.orientation = getOrientation(data);
    reslove(obj)
  }).catch(error => {
    reject(error)
  })
})

// 这里的获取exif要将图片转ArrayBuffer对象，这里假设获取了图片的baes64
// 步骤一
// base64转ArrayBuffer对象
function getImageData(img) {
  let data = null;
  return new Promise((reslove, reject) => {
    if (img.src) {
      if (/^data\:/i.test(img.src)) { // Data URI
        data = base64ToArrayBuffer(img.src);
        reslove(data)
      } else if (/^blob\:/i.test(img.src)) { // Object URL
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
          data = e.target.result;
          reslove(data)
        };
        objectURLToBlob(img.src, function (blob) {
          fileReader.readAsArrayBuffer(blob);
        });
      } else {
        var http = new XMLHttpRequest();
        http.onload = function () {
          if (this.status == 200 || this.status === 0) {
            data = http.response
            reslove(data)
          } else {
            throw "Could not load image";
          }
          http = null;
        };
        http.open("GET", img.src, true);
        http.responseType = "arraybuffer";
        http.send(null);
      }
    } else {
      reject('img error')
    }
  })
}

function objectURLToBlob(url, callback) {
  var http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.responseType = "blob";
  http.onload = function (e) {
    if (this.status == 200 || this.status === 0) {
      callback(this.response);
    }
  };
  http.send();
}



function base64ToArrayBuffer(base64) {
  base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
  var binary = atob(base64);
  var len = binary.length;
  var buffer = new ArrayBuffer(len);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i);
  }
  return buffer;
}
// 步骤二，Unicode码转字符串
// ArrayBuffer对象 Unicode码转字符串
function getStringFromCharCode(dataView, start, length) {
  var str = '';
  var i;
  for (i = start, length += start; i < length; i++) {
    str += String.fromCharCode(dataView.getUint8(i));
  }
  return str;
}

// 步骤三，获取jpg图片的exif的角度（在ios体现最明显）
function getOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var length = dataView.byteLength;
  var orientation;
  var exifIDCode;
  var tiffOffset;
  var firstIFDOffset;
  var littleEndian;
  var endianness;
  var app1Start;
  var ifdStart;
  var offset;
  var i;
  // Only handle JPEG image (start by 0xFFD8)
  if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
    offset = 2;
    while (offset < length) {
      if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
        app1Start = offset;
        break;
      }
      offset++;
    }
  }
  if (app1Start) {
    exifIDCode = app1Start + 4;
    tiffOffset = app1Start + 10;
    if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
      endianness = dataView.getUint16(tiffOffset);
      littleEndian = endianness === 0x4949;

      if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
        if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
          firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

          if (firstIFDOffset >= 0x00000008) {
            ifdStart = tiffOffset + firstIFDOffset;
          }
        }
      }
    }
  }
  if (ifdStart) {
    length = dataView.getUint16(ifdStart, littleEndian);

    for (i = 0; i < length; i++) {
      offset = ifdStart + i * 12 + 2;
      if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {

        // 8 is the offset of the current tag's value
        offset += 8;

        // Get the original orientation value
        orientation = dataView.getUint16(offset, littleEndian);

        // Override the orientation with its default value for Safari (#120)
        // if (IS_SAFARI_OR_UIWEBVIEW) {
        //   dataView.setUint16(offset, 1, littleEndian);
        // }
        break;
      }
    }
  }
  return orientation;
}



/* harmony default export */ var exif_js_min = (Exif);
// CONCATENATED MODULE: ./node_modules/vue-cropper/node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-cropper/src/vue-cropper.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vue_cropper = ({
  data: function () {
    return {
      // 容器高宽
      w: 0,
      h: 0,
      // 图片缩放比例
      scale: 1,
      // 图片偏移x轴
      x: 0,
      // 图片偏移y轴
      y: 0,
      // 图片加载
      loading: true,
      // 图片真实宽度
      trueWidth: 0,
      // 图片真实高度
      trueHeight: 0,
      move: true,
      // 移动的x
      moveX: 0,
      // 移动的y
      moveY: 0,
      // 开启截图
      crop: false,
      // 正在截图
      cropping: false,
      // 裁剪框大小
      cropW: 0,
      cropH: 0,
      cropOldW: 0,
      cropOldH: 0,
      // 判断是否能够改变
      canChangeX: false,
      canChangeY: false,
      // 改变的基准点
      changeCropTypeX: 1,
      changeCropTypeY: 1,
      // 裁剪框的坐标轴
      cropX: 0,
      cropY: 0,
      cropChangeX: 0,
      cropChangeY: 0,
      cropOffsertX: 0,
      cropOffsertY: 0,
      // 支持的滚动事件
      support: "",
      // 移动端手指缩放
      touches: [],
      touchNow: false,
      // 图片旋转
      rotate: 0,
      isIos: false,
      orientation: 0,
      imgs: "",
      // 图片缩放系数
      coe: 0.2,
      // 是否正在多次缩放
      scaling: false,
      scalingSet: "",
      coeStatus: ""
    };
  },
  props: {
    img: {
      type: [String, Blob, null, File],
      default: ""
    },
    // 输出图片压缩比
    outputSize: {
      type: Number,
      default: 1
    },
    outputType: {
      type: String,
      default: "jpeg"
    },
    info: {
      type: Boolean,
      default: true
    },
    // 是否开启滚轮放大缩小
    canScale: {
      type: Boolean,
      default: true
    },
    // 是否自成截图框
    autoCrop: {
      type: Boolean,
      default: false
    },
    autoCropWidth: {
      type: Number,
      default: 0
    },
    autoCropHeight: {
      type: Number,
      default: 0
    },
    // 是否开启固定宽高比
    fixed: {
      type: Boolean,
      default: false
    },
    // 宽高比 w/h
    fixedNumber: {
      type: Array,
      default: () => {
        return [1, 1];
      }
    },
    // 固定大小 禁止改变截图框大小
    fixedBox: {
      type: Boolean,
      default: false
    },
    // 输出截图是否缩放
    full: {
      type: Boolean,
      default: false
    },
    // 是否可以拖动图片
    canMove: {
      type: Boolean,
      default: true
    },
    // 是否可以拖动截图框
    canMoveBox: {
      type: Boolean,
      default: true
    },
    // 上传图片按照原始比例显示
    original: {
      type: Boolean,
      default: false
    },
    // 截图框能否超过图片
    centerBox: {
      type: Boolean,
      default: false
    },
    // 是否根据dpr输出高清图片
    high: {
      type: Boolean,
      default: true
    },
    // 截图框展示宽高类型
    infoTrue: {
      type: Boolean,
      default: false
    },
    // 可以压缩图片宽高  默认不超过200
    maxImgSize: {
      type: Number,
      default: 2000
    }
  },
  computed: {
    cropInfo() {
      let obj = {};
      obj.top = this.cropOffsertY > 21 ? "-21px" : "0px";
      obj.width = this.cropW > 0 ? this.cropW : 0;
      obj.height = this.cropH > 0 ? this.cropH : 0;

      if (this.infoTrue) {
        if (this.high && !this.full) {
          let dpr = window.devicePixelRatio;
          obj.width = obj.width * dpr;
          obj.height = obj.height * dpr;
        }

        if (this.full) {
          obj.width = obj.width / this.scale;
          obj.height = obj.height / this.scale;
        }
      }

      obj.width = obj.width.toFixed(0);
      obj.height = obj.height.toFixed(0);
      return obj;
    },

    isIE() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  

      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE浏览器  

      return isIE;
    }

  },
  watch: {
    // 如果图片改变， 重新布局
    img() {
      // 当传入图片时, 读取图片信息同时展示
      this.checkedImg();
    },

    imgs(val) {
      if (val === "") {
        return;
      }

      this.reload();
    },

    cropW() {
      this.cropW = this.cropW;
      this.showPreview();
    },

    cropH() {
      this.cropH = this.cropH;
      this.showPreview();
    },

    cropOffsertX() {
      this.showPreview();
    },

    cropOffsertY() {
      this.showPreview();
    },

    scale(val, oldVal) {
      this.showPreview();
    },

    x() {
      this.showPreview();
    },

    y() {
      this.showPreview();
    },

    autoCrop(val) {
      if (val) {
        this.goAutoCrop();
      }
    },

    rotate() {
      this.showPreview();

      if (this.autoCrop) {
        this.goAutoCrop(this.cropW, this.cropH);
      }
    }

  },
  methods: {
    checkOrientationImage(img, orientation, width, height) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      ctx.save();

      switch (orientation) {
        case 2:
          canvas.width = width;
          canvas.height = height; // horizontal flip

          ctx.translate(width, 0);
          ctx.scale(-1, 1);
          break;

        case 3:
          canvas.width = width;
          canvas.height = height; //180 graus

          ctx.translate(width / 2, height / 2);
          ctx.rotate(180 * Math.PI / 180);
          ctx.translate(-width / 2, -height / 2);
          break;

        case 4:
          canvas.width = width;
          canvas.height = height; // vertical flip

          ctx.translate(0, height);
          ctx.scale(1, -1);
          break;

        case 5:
          // vertical flip + 90 rotate right
          canvas.height = width;
          canvas.width = height;
          ctx.rotate(0.5 * Math.PI);
          ctx.scale(1, -1);
          break;

        case 6:
          canvas.width = height;
          canvas.height = width; //90 graus

          ctx.translate(height / 2, width / 2);
          ctx.rotate(90 * Math.PI / 180);
          ctx.translate(-width / 2, -height / 2);
          break;

        case 7:
          // horizontal flip + 90 rotate right
          canvas.height = width;
          canvas.width = height;
          ctx.rotate(0.5 * Math.PI);
          ctx.translate(width, -height);
          ctx.scale(-1, 1);
          break;

        case 8:
          canvas.height = width;
          canvas.width = height; //-90 graus

          ctx.translate(height / 2, width / 2);
          ctx.rotate(-90 * Math.PI / 180);
          ctx.translate(-width / 2, -height / 2);
          break;

        default:
          canvas.width = width;
          canvas.height = height;
      }

      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();
      canvas.toBlob(blob => {
        let data = URL.createObjectURL(blob);
        this.imgs = data;
      }, "image/" + this.outputType, 1);
    },

    // checkout img
    checkedImg() {
      if (this.img === "") return;
      this.loading = true;
      this.scale = 1;
      this.clearCrop();
      let img = new Image();

      img.onload = () => {
        if (this.img === "") {
          this.$emit("imgLoad", "error");
          return false;
        }

        let width = img.width;
        let height = img.height;
        exif_js_min.getData(img).then(data => {
          this.orientation = data.orientation || 1;
          let max = this.maxImgSize;

          if (!this.orientation && width < max & height < max) {
            this.imgs = this.img;
            return;
          }

          if (width > max) {
            height = height / width * max;
            width = max;
          }

          if (height > max) {
            width = width / height * max;
            height = max;
          }

          this.checkOrientationImage(img, this.orientation, width, height);
        });
      };

      img.onerror = () => {
        this.$emit("imgLoad", "error");
      };

      img.crossOrigin = "";

      if (this.isIE) {
        var xhr = new XMLHttpRequest();

        xhr.onload = function () {
          var url = URL.createObjectURL(this.response);
          img.src = url;
        };

        xhr.open("GET", this.img, true);
        xhr.responseType = "blob";
        xhr.send();
      } else {
        img.src = this.img;
      }
    },

    // 当按下鼠标键
    startMove(e) {
      e.preventDefault(); // 如果move 为true 表示当前可以拖动

      if (this.move && !this.crop) {
        if (!this.canMove) {
          return false;
        } // 开始移动


        this.moveX = (e.clientX ? e.clientX : e.touches[0].clientX) - this.x;
        this.moveY = (e.clientY ? e.clientY : e.touches[0].clientY) - this.y;

        if (e.touches) {
          window.addEventListener("touchmove", this.moveImg);
          window.addEventListener("touchend", this.leaveImg);

          if (e.touches.length == 2) {
            // 记录手指刚刚放上去
            this.touches = e.touches;
            window.addEventListener("touchmove", this.touchScale);
            window.addEventListener("touchend", this.cancleTouchScale);
          }
        } else {
          window.addEventListener("mousemove", this.moveImg);
          window.addEventListener("mouseup", this.leaveImg);
        } // 触发图片移动事件


        this.$emit("imgMoving", {
          moving: true,
          axis: this.getImgAxis()
        });
      } else {
        // 截图ing
        this.cropping = true; // 绑定截图事件

        window.addEventListener("mousemove", this.createCrop);
        window.addEventListener("mouseup", this.endCrop);
        window.addEventListener("touchmove", this.createCrop);
        window.addEventListener("touchend", this.endCrop);
        this.cropOffsertX = e.offsetX ? e.offsetX : e.touches[0].pageX - this.$refs.cropper.offsetLeft;
        this.cropOffsertY = e.offsetY ? e.offsetY : e.touches[0].pageY - this.$refs.cropper.offsetTop;
        this.cropX = e.clientX ? e.clientX : e.touches[0].clientX;
        this.cropY = e.clientY ? e.clientY : e.touches[0].clientY;
        this.cropChangeX = this.cropOffsertX;
        this.cropChangeY = this.cropOffsertY;
        this.cropW = 0;
        this.cropH = 0;
      }
    },

    // 移动端缩放
    touchScale(e) {
      e.preventDefault();
      let scale = this.scale; // 记录变化量
      // 第一根手指

      var oldTouch1 = {
        x: this.touches[0].clientX,
        y: this.touches[0].clientY
      };
      var newTouch1 = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }; // 第二根手指

      var oldTouch2 = {
        x: this.touches[1].clientX,
        y: this.touches[1].clientY
      };
      var newTouch2 = {
        x: e.touches[1].clientX,
        y: e.touches[1].clientY
      };
      var oldL = Math.sqrt(Math.pow(oldTouch1.x - oldTouch2.x, 2) + Math.pow(oldTouch1.y - oldTouch2.y, 2));
      var newL = Math.sqrt(Math.pow(newTouch1.x - newTouch2.x, 2) + Math.pow(newTouch1.y - newTouch2.y, 2));
      var cha = newL - oldL; // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
      // 1px - 0.2

      var coe = 1;
      coe = coe / this.trueWidth > coe / this.trueHeight ? coe / this.trueHeight : coe / this.trueWidth;
      coe = coe > 0.1 ? 0.1 : coe;
      var num = coe * cha;

      if (!this.touchNow) {
        this.touchNow = true;

        if (cha > 0) {
          scale += Math.abs(num);
        } else if (cha < 0) {
          scale > Math.abs(num) ? scale -= Math.abs(num) : scale;
        }

        this.touches = e.touches;
        setTimeout(() => {
          this.touchNow = false;
        }, 8);

        if (!this.checkoutImgAxis(this.x, this.y, scale)) {
          return false;
        }

        this.scale = scale;
      }
    },

    cancleTouchScale(e) {
      window.removeEventListener("touchmove", this.touchScale);
    },

    // 移动图片
    moveImg(e) {
      e.preventDefault();

      if (e.touches && e.touches.length === 2) {
        this.touches = e.touches;
        window.addEventListener("touchmove", this.touchScale);
        window.addEventListener("touchend", this.cancleTouchScale);
        window.removeEventListener("touchmove", this.moveImg);
        return false;
      }

      let nowX = e.clientX ? e.clientX : e.touches[0].clientX;
      let nowY = e.clientY ? e.clientY : e.touches[0].clientY;
      let changeX, changeY;
      changeX = nowX - this.moveX;
      changeY = nowY - this.moveY;
      this.$nextTick(() => {
        if (this.centerBox) {
          let axis = this.getImgAxis(changeX, changeY, this.scale);
          let cropAxis = this.getCropAxis();
          let imgW = this.trueHeight * this.scale;
          let imgH = this.trueWidth * this.scale;
          let maxLeft, maxTop, maxRight, maxBottom;

          switch (this.rotate) {
            case 1:
            case -1:
            case 3:
            case -3:
              maxLeft = this.cropOffsertX - this.trueWidth * (1 - this.scale) / 2 + (imgW - imgH) / 2;
              maxTop = this.cropOffsertY - this.trueHeight * (1 - this.scale) / 2 + (imgH - imgW) / 2;
              maxRight = maxLeft - imgW + this.cropW;
              maxBottom = maxTop - imgH + this.cropH;
              break;

            default:
              maxLeft = this.cropOffsertX - this.trueWidth * (1 - this.scale) / 2;
              maxTop = this.cropOffsertY - this.trueHeight * (1 - this.scale) / 2;
              maxRight = maxLeft - imgH + this.cropW;
              maxBottom = maxTop - imgW + this.cropH;
              break;
          } // 图片左边 图片不能超过截图框


          if (axis.x1 >= cropAxis.x1) {
            changeX = maxLeft;
          } // 图片上边 图片不能超过截图框


          if (axis.y1 >= cropAxis.y1) {
            changeY = maxTop;
          } // 图片右边


          if (axis.x2 <= cropAxis.x2) {
            changeX = maxRight;
          } // 图片下边


          if (axis.y2 <= cropAxis.y2) {
            changeY = maxBottom;
          }
        }

        this.x = changeX;
        this.y = changeY; // 触发图片移动事件

        this.$emit("imgMoving", {
          moving: true,
          axis: this.getImgAxis()
        });
      });
    },

    // 移动图片结束
    leaveImg(e) {
      window.removeEventListener("mousemove", this.moveImg);
      window.removeEventListener("touchmove", this.moveImg);
      window.removeEventListener("mouseup", this.leaveImg);
      window.removeEventListener("touchend", this.leaveImg); // 触发图片移动事件

      this.$emit("imgMoving", {
        moving: false,
        axis: this.getImgAxis()
      });
    },

    // 缩放图片
    scaleImg() {
      if (this.canScale) {
        window.addEventListener(this.support, this.changeSize);
      }
    },

    // 移出框
    cancleScale() {
      if (this.canScale) {
        window.removeEventListener(this.support, this.changeSize);
      }
    },

    // 改变大小函数
    changeSize(e) {
      e.preventDefault();
      let scale = this.scale;
      var change = e.deltaY || e.wheelDelta; // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小

      var isFirefox = navigator.userAgent.indexOf("Firefox");
      change = isFirefox > 0 ? change * 30 : change; // 修复ie的滚动缩放

      if (this.isIE) {
        change = -change;
      } // 1px - 0.2


      var coe = this.coe;
      coe = coe / this.trueWidth > coe / this.trueHeight ? coe / this.trueHeight : coe / this.trueWidth;
      var num = coe * change;
      num < 0 ? scale += Math.abs(num) : scale > Math.abs(num) ? scale -= Math.abs(num) : scale; // 延迟0.1s 每次放大大或者缩小的范围

      let status = num < 0 ? "add" : "reduce";

      if (status !== this.coeStatus) {
        this.coeStatus = status;
        this.coe = 0.2;
      }

      if (!this.scaling) {
        this.scalingSet = setTimeout(() => {
          this.scaling = false;
          this.coe = this.coe += 0.01;
        }, 50);
      }

      this.scaling = true;

      if (!this.checkoutImgAxis(this.x, this.y, scale)) {
        return false;
      }

      this.scale = scale;
    },

    // 修改图片大小函数
    changeScale(num) {
      let scale = this.scale;
      num = num || 1;
      var coe = 20;
      coe = coe / this.trueWidth > coe / this.trueHeight ? coe / this.trueHeight : coe / this.trueWidth;
      num = num * coe;
      num > 0 ? scale += Math.abs(num) : scale > Math.abs(num) ? scale -= Math.abs(num) : scale;

      if (!this.checkoutImgAxis(this.x, this.y, scale)) {
        return false;
      }

      this.scale = scale;
    },

    // 创建截图框
    createCrop(e) {
      e.preventDefault(); // 移动生成大小

      var nowX = e.clientX ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      var nowY = e.clientY ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      this.$nextTick(() => {
        var fw = nowX - this.cropX;
        var fh = nowY - this.cropY;

        if (fw > 0) {
          this.cropW = fw + this.cropChangeX > this.w ? this.w - this.cropChangeX : fw;
          this.cropOffsertX = this.cropChangeX;
        } else {
          this.cropW = this.w - this.cropChangeX + Math.abs(fw) > this.w ? this.cropChangeX : Math.abs(fw);
          this.cropOffsertX = this.cropChangeX + fw > 0 ? this.cropChangeX + fw : 0;
        }

        if (!this.fixed) {
          if (fh > 0) {
            this.cropH = fh + this.cropChangeY > this.h ? this.h - this.cropChangeY : fh;
            this.cropOffsertY = this.cropChangeY;
          } else {
            this.cropH = this.h - this.cropChangeY + Math.abs(fh) > this.h ? this.cropChangeY : Math.abs(fh);
            this.cropOffsertY = this.cropChangeY + fh > 0 ? this.cropChangeY + fh : 0;
          }
        } else {
          var fixedHeight = this.cropW / this.fixedNumber[0] * this.fixedNumber[1];

          if (fixedHeight + this.cropOffsertY > this.h) {
            this.cropH = this.h - this.cropOffsertY;
            this.cropW = this.cropH / this.fixedNumber[1] * this.fixedNumber[0];

            if (fw > 0) {
              this.cropOffsertX = this.cropChangeX;
            } else {
              this.cropOffsertX = this.cropChangeX - this.cropW;
            }
          } else {
            this.cropH = fixedHeight;
          }

          this.cropOffsertY = this.cropOffsertY;
        }
      });
    },

    // 改变截图框大小
    changeCropSize(e, w, h, typeW, typeH) {
      e.preventDefault();
      window.addEventListener("mousemove", this.changeCropNow);
      window.addEventListener("mouseup", this.changeCropEnd);
      window.addEventListener("touchmove", this.changeCropNow);
      window.addEventListener("touchend", this.changeCropEnd);
      this.canChangeX = w;
      this.canChangeY = h;
      this.changeCropTypeX = typeW;
      this.changeCropTypeY = typeH;
      this.cropX = e.clientX ? e.clientX : e.touches[0].clientX;
      this.cropY = e.clientY ? e.clientY : e.touches[0].clientY;
      this.cropOldW = this.cropW;
      this.cropOldH = this.cropH;
      this.cropChangeX = this.cropOffsertX;
      this.cropChangeY = this.cropOffsertY;

      if (this.fixed) {
        if (this.canChangeX && this.canChangeY) {
          this.canChangeY = 0;
        }
      }
    },

    // 正在改变
    changeCropNow(e) {
      e.preventDefault();
      var nowX = e.clientX ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      var nowY = e.clientY ? e.clientY : e.touches ? e.touches[0].clientY : 0; // 容器的宽高

      let wrapperW = this.w;
      let wrapperH = this.h; // 不能超过的坐标轴

      let minX = 0;
      let minY = 0;

      if (this.centerBox) {
        let axis = this.getImgAxis();
        let imgW = axis.x2;
        let imgH = axis.y2;
        minX = axis.x1 > 0 ? axis.x1 : 0;
        minY = axis.y1 > 0 ? axis.y1 : 0;

        if (wrapperW > imgW) {
          wrapperW = imgW;
        }

        if (wrapperH > imgH) {
          wrapperH = imgH;
        }
      }

      this.$nextTick(() => {
        var fw = nowX - this.cropX;
        var fh = nowY - this.cropY;

        if (this.canChangeX) {
          if (this.changeCropTypeX === 1) {
            if (this.cropOldW - fw > 0) {
              this.cropW = wrapperW - this.cropChangeX - fw <= wrapperW - minX ? this.cropOldW - fw : this.cropOldW + this.cropChangeX - minX;
              this.cropOffsertX = wrapperW - this.cropChangeX - fw <= wrapperW - minX ? this.cropChangeX + fw : minX;
            } else {
              this.cropW = Math.abs(fw) + this.cropChangeX <= wrapperW ? Math.abs(fw) - this.cropOldW : wrapperW - this.cropOldW - this.cropChangeX;
              this.cropOffsertX = this.cropChangeX + this.cropOldW;
            }
          } else if (this.changeCropTypeX === 2) {
            if (this.cropOldW + fw > 0) {
              this.cropW = this.cropOldW + fw + this.cropOffsertX <= wrapperW ? this.cropOldW + fw : wrapperW - this.cropOffsertX;
              this.cropOffsertX = this.cropChangeX;
            } else {
              // 右侧坐标抽 超过左侧
              this.cropW = wrapperW - this.cropChangeX + Math.abs(fw + this.cropOldW) <= wrapperW - minX ? Math.abs(fw + this.cropOldW) : this.cropChangeX - minX;
              this.cropOffsertX = wrapperW - this.cropChangeX + Math.abs(fw + this.cropOldW) <= wrapperW - minX ? this.cropChangeX - Math.abs(fw + this.cropOldW) : minX;
            }
          }
        }

        if (this.canChangeY) {
          if (this.changeCropTypeY === 1) {
            if (this.cropOldH - fh > 0) {
              this.cropH = wrapperH - this.cropChangeY - fh <= wrapperH - minY ? this.cropOldH - fh : this.cropOldH + this.cropChangeY - minY;
              this.cropOffsertY = wrapperH - this.cropChangeY - fh <= wrapperH - minY ? this.cropChangeY + fh : minY;
            } else {
              this.cropH = Math.abs(fh) + this.cropChangeY <= wrapperH ? Math.abs(fh) - this.cropOldH : wrapperH - this.cropOldH - this.cropChangeY;
              this.cropOffsertY = this.cropChangeY + this.cropOldH;
            }
          } else if (this.changeCropTypeY === 2) {
            if (this.cropOldH + fh > 0) {
              this.cropH = this.cropOldH + fh + this.cropOffsertY <= wrapperH ? this.cropOldH + fh : wrapperH - this.cropOffsertY;
              this.cropOffsertY = this.cropChangeY;
            } else {
              this.cropH = wrapperH - this.cropChangeY + Math.abs(fh + this.cropOldH) <= wrapperH - minY ? Math.abs(fh + this.cropOldH) : this.cropChangeY - minY;
              this.cropOffsertY = wrapperH - this.cropChangeY + Math.abs(fh + this.cropOldH) <= wrapperH - minY ? this.cropChangeY - Math.abs(fh + this.cropOldH) : minY;
            }
          }
        }

        if (this.canChangeX && this.fixed) {
          var fixedHeight = this.cropW / this.fixedNumber[0] * this.fixedNumber[1];

          if (fixedHeight + this.cropOffsertY > wrapperH) {
            this.cropH = wrapperH - this.cropOffsertY;
            this.cropW = this.cropH / this.fixedNumber[1] * this.fixedNumber[0];
          } else {
            this.cropH = fixedHeight;
          }
        }

        if (this.canChangeY && this.fixed) {
          var fixedWidth = this.cropH / this.fixedNumber[1] * this.fixedNumber[0];

          if (fixedWidth + this.cropOffsertX > wrapperW) {
            this.cropW = wrapperW - this.cropOffsertX;
            this.cropH = this.cropW / this.fixedNumber[0] * this.fixedNumber[1];
          } else {
            this.cropW = fixedWidth;
          }
        }
      });
    },

    // 结束改变
    changeCropEnd(e) {
      window.removeEventListener("mousemove", this.changeCropNow);
      window.removeEventListener("mouseup", this.changeCropEnd);
      window.removeEventListener("touchmove", this.changeCropNow);
      window.removeEventListener("touchend", this.changeCropEnd);
    },

    // 创建完成
    endCrop() {
      if (this.cropW === 0 && this.cropH === 0) {
        this.cropping = false;
      }

      window.removeEventListener("mousemove", this.createCrop);
      window.removeEventListener("mouseup", this.endCrop);
      window.removeEventListener("touchmove", this.createCrop);
      window.removeEventListener("touchend", this.endCrop);
    },

    // 开始截图
    startCrop() {
      this.crop = true; // console.log('开始截图')
    },

    // 停止截图
    stopCrop() {
      this.crop = false; // console.log('停止截图')
    },

    // 清除截图
    clearCrop() {
      this.cropping = false;
      this.cropW = 0;
      this.cropH = 0; // console.log('清除截图')
    },

    // 截图移动
    cropMove(e) {
      e.preventDefault();

      if (!this.canMoveBox) {
        this.crop = false;
        this.startMove(e);
        return false;
      }

      if (e.touches && e.touches.length === 2) {
        this.crop = false;
        this.startMove(e);
        this.leaveCrop();
        return false;
      }

      window.addEventListener("mousemove", this.moveCrop);
      window.addEventListener("mouseup", this.leaveCrop);
      window.addEventListener("touchmove", this.moveCrop);
      window.addEventListener("touchend", this.leaveCrop);
      let x = e.clientX ? e.clientX : e.touches[0].clientX;
      let y = e.clientY ? e.clientY : e.touches[0].clientY;
      let newX, newY;
      newX = x - this.cropOffsertX;
      newY = y - this.cropOffsertY;
      this.cropX = newX;
      this.cropY = newY; // 触发截图框移动事件

      this.$emit("cropMoving", {
        moving: true,
        axis: this.getCropAxis()
      });
    },

    moveCrop(e, isMove) {
      let nowX = 0;
      let nowY = 0;

      if (e) {
        e.preventDefault();
        nowX = e.clientX ? e.clientX : e.touches[0].clientX;
        nowY = e.clientY ? e.clientY : e.touches[0].clientY;
      }

      this.$nextTick(() => {
        let cx, cy;
        let fw = nowX - this.cropX;
        let fh = nowY - this.cropY;

        if (isMove) {
          fw = this.cropOffsertX;
          fh = this.cropOffsertY;
        } // 不能超过外层容器


        if (fw <= 0) {
          cx = 0;
        } else if (fw + this.cropW > this.w) {
          cx = this.w - this.cropW;
        } else {
          cx = fw;
        }

        if (fh <= 0) {
          cy = 0;
        } else if (fh + this.cropH > this.h) {
          cy = this.h - this.cropH;
        } else {
          cy = fh;
        } // 不能超过图片


        if (this.centerBox) {
          let axis = this.getImgAxis(); // 横坐标判断

          if (cx <= axis.x1) {
            cx = axis.x1;
          }

          if (cx + this.cropW > axis.x2) {
            cx = axis.x2 - this.cropW;
          } // 纵坐标纵轴


          if (cy <= axis.y1) {
            cy = axis.y1;
          }

          if (cy + this.cropH > axis.y2) {
            cy = axis.y2 - this.cropH;
          }
        }

        this.cropOffsertX = cx;
        this.cropOffsertY = cy; // 触发截图框移动事件

        this.$emit("cropMoving", {
          moving: true,
          axis: this.getCropAxis()
        });
      });
    },

    // 算出不同场景下面 图片相对于外层容器的坐标轴
    getImgAxis(x, y, scale) {
      x = x || this.x;
      y = y || this.y;
      scale = scale || this.scale; // 如果设置了截图框在图片内， 那么限制截图框不能超过图片的坐标
      // 图片的坐标

      let obj = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      let imgW = this.trueWidth * scale;
      let imgH = this.trueHeight * scale;

      switch (this.rotate) {
        case 0:
          obj.x1 = x + this.trueWidth * (1 - scale) / 2;
          obj.x2 = obj.x1 + this.trueWidth * scale;
          obj.y1 = y + this.trueHeight * (1 - scale) / 2;
          obj.y2 = obj.y1 + this.trueHeight * scale;
          break;

        case 1:
        case -1:
        case 3:
        case -3:
          obj.x1 = x + this.trueWidth * (1 - scale) / 2 + (imgW - imgH) / 2;
          obj.x2 = obj.x1 + this.trueHeight * scale;
          obj.y1 = y + this.trueHeight * (1 - scale) / 2 + (imgH - imgW) / 2;
          obj.y2 = obj.y1 + this.trueWidth * scale;
          break;

        default:
          obj.x1 = x + this.trueWidth * (1 - scale) / 2;
          obj.x2 = obj.x1 + this.trueWidth * scale;
          obj.y1 = y + this.trueHeight * (1 - scale) / 2;
          obj.y2 = obj.y1 + this.trueHeight * scale;
          break;
      }

      return obj;
    },

    // 获取截图框的坐标轴
    getCropAxis() {
      let obj = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      obj.x1 = this.cropOffsertX;
      obj.x2 = obj.x1 + this.cropW;
      obj.y1 = this.cropOffsertY;
      obj.y2 = obj.y1 + this.cropH;
      return obj;
    },

    leaveCrop(e) {
      window.removeEventListener("mousemove", this.moveCrop);
      window.removeEventListener("mouseup", this.leaveCrop);
      window.removeEventListener("touchmove", this.moveCrop);
      window.removeEventListener("touchend", this.leaveCrop); // 触发截图框移动事件

      this.$emit("cropMoving", {
        moving: false,
        axis: this.getCropAxis()
      });
    },

    getCropChecked(cb) {
      let canvas = document.createElement("canvas");
      let img = new Image();
      let rotate = this.rotate;
      let trueWidth = this.trueWidth;
      let trueHeight = this.trueHeight;
      let cropOffsertX = this.cropOffsertX;
      let cropOffsertY = this.cropOffsertY;

      img.onload = () => {
        if (this.cropW !== 0) {
          let ctx = canvas.getContext("2d");
          let dpr = 1;

          if (this.high & !this.full) {
            dpr = window.devicePixelRatio;
          }

          let width = this.cropW * dpr;
          let height = this.cropH * dpr;
          let imgW = trueWidth * this.scale * dpr;
          let imgH = trueHeight * this.scale * dpr; // 图片x轴偏移

          let dx = (this.x - cropOffsertX + this.trueWidth * (1 - this.scale) / 2) * dpr; // 图片y轴偏移

          let dy = (this.y - cropOffsertY + this.trueHeight * (1 - this.scale) / 2) * dpr; // console.log(dx, dy)
          //保存状态

          canvas.width = width;
          canvas.height = height;
          ctx.save();

          switch (rotate) {
            case 0:
              if (!this.full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                canvas.width = width / this.scale;
                canvas.height = height / this.scale;
                ctx.drawImage(img, dx / this.scale, dy / this.scale, imgW / this.scale, imgH / this.scale);
              }

              break;

            case 1:
            case -3:
              if (!this.full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, dy, -dx - imgH, imgW, imgH);
              } else {
                canvas.width = width / this.scale;
                canvas.height = height / this.scale; // 换算图片旋转后的坐标弥补

                dx = dx / this.scale + (imgW / this.scale - imgH / this.scale) / 2;
                dy = dy / this.scale + (imgH / this.scale - imgW / this.scale) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, dy, -dx - imgH / this.scale, imgW / this.scale, imgH / this.scale);
              }

              break;

            case 2:
            case -2:
              if (!this.full) {
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, -dx - imgW, -dy - imgH, imgW, imgH);
              } else {
                canvas.width = width / this.scale;
                canvas.height = height / this.scale;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                dx = dx / this.scale;
                dy = dy / this.scale;
                ctx.drawImage(img, -dx - imgW / this.scale, -dy - imgH / this.scale, imgW / this.scale, imgH / this.scale);
              }

              break;

            case 3:
            case -1:
              if (!this.full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, -dy - imgW, dx, imgW, imgH);
              } else {
                canvas.width = width / this.scale;
                canvas.height = height / this.scale; // 换算图片旋转后的坐标弥补

                dx = dx / this.scale + (imgW / this.scale - imgH / this.scale) / 2;
                dy = dy / this.scale + (imgH / this.scale - imgW / this.scale) / 2;
                ctx.rotate(rotate * 90 * Math.PI / 180);
                ctx.drawImage(img, -dy - imgW / this.scale, dx, imgW / this.scale, imgH / this.scale);
              }

              break;

            default:
              if (!this.full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                canvas.width = width / this.scale;
                canvas.height = height / this.scale;
                ctx.drawImage(img, dx / this.scale, dy / this.scale, imgW / this.scale, imgH / this.scale);
              }

          }

          ctx.restore();
        } else {
          let width = trueWidth * this.scale;
          let height = trueHeight * this.scale;
          let ctx = canvas.getContext("2d");
          ctx.save();

          switch (rotate) {
            case 0:
              canvas.width = width;
              canvas.height = height;
              ctx.drawImage(img, 0, 0, width, height);
              break;

            case 1:
            case -3:
              // 旋转90度 或者-270度 宽度和高度对调
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(rotate * 90 * Math.PI / 180);
              ctx.drawImage(img, 0, -height, width, height);
              break;

            case 2:
            case -2:
              canvas.width = width;
              canvas.height = height;
              ctx.rotate(rotate * 90 * Math.PI / 180);
              ctx.drawImage(img, -width, -height, width, height);
              break;

            case 3:
            case -1:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(rotate * 90 * Math.PI / 180);
              ctx.drawImage(img, -width, 0, width, height);
              break;

            default:
              canvas.width = width;
              canvas.height = height;
              ctx.drawImage(img, 0, 0, width, height);
          }

          ctx.restore();
        }

        cb(canvas);
      }; // 判断图片是否是base64


      var s = this.img.substr(0, 4);

      if (s !== "data") {
        img.crossOrigin = "Anonymous";
      }

      img.src = this.imgs;
    },

    // 获取转换成base64 的图片信息
    getCropData(cb) {
      this.getCropChecked(data => {
        cb(data.toDataURL("image/" + this.outputType, this.outputSize));
      });
    },

    //转化base64 为blob对象
    getCropBlob(cb) {
      this.getCropChecked(data => {
        data.toBlob(blob => cb(blob), "image/" + this.outputType, this.outputSize);
      });
    },

    // 自动预览函数
    showPreview() {
      var obj = {};
      obj.div = {
        width: this.cropW + "px",
        height: this.cropH + "px"
      };
      obj.img = {
        width: this.trueWidth + "px",
        height: this.trueHeight + "px",
        transform: "scale(" + this.scale + "," + this.scale + ") " + "translate3d(" + (this.x - this.cropOffsertX) / this.scale + "px," + (this.y - this.cropOffsertY) / this.scale + "px," + "0)" + "rotateZ(" + this.rotate * 90 + "deg)"
      };
      obj.w = this.cropW;
      obj.h = this.cropH;
      obj.url = this.imgs;
      this.$emit("realTime", obj);
    },

    // reload 图片布局函数
    reload() {
      let img = new Image();

      img.onload = () => {
        // 读取图片的信息原始信息， 解析是否需要旋转
        // 读取图片的旋转信息
        // 得到外层容器的宽度高度
        this.w = window.getComputedStyle(this.$refs.cropper).width.replace("px", "");
        this.h = window.getComputedStyle(this.$refs.cropper).height.replace("px", ""); // 存入图片真实高度

        this.trueWidth = img.width;
        this.trueHeight = img.height; // 判断是否需要压缩大图

        if (!this.original) {
          if (this.trueWidth > this.w) {
            // 如果图片宽度大于容器宽度
            this.scale = this.w / this.trueWidth;
          }

          if (this.trueHeight * this.scale > this.h) {
            this.scale = this.h / this.trueHeight;
          }
        } else {
          this.scale = 1;
        }

        this.$nextTick(() => {
          this.x = -(this.trueWidth - this.trueWidth * this.scale) / 2 + (this.w - this.trueWidth * this.scale) / 2;
          this.y = -(this.trueHeight - this.trueHeight * this.scale) / 2 + (this.h - this.trueHeight * this.scale) / 2;
          this.loading = false; // // 获取是否开启了自动截图

          if (this.autoCrop) {
            this.goAutoCrop();
          } // // 图片加载成功的回调


          this.$emit("imgLoad", "success");
        });
      };

      img.onerror = () => {
        this.$emit("imgLoad", "error");
      };

      img.src = this.imgs;
    },

    // 自动截图函数
    goAutoCrop(cw, ch) {
      this.clearCrop();
      this.cropping = true;
      let maxWidth = this.w;
      let maxHeight = this.h;

      if (this.centerBox) {
        let imgW = this.trueWidth * this.scale;
        let imgH = this.trueHeight * this.scale;
        maxWidth = imgW < maxWidth ? imgW : maxWidth;
        maxHeight = imgH < maxHeight ? imgH : maxHeight;
      } // 截图框默认大小
      // 如果为0 那么计算容器大小 默认为80%


      var w = cw ? cw : this.autoCropWidth;
      var h = ch ? ch : this.autoCropHeight;

      if (w === 0 || h === 0) {
        w = maxWidth * 0.8;
        h = maxHeight * 0.8;
      }

      w = w > maxWidth ? maxWidth : w;
      h = h > maxHeight ? maxHeight : h;

      if (this.fixed) {
        h = w / this.fixedNumber[0] * this.fixedNumber[1];
      } // 如果比例之后 高度大于h


      if (h > this.h) {
        h = this.h;
        w = h / this.fixedNumber[1] * this.fixedNumber[0];
      }

      this.changeCrop(w, h);
    },

    // 手动改变截图框大小函数
    changeCrop(w, h) {
      // 判断是否大于容器
      this.cropW = w;
      this.cropH = h; // 居中走一走

      this.cropOffsertX = (this.w - w) / 2;
      this.cropOffsertY = (this.h - h) / 2;

      if (this.centerBox) {
        this.$nextTick(() => {
          this.moveCrop(null, true);
        });
      }
    },

    // 重置函数， 恢复组件置初始状态
    refresh() {
      // console.log('refresh')
      let img = this.img;
      this.imgs = "";
      this.scale = 1;
      this.crop = false;
      this.rotate = 0;
      this.w = 0;
      this.h = 0;
      this.trueWidth = 0;
      this.trueHeight = 0;
      this.clearCrop();
      this.$nextTick(() => {
        this.checkedImg();
      });
    },

    // 向左边旋转
    rotateLeft() {
      this.rotate = this.rotate <= -3 ? 0 : this.rotate - 1;
    },

    // 向右边旋转
    rotateRight() {
      this.rotate = this.rotate >= 3 ? 0 : this.rotate + 1;
    },

    // 清除旋转
    rotateClear() {
      this.rotate = 0;
    },

    // 图片坐标点校验
    checkoutImgAxis(x, y, scale) {
      x = x || this.x;
      y = y || this.y;
      scale = scale || this.scale;
      let canGo = true; // 开始校验 如果说缩放之后的坐标在截图框外 则阻止缩放

      if (this.centerBox) {
        let axis = this.getImgAxis(x, y, scale);
        let cropAxis = this.getCropAxis(); // 左边的横坐标 图片不能超过截图框

        if (axis.x1 >= cropAxis.x1) {
          canGo = false;
        } // 右边横坐标


        if (axis.x2 <= cropAxis.x2) {
          canGo = false;
        } // 纵坐标上面


        if (axis.y1 >= cropAxis.y1) {
          canGo = false;
        } // 纵坐标下面


        if (axis.y2 <= cropAxis.y2) {
          canGo = false;
        }
      }

      return canGo;
    }

  },

  mounted() {
    this.support = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
    let that = this;
    var u = navigator.userAgent;
    this.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 兼容blob

    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        value: function (callback, type, quality) {
          var binStr = atob(this.toDataURL(type, quality).split(",")[1]),
              len = binStr.length,
              arr = new Uint8Array(len);

          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }

          callback(new Blob([arr], {
            type: that.type || "image/png"
          }));
        }
      });
    }

    this.showPreview();
    this.checkedImg();
  },

  destroyed() {
    window.removeEventListener("mousemove", this.moveCrop);
    window.removeEventListener("mouseup", this.leaveCrop);
    window.removeEventListener("touchmove", this.moveCrop);
    window.removeEventListener("touchend", this.leaveCrop);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1cf26649","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-cropper/src/vue-cropper.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"cropper",staticClass:"vue-cropper",on:{"mouseover":_vm.scaleImg,"mouseout":_vm.cancleScale}},[_c('div',{staticClass:"cropper-box"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading),expression:"!loading"}],staticClass:"cropper-box-canvas",style:({
					'width': _vm.trueWidth + 'px',
					'height': _vm.trueHeight + 'px',
					'transform': 'scale(' + _vm.scale + ',' + _vm.scale + ') ' + 'translate3d('+ _vm.x / _vm.scale + 'px,' + _vm.y / _vm.scale + 'px,' + '0)'
					+ 'rotateZ('+ _vm.rotate * 90 +'deg)'
					})},[_c('img',{ref:"cropperImg",attrs:{"src":_vm.imgs,"alt":"cropper-img"}})])]),_vm._v(" "),_c('div',{staticClass:"cropper-drag-box",class:{'cropper-move': _vm.move && !_vm.crop, 'cropper-crop': _vm.crop, 'cropper-modal': _vm.cropping},on:{"mousedown":_vm.startMove,"touchstart":_vm.startMove}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.cropping),expression:"cropping"}],staticClass:"cropper-crop-box",style:({
					'width': _vm.cropW + 'px',
					'height': _vm.cropH + 'px',
					'transform': 'translate3d('+ _vm.cropOffsertX + 'px,' + _vm.cropOffsertY + 'px,' + '0)'
				})},[_c('span',{staticClass:"cropper-view-box"},[_c('img',{style:({
						'width': _vm.trueWidth + 'px',
						'height': _vm.trueHeight + 'px',
						'transform': 'scale(' + _vm.scale + ',' + _vm.scale + ') ' + 'translate3d('+ (_vm.x - _vm.cropOffsertX) / _vm.scale  + 'px,' + (_vm.y - _vm.cropOffsertY) / _vm.scale + 'px,' + '0)'
						+ 'rotateZ('+ _vm.rotate * 90 +'deg)'
						}),attrs:{"src":_vm.imgs,"alt":"cropper-img"}})]),_vm._v(" "),_c('span',{staticClass:"cropper-face cropper-move",on:{"mousedown":_vm.cropMove,"touchstart":_vm.cropMove}}),_vm._v(" "),(_vm.info)?_c('span',{staticClass:"crop-info",style:({'top': _vm.cropInfo.top})},[_vm._v("\n          "+_vm._s(this.cropInfo.width)+" × "+_vm._s(this.cropInfo.height)+"\n        ")]):_vm._e(),_vm._v(" "),(!_vm.fixedBox)?_c('span',[_c('span',{staticClass:"crop-line line-w",on:{"mousedown":function($event){_vm.changeCropSize($event, false, true, 0, 1)},"touchstart":function($event){_vm.changeCropSize($event, false, true, 0, 1)}}}),_vm._v(" "),_c('span',{staticClass:"crop-line line-a",on:{"mousedown":function($event){_vm.changeCropSize($event, true, false, 1, 0)},"touchstart":function($event){_vm.changeCropSize($event, true, false, 1, 0)}}}),_vm._v(" "),_c('span',{staticClass:"crop-line line-s",on:{"mousedown":function($event){_vm.changeCropSize($event, false, true, 0, 2)},"touchstart":function($event){_vm.changeCropSize($event, false, true, 0, 2)}}}),_vm._v(" "),_c('span',{staticClass:"crop-line line-d",on:{"mousedown":function($event){_vm.changeCropSize($event, true, false, 2, 0)},"touchstart":function($event){_vm.changeCropSize($event, true, false, 2, 0)}}}),_vm._v(" "),_c('span',{staticClass:"crop-point point1",on:{"mousedown":function($event){_vm.changeCropSize($event, true, true, 1, 1)},"touchstart":function($event){_vm.changeCropSize($event, true, true, 1, 1)}}}),_vm._v(" "),_c('span',{staticClass:"crop-point point2",on:{"mousedown":function($event){_vm.changeCropSize($event, false, true, 0, 1)},"touchstart":function($event){_vm.changeCropSize($event, false, true, 0, 1)}}}),_vm._v(" "),_c('span',{staticClass:"crop-point point3",on:{"mousedown":function($event){_vm.changeCropSize($event, true, true, 2, 1)},"touchstart":function($event){_vm.changeCropSize($event, true, true, 2, 1)}}}),_vm._v(" "),_c('span',{staticClass:"crop-point point4",on:{"mousedown":function($event){_vm.changeCropSize($event, true, false, 1, 0)},"touchstart":function($event){_vm.changeCropSize($event, true, false, 1, 0)}}}),_vm._v(" "),_c('span',{staticClass:"crop-point point5",on:{"mousedown":function($event){_vm.changeCropSize($event, true, false, 2, 0)},"touchstart":function($event){_vm.changeCropSize($event, true, false, 2, 0)}}}),_vm._v(" "),_c('span',{staticClass:"crop-point point6",on:{"mousedown":function($event){_vm.changeCropSize($event, true, true, 1, 2)},"touchstart":function($event){_vm.changeCropSize($event, true, true, 1, 2)}}}),_vm._v(" "),_c('span',{staticClass:"crop-point point7",on:{"mousedown":function($event){_vm.changeCropSize($event, false, true, 0, 2)},"touchstart":function($event){_vm.changeCropSize($event, false, true, 0, 2)}}}),_vm._v(" "),_c('span',{staticClass:"crop-point point8",on:{"mousedown":function($event){_vm.changeCropSize($event, true, true, 2, 2)},"touchstart":function($event){_vm.changeCropSize($event, true, true, 2, 2)}}})]):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_vue_cropper = (esExports);
// CONCATENATED MODULE: ./node_modules/vue-cropper/src/vue-cropper.vue
function injectStyle (ssrContext) {
  __webpack_require__("qMI5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cf26649"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  vue_cropper,
  src_vue_cropper,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vue_cropper_src_vue_cropper = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/base/cropper/cropper.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var cropper = ({
    name: "cropper-component",
    props: {
        value: {},
        img: {
            type: String,
            default: ''
        }
    },
    methods: {
        handlerClose: function handlerClose() {
            this.$emit('input', false);
            this.$emit('close', false);
        },
        handlerConfirm: function handlerConfirm() {
            var _this = this;

            this.$refs.cropper.getCropData(function (data) {
                _this.$emit('confirm', data);
                _this.handlerClose();
            });
        }
    },
    components: {
        VCropper: vue_cropper_src_vue_cropper
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0226353d","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/base/cropper/cropper.vue
var cropper_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cropper"},[_c('div',[_c('span',{staticClass:"button close",on:{"click":_vm.handlerClose}},[_vm._v("返回")]),_vm._v(" "),_c('span',{staticClass:"button confirm",on:{"click":_vm.handlerConfirm}},[_vm._v("确定")])]),_vm._v(" "),_c('v-cropper',{ref:"cropper",staticStyle:{"background-image":"none","background-color":"#000"},attrs:{"outputType":"png","img":_vm.img,"info":false,"auto-crop-width":200,"auto-crop-height":200,"can-move-box":false,"auto-crop":"","fixed-box":"","original":"","center-box":"","full":""}})],1)}
var cropper_staticRenderFns = []
var cropper_esExports = { render: cropper_render, staticRenderFns: cropper_staticRenderFns }
/* harmony default export */ var cropper_cropper = (cropper_esExports);
// CONCATENATED MODULE: ./src/base/cropper/cropper.vue
function cropper_injectStyle (ssrContext) {
  __webpack_require__("X4LS")
}
var cropper_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var cropper___vue_template_functional__ = false
/* styles */
var cropper___vue_styles__ = cropper_injectStyle
/* scopeId */
var cropper___vue_scopeId__ = "data-v-0226353d"
/* moduleIdentifier (server only) */
var cropper___vue_module_identifier__ = null
var cropper_Component = cropper_normalizeComponent(
  cropper,
  cropper_cropper,
  cropper___vue_template_functional__,
  cropper___vue_styles__,
  cropper___vue_scopeId__,
  cropper___vue_module_identifier__
)

/* harmony default export */ var base_cropper_cropper = __webpack_exports__["a"] = (cropper_Component.exports);


/***/ }),

/***/ "X4LS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lVsr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qMI5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yJBU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("pFYg");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./src/base/navigate/navigate.vue + 2 modules
var navigate_navigate = __webpack_require__("uyDV");

// EXTERNAL MODULE: ./src/base/cropper/cropper.vue + 6 modules
var cropper = __webpack_require__("T8ly");

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-cell/index.js
var swipe_cell = __webpack_require__("BTmN");
var swipe_cell_default = /*#__PURE__*/__webpack_require__.n(swipe_cell);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-cell/style/index.js
var style = __webpack_require__("9xn2");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./src/api/user.js
var user = __webpack_require__("vMJZ");

// EXTERNAL MODULE: ./src/api/personal.js
var personal = __webpack_require__("YkBq");

// EXTERNAL MODULE: ./src/api/sys.js
var sys = __webpack_require__("DEHg");

// EXTERNAL MODULE: ./src/common/mixins/index.js + 9 modules
var mixins = __webpack_require__("gDrV");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/about/data/index.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var about_data = ({
    name: "mineData",
    mixins: [mixins["i" /* userMixins */]],
    data: function data() {
        return {
            open: false,
            data: {
                phone: '',
                alias: '',
                portrait: '',
                shipList: []
            },
            shipForm: {
                length: null,
                width: null,
                draft: null,
                mmsi: "",
                name: ""
            },
            cropper: {
                avatar: null,
                visible: false
            }
        };
    },
    activated: function activated() {
        this.queryIPersonalDatum();
    },

    methods: {
        handlerUpdate: function handlerUpdate() {
            this.queryIPersonalDatum();
        },

        /***
         * 获取用户信息
         */
        queryIPersonalDatum: function queryIPersonalDatum() {
            var _this = this;

            Object(personal["o" /* queryIPersonalDatum */])().then(function (res) {
                _this.data = res;
            }).catch(function (error) {
                console.log(error);
            });
        },

        // 退出登录
        handlerExit: function handlerExit(type) {
            var _this2 = this;

            this.$confirm('\u60A8\u786E\u8BA4\u8981' + (type === 'out' ? '退出登录' : '切换用户') + '\u5417\uFF1F', '提示', {
                type: 'warning'
            }).then(function (_ref) {
                var result = _ref.result;

                if (!result) return;

                Object(user["d" /* loginOut */])();

                _this2.logout();

                if (type === 'out') {
                    _this2.$router.replace('/');
                } else {
                    _this2.$router.replace('/login');
                }
            });
        },

        // 填写
        handlerSave: function handlerSave(target, prompt, validator) {
            var _this3 = this;

            this.$prompt(prompt, '提示', {
                validator: validator
            }).then(function (_ref2) {
                var result = _ref2.result,
                    value = _ref2.value;

                if (result) {
                    _this3.shipForm[target] = value;
                } else {
                    _this3.$toast({
                        message: '取消操作',
                        zIndex: 20142000
                    });
                }
            });
        },

        //  选择头像
        handlerClickAvatar: function handlerClickAvatar() {
            var _this4 = this;

            this.$refs.file.addEventListener('change', function (event) {
                _this4.$toast({
                    duration: 0,
                    message: '解析中 ...'
                });
                var file = event.target.files[0];

                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(event.target.value)) {
                    _this4.$toast('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种');
                    return false;
                }

                var reader = new FileReader();

                reader.onload = function (e) {
                    var data = void 0;
                    if (typeof_default()(e.target.result) === 'object') {
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]));
                    } else {
                        data = e.target.result;
                    }

                    _this4.cropper.avatar = data;

                    _this4.cropper.visible = true;
                    _this4.$toast('解析完成');
                };
                // 转化为base64
                // reader.readAsDataURL(file)
                // 转化为blob
                reader.readAsArrayBuffer(file);
            });

            this.$refs.file.click();
        },

        // 取消
        handlerCropperClose: function handlerCropperClose() {
            this.$refs.file.value = null;
            this.cropper.avatar = null;
        },

        // 上传头像
        handlerCropperConfirm: function handlerCropperConfirm(base64) {
            var _this5 = this;

            this.$toast({
                type: 'loading',
                position: 'center',
                message: '正在上传图片 ...',
                duration: 0
            });

            Object(sys["f" /* uploadBase64 */])(base64).then(function (res) {
                _this5.data.portrait = res;
                _this5.cropper.avatar = res;

                Object(personal["C" /* updateUserPortrait */])(res).then(function (res) {
                    _this5.$toast.clear();

                    _this5.login(assign_default()({}, _this5.user, { portrait: _this5.data.portrait }));
                });
            });
        },

        //取消表单填写页
        handlerCancel: function handlerCancel() {
            this.open = false;

            this.shipForm = {
                id: "",
                length: null,
                width: null,
                draft: null,
                mmsi: "",
                name: ""
            };
        },

        //显示表单填写页
        handlerAdd: function handlerAdd() {
            this.$router.push('/about/data/ship');
        },
        handlerEdit: function handlerEdit(item) {
            this.$router.push({
                name: 'about-data-ship',
                params: item
            });
        },
        handlerDefault: function handlerDefault(item) {
            var _this6 = this;

            Object(personal["A" /* updateIDefaultShip */])(item.id).then(function (res) {
                _this6.queryIPersonalDatum();
            }).catch(function (error) {
                console.log(error);
            });
        },
        handlerDelete: function handlerDelete(item) {
            var _this7 = this;

            this.$confirm('\u60A8\u786E\u8BA4\u8981\u5220\u9664\u8239\u8236\u5417\uFF1F', '提示', {
                type: 'warning'
            }).then(function (_ref3) {
                var result = _ref3.result;

                if (result) {
                    Object(personal["e" /* deleteIShip */])(item.id).then(function (res) {
                        _this7.data.shipList.splice(_this7.data.shipList.findIndex(function (ship) {
                            return item.id === ship.id;
                        }), 1);

                        _this7.$toast('删除成功');
                    }).catch(console.log);
                } else {
                    _this7.$toast('取消操作');
                }
            });
        },
        handlerSavePhone: function handlerSavePhone() {
            this.$router.push({
                path: '/about/data/phone',
                query: {
                    phone: this.data.phone
                }
            });
        },
        handlerSaveInfo: function handlerSaveInfo() {
            this.$router.push({
                path: '/about/data/info',
                query: {
                    alias: this.data.alias
                }
            });
        }
    },
    components: {
        Navigate: navigate_navigate["a" /* default */],
        Cropper: cropper["a" /* default */],
        SwipeCell: swipe_cell_default.a
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b7d8281e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/about/data/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-data"},[_c('navigate',{attrs:{"title":"个人资料","position":"absolute"}}),_vm._v(" "),_c('div',{staticClass:"scroll-wrapper"},[_c('mu-list',{staticClass:"pn"},[_c('mu-list-item',{staticClass:"about-data-avatar mb-15",attrs:{"avatar":""}},[_c('mu-list-item-action',[_c('mu-avatar',{attrs:{"size":"70"},on:{"click":_vm.handlerClickAvatar}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(_vm.AvatarImage(_vm.$images + (_vm.data.portrait || _vm.user.portrait))),expression:"AvatarImage($images + (data.portrait || user.portrait))"}],key:_vm.$images + (_vm.data.portrait || _vm.user.portrait)})])],1),_vm._v(" "),_c('mu-list-item-content',{staticClass:"form-item-content"},[_c('mu-list-item-title',{staticClass:"pl-25"},[_vm._v(_vm._s(_vm.data.alias || _vm.user.alias))])],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-button',{attrs:{"color":"#477FB9","flat":""},on:{"click":_vm.handlerSaveInfo}},[_vm._v("个人资料")])],1)],1),_vm._v(" "),_vm._l((_vm.data.shipList),function(item,index){return _c('swipe-cell',{key:item.id,staticClass:"border-1px-b",attrs:{"right-width":264}},[_c('mu-list-item',[_c('mu-list-item-action',[_vm._v("船舶"+_vm._s(index + 1))]),_vm._v(" "),_c('mu-list-item-content',[_c('mu-list-item-title',{staticClass:"pl-15"},[_vm._v(_vm._s(item.name))])],1),_vm._v(" "),(item.default)?_c('mu-list-item-action',{staticClass:"pl-15 pr-15 fz-14"},[_c('span',{staticStyle:{"color":"#477FB9"}},[_vm._v("默认船舶")])]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"flex aic h",attrs:{"slot":"right"},slot:"right"},[_c('mu-button',{staticClass:"h bdrsn default",attrs:{"flat":""},on:{"click":function($event){_vm.handlerDefault(item)}}},[_vm._v("\n                        设为默认\n                    ")]),_vm._v(" "),_c('mu-button',{staticClass:"h bdrsn modify",attrs:{"flat":""},on:{"click":function($event){_vm.handlerEdit(item)}}},[_vm._v("\n                        修改\n                    ")]),_vm._v(" "),_c('mu-button',{staticClass:"h bdrsn delete",attrs:{"flat":""},on:{"click":function($event){_vm.handlerDelete(item)}}},[_vm._v("\n                        删除\n                    ")])],1)],1)}),_vm._v(" "),(_vm.data.shipList.length < 5)?_c('mu-list-item',{staticClass:"mb-15"},[_c('mu-list-item-content',{staticClass:"w h"},[_c('mu-button',{staticClass:"w h",attrs:{"color":"#9F9F9F","flat":""},on:{"click":_vm.handlerAdd}},[_c('mu-icon',{attrs:{"size":"24","value":"add"}}),_vm._v("\n                        新增船舶\n                    ")],1)],1)],1):_vm._e(),_vm._v(" "),_c('mu-list-item',{staticClass:"border-1px-b"},[_c('mu-list-item-action',[_vm._v("手机号码")]),_vm._v(" "),_c('mu-list-item-content',[_c('mu-list-item-title',{staticClass:"pl-15"},[_vm._v(_vm._s(_vm.user.phone))])],1),_vm._v(" "),_c('mu-list-item-action',[_c('mu-button',{attrs:{"color":"#477FB9","flat":""},on:{"click":_vm.handlerSavePhone}},[_vm._v("\n                        "+_vm._s(_vm.data.phone ? '修改' : '绑定')+"\n                    ")])],1)],1),_vm._v(" "),_c('mu-list-item',{staticClass:"mb-25",attrs:{"to":"/about/data/password","button":""}},[_c('mu-list-item-action',[_vm._v("修改密码")]),_vm._v(" "),_c('mu-list-item-content'),_vm._v(" "),_c('mu-list-item-action',[_c('mu-icon',{attrs:{"value":"chevron_right"}})],1)],1)],2),_vm._v(" "),_c('mu-button',{staticClass:"background-primary db w90 ma mb-10",attrs:{"color":"#fff","flat":""},on:{"click":function($event){_vm.handlerExit()}}},[_vm._v("切换用户\n        ")]),_vm._v(" "),_c('mu-button',{staticClass:"db w90 ma",attrs:{"color":"#999","flat":""},on:{"click":function($event){_vm.handlerExit('out')}}},[_vm._v("注销")])],1),_vm._v(" "),_c('div',{staticStyle:{"position":"absolute","top":"-10px","right":"-10px","width":"0","height":"0","overflow":"hidden"}},[_c('input',{ref:"file",attrs:{"type":"file"}})]),_vm._v(" "),_c('cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.cropper.visible),expression:"cropper.visible"}],attrs:{"img":_vm.cropper.avatar},on:{"close":_vm.handlerCropperClose,"confirm":_vm.handlerCropperConfirm},model:{value:(_vm.cropper.visible),callback:function ($$v) {_vm.$set(_vm.cropper, "visible", $$v)},expression:"cropper.visible"}}),_vm._v(" "),_c('transition',{attrs:{"name":"views-left"}},[_c('keep-alive',[_c('router-view',{staticClass:"views",on:{"update":_vm.handlerUpdate}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_about_data = (esExports);
// CONCATENATED MODULE: ./src/views/about/data/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("lVsr")
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
  about_data,
  views_about_data,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_about_data = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=14.js.map