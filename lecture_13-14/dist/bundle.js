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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ \"./src/js/services/index.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/js/components/Blog/getData.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/js/components/Blog/render.js\");\n\n\n\n\nfunction Blog () {}\n\nBlog.prototype = {\n    async getData() {\n        return await Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.getPosts)\n    },\n    render() {\n        this.getData().then(posts => Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(posts.slice(0, 3), this.createElement))\n    }\n}\n\nObject.setPrototypeOf(Blog.prototype, _services__WEBPACK_IMPORTED_MODULE_0__[\"Api\"].prototype)\nObject.setPrototypeOf(Blog.prototype.__proto__, _services__WEBPACK_IMPORTED_MODULE_0__[\"RenderService\"].prototype)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\n\n//# sourceURL=webpack:///./src/js/components/Blog/Blog.js?");

/***/ }),

/***/ "./src/js/components/Blog/getData.js":
/*!*******************************************!*\
  !*** ./src/js/components/Blog/getData.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getData = async (func) => {\n    const addRatings = (arr) => {\n        return arr.map(postObj => {\n            const { ratings } = postObj\n            return {\n                ...postObj,\n                ratings: getAverage(ratings),\n            }\n        })\n    }\n    const getAverage = (arr) => {\n        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)\n    }\n\n    const Posts = await func()\n    if (!Posts.length) throw new Error('No posts')\n    const BlogData = addRatings(Posts)\n    return BlogData.sort((a, b) => b.ratings - a.ratings)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\n\n//# sourceURL=webpack:///./src/js/components/Blog/getData.js?");

/***/ }),

/***/ "./src/js/components/Blog/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/Blog/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog */ \"./src/js/components/Blog/Blog.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    const BlogConstructor = new _Blog__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    BlogConstructor.render()\n});\n\n\n//# sourceURL=webpack:///./src/js/components/Blog/index.js?");

/***/ }),

/***/ "./src/js/components/Blog/render.js":
/*!******************************************!*\
  !*** ./src/js/components/Blog/render.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst render = (arr, func) => {\r\n\r\n    const getImage = ({ componentData, parentComponent }) => {\r\n        const { src, title } = componentData\r\n        const callback = (component) => {\r\n            component.src = src\r\n            component.alt = title\r\n            return component\r\n        }\r\n\r\n        const ImageContainer = func({\r\n            componentData: { tag: 'div', className: 'list__item__image' },\r\n            parentComponent\r\n        })\r\n        func({\r\n            componentData: { tag: 'img', className: 'blog__preview' },\r\n            callback,\r\n            parentComponent: ImageContainer\r\n        })\r\n\r\n        return ImageContainer\r\n    }\r\n    const getDescriptionContainer = ({ componentData, parentComponent }) => {\r\n        const { title, ratings, topics, date, description } = componentData\r\n        const IsCheckTopics = topics.length !== 0\r\n        const IsCheckRatings = ratings.length !== 0\r\n        let classHeightContainer = 'blog__no__topics'\r\n\r\n        const getComponentLabel = ({ componentData, parentComponent }) => {\r\n            const { value, tag, className } = componentData\r\n            const callback = (component) => {\r\n                component.innerHTML = value\r\n                return component\r\n            }\r\n\r\n            func({\r\n                componentData: { tag, className },\r\n                callback,\r\n                parentComponent\r\n            })\r\n        }\r\n\r\n        if (IsCheckTopics) classHeightContainer = ''\r\n        const descriptionContainer = func({\r\n            componentData: { tag: 'div', className: `list__item__description blog__container__description ${classHeightContainer}` },\r\n            parentComponent\r\n        })\r\n\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: title,\r\n                tag: 'h4',\r\n                className: 'item__title blog__title'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: date,\r\n                tag: 'p',\r\n                className: 'blog__date'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: description,\r\n                tag: 'p',\r\n                className: 'item__description blog__description'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        if (IsCheckTopics) getComponentLabel({\r\n            componentData: {\r\n                value: topics.join(', '),\r\n                tag: 'p',\r\n                className: 'blog__topic'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        if (IsCheckRatings) getComponentLabel({\r\n            componentData: {\r\n                value: `Rating: ${ratings}`,\r\n                tag: 'p',\r\n                className: 'blog__rating'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: 'read more',\r\n                tag: 'button',\r\n                className: 'btn btn--middle item__btn blog__btn'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        })\r\n    }\r\n    const blogContainer = func({\r\n        componentData: { tag: 'div', className: 'row list blog__container' },\r\n        parentComponent: document.getElementById('blog')\r\n    })\r\n    const getItem = (blogObj) => {\r\n        const { id, title, ratings, topics, src, date, description } = blogObj\r\n        const callback = (component) => {\r\n            component.tabindex = '0'\r\n            component.id = String(id)\r\n            return component\r\n        }\r\n\r\n        const blogItem = func({\r\n            componentData: { tag: 'div', className: 'col-12 col-sm-6 col-md-4 list__item blog__item' },\r\n            callback,\r\n            parentComponent: blogContainer\r\n        })\r\n\r\n        getImage({ componentData: { src, title }, parentComponent: blogItem })\r\n        getDescriptionContainer({ componentData: { title, ratings, topics, date, description }, parentComponent: blogItem })\r\n    }\r\n\r\n    arr.forEach(blogObj => getItem(blogObj))\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/js/components/Blog/render.js?");

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

/***/ "./src/js/services/Api/Api.js":
/*!************************************!*\
  !*** ./src/js/services/Api/Api.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/services/Api/config.js\");\n\n\nfunction Api() {}\n\nApi.prototype = {\n    async getPosts() {\n        try {\n            const { posts } = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].url\n            const resPosts = await fetch(posts)\n            return await resPosts.json()\n        } catch(error) {\n            console.log(`ERROR getPosts: ${error}`)\n            return []\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Api);\n\n//# sourceURL=webpack:///./src/js/services/Api/Api.js?");

/***/ }),

/***/ "./src/js/services/Api/config.js":
/*!***************************************!*\
  !*** ./src/js/services/Api/config.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    url: {\n        posts: \"https://my-json-server.typicode.com/fanticus/EPM-FE2019/posts\"\n    }\n});\n\n//# sourceURL=webpack:///./src/js/services/Api/config.js?");

/***/ }),

/***/ "./src/js/services/Api/index.js":
/*!**************************************!*\
  !*** ./src/js/services/Api/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ \"./src/js/services/Api/Api.js\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Api__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/js/services/Api/index.js?");

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
/*! exports provided: RenderService, Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RenderService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderService */ \"./src/js/services/RenderService/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RenderService\", function() { return _RenderService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ \"./src/js/services/Api/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Api\", function() { return _Api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/services/index.js?");

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