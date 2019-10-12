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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/scss/style.scss */ \"./src/styles/scss/style.scss\");\n/* harmony import */ var _styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts */ \"./src/ts/index.ts\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/styles/scss/style.scss":
/*!************************************!*\
  !*** ./src/styles/scss/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/scss/style.scss?");

/***/ }),

/***/ "./src/ts/components/Blog/Blog.service.ts":
/*!************************************************!*\
  !*** ./src/ts/components/Blog/Blog.service.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ \"./src/ts/services/index.ts\");\n/* harmony import */ var _getPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPosts */ \"./src/ts/components/Blog/getPosts.ts\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/ts/components/Blog/render.ts\");\n\r\n\r\n\r\nclass BlogRenderer extends _services__WEBPACK_IMPORTED_MODULE_0__[\"Renderable\"] {\r\n    getPosts(posts) {\r\n        return Object(_getPosts__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(posts);\r\n    }\r\n    render(arr) {\r\n        Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr.slice(0, 3), this.createElement);\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new BlogRenderer());\r\n\n\n//# sourceURL=webpack:///./src/ts/components/Blog/Blog.service.ts?");

/***/ }),

/***/ "./src/ts/components/Blog/getPosts.ts":
/*!********************************************!*\
  !*** ./src/ts/components/Blog/getPosts.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getPosts = (posts) => {\r\n    if (!posts.length)\r\n        throw 'No posts';\r\n    const addRatings = (arr) => {\r\n        return arr.map((postObj) => {\r\n            const { ratings } = postObj;\r\n            return Object.assign(Object.assign({}, postObj), { ratings: getAverage(ratings) });\r\n        });\r\n    };\r\n    const getAverage = (arr) => {\r\n        return Math.floor(arr.reduce((a, b) => a + b) / arr.length);\r\n    };\r\n    const blogData = addRatings(posts);\r\n    return blogData.sort((a, b) => b.ratings - a.ratings);\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPosts);\r\n\n\n//# sourceURL=webpack:///./src/ts/components/Blog/getPosts.ts?");

/***/ }),

/***/ "./src/ts/components/Blog/index.ts":
/*!*****************************************!*\
  !*** ./src/ts/components/Blog/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ \"./src/ts/services/index.ts\");\n/* harmony import */ var _Blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.service */ \"./src/ts/components/Blog/Blog.service.ts\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    const { Request, config } = _services__WEBPACK_IMPORTED_MODULE_0__[\"Request\"];\r\n    const { posts } = config.url;\r\n    const Api = new Request();\r\n    Api.getData(posts)\r\n        .then((postsArr) => {\r\n        const newPostsArr = _Blog_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPosts(postsArr);\r\n        _Blog_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(newPostsArr);\r\n    })\r\n        .catch(error => {\r\n        throw new Error(error);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/ts/components/Blog/index.ts?");

/***/ }),

/***/ "./src/ts/components/Blog/render.ts":
/*!******************************************!*\
  !*** ./src/ts/components/Blog/render.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst render = (arr, createFunc) => {\r\n    const blogContainer = createFunc({\r\n        componentData: { tag: 'div', className: 'row list blog__container' },\r\n        parentComponent: document.getElementById('blog')\r\n    });\r\n    const getImage = (componentObj) => {\r\n        const { componentData, parentComponent } = componentObj;\r\n        const { src, title } = componentData;\r\n        const callback = (component) => {\r\n            component.src = src;\r\n            component.alt = title;\r\n            return component;\r\n        };\r\n        const imageContainer = createFunc({\r\n            componentData: { tag: 'div', className: 'list__item__image' },\r\n            parentComponent\r\n        });\r\n        createFunc({\r\n            componentData: { tag: 'img', className: 'blog__preview' },\r\n            callback,\r\n            parentComponent: imageContainer\r\n        });\r\n        return imageContainer;\r\n    };\r\n    const getDescriptionContainer = (componentObj) => {\r\n        const { componentData, parentComponent } = componentObj;\r\n        const { title, ratings, topics, date, description } = componentData;\r\n        const isCheckTopics = topics.length !== 0;\r\n        let classHeightContainer = 'blog__no__topics';\r\n        const getComponentLabel = (componentObj) => {\r\n            const { componentData, parentComponent } = componentObj;\r\n            const { value, tag, className } = componentData;\r\n            const callback = (component) => {\r\n                component.innerHTML = value;\r\n                return component;\r\n            };\r\n            createFunc({\r\n                componentData: { tag, className },\r\n                callback,\r\n                parentComponent\r\n            });\r\n        };\r\n        if (isCheckTopics)\r\n            classHeightContainer = '';\r\n        const descriptionContainer = createFunc({\r\n            componentData: { tag: 'div', className: `list__item__description blog__container__description ${classHeightContainer}` },\r\n            parentComponent\r\n        });\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: title,\r\n                tag: 'h4',\r\n                className: 'item__title blog__title'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        });\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: date,\r\n                tag: 'p',\r\n                className: 'blog__date'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        });\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: description,\r\n                tag: 'p',\r\n                className: 'item__description blog__description'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        });\r\n        if (isCheckTopics)\r\n            getComponentLabel({\r\n                componentData: {\r\n                    value: topics.join(', '),\r\n                    tag: 'p',\r\n                    className: 'blog__topic'\r\n                },\r\n                parentComponent: descriptionContainer\r\n            });\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: `Rating: ${ratings}`,\r\n                tag: 'p',\r\n                className: 'blog__rating'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        });\r\n        getComponentLabel({\r\n            componentData: {\r\n                value: 'read more',\r\n                tag: 'button',\r\n                className: 'btn btn--middle item__btn blog__btn'\r\n            },\r\n            parentComponent: descriptionContainer\r\n        });\r\n    };\r\n    const getItem = (blogObj) => {\r\n        const { id, title, ratings, topics, src, date, description } = blogObj;\r\n        const callback = (component) => {\r\n            component.tabindex = '0';\r\n            component.id = String(id);\r\n            return component;\r\n        };\r\n        const blogItem = createFunc({\r\n            componentData: { tag: 'div', className: 'col-12 col-sm-6 col-md-4 list__item blog__item' },\r\n            callback,\r\n            parentComponent: blogContainer\r\n        });\r\n        getImage({ componentData: { src, title }, parentComponent: blogItem });\r\n        getDescriptionContainer({ componentData: { title, ratings, topics, date, description }, parentComponent: blogItem });\r\n    };\r\n    arr.forEach(blogObj => getItem(blogObj));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\r\n\n\n//# sourceURL=webpack:///./src/ts/components/Blog/render.ts?");

/***/ }),

