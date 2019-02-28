/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/svg/facebook-without-border.svg":
/*!*************************************************!*\
  !*** ./src/img/svg/facebook-without-border.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('#facebook-without-border');\n\n//# sourceURL=webpack:///./src/img/svg/facebook-without-border.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _facebookWithoutBorder = __webpack_require__(/*! ./img/svg/facebook-without-border.svg */ \"./src/img/svg/facebook-without-border.svg\");\n\nvar _facebookWithoutBorder2 = _interopRequireDefault(_facebookWithoutBorder);\n\nvar _main = __webpack_require__(/*! ./main.sass */ \"./src/main.sass\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nvar _select = __webpack_require__(/*! ./scripts/select.js */ \"./src/scripts/select.js\");\n\nvar _select2 = _interopRequireDefault(_select);\n\nvar _slider = __webpack_require__(/*! ./scripts/slider.js */ \"./src/scripts/slider.js\");\n\nvar _slider2 = _interopRequireDefault(_slider);\n\nvar _form = __webpack_require__(/*! ./scripts/form.js */ \"./src/scripts/form.js\");\n\nvar _form2 = _interopRequireDefault(_form);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.sass":
/*!***********************!*\
  !*** ./src/main.sass ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.sass?");

/***/ }),

/***/ "./src/scripts/form.js":
/*!*****************************!*\
  !*** ./src/scripts/form.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar bublingLable = exports.bublingLable = function () {\n  document.querySelectorAll('.floatLabel').forEach(function (input) {\n    input.addEventListener('focus', function () {\n      this.nextElementSibling.classList.toggle('active');\n    });\n    input.addEventListener('blur', function () {\n      this.nextElementSibling.classList.toggle('active');\n    });\n  });\n}();\n\n//# sourceURL=webpack:///./src/scripts/form.js?");

/***/ }),

