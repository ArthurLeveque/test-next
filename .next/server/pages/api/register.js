"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "(api)/./pages/api/register.jsx":
/*!********************************!*\
  !*** ./pages/api/register.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/prisma */ \"(api)/./utils/prisma.js\");\n\n\nasync function handler(req, res) {\n    try {\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().genSalt(10);\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(req.body.password, salt);\n        const results = await _utils_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n            data: {\n                name: req.body.name,\n                email: req.body.email,\n                password: hashedPassword\n            }\n        });\n        return res.status(200).json(results);\n    } catch (error) {\n        console.log(error);\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7QUFDVTtBQUd6QixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLElBQUk7UUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTUwsdURBQWMsQ0FBQyxFQUFFLENBQUM7UUFDckMsTUFBTU8sY0FBYyxHQUFHLE1BQU1QLG9EQUFXLENBQUNHLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxRQUFRLEVBQUVMLElBQUksQ0FBQztRQUVqRSxNQUFNTSxPQUFPLEdBQUcsTUFBTVYsaUVBQWtCLENBQUM7WUFDckNhLElBQUksRUFBRTtnQkFDRkMsSUFBSSxFQUFFWixHQUFHLENBQUNNLElBQUksQ0FBQ00sSUFBSTtnQkFDbkJDLEtBQUssRUFBRWIsR0FBRyxDQUFDTSxJQUFJLENBQUNPLEtBQUs7Z0JBQ3JCTixRQUFRLEVBQUVILGNBQWM7YUFDM0I7U0FDSixDQUFDO1FBQ0YsT0FBT0gsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1AsT0FBTyxDQUFDLENBQUM7S0FDeEMsQ0FBQyxPQUFPUSxLQUFLLEVBQUU7UUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU9mLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUksT0FBTyxFQUFFSCxLQUFLLENBQUNHLE9BQU87U0FBRSxDQUFDLENBQUM7S0FDM0Q7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanN4P2JiZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJpc21hXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTApO1xyXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocmVxLmJvZHkucGFzc3dvcmQsIHNhbHQpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJiY3J5cHQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2FsdCIsImdlblNhbHQiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJib2R5IiwicGFzc3dvcmQiLCJyZXN1bHRzIiwidXNlciIsImNyZWF0ZSIsImRhdGEiLCJuYW1lIiwiZW1haWwiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.jsx\n");

/***/ }),

/***/ "(api)/./utils/prisma.js":
/*!*************************!*\
  !*** ./utils/prisma.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9wcmlzbWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBQzlDLElBQUlDLE1BQU07QUFFVixJQUFJQyxLQUFxQyxFQUFFLEVBRTFDLE1BRUk7SUFDRCxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsTUFBTSxFQUFFO1FBQ2hCRSxNQUFNLENBQUNGLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFLENBQUM7S0FDdEM7SUFFREMsTUFBTSxHQUFHRSxNQUFNLENBQUNGLE1BQU0sQ0FBQztDQUMxQjtBQUVELGlFQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vdXRpbHMvcHJpc21hLmpzPzEzZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmxldCBwcmlzbWE7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbn1cclxuLy8gYHN0Z2Agb3IgYGRldmBcclxuZWxzZSB7XHJcbiAgICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcclxuICAgICAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.jsx"));
module.exports = __webpack_exports__;

})();