/***/ "./src/ts/components/index.ts":
/*!************************************!*\
  !*** ./src/ts/components/index.ts ***!
  \************************************/
/*! exports provided: Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog */ \"./src/ts/components/Blog/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Blog\", function() { return _Blog__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/ts/components/index.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/ts/components/index.ts\");\n\r\nwindow.onload = () => Object(_components__WEBPACK_IMPORTED_MODULE_0__[\"Blog\"])();\r\n\n\n//# sourceURL=webpack:///./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/services/Renderable/Renderable.service.ts":
/*!**********************************************************!*\
  !*** ./src/ts/services/Renderable/Renderable.service.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderable; });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/ts/services/Renderable/createElement.ts\");\n\r\nclass Renderable {\r\n    createElement(item) {\r\n        return Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(item);\r\n    }\r\n    render(arr) {\r\n        throw new Error('Method not exist.');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/ts/services/Renderable/Renderable.service.ts?");

/***/ }),

/***/ "./src/ts/services/Renderable/createElement.ts":
/*!*****************************************************!*\
  !*** ./src/ts/services/Renderable/createElement.ts ***!
  \*****************************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nconst createElement = (item) => {\r\n    const { componentData: { tag, className }, callback, parentComponent } = item;\r\n    const Component = document.createElement(tag);\r\n    Component.className = className;\r\n    if (callback)\r\n        callback(Component);\r\n    if (parentComponent)\r\n        parentComponent.appendChild(Component);\r\n    if (tag === 'div')\r\n        return Component;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/ts/services/Renderable/createElement.ts?");

/***/ }),

/***/ "./src/ts/services/Renderable/index.ts":
/*!*********************************************!*\
  !*** ./src/ts/services/Renderable/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Renderable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderable.service */ \"./src/ts/services/Renderable/Renderable.service.ts\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Renderable_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/ts/services/Renderable/index.ts?");

/***/ }),

/***/ "./src/ts/services/Request/Request.service.ts":
/*!****************************************************!*\
  !*** ./src/ts/services/Request/Request.service.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Request; });\nclass Request {\r\n    getData(url) {\r\n        return new Promise((resolve, reject) => {\r\n            fetch(url)\r\n                .then(response => response.json())\r\n                .then(result => resolve(result))\r\n                .catch(error => reject(error));\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/ts/services/Request/Request.service.ts?");

/***/ }),

/***/ "./src/ts/services/Request/config.ts":
/*!*******************************************!*\
  !*** ./src/ts/services/Request/config.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CONFIG = {\r\n    url: {\r\n        posts: 'https://my-json-server.typicode.com/fanticus/EPM-FE2019/posts'\r\n    }\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CONFIG);\r\n\n\n//# sourceURL=webpack:///./src/ts/services/Request/config.ts?");

/***/ }),

/***/ "./src/ts/services/Request/index.ts":
/*!******************************************!*\
  !*** ./src/ts/services/Request/index.ts ***!
  \******************************************/
/*! exports provided: Request, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request.service */ \"./src/ts/services/Request/Request.service.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Request\", function() { return _Request_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/ts/services/Request/config.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/ts/services/Request/index.ts?");

/***/ }),

/***/ "./src/ts/services/index.ts":
/*!**********************************!*\
  !*** ./src/ts/services/index.ts ***!
  \**********************************/
/*! exports provided: Renderable, Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderable */ \"./src/ts/services/Renderable/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Renderable\", function() { return _Renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Request */ \"./src/ts/services/Request/index.ts\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Request\", function() { return _Request__WEBPACK_IMPORTED_MODULE_1__; });\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/ts/services/index.ts?");

/***/ })

/******/ });