/***/ "./src/scripts/select.js":
/*!*******************************!*\
  !*** ./src/scripts/select.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar select = exports.select = function () {\n  var x, i, j, selElmnt, a, b, c;\n  x = document.getElementsByClassName(\"custom-select\");\n  for (i = 0; i < x.length; i++) {\n    selElmnt = x[i].getElementsByTagName(\"select\")[0];\n\n    a = document.createElement(\"DIV\");\n    a.setAttribute(\"class\", \"select-selected\");\n    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;\n    x[i].appendChild(a);\n\n    b = document.createElement(\"DIV\");\n    b.setAttribute(\"class\", \"select-items select-hide\");\n    for (j = 0; j < selElmnt.length; j++) {\n\n      c = document.createElement(\"DIV\");\n      c.innerHTML = selElmnt.options[j].innerHTML;\n      c.addEventListener(\"click\", function (e) {\n\n        var y, i, k, s, h;\n        s = this.parentNode.parentNode.getElementsByTagName(\"select\")[0];\n        h = this.parentNode.previousSibling;\n        for (i = 0; i < s.length; i++) {\n          if (s.options[i].innerHTML == this.innerHTML) {\n            s.selectedIndex = i;\n            h.innerHTML = this.innerHTML;\n            y = this.parentNode.getElementsByClassName(\"same-as-selected\");\n            for (k = 0; k < y.length; k++) {\n              y[k].removeAttribute(\"class\");\n            }\n            this.setAttribute(\"class\", \"same-as-selected\");\n            break;\n          }\n        }\n        h.click();\n      });\n      b.appendChild(c);\n    }\n    x[i].appendChild(b);\n    a.addEventListener(\"click\", function (e) {\n\n      e.stopPropagation();\n      closeAllSelect(this);\n      this.nextSibling.classList.toggle(\"select-hide\");\n      this.classList.toggle(\"select-arrow-active\");\n    });\n  }\n  function closeAllSelect(elmnt) {\n\n    var x,\n        y,\n        i,\n        arrNo = [];\n    x = document.getElementsByClassName(\"select-items\");\n    y = document.getElementsByClassName(\"select-selected\");\n    for (i = 0; i < y.length; i++) {\n      if (elmnt == y[i]) {\n        arrNo.push(i);\n      } else {\n        y[i].classList.remove(\"select-arrow-active\");\n      }\n    }\n    for (i = 0; i < x.length; i++) {\n      if (arrNo.indexOf(i)) {\n        x[i].classList.add(\"select-hide\");\n      }\n    }\n  }\n\n  document.addEventListener(\"click\", closeAllSelect);\n}();\n\n//# sourceURL=webpack:///./src/scripts/select.js?");

/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Slider = function () {\n    function Slider(target) {\n        _classCallCheck(this, Slider);\n\n        this.slider = target;\n        this.gallery = this.slider.querySelector('.gallery');\n        this.galleryItems = this.slider.querySelectorAll('.gallery-item');\n        this.itemWidth = 24;\n\n        this.featured = this.slider.querySelector('.featured-item');\n        this.leftBtn = this.slider.querySelector('.move-btn.left');\n        this.rightBtn = this.slider.querySelector('.move-btn.right');\n\n        this.init();\n    }\n\n    _createClass(Slider, [{\n        key: 'setBg',\n        value: function setBg(item) {\n            var background = item.querySelector('figure').style.backgroundImage;\n\n            this.featured.style.backgroundImage = background;\n        }\n    }, {\n        key: 'selectItem',\n        value: function selectItem(e) {\n            var currentEl = e.target.parentElement;\n\n            if (currentEl.classList.contains('active')) return;\n\n            this.setBg(currentEl);\n\n            for (var i = 0; i < this.galleryItems.length; i++) {\n                if (this.galleryItems[i].classList.contains('active')) this.galleryItems[i].classList.remove('active');\n            }\n\n            currentEl.classList.toggle('active');\n        }\n    }, {\n        key: 'slideLeft',\n        value: function slideLeft(e) {\n            var currentEl = e.target.parentElement.querySelector('.gallery .active');\n            var prevElem = currentEl.previousElementSibling;\n            var firstElem = currentEl.parentElement.querySelectorAll('.gallery-item')[0];\n            var len = currentEl.parentElement.querySelectorAll('.gallery-item').length - 1;\n            var lastElem = currentEl.parentElement.querySelectorAll('.gallery-item')[len];\n\n            if (currentEl === firstElem) {\n                lastElem.classList.add('active');\n                this.setBg(lastElem);\n            } else {\n                prevElem.classList.add('active');\n                this.setBg(prevElem);\n            }\n            currentEl.classList.toggle('active');\n        }\n    }, {\n        key: 'slideRight',\n        value: function slideRight(e) {\n            var currentEl = e.target.parentElement.querySelector('.gallery .active');\n            var nextElem = currentEl.nextElementSibling;\n            var firstElem = currentEl.parentElement.querySelectorAll('.gallery-item')[0];\n            var len = currentEl.parentElement.querySelectorAll('.gallery-item').length - 1;\n            var lastElem = currentEl.parentElement.querySelectorAll('.gallery-item')[len];\n\n            if (currentEl === lastElem) {\n                firstElem.classList.add('active');\n                this.setBg(firstElem);\n            } else {\n                nextElem.classList.add('active');\n                this.setBg(nextElem);\n            }\n            currentEl.classList.remove('active');\n        }\n    }, {\n        key: 'init',\n        value: function init() {\n            var _this = this;\n\n            this.setBg(this.galleryItems[0]);\n            this.leftBtn.addEventListener('click', this.slideLeft.bind(this));\n            this.rightBtn.addEventListener('click', this.slideRight.bind(this));\n            this.galleryItems.forEach(function (slide) {\n                return slide.addEventListener('click', _this.selectItem.bind(_this));\n            });\n        }\n    }]);\n\n    return Slider;\n}();\n\nnew Slider(document.querySelector('#slider1'));\nnew Slider(document.querySelector('#slider2'));\nnew Slider(document.querySelector('#slider3'));\n\n//# sourceURL=webpack:///./src/scripts/slider.js?");

/***/ })

/******/ });