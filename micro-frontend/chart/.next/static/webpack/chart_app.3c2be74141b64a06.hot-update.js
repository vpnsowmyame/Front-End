"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatechart_app"]("chart_app",{},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b281e62cba3c89c2")
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.federation.initOptions.shared = {	"next/dynamic": [{	version: "15.5.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_next_dynamic_js-_73d40").then(() => (() => (__webpack_require__(/*! ./node_modules/next/dynamic.js */ "./node_modules/next/dynamic.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"singleton":true,"layer":null}},],	"next/head": [{	version: "15.5.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_next_head_js-_88490").then(() => (() => (__webpack_require__(/*! ./node_modules/next/head.js */ "./node_modules/next/head.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"singleton":true,"layer":null}},],	"next/image": [{	version: "15.5.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_next_image_js-_05350").then(() => (() => (__webpack_require__(/*! ./node_modules/next/image.js */ "./node_modules/next/image.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"singleton":true,"layer":null}},],	"next/link": [{	version: "15.5.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_next_link_js-_75b30").then(() => (() => (__webpack_require__(/*! ./node_modules/next/link.js */ "./node_modules/next/link.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"singleton":true,"layer":null}},],	"next/router": [{	version: "15.5.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_next_router_js-_1bb60").then(() => (() => (__webpack_require__(/*! ./node_modules/next/router.js */ "./node_modules/next/router.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"singleton":true,"layer":null}},],	"next/script": [{	version: "15.5.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_next_script_js-_e4ba0").then(() => (() => (__webpack_require__(/*! ./node_modules/next/script.js */ "./node_modules/next/script.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"singleton":true,"layer":null}},],	"react-dom": [{	version: "19.1.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_react-dom_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"singleton":true,"layer":null}},],	"react/jsx-dev-runtime": [{	version: "19.1.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_react_jsx-dev-runtime_js").then(() => (() => (__webpack_require__(/*! ./node_modules/react/jsx-dev-runtime.js */ "./node_modules/react/jsx-dev-runtime.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"singleton":true,"layer":null}},],	"react/jsx-runtime": [{	version: "19.1.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_react_jsx-runtime_js").then(() => (() => (__webpack_require__(/*! ./node_modules/react/jsx-runtime.js */ "./node_modules/react/jsx-runtime.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"singleton":true,"layer":null}},],	"react": [{	version: "19.1.0",
/******/ 			get: () => (__webpack_require__.e("node_modules_react_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"singleton":true,"layer":null}},],	"styled-jsx/style": [{	version: "5.1.6",
/******/ 			get: () => (__webpack_require__.e("node_modules_styled-jsx_style_js").then(() => (() => (__webpack_require__(/*! ./node_modules/styled-jsx/style.js */ "./node_modules/styled-jsx/style.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^5.1.6","singleton":true,"layer":null}},],	"styled-jsx": [{	version: "5.1.6",
/******/ 			get: () => (__webpack_require__.e("node_modules_styled-jsx_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/styled-jsx/index.js */ "./node_modules/styled-jsx/index.js"))))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^5.1.6","singleton":true,"layer":null}},],}
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 			webpackRequire: __webpack_require__,
/******/ 			initPromises: initPromises,
/******/ 			initTokens: initTokens,
/******/ 			initScope: initScope,
/******/ 		})
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ 
/******/ // noop fns to prevent runtime errors during initialization
/******/ if (typeof self !== "undefined") {
/******/ 	self.$RefreshReg$ = function () {};
/******/ 	self.$RefreshSig$ = function () {
/******/ 		return function (type) {
/******/ 			return type;
/******/ 		};
/******/ 	};
/******/ }
/******/ 
/******/ }
);