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
eval("__webpack_require__.r(__webpack_exports__);\nconst getBlogData = () => {\n    const getBlogDataArr = () => {\n        const LengthBlogArray = 30\n        const BlogData =  Array(LengthBlogArray).fill().map((itemBlog, index) => {\n            const id = `${++index}`\n            const title = `Title${id}`\n            const ratings = getAverage(getRatings())\n            const topics = getTopics()\n            return {\n                id,\n                ratings,\n                topics,\n                title\n            }\n        })\n        return BlogData.sort((a, b) => {\n            if (a.ratings < b.ratings) return 1\n            if (a.ratings > b.ratings) return -1\n            return 0\n        })\n    }\n    const getRatings = () => {\n        const LengthRatingsArray = 10\n        return Array(LengthRatingsArray).fill().map(() => {\n            return getRandomInt(1, 1000)\n        })\n    }\n    const getTopics = () => {\n        const LengthTopicsArray = getRandomInt(1, 20)\n        return Array(LengthTopicsArray).fill().map(() => {\n            const NumTopic = getRandomInt(1, 1000)\n            return `#topic${NumTopic}`\n        })\n    }\n    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min\n    const getAverage = (arr) => Math.floor(arr.reduce((a, b) => a + b) / arr.length)\n\n    return getBlogDataArr()\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getBlogData);\n\n//# sourceURL=webpack:///./src/js/blog/getBlogData.js?");

/***/ }),

/***/ "./src/js/blog/index.js":
/*!******************************!*\
  !*** ./src/js/blog/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getBlogData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlogData */ \"./src/js/blog/getBlogData.js\");\n/* harmony import */ var _renderBlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBlog */ \"./src/js/blog/renderBlog.js\");\n\n\nconst BlogFunc = () => {\n    const BlogDataArr = Object(_getBlogData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    const BlogContainerElement = document.getElementById('blogContainer')\n    Object(_renderBlog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(BlogDataArr, BlogContainerElement)\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogFunc);\n\n\n//# sourceURL=webpack:///./src/js/blog/index.js?");

/***/ }),

/***/ "./src/js/blog/renderBlog.js":
/*!***********************************!*\
  !*** ./src/js/blog/renderBlog.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderBlogContent = (arr, component) => {\n\n    const renderBlogItems = (arr) => {\n        const NewArr = arr.slice(0, 3)\n        NewArr.forEach((blogObj, index) => {\n            component.append(getBlogItem(blogObj, `./images/image${++index}.jpg`))\n        })\n    }\n\n    const getBlogItem = (item, imageSrc) => {\n        const blogItem = document.createElement('div')\n        const { id, title, ratings, topics } = item\n\n        blogItem.className = 'col-12 col-sm-6 col-md-4 list__item blog__item'\n        blogItem.tabindex = '0'\n        blogItem.id = String(id)\n        blogItem.appendChild(getImageContainer(imageSrc, title))\n        blogItem.appendChild(getDescriptionContainer(title, ratings, topics))\n        return blogItem\n    }\n\n    const getImageContainer = (imageSrc, title) => {\n        const imageContainer = document.createElement('div')\n        const getBlogImage = (imageSrc, title) => {\n            const imageComponent = document.createElement('img')\n            imageComponent.className = 'blog__preview'\n            imageComponent.src = imageSrc\n            imageComponent.alt = title\n            return imageComponent\n        }\n        imageContainer.appendChild(getBlogImage(imageSrc, title))\n        imageContainer.className = 'list__item__image'\n        return imageContainer\n    }\n\n    const getDescriptionContainer = (title, ratings, topics) => {\n        const IsCheckTopics = topics.length !== 0\n        const IsCheckRatings = ratings.length !== 0\n        let classHeightContainer = 'blog__no__topics'\n        const descriptionContainer = document.createElement('div')\n        const date = '15 Jan, 2015'\n        const description = 'Lorem ipsum dolor sit amet, con­sectetur adipiscing elit. Pellen­tesque vel odio vel felis placerat pharetra ut vitae felis.'\n\n        const getBlogTitle = (title) => {\n            const titleComponent = document.createElement('h4')\n            titleComponent.className = 'item__title blog__title'\n            titleComponent.innerHTML = title\n            return titleComponent\n        }\n\n        const getBlogDate = (date) => {\n            const dateComponent = document.createElement('p')\n            dateComponent.className = 'blog__date'\n            dateComponent.innerHTML = date\n            return dateComponent\n        }\n\n        const getBlogDescription = (text) => {\n            const textComponent = document.createElement('p')\n            textComponent.className = 'item__description blog__description'\n            textComponent.innerHTML = text\n            return textComponent\n        }\n\n        const getBlogTopics = (topics) => {\n            const topicsComponent = document.createElement('p')\n            topicsComponent.className = 'blog__topic'\n            topicsComponent.innerHTML = topics.join(', ')\n            return topicsComponent\n        }\n\n        const getBlogRating = (ratings) => {\n            const ratingComponent = document.createElement('p')\n            ratingComponent.className = 'blog__rating'\n            ratingComponent.innerHTML = `Rating: ${ratings}`\n            return ratingComponent\n        }\n\n        const getBlogButton = () => {\n            const buttonComponent = document.createElement('button')\n            buttonComponent.className = 'btn btn--middle item__btn blog__btn'\n            buttonComponent.innerHTML = 'read more'\n            return buttonComponent\n        }\n\n        descriptionContainer.appendChild(getBlogTitle(title))\n        descriptionContainer.appendChild(getBlogDate(date))\n        descriptionContainer.appendChild(getBlogDescription(description))\n        if (IsCheckTopics) descriptionContainer.appendChild(getBlogTopics(topics))\n        if (IsCheckRatings) descriptionContainer.appendChild(getBlogRating(ratings))\n        descriptionContainer.appendChild(getBlogButton())\n        if (IsCheckTopics) classHeightContainer = ''\n        descriptionContainer.className = `list__item__description blog__container__description ${classHeightContainer}`\n        return descriptionContainer\n    }\n\n    renderBlogItems(arr)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderBlogContent);\n\n\n//# sourceURL=webpack:///./src/js/blog/renderBlog.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blog_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog/index */ \"./src/js/blog/index.js\");\n\nObject(_blog_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack:///./src/js/index.js?");

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