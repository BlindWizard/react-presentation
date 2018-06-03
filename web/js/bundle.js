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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/js/index.js":
/*!******************************!*\
  !*** ./frontend/js/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widget_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget/widget */ \"./frontend/js/widget/widget.js\");\n\n\nlet widgets = document.querySelectorAll('[data-role=\"widget\"]');\nwidgets.forEach((element) => {\n    new _widget_widget__WEBPACK_IMPORTED_MODULE_0__[\"Widget\"](element);\n});\n\n//# sourceURL=webpack:///./frontend/js/index.js?");

/***/ }),

/***/ "./frontend/js/result.js":
/*!*******************************!*\
  !*** ./frontend/js/result.js ***!
  \*******************************/
/*! exports provided: STATUS_OK, STATUS_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STATUS_OK\", function() { return STATUS_OK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STATUS_ERROR\", function() { return STATUS_ERROR; });\nconst STATUS_OK    = 0;\nconst STATUS_ERROR = 1;\n\n//# sourceURL=webpack:///./frontend/js/result.js?");

/***/ }),

/***/ "./frontend/js/widget/widget.js":
/*!**************************************!*\
  !*** ./frontend/js/widget/widget.js ***!
  \**************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Widget\", function() { return Widget; });\n/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../result */ \"./frontend/js/result.js\");\n\n\nclass Widget {\n    constructor(element) {\n        this.element = element;\n        this.render(true, '');\n    }\n\n    sendRequest() {\n        let xhr = new XMLHttpRequest();\n\n        xhr.open('GET', this.element.dataset.url, false);\n        xhr.send();\n\n        return JSON.parse(xhr.responseText);\n    }\n\n    render(success, message) {\n        this.element.innerHTML = '';\n\n        let button = document.createElement('button');\n        button.classList.add('btn');\n        button.innerText = 'Действие';\n\n        button.onclick = () => {\n            let response = this.sendRequest();\n            if (_result__WEBPACK_IMPORTED_MODULE_0__[\"STATUS_OK\"] === response.status) {\n                this.render(true, 'Действие выполнено успешно');\n            }\n            else if (_result__WEBPACK_IMPORTED_MODULE_0__[\"STATUS_ERROR\"] === response.status) {\n                this.render(false, response.message);\n            }\n            else {\n                this.render(false, 'Произошла непредвиденная ошибка')\n            }\n        };\n\n        let popover = document.createElement('div');\n        popover.classList.add = 'message';\n\n        if (true === success) {\n            popover.classList.add = 'success';\n        }\n        else {\n            popover.classList.remove = 'error';\n        }\n\n        popover.innerText     = message;\n        popover.style.display = 'block';\n\n        this.element.append(button);\n        this.element.append(popover);\n    }\n}\n\n//# sourceURL=webpack:///./frontend/js/widget/widget.js?");

/***/ })

/******/ });