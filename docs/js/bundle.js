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

/***/ "./src/component/accelball.js":
/*!************************************!*\
  !*** ./src/component/accelball.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AccelBall; });\nconst defaultAccel = 9.8;\r\n\r\nclass AccelBall {\r\n    constructor() {\r\n        const el = document.createElement('div');\r\n\r\n        this._el = el;\r\n\r\n        el.className = 'ball';\r\n        el.style.top = '0px';\r\n\r\n        this._vel = 0;\r\n\r\n        this._conflict = true;\r\n    }\r\n\r\n    get vel() {\r\n        return this._vel;\r\n    }\r\n\r\n    set vel(newValue) {\r\n        this._vel = newValue;\r\n    }\r\n\r\n    shift(parent) {\r\n        // do something.\r\n    }\r\n\r\n    get element() {\r\n        return this._el;\r\n    }\r\n\r\n    start() {\r\n        const callback = () => {\r\n            this._el.style.top = `${this._vel + Number.parseInt(this._el.style.top)}px`;\r\n            this._vel += defaultAccel / 30;\r\n            \r\n            if(this._conflict){\r\n                window.requestAnimationFrame(callback);\r\n            }\r\n        }\r\n\r\n        window.requestAnimationFrame(callback);\r\n    }\r\n\r\n    conflict(ground) {\r\n        if (this._conflict && Number.parseInt(this._el.style.top) + 10 >= Number.parseInt(ground.element.style.top)) {\r\n            this.vel = - 0.125;\r\n            this._conflict = false;\r\n\r\n            setTimeout(() => {\r\n                this._conflict = true;\r\n            }, 1000);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/component/accelball.js?");

/***/ }),

/***/ "./src/component/bounceball.js":
/*!*************************************!*\
  !*** ./src/component/bounceball.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BounceBall; });\nconst defaultAccel = 9.8;\r\n\r\nclass BounceBall {\r\n    constructor() {\r\n        const el = document.createElement('div');\r\n\r\n        this._el = el;\r\n\r\n        el.className = 'ball';\r\n        el.style.top = '0px';\r\n\r\n        this._vel = 0;\r\n\r\n        this._conflict = true;\r\n    }\r\n\r\n    get vel() {\r\n        return this._vel;\r\n    }\r\n\r\n    set vel(newValue) {\r\n        this._vel = newValue;\r\n    }\r\n\r\n    shift(parent) {\r\n        // do something.\r\n    }\r\n\r\n    get element() {\r\n        return this._el;\r\n    }\r\n\r\n    start() {\r\n        setTimeout(() => {\r\n            this._el.style.top = '550px';\r\n            this._end = true;\r\n        }, 6500);\r\n\r\n        const callback = () => {\r\n            this._el.style.top = `${this._vel + Number.parseInt(this._el.style.top)}px`;\r\n            this._vel += defaultAccel / 30;\r\n\r\n            if(!this._end){\r\n                window.requestAnimationFrame(callback);\r\n            }\r\n        }\r\n\r\n        window.requestAnimationFrame(callback);\r\n    }\r\n\r\n    conflict(ground) {\r\n        if (this._conflict && Number.parseInt(this._el.style.top) + 10 >= Number.parseInt(ground.element.style.top)) {\r\n            this.vel *= -0.7;\r\n\r\n            this._conflict = false;\r\n            setTimeout(()=>{\r\n                this._conflict = true;\r\n            }, 500);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/component/bounceball.js?");

/***/ }),

/***/ "./src/component/ground.js":
/*!*********************************!*\
  !*** ./src/component/ground.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ground; });\nclass Ground{\r\n    constructor(){\r\n        const el = document.createElement('div');\r\n\r\n        el.className = 'ground';\r\n\r\n        this._el = el;\r\n        this._el.style.top = '550px'\r\n    }\r\n\r\n    get element(){\r\n        return this._el\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/component/ground.js?");

/***/ }),

/***/ "./src/component/staticball.js":
/*!*************************************!*\
  !*** ./src/component/staticball.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StaticBall; });\nclass StaticBall {\r\n    constructor() {\r\n        const el = document.createElement('div');\r\n\r\n        this._el = el;\r\n\r\n        el.className = 'ball';\r\n        el.style.top = '0px';\r\n        this._conflict = true;\r\n\r\n        this._vel = 4;\r\n    }\r\n\r\n    get vel() {\r\n        return this._vel;\r\n    }\r\n\r\n    set vel(newValue) {\r\n        this._vel = newValue;\r\n    }\r\n\r\n    shift(parent) {\r\n        // do something.\r\n    }\r\n\r\n    get element() {\r\n        return this._el;\r\n    }\r\n\r\n    start() {\r\n        const callback = () => {\r\n            if (this._vel !== 0 && this._conflict) {\r\n                this._el.style.top = `${this._vel + Number.parseInt(this._el.style.top)}px`;\r\n\r\n                window.requestAnimationFrame(callback);\r\n            }\r\n        }\r\n\r\n        window.requestAnimationFrame(callback);\r\n    }\r\n\r\n    conflict(ground) {\r\n        if (this._conflict && Number.parseInt(this._el.style.top) >= Number.parseInt(ground.element.style.top)) {\r\n            this.vel = 0;\r\n            this._conflict = false;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/component/staticball.js?");

/***/ }),

/***/ "./src/component/system.js":
/*!*********************************!*\
  !*** ./src/component/system.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bounceball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounceball */ \"./src/component/bounceball.js\");\n/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ground */ \"./src/component/ground.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (BallCls) {\r\n    const el = document.createElement('div');\r\n\r\n    el.className = 'system';\r\n\r\n    const ball = new BallCls();\r\n    const ground = new _ground__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n    el.append(ball.element);\r\n    el.append(ground.element);\r\n\r\n    const confliction = () => {\r\n        ball.conflict(ground);\r\n        window.requestAnimationFrame(confliction)\r\n    }\r\n\r\n    const callback = () => {\r\n        ball.start();\r\n        window.requestAnimationFrame(confliction);\r\n    };\r\n\r\n    callback.element = el;\r\n\r\n\r\n    const btn = document.createElement('button');\r\n\r\n    btn.innerText = 'start';\r\n\r\n    btn.addEventListener('click', () => {\r\n        callback();\r\n    });\r\n\r\n    const btnContainer = document.createElement('div');\r\n\r\n    btnContainer.className = 'start';\r\n\r\n    btnContainer.append(btn);\r\n\r\n    el.append(btnContainer);\r\n\r\n    return callback;\r\n});\n\n//# sourceURL=webpack:///./src/component/system.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/system */ \"./src/component/system.js\");\n/* harmony import */ var _component_bounceball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/bounceball */ \"./src/component/bounceball.js\");\n/* harmony import */ var _component_staticball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/staticball */ \"./src/component/staticball.js\");\n/* harmony import */ var _component_accelball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/accelball */ \"./src/component/accelball.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n    const systems = [Object(_component_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_component_staticball__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), Object(_component_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_component_accelball__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), Object(_component_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_component_bounceball__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),]\r\n\r\n    const container = document.querySelector('.container');\r\n\r\n    systems.forEach((system, idx) => {\r\n        container.append(system.element);\r\n        window[`system${idx}`] = system;\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });