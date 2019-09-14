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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/scss/style.scss */ \"./src/styles/scss/style.scss\");\n/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index */ \"./src/js/index.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/components/Blog/Blog.js":
/*!****************************************!*\
  !*** ./src/js/components/Blog/Blog.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ \"./src/js/services/index.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/js/components/Blog/getData.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/js/components/Blog/render.js\");\n\n\n\n\nfunction Blog () {\n    this.data = []\n}\n\nBlog.prototype = {\n    getData() {\n        this.data = Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().slice(0, 3)\n    },\n    render() {\n        Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.data, this.createElement)\n    }\n}\n\nObject.setPrototypeOf(Blog.prototype, _services__WEBPACK_IMPORTED_MODULE_0__[\"RenderService\"].prototype)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\n\n//# sourceURL=webpack:///./src/js/components/Blog/Blog.js?");

/***/ }),

/***/ "./src/js/components/Blog/getData.js":
/*!*******************************************!*\
  !*** ./src/js/components/Blog/getData.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getData = () => {\n    const getRatings = () => {\n        const LengthRatingsArray = 10\n        return Array(LengthRatingsArray).fill().map(() => {\n            return getRandomInt(1, 1000)\n        })\n    }\n    const getTopics = () => {\n        const LengthTopicsArray = getRandomInt(1, 20)\n        return Array(LengthTopicsArray).fill().map(() => {\n            const NumTopic = getRandomInt(1, 1000)\n            return `#topic${NumTopic}`\n        })\n    }\n    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min\n    const getAverage = (arr) => Math.floor(arr.reduce((a, b) => a + b) / arr.length)\n\n    const LengthBlogArray = 30\n    const BlogData = Array(LengthBlogArray).fill().map((itemBlog, index) => {\n        const id = `${++index}`\n        const title = `Title${id}`\n        const ratings = getAverage(getRatings())\n        const topics = getTopics()\n        return {\n            id,\n            ratings,\n            topics,\n            title\n        }\n    })\n\n    return BlogData.sort((a, b) => b.ratings - a.ratings)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\n\n//# sourceURL=webpack:///./src/js/components/Blog/getData.js?");

/***/ }),

/***/ "./src/js/components/Blog/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/Blog/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog */ \"./src/js/components/Blog/Blog.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    const BlogConstructor = new _Blog__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    BlogConstructor.getData()\n    BlogConstructor.render()\n    BlogConstructor.render()\n});\n\n\n//# sourceURL=webpack:///./src/js/components/Blog/index.js?");

/***/ }),

/***/ "./src/js/components/Blog/render.js":
/*!******************************************!*\
  !*** ./src/js/components/Blog/render.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst render = (arr, func) => {\r\n    const getImage = ({ componentData, parentComponent }) => {\r\n        const { src, title } = componentData\r\n        const callback = (component) => {\r\n            component.src = src\r\n            component.alt = title\r\n            return component\r\n        }\r\n\r\n        const ImageContainer = func({\r\n            componentData: { tag: 'div', className: 'list__item__image' },\r\n            parentComponent\r\n        })\r\n        func({\r\n            componentData: { tag: 'img', className: 'blog__preview' },\r\n            callback,\r\n            parentComponent: ImageContainer\r\n        })\r\n\r\n        return ImageContainer\r\n    }\r\n    const getDescriptionContainer = ({ componentData, parentComponent }) => {\r\n        const { title, ratings, topics, date, description } = componentData\r\n        const IsCheckTopics = topics.length !== 0\r\n        const IsCheckRatings = ratings.length !== 0\r\n        let classHeightContainer = 'blog__no__topics'\r\n\r\n        const getComponentLabel = ({ componentData, parentComponent }) => {\r\n            const { value, tag, className } = componentData\r\n            const callback = (component) => {\r\n                component.innerHTML = value\r\n                return component\r\n            }\r\n\r\n            func({\r\n                componentData: { tag, className },\r\n                callback,\r\n                parentComponent\r\n            })\r\n        }\r\n\r\n        if (IsCheckTopics) classHeightContainer = ''\r\n        const descriptionContainer = func({\r\n            componentData: { tag: 'div', className: `list__item__description blog__container__description ${classHeightContainer}` },\r\n            parentComponent\r\n        })\r\n\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: title,\r\n                tag: 'h4',\r\n                className: 'item__title blog__title'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: date,\r\n                tag: 'p',\r\n                className: 'blog__date'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: description,\r\n                tag: 'p',\r\n                className: 'item__description blog__description'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        if (IsCheckTopics) getComponentLabel({\r\n            componentData: {\r\n                value: topics.join(', '),\r\n                tag: 'p',\r\n                className: 'blog__topic'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        if (IsCheckRatings) getComponentLabel({\r\n            componentData: {\r\n                value: `Rating: ${ratings}`,\r\n                tag: 'p',\r\n                className: 'blog__rating'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: 'read more',\r\n                tag: 'button',\r\n                className: 'btn btn--middle item__btn blog__btn'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n    }\r\n    const blogContainer = func({\r\n        componentData: { tag: 'div', className: 'row list blog__container' },\r\n        parentComponent: document.getElementById('blog')\r\n    })\r\n    const getItem = (blogObj) => {\r\n        const { id, title, ratings, topics, src, date, description } = blogObj\r\n        const callback = (component) => {\r\n            component.tabindex = '0'\r\n            component.id = String(id)\r\n            return component\r\n        }\r\n\r\n        const blogItem = func({\r\n            componentData: { tag: 'div', className: 'col-12 col-sm-6 col-md-4 list__item blog__item' },\r\n            callback,\r\n            parentComponent: blogContainer\r\n        })\r\n\r\n        getImage({ componentData: { src, title }, parentComponent: blogItem })\r\n        getDescriptionContainer({ componentData: { title, ratings, topics, date, description }, parentComponent: blogItem })\r\n    }\r\n\r\n    arr.forEach((blogObj, index) => {\r\n        const NewBlogObj  = {\r\n            ...blogObj,\r\n            date: '15 Jan, 2015',\r\n            description: 'Lorem ipsum dolor sit amet, con­sectetur adipiscing elit. Pellen­tesque vel odio vel felis placerat pharetra ut vitae felis.',\r\n            src: `./images/image${++index}.jpg`\r\n        }\r\n        getItem(NewBlogObj)\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/js/components/Blog/render.js?");

/***/ }),

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/*! exports provided: Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog */ \"./src/js/components/Blog/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Blog\", function() { return _Blog__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/js/components/index.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/js/components/index.js\");\n\n\nObject(_components__WEBPACK_IMPORTED_MODULE_0__[\"Blog\"])()\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/services/RenderService/RenderService.js":
/*!********************************************************!*\
  !*** ./src/js/services/RenderService/RenderService.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/js/services/RenderService/createElement.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/js/services/RenderService/render.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_render__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nfunction RenderService() {}\r\n\r\nRenderService.prototype = {\r\n    createElement(arg) {\r\n    \treturn Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arg)\r\n\t},\r\n    render(arg) {\r\n        return _render__WEBPACK_IMPORTED_MODULE_1___default()(arg)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderService);\n\n//# sourceURL=webpack:///./src/js/services/RenderService/RenderService.js?");

/***/ }),

/***/ "./src/js/services/RenderService/createElement.js":
/*!********************************************************!*\
  !*** ./src/js/services/RenderService/createElement.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createElement = ({ componentData, callback, parentComponent }) => {\r\n\tconst { tag, className } = componentData\r\n\tconst Component = document.createElement(tag)\r\n\tComponent.className = className\r\n\tif (callback) callback(Component)\r\n\tif (parentComponent) parentComponent.appendChild(Component)\r\n\tif (tag === 'div') return Component\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/js/services/RenderService/createElement.js?");

/***/ }),

/***/ "./src/js/services/RenderService/index.js":
/*!************************************************!*\
  !*** ./src/js/services/RenderService/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RenderService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderService */ \"./src/js/services/RenderService/RenderService.js\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_RenderService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/js/services/RenderService/index.js?");

/***/ }),

/***/ "./src/js/services/RenderService/render.js":
/*!*************************************************!*\
  !*** ./src/js/services/RenderService/render.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const render = ({ tag, className }) => {\r\n    const Component = document.createElement(tag)\r\n    Component.className = className\r\n    return Component\r\n}\n\n//# sourceURL=webpack:///./src/js/services/RenderService/render.js?");

/***/ }),

/***/ "./src/js/services/index.js":
/*!**********************************!*\
  !*** ./src/js/services/index.js ***!
  \**********************************/
/*! exports provided: RenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RenderService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderService */ \"./src/js/services/RenderService/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RenderService\", function() { return _RenderService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/js/services/index.js?");

/***/ }),

/***/ "./src/styles/scss/style.scss":
/*!************************************!*\
  !*** ./src/styles/scss/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/scss/style.scss?");

/***/ })

/******/ });