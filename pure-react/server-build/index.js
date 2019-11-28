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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ \"./src/logo.svg\");\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/chminwen/dev/github/ssr-examples/pure-react/src/App.js\";\n\n // import './App.css';\n\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"App-header\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n    className: \"App-logo\",\n    alt: \"logo\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: this\n  }, \"Edit \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11\n    },\n    __self: this\n  }, \"src/App.js\"), \" and save to reload.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"App-link\",\n    href: \"https://reactjs.org\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13\n    },\n    __self: this\n  }, \"Learn React\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzAuOTYgMTU5LjkzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzA5ZDNhYzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQxLjM1LDczLjI3YzAtNi44OS04LjExLTEzLTIwLjU4LTE2LjczLDMtMTIuNjcsMS42OS0yMi43NS00LjI4LTI2LjE2YTkuNTUsOS41NSwwLDAsMC00Ljc5LTEuMmMtNS41NywwLTEyLjYxLDMuODktMTkuNzIsMTAuNjItNy4xMS02LjY4LTE0LjEzLTEwLjU1LTE5LjY5LTEwLjU1YTkuNDYsOS40NiwwLDAsMC00Ljg2LDEuMjJjLTUuOTQsMy40Mi03LjE3LDEzLjQ0LTQuMjEsMjYuMDUtMTIuNDEsMy43MS0yMC40OCw5Ljc3LTIwLjUsMTYuNjNzOC4xMiwxMywyMC41OSwxNi43MmMtMywxMi42OC0xLjcsMjIuNzUsNC4yOCwyNi4xNmE5LjQxLDkuNDEsMCwwLDAsNC43OCwxLjJjNS41OCwwLDEyLjYyLTMuODksMTkuNzMtMTAuNjIsNy4xLDYuNjgsMTQuMTIsMTAuNTUsMTkuNjksMTAuNTVhOS41OSw5LjU5LDAsMCwwLDQuODYtMS4yMmM1Ljk0LTMuNDIsNy4xNi0xMy40NCw0LjIxLTI2QzEzMy4yNyw4Ni4xOCwxNDEuMzQsODAuMTIsMTQxLjM1LDczLjI3Wk05Ni41Niw0Mi4wNmM4LjE5LTcuMzMsMTMuMzEtOC4xMiwxNS4xMy04LjEyaDBhNC43MSw0LjcxLDAsMCwxLDIuNDIuNThjMi44NiwxLjYzLDQsNy4zOCwzLjA5LDE1YTU2LjczLDU2LjczLDAsMCwxLTEsNS43OSw5Ny43LDk3LjcsMCwwLDAtMTIuNTgtMi4wNyw5OC40Nyw5OC40NywwLDAsMC04LjI0LTEwLjA4Qzk1Ljc1LDQyLjc5LDk2LjE1LDQyLjQyLDk2LjU2LDQyLjA2Wk03MS43Nyw3OC45NGMuNzgsMS41LDEuNjEsMywyLjQ3LDQuNTFTNzYsODYuNDksNzcsODhjLTIuNzEtLjM5LTUuMzQtLjg4LTcuODQtMS40NkM2OS44Niw4NCw3MC43NSw4MS41LDcxLjc3LDc4Ljk0Wk02OSw1OS45YzIuNTMtLjU5LDUuMTgtMS4wOCw3LjkzLTEuNDYtMSwxLjQ4LTEuODYsMy0yLjc2LDQuNTlzLTEuNjksMy0yLjQ2LDQuNTJRNzAuMTgsNjMuNjUsNjksNTkuOVptNS4yMSwxMy4zNHExLjg2LTMuOTMsNC4wOS03Ljg2YzEuNS0yLjYyLDMuMTEtNS4xNyw0Ljc3LTcuNjEsMi45MS0uMjIsNS45MS0uMzQsOS0uMzNzNiwuMTIsOC44OS4zNWMxLjY2LDIuNDIsMy4yNSw1LDQuNzUsNy41NXMyLjg4LDUuMjIsNC4xMiw3LjgzYy0xLjIzLDIuNjItMi42LDUuMjUtNC4wOCw3Ljg1cy0zLjExLDUuMTgtNC43Nyw3LjYyYy0yLjkxLjIzLTUuOTEuMzQtOSwuMzRzLTYtLjEzLTguODktLjM2Yy0xLjY2LTIuNDItMy4yNi00Ljk0LTQuNzYtNy41NVM3NS41LDc1Ljg1LDc0LjI1LDczLjI0Wm0zMi44Ni0xNC43N2MyLjcyLjM4LDUuMzUuODcsNy44NCwxLjQ1LS43NCwyLjQ3LTEuNjIsNS0yLjY0LDcuNTUtLjc5LTEuNS0xLjYxLTMtMi40OC00LjUxUzEwOCw1OS45MywxMDcuMTEsNTguNDdabTIuNzYsMjQuOTJxMS4yOS0yLjI3LDIuNDYtNC41M2MxLDIuNiwyLDUuMTYsMi43LDcuNjYtMi41Mi41OS01LjE3LDEuMDctNy45MiwxLjQ1UTEwOC41Miw4NS43NSwxMDkuODcsODMuMzlaTTkyLDQ2LjU2YzEuOCwxLjkyLDMuNTcsNCw1LjMsNi4yMy0xLjcxLS4wNy0zLjQ2LS4xMi01LjIzLS4xMnMtMy41OCwwLTUuMzMuMTJDODguNDUsNTAuNTcsOTAuMiw0OC40OCw5Miw0Ni41NlptLTIyLjE4LTEyQTQuODIsNC44MiwwLDAsMSw3Mi4yOSwzNGExMy4xMSwxMy4xMSwwLDAsMSw1LjE5LDEuMzEsMzkuMDcsMzkuMDcsMCwwLDEsMTAsNi43OGwxLjE3LDEuMDdhOTguNDksOTguNDksMCwwLDAtOC4xNiwxMCw5OC44OCw5OC44OCwwLDAsMC0xMi42NSwyLjA2Yy0uNDQtMS45NC0uOC0zLjg0LTEtNS42N0M2NS44LDQyLDY3LDM2LjI0LDY5LjgxLDM0LjZaTTY0LjUzLDg1LjI2YTU4Ljc1LDU4Ljc1LDAsMCwxLTUuNTQtMmMtNy4xLTMtMTEuNS02Ljg1LTExLjUtMTAuMTRTNTEuOTEsNjYsNTksNjMuMDVhNTcuNjMsNTcuNjMsMCwwLDEsNS40NC0xLjk0QTk3LjkzLDk3LjkzLDAsMCwwLDY5LDczLjI1LDk4LjcyLDk4LjcyLDAsMCwwLDY0LjUzLDg1LjI2Wm0yMywxOS4xYy04LjE5LDcuMzMtMTMuMzEsOC4xMS0xNS4xNCw4LjExYTQuNjksNC42OSwwLDAsMS0yLjQyLS41OGMtMi44Ni0xLjYzLTQtNy4zOC0zLjA5LTE1YTU2LjA3LDU2LjA3LDAsMCwxLDEtNS43OCw5OS41MSw5OS41MSwwLDAsMCwxMi41OCwyLjA2LDk3LjE3LDk3LjE3LDAsMCwwLDguMjQsMTAuMDhabTQuNTctNC41MWMtMS44LTEuOTItMy41Ny00LTUuMzEtNi4yMywxLjcyLjA4LDMuNDcuMTIsNS4yNC4xMnMzLjU4LDAsNS4zMy0uMTFDOTUuNjMsOTUuODUsOTMuODcsOTcuOTMsOTIuMDksOTkuODVabTIyLjE4LDEyYTQuODIsNC44MiwwLDAsMS0yLjQ4LjU5Yy0xLjgyLDAtNy0uOC0xNS4xNi04LjFsLTEuMTctMS4wN2E5OC40NCw5OC40NCwwLDAsMCw4LjE1LTEwLDk3LDk3LDAsMCwwLDEyLjY2LTIuMDZjLjQ0LDEuOTQuNzksMy44NCwxLDUuNjdDMTE4LjI3LDEwNC40MiwxMTcuMTIsMTEwLjE4LDExNC4yNywxMTEuODFabTEwLjgtMjguNDRjLTEuNzEuNy0zLjUyLDEuMzUtNS40NCwxLjkzYTk4LjU0LDk4LjU0LDAsMCwwLTQuNTctMTIuMTQsOTguMSw5OC4xLDAsMCwwLDQuNDktMTIsNTguNzUsNTguNzUsMCwwLDEsNS41NCwyYzcuMDksMywxMS41LDYuODUsMTEuNDksMTAuMTRTMTMyLjE3LDgwLjQyLDEyNS4wNyw4My4zN1pNOTIsODIuMzlhOS4xOCw5LjE4LDAsMSwwLTkuMTctOS4xOUE5LjE3LDkuMTcsMCwwLDAsOTIsODIuMzlaTTMxLDE3Ljg4VjEyOC41M0gxNTMuMDdWMTcuODhaTTE0OC4zLDEyMy43N0gzNS43OFYyMi42NUgxNDguM1ptLTg1LTMzLjljLTMsMTIuNjgtMS43LDIyLjc1LDQuMjgsMjYuMTZhOS40MSw5LjQxLDAsMCwwLDQuNzgsMS4yYzUuNTgsMCwxMi42Mi0zLjg5LDE5LjczLTEwLjYyLDcuMSw2LjY4LDE0LjEyLDEwLjU1LDE5LjY5LDEwLjU1YTkuNTksOS41OSwwLDAsMCw0Ljg2LTEuMjJjNS45NC0zLjQyLDcuMTYtMTMuNDQsNC4yMS0yNiwxMi40MS0zLjcyLDIwLjQ4LTkuNzgsMjAuNDktMTYuNjNzLTguMTEtMTMtMjAuNTgtMTYuNzNjMy0xMi42NywxLjY5LTIyLjc1LTQuMjgtMjYuMTZhOS41NSw5LjU1LDAsMCwwLTQuNzktMS4yYy01LjU3LDAtMTIuNjEsMy44OS0xOS43MiwxMC42Mi03LjExLTYuNjgtMTQuMTMtMTAuNTUtMTkuNjktMTAuNTVhOS40Niw5LjQ2LDAsMCwwLTQuODYsMS4yMmMtNS45NCwzLjQyLTcuMTcsMTMuNDQtNC4yMSwyNi4wNS0xMi40MSwzLjcxLTIwLjQ4LDkuNzctMjAuNSwxNi42M1M1MC44NCw4Ni4xMyw2My4zMSw4OS44N1ptMjQuMjEsMTQuNDljLTguMTksNy4zMy0xMy4zMSw4LjExLTE1LjE0LDguMTFhNC42OSw0LjY5LDAsMCwxLTIuNDItLjU4Yy0yLjg2LTEuNjMtNC03LjM4LTMuMDktMTVhNTYuMDcsNTYuMDcsMCwwLDEsMS01Ljc4LDk5LjUxLDk5LjUxLDAsMCwwLDEyLjU4LDIuMDYsOTcuMTcsOTcuMTcsMCwwLDAsOC4yNCwxMC4wOFptMjQuNzktMzYuODljLS43OS0xLjUtMS42MS0zLTIuNDgtNC41MXMtMS44LTMtMi43Mi00LjQ5YzIuNzIuMzgsNS4zNS44Nyw3Ljg0LDEuNDVDMTE0LjIxLDYyLjM5LDExMy4zMyw2NC45MiwxMTIuMzEsNjcuNDdabTIuNzIsMTljLTIuNTIuNTktNS4xNywxLjA3LTcuOTIsMS40NXExLjQxLTIuMjIsMi43Ni00LjU4dDIuNDYtNC41M0MxMTMuMzcsODEuNDYsMTE0LjI4LDg0LDExNSw4Ni41MlptLTUuMjEtMTMuMzVjLTEuMjMsMi42Mi0yLjYsNS4yNS00LjA4LDcuODVzLTMuMTEsNS4xOC00Ljc3LDcuNjJjLTIuOTEuMjMtNS45MS4zNC05LC4zNHMtNi0uMTMtOC44OS0uMzZjLTEuNjYtMi40Mi0zLjI2LTQuOTQtNC43Ni03LjU1cy0yLjg3LTUuMjItNC4xMi03LjgzcTEuODYtMy45Myw0LjA5LTcuODZjMS41LTIuNjIsMy4xMS01LjE3LDQuNzctNy42MSwyLjkxLS4yMiw1LjkxLS4zNCw5LS4zM3M2LC4xMiw4Ljg5LjM1YzEuNjYsMi40MiwzLjI1LDUsNC43NSw3LjU1UzEwOC41OCw3MC41NiwxMDkuODIsNzMuMTdaTTc3LDg4Yy0yLjcxLS4zOS01LjM0LS44OC03Ljg0LTEuNDYuNzQtMi40NiwxLjYzLTUsMi42NS03LjU1Ljc4LDEuNSwxLjYxLDMsMi40Nyw0LjUxUzc2LDg2LjQ5LDc3LDg4Wk03NC4yMSw2M2MtLjg3LDEuNS0xLjY5LDMtMi40Niw0LjUyUTcwLjE4LDYzLjY1LDY5LDU5LjljMi41My0uNTksNS4xOC0xLjA4LDcuOTMtMS40NkM3Niw1OS45Miw3NS4xMSw2MS40NSw3NC4yMSw2M1pNOTIuMDksOTkuODVjLTEuOC0xLjkyLTMuNTctNC01LjMxLTYuMjMsMS43Mi4wOCwzLjQ3LjEyLDUuMjQuMTJzMy41OCwwLDUuMzMtLjExQzk1LjYzLDk1Ljg1LDkzLjg3LDk3LjkzLDkyLjA5LDk5Ljg1Wm0yMi4xOCwxMmE0LjgyLDQuODIsMCwwLDEtMi40OC41OWMtMS44MiwwLTctLjgtMTUuMTYtOC4xbC0xLjE3LTEuMDdhOTguNDQsOTguNDQsMCwwLDAsOC4xNS0xMCw5Nyw5NywwLDAsMCwxMi42Ni0yLjA2Yy40NCwxLjk0Ljc5LDMuODQsMSw1LjY3QzExOC4yNywxMDQuNDIsMTE3LjEyLDExMC4xOCwxMTQuMjcsMTExLjgxWm01LjI4LTUwLjY2YTU4Ljc1LDU4Ljc1LDAsMCwxLDUuNTQsMmM3LjA5LDMsMTEuNSw2Ljg1LDExLjQ5LDEwLjE0cy00LjQxLDcuMTYtMTEuNTEsMTAuMTFjLTEuNzEuNy0zLjUyLDEuMzUtNS40NCwxLjkzYTk4LjU0LDk4LjU0LDAsMCwwLTQuNTctMTIuMTRBOTguMSw5OC4xLDAsMCwwLDExOS41NSw2MS4xNVptLTIzLTE5LjA5YzguMTktNy4zMywxMy4zMS04LjEyLDE1LjEzLTguMTJoMGE0LjcxLDQuNzEsMCwwLDEsMi40Mi41OGMyLjg2LDEuNjMsNCw3LjM4LDMuMDksMTVhNTYuNzMsNTYuNzMsMCwwLDEtMSw1Ljc5LDk3LjcsOTcuNywwLDAsMC0xMi41OC0yLjA3LDk4LjQ3LDk4LjQ3LDAsMCwwLTguMjQtMTAuMDhDOTUuNzUsNDIuNzksOTYuMTUsNDIuNDIsOTYuNTYsNDIuMDZaTTkyLDQ2LjU2YzEuOCwxLjkyLDMuNTcsNCw1LjMsNi4yMy0xLjcxLS4wNy0zLjQ2LS4xMi01LjIzLS4xMnMtMy41OCwwLTUuMzMuMTJDODguNDUsNTAuNTcsOTAuMiw0OC40OCw5Miw0Ni41NlptLTIyLjE4LTEyQTQuODIsNC44MiwwLDAsMSw3Mi4yOSwzNGExMy4xMSwxMy4xMSwwLDAsMSw1LjE5LDEuMzEsMzkuMDcsMzkuMDcsMCwwLDEsMTAsNi43OGwxLjE3LDEuMDdhOTguNDksOTguNDksMCwwLDAtOC4xNiwxMCw5OC44OCw5OC44OCwwLDAsMC0xMi42NSwyLjA2Yy0uNDQtMS45NC0uOC0zLjg0LTEtNS42N0M2NS44LDQyLDY3LDM2LjI0LDY5LjgxLDM0LjZaTTU5LDYzLjA1YTU3LjYzLDU3LjYzLDAsMCwxLDUuNDQtMS45NEE5Ny45Myw5Ny45MywwLDAsMCw2OSw3My4yNWE5OC43Miw5OC43MiwwLDAsMC00LjQ5LDEyLDU4Ljc1LDU4Ljc1LDAsMCwxLTUuNTQtMmMtNy4xLTMtMTEuNS02Ljg1LTExLjUtMTAuMTRTNTEuOTEsNjYsNTksNjMuMDVabTMzLDFhOS4xOCw5LjE4LDAsMSwwLDkuMTcsOS4xOUE5LjE3LDkuMTcsMCwwLDAsOTIsNjRabTAsMGE5LjE4LDkuMTgsMCwxLDAsOS4xNyw5LjE5QTkuMTcsOS4xNywwLDAsMCw5Miw2NFptMCwwYTkuMTgsOS4xOCwwLDEsMCw5LjE3LDkuMTlBOS4xNyw5LjE3LDAsMCwwLDkyLDY0Wm00OS4zNSw5LjI0YzAtNi44OS04LjExLTEzLTIwLjU4LTE2LjczLDMtMTIuNjcsMS42OS0yMi43NS00LjI4LTI2LjE2YTkuNTUsOS41NSwwLDAsMC00Ljc5LTEuMmMtNS41NywwLTEyLjYxLDMuODktMTkuNzIsMTAuNjItNy4xMS02LjY4LTE0LjEzLTEwLjU1LTE5LjY5LTEwLjU1YTkuNDYsOS40NiwwLDAsMC00Ljg2LDEuMjJjLTUuOTQsMy40Mi03LjE3LDEzLjQ0LTQuMjEsMjYuMDUtMTIuNDEsMy43MS0yMC40OCw5Ljc3LTIwLjUsMTYuNjNzOC4xMiwxMywyMC41OSwxNi43MmMtMywxMi42OC0xLjcsMjIuNzUsNC4yOCwyNi4xNmE5LjQxLDkuNDEsMCwwLDAsNC43OCwxLjJjNS41OCwwLDEyLjYyLTMuODksMTkuNzMtMTAuNjIsNy4xLDYuNjgsMTQuMTIsMTAuNTUsMTkuNjksMTAuNTVhOS41OSw5LjU5LDAsMCwwLDQuODYtMS4yMmM1Ljk0LTMuNDIsNy4xNi0xMy40NCw0LjIxLTI2QzEzMy4yNyw4Ni4xOCwxNDEuMzQsODAuMTIsMTQxLjM1LDczLjI3Wk05Ni41Niw0Mi4wNmM4LjE5LTcuMzMsMTMuMzEtOC4xMiwxNS4xMy04LjEyaDBhNC43MSw0LjcxLDAsMCwxLDIuNDIuNThjMi44NiwxLjYzLDQsNy4zOCwzLjA5LDE1YTU2LjczLDU2LjczLDAsMCwxLTEsNS43OSw5Ny43LDk3LjcsMCwwLDAtMTIuNTgtMi4wNyw5OC40Nyw5OC40NywwLDAsMC04LjI0LTEwLjA4Qzk1Ljc1LDQyLjc5LDk2LjE1LDQyLjQyLDk2LjU2LDQyLjA2Wk03MS43Nyw3OC45NGMuNzgsMS41LDEuNjEsMywyLjQ3LDQuNTFTNzYsODYuNDksNzcsODhjLTIuNzEtLjM5LTUuMzQtLjg4LTcuODQtMS40NkM2OS44Niw4NCw3MC43NSw4MS41LDcxLjc3LDc4Ljk0Wk02OSw1OS45YzIuNTMtLjU5LDUuMTgtMS4wOCw3LjkzLTEuNDYtMSwxLjQ4LTEuODYsMy0yLjc2LDQuNTlzLTEuNjksMy0yLjQ2LDQuNTJRNzAuMTgsNjMuNjUsNjksNTkuOVptNS4yMSwxMy4zNHExLjg2LTMuOTMsNC4wOS03Ljg2YzEuNS0yLjYyLDMuMTEtNS4xNyw0Ljc3LTcuNjEsMi45MS0uMjIsNS45MS0uMzQsOS0uMzNzNiwuMTIsOC44OS4zNWMxLjY2LDIuNDIsMy4yNSw1LDQuNzUsNy41NXMyLjg4LDUuMjIsNC4xMiw3LjgzYy0xLjIzLDIuNjItMi42LDUuMjUtNC4wOCw3Ljg1cy0zLjExLDUuMTgtNC43Nyw3LjYyYy0yLjkxLjIzLTUuOTEuMzQtOSwuMzRzLTYtLjEzLTguODktLjM2Yy0xLjY2LTIuNDItMy4yNi00Ljk0LTQuNzYtNy41NVM3NS41LDc1Ljg1LDc0LjI1LDczLjI0Wm0zMi44Ni0xNC43N2MyLjcyLjM4LDUuMzUuODcsNy44NCwxLjQ1LS43NCwyLjQ3LTEuNjIsNS0yLjY0LDcuNTUtLjc5LTEuNS0xLjYxLTMtMi40OC00LjUxUzEwOCw1OS45MywxMDcuMTEsNTguNDdabTIuNzYsMjQuOTJxMS4yOS0yLjI3LDIuNDYtNC41M2MxLDIuNiwyLDUuMTYsMi43LDcuNjYtMi41Mi41OS01LjE3LDEuMDctNy45MiwxLjQ1UTEwOC41Miw4NS43NSwxMDkuODcsODMuMzlaTTkyLDQ2LjU2YzEuOCwxLjkyLDMuNTcsNCw1LjMsNi4yMy0xLjcxLS4wNy0zLjQ2LS4xMi01LjIzLS4xMnMtMy41OCwwLTUuMzMuMTJDODguNDUsNTAuNTcsOTAuMiw0OC40OCw5Miw0Ni41NlptLTIyLjE4LTEyQTQuODIsNC44MiwwLDAsMSw3Mi4yOSwzNGExMy4xMSwxMy4xMSwwLDAsMSw1LjE5LDEuMzEsMzkuMDcsMzkuMDcsMCwwLDEsMTAsNi43OGwxLjE3LDEuMDdhOTguNDksOTguNDksMCwwLDAtOC4xNiwxMCw5OC44OCw5OC44OCwwLDAsMC0xMi42NSwyLjA2Yy0uNDQtMS45NC0uOC0zLjg0LTEtNS42N0M2NS44LDQyLDY3LDM2LjI0LDY5LjgxLDM0LjZaTTY0LjUzLDg1LjI2YTU4Ljc1LDU4Ljc1LDAsMCwxLTUuNTQtMmMtNy4xLTMtMTEuNS02Ljg1LTExLjUtMTAuMTRTNTEuOTEsNjYsNTksNjMuMDVhNTcuNjMsNTcuNjMsMCwwLDEsNS40NC0xLjk0QTk3LjkzLDk3LjkzLDAsMCwwLDY5LDczLjI1LDk4LjcyLDk4LjcyLDAsMCwwLDY0LjUzLDg1LjI2Wm0yMywxOS4xYy04LjE5LDcuMzMtMTMuMzEsOC4xMS0xNS4xNCw4LjExYTQuNjksNC42OSwwLDAsMS0yLjQyLS41OGMtMi44Ni0xLjYzLTQtNy4zOC0zLjA5LTE1YTU2LjA3LDU2LjA3LDAsMCwxLDEtNS43OCw5OS41MSw5OS41MSwwLDAsMCwxMi41OCwyLjA2LDk3LjE3LDk3LjE3LDAsMCwwLDguMjQsMTAuMDhabTQuNTctNC41MWMtMS44LTEuOTItMy41Ny00LTUuMzEtNi4yMywxLjcyLjA4LDMuNDcuMTIsNS4yNC4xMnMzLjU4LDAsNS4zMy0uMTFDOTUuNjMsOTUuODUsOTMuODcsOTcuOTMsOTIuMDksOTkuODVabTIyLjE4LDEyYTQuODIsNC44MiwwLDAsMS0yLjQ4LjU5Yy0xLjgyLDAtNy0uOC0xNS4xNi04LjFsLTEuMTctMS4wN2E5OC40NCw5OC40NCwwLDAsMCw4LjE1LTEwLDk3LDk3LDAsMCwwLDEyLjY2LTIuMDZjLjQ0LDEuOTQuNzksMy44NCwxLDUuNjdDMTE4LjI3LDEwNC40MiwxMTcuMTIsMTEwLjE4LDExNC4yNywxMTEuODFabTEwLjgtMjguNDRjLTEuNzEuNy0zLjUyLDEuMzUtNS40NCwxLjkzYTk4LjU0LDk4LjU0LDAsMCwwLTQuNTctMTIuMTQsOTguMSw5OC4xLDAsMCwwLDQuNDktMTIsNTguNzUsNTguNzUsMCwwLDEsNS41NCwyYzcuMDksMywxMS41LDYuODUsMTEuNDksMTAuMTRTMTMyLjE3LDgwLjQyLDEyNS4wNyw4My4zN1pNOTIsODIuMzlhOS4xOCw5LjE4LDAsMSwwLTkuMTctOS4xOUE5LjE3LDkuMTcsMCwwLDAsOTIsODIuMzlabS02OS4zMiw1NC41VjI2LjJMMTcuODksMzFWMTQxLjY2SDEzOS45NGw0Ljc4LTQuNzdaIi8+PC9zdmc+\"\n\n//# sourceURL=webpack:///./src/logo.svg?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\nvar _jsxFileName = \"/Users/chminwen/dev/github/ssr-examples/pure-react/src/server.js\";\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(\"./build\"));\napp.get(\"/*\", (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: undefined\n  }));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", (err, data) => {\n    if (err) {\n      console.error(\"Something went wrong:\", err);\n      return res.status(500).send(\"Oops, better luck next time!\");\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.listen(PORT, () => {\n  console.log(\"\\uD83D\\uDE0E Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });