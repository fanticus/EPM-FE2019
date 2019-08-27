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

/***/ "./src/js/blog/getBlogData.js":
/*!************************************!*\
  !*** ./src/js/blog/getBlogData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getBlogData = () => {\r\n    const getBlogDataArr = () => {\r\n        const LengthBlogArray = 30\r\n        const BlogData =  Array(LengthBlogArray).fill().map((itemBlog, index) => {\r\n            const id = `${++index}`\r\n            const title = `Title${id}`\r\n            const ratings = getAverage(getRatings())\r\n            const topics = getTopics()\r\n            return {\r\n                id,\r\n                ratings,\r\n                topics,\r\n                title\r\n            }\r\n        })\r\n        return BlogData.sort((a, b) => {\r\n            if (a.ratings < b.ratings) return 1\r\n            if (a.ratings > b.ratings) return -1\r\n            return 0\r\n        })\r\n    }\r\n    const getRatings = () => {\r\n        const LengthRatingsArray = 10\r\n        return Array(LengthRatingsArray).fill().map(() => {\r\n            return getRandomInt(1, 1000)\r\n        })\r\n    }\r\n    const getTopics = () => {\r\n        const LengthTopicsArray = getRandomInt(1, 20)\r\n        return Array(LengthTopicsArray).fill().map(() => {\r\n            const NumTopic = getRandomInt(1, 1000)\r\n            return `#topic${NumTopic}`\r\n        })\r\n    }\r\n    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min\r\n    const getAverage = (arr) => Math.floor(arr.reduce((a, b) => a + b) / arr.length)\r\n\r\n    return getBlogDataArr()\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getBlogData);\n\n//# sourceURL=webpack:///./src/js/blog/getBlogData.js?");

/***/ }),

/***/ "./src/js/blog/index.js":
/*!******************************!*\
  !*** ./src/js/blog/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getBlogData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlogData */ \"./src/js/blog/getBlogData.js\");\n/* harmony import */ var _renderBlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBlog */ \"./src/js/blog/renderBlog.js\");\n\r\n\r\nconst BlogFunc = () => {\r\n    window.onload = () => {\r\n        const BlogDataArr = Object(_getBlogData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        const BlogContainerElement = document.getElementById('blogContainer')\r\n        Object(_renderBlog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(BlogDataArr, BlogContainerElement)\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogFunc);\n\n//# sourceURL=webpack:///./src/js/blog/index.js?");

/***/ }),

/***/ "./src/js/blog/renderBlog.js":
/*!***********************************!*\
  !*** ./src/js/blog/renderBlog.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderBlogContent = (arr, component) => {\r\n\r\n    const renderBlogItems = (arr) => {\r\n        const NewArr = arr.slice(0, 3)\r\n        NewArr.forEach((blogObj, index) => {\r\n            component.append(getBlogItem(blogObj, `./images/image${++index}.jpg`))\r\n        })\r\n    }\r\n\r\n    const getBlogItem = (item, imageSrc) => {\r\n        const blogItem = document.createElement('div')\r\n        const { id, title, ratings, topics } = item\r\n        blogItem.className = 'col-12 col-sm-6 col-md-4 list__item blog__item'\r\n        blogItem.tabindex = '0'\r\n        blogItem.id = String(id)\r\n        blogItem.appendChild(getImageContainer(imageSrc, title))\r\n        blogItem.appendChild(getDescriptionContainer(title, ratings, topics))\r\n        return blogItem\r\n    }\r\n\r\n    const getImageContainer = (imageSrc, title) => {\r\n        const imageContainer = document.createElement('div')\r\n        const getBlogImage = (imageSrc, title) => {\r\n            const imageComponent = document.createElement('img')\r\n            imageComponent.className = 'blog__preview'\r\n            imageComponent.src = imageSrc\r\n            imageComponent.alt = title\r\n            return imageComponent\r\n        }\r\n        imageContainer.appendChild(getBlogImage(imageSrc, title))\r\n        imageContainer.className = 'list__item__image'\r\n        return imageContainer\r\n    }\r\n\r\n    const getDescriptionContainer = (title, ratings, topics) => {\r\n        const descriptionContainer = document.createElement('div')\r\n        const date = '15 Jan, 2015'\r\n        const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla, cum enim ex tenetur nobis earum eius pariatur quas error.'\r\n        const getBlogTitle = (title) => {\r\n            const titleComponent = document.createElement('h4')\r\n            titleComponent.className = 'item__title blog__title'\r\n            titleComponent.innerHTML = title\r\n            return titleComponent\r\n        }\r\n\r\n        const getBlogDate = (date) => {\r\n            const dateComponent = document.createElement('p')\r\n            dateComponent.className = 'blog__date'\r\n            dateComponent.innerHTML = date\r\n            return dateComponent\r\n        }\r\n\r\n        const getBlogDescription = (text) => {\r\n            const textComponent = document.createElement('p')\r\n            textComponent.className = 'item__description blog__description'\r\n            textComponent.innerHTML = text\r\n            return textComponent\r\n        }\r\n\r\n        const getBlogTopics = (topics) => {\r\n            const topicsComponent = document.createElement('p')\r\n            topicsComponent.className = ''\r\n            topicsComponent.innerHTML = topics.join(', ')\r\n            return topicsComponent\r\n        }\r\n\r\n        const getBlogRating = (ratings) => {\r\n            const ratingComponent = document.createElement('p')\r\n            ratingComponent.className = ''\r\n            ratingComponent.innerHTML = `Rating: ${ratings}`\r\n            return ratingComponent\r\n        }\r\n\r\n        const getBlogButton = () => {\r\n            const buttonComponent = document.createElement('button')\r\n            buttonComponent.className = 'btn btn--middle item__btn blog__btn'\r\n            buttonComponent.innerHTML = 'read more'\r\n            return buttonComponent\r\n        }\r\n        descriptionContainer.appendChild(getBlogTitle(title))\r\n        descriptionContainer.appendChild(getBlogDate(date))\r\n        descriptionContainer.appendChild(getBlogDescription(description))\r\n        descriptionContainer.appendChild(getBlogTopics(topics))\r\n        descriptionContainer.appendChild(getBlogRating(ratings))\r\n        descriptionContainer.appendChild(getBlogButton())\r\n        descriptionContainer.className = 'list__item__description blog__container__description'\r\n        return descriptionContainer\r\n    }\r\n\r\n    renderBlogItems(arr)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderBlogContent);\n\n//# sourceURL=webpack:///./src/js/blog/renderBlog.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blog_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog/index */ \"./src/js/blog/index.js\");\n\r\nObject(_blog_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack:///./src/js/index.js?");

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