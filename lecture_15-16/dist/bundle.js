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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ \"./src/js/services/index.js\");\n/* harmony import */ var _getPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPosts */ \"./src/js/components/Blog/getPosts.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/js/components/Blog/render.js\");\n\n\n\n\nclass Blog extends _services__WEBPACK_IMPORTED_MODULE_0__[\"RenderService\"] {\n    getPosts(posts) {\n        return Object(_getPosts__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(posts)\n    }\n    render(arr) {\n        if (!arr.length) throw 'No posts'\n        const newPostsArr = this.getPosts(arr)\n        Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newPostsArr.slice(0, 3), this.createElement)\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Blog());\n\n\n//# sourceURL=webpack:///./src/js/components/Blog/Blog.js?");

/***/ }),

/***/ "./src/js/components/Blog/getPosts.js":
/*!********************************************!*\
  !*** ./src/js/components/Blog/getPosts.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getPosts = (posts) => {\r\n    const addRatings = (arr) => {\r\n        return arr.map(postObj => {\r\n            const { ratings } = postObj\r\n            return {\r\n                ...postObj,\r\n                ratings: getAverage(ratings),\r\n            }\r\n        })\r\n    }\r\n    const getAverage = (arr) => {\r\n        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)\r\n    }\r\n    const blogData = addRatings(posts)\r\n    return blogData.sort((a, b) => b.ratings - a.ratings)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPosts);\n\n//# sourceURL=webpack:///./src/js/components/Blog/getPosts.js?");

/***/ }),

/***/ "./src/js/components/Blog/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/Blog/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ \"./src/js/services/index.js\");\n/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog */ \"./src/js/components/Blog/Blog.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    const { ApiService, config } = _services__WEBPACK_IMPORTED_MODULE_0__[\"ApiService\"]\n    const { posts } = config.url\n    const Api = new ApiService()\n    Api.getData(posts)\n        .then(postsArr => _Blog__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(postsArr))\n        .catch(error => {\n            throw new Error(error)\n        })\n});\n\n\n//# sourceURL=webpack:///./src/js/components/Blog/index.js?");

/***/ }),

/***/ "./src/js/components/Blog/render.js":
/*!******************************************!*\
  !*** ./src/js/components/Blog/render.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst render = (arr, createFunc) => {\r\n    const blogContainer = createFunc({\r\n        componentData: { tag: 'div', className: 'row list blog__container' },\r\n        parentComponent: document.getElementById('blog')\r\n    })\r\n    const getImage = ({ componentData, parentComponent }) => {\r\n        const { src, title } = componentData\r\n        const callback = (component) => {\r\n            component.src = src\r\n            component.alt = title\r\n            return component\r\n        }\r\n\r\n        const imageContainer = createFunc({\r\n            componentData: { tag: 'div', className: 'list__item__image' },\r\n            parentComponent\r\n        })\r\n        createFunc({\r\n            componentData: { tag: 'img', className: 'blog__preview' },\r\n            callback,\r\n            parentComponent: imageContainer\r\n        })\r\n\r\n        return imageContainer\r\n    }\r\n    const getDescriptionContainer = ({ componentData, parentComponent }) => {\r\n        const { title, ratings, topics, date, description } = componentData\r\n        const isCheckTopics = topics.length !== 0\r\n        const isCheckRatings = ratings.length !== 0\r\n        let classHeightContainer = 'blog__no__topics'\r\n\r\n        const getComponentLabel = ({ componentData, parentComponent }) => {\r\n            const { value, tag, className } = componentData\r\n            const callback = (component) => {\r\n                component.innerHTML = value\r\n                return component\r\n            }\r\n\r\n            createFunc({\r\n                componentData: { tag, className },\r\n                callback,\r\n                parentComponent\r\n            })\r\n        }\r\n\r\n        if (isCheckTopics) classHeightContainer = ''\r\n        const descriptionContainer = createFunc({\r\n            componentData: { tag: 'div', className: `list__item__description blog__container__description ${classHeightContainer}` },\r\n            parentComponent\r\n        })\r\n\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: title,\r\n                tag: 'h4',\r\n                className: 'item__title blog__title'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: date,\r\n                tag: 'p',\r\n                className: 'blog__date'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: description,\r\n                tag: 'p',\r\n                className: 'item__description blog__description'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        if (isCheckTopics) getComponentLabel({\r\n            componentData: {\r\n                value: topics.join(', '),\r\n                tag: 'p',\r\n                className: 'blog__topic'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        if (isCheckRatings) getComponentLabel({\r\n            componentData: {\r\n                value: `Rating: ${ratings}`,\r\n                tag: 'p',\r\n                className: 'blog__rating'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: 'read more',\r\n                tag: 'button',\r\n                className: 'btn btn--middle item__btn blog__btn'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n    }\r\n    const getItem = (blogObj) => {\r\n        const { id, title, ratings, topics, src, date, description } = blogObj\r\n        const callback = (component) => {\r\n            component.tabindex = '0'\r\n            component.id = String(id)\r\n            return component\r\n        }\r\n\r\n        const blogItem = createFunc({\r\n            componentData: { tag: 'div', className: 'col-12 col-sm-6 col-md-4 list__item blog__item' },\r\n            callback,\r\n            parentComponent: blogContainer\r\n        })\r\n\r\n        getImage({ componentData: { src, title }, parentComponent: blogItem })\r\n        getDescriptionContainer({ componentData: { title, ratings, topics, date, description }, parentComponent: blogItem })\r\n    }\r\n\r\n    arr.forEach(blogObj => getItem(blogObj))\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/js/components/Blog/render.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/js/components/index.js\");\n\n\nwindow.onload = () => Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"Blog\"])()\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/services/ApiService/ApiService.js":
/*!**************************************************!*\
  !*** ./src/js/services/ApiService/ApiService.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ApiService {\n    getData(url) {\n        return new Promise((resolve, reject) => {\n            fetch(url)\n                .then(response => response.json())\n                .then(result => resolve(result))\n                .catch(error => reject(error))\n        })\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiService);\n\n//# sourceURL=webpack:///./src/js/services/ApiService/ApiService.js?");

/***/ }),

/***/ "./src/js/services/ApiService/config.js":
/*!**********************************************!*\
  !*** ./src/js/services/ApiService/config.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    url: {\r\n        posts: 'https://my-json-server.typicode.com/fanticus/EPM-FE2019/posts'\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/js/services/ApiService/config.js?");

/***/ }),

/***/ "./src/js/services/ApiService/index.js":
/*!*********************************************!*\
  !*** ./src/js/services/ApiService/index.js ***!
  \*********************************************/
/*! exports provided: ApiService, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiService */ \"./src/js/services/ApiService/ApiService.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ApiService\", function() { return _ApiService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/js/services/ApiService/config.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/services/ApiService/index.js?");

/***/ }),

/***/ "./src/js/services/RenderService/RenderService.js":
/*!********************************************************!*\
  !*** ./src/js/services/RenderService/RenderService.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/js/services/RenderService/createElement.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/js/services/RenderService/render.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_render__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass RenderService {\r\n    createElement(arg) {\r\n    \treturn Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arg)\r\n\t}\r\n    render(arg) {\r\n        return _render__WEBPACK_IMPORTED_MODULE_1___default()(arg)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderService);\n\n//# sourceURL=webpack:///./src/js/services/RenderService/RenderService.js?");

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
/*! exports provided: RenderService, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RenderService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderService */ \"./src/js/services/RenderService/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RenderService\", function() { return _RenderService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiService */ \"./src/js/services/ApiService/index.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"ApiService\", function() { return _ApiService__WEBPACK_IMPORTED_MODULE_1__; });\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/services/index.js?");

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