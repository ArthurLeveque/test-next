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
exports.id = "pages/api/users/[id]";
exports.ids = ["pages/api/users/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/users/[id].jsx":
/*!**********************************!*\
  !*** ./pages/api/users/[id].jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/prisma */ \"(api)/./utils/prisma.js\");\n\nasync function handler(req, res) {\n    try {\n        const { id  } = req.query;\n        const post = await _utils_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                id: parseInt(id)\n            }\n        });\n        return res.status(200).json(post);\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvW2lkXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFNUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxFQUFFLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO1FBQ3hCLE1BQU1DLElBQUksR0FBRyxNQUFNTixxRUFBc0IsQ0FBQztZQUN0Q1MsS0FBSyxFQUFFO2dCQUNMTCxFQUFFLEVBQUVNLFFBQVEsQ0FBQ04sRUFBRSxDQUFDO2FBQ2pCO1NBQ0osQ0FBQztRQUNGLE9BQU9ELEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNOLElBQUksQ0FBQyxDQUFDO0tBQ3JDLENBQUMsT0FBT08sS0FBSyxFQUFFO1FBQ1osT0FBT1YsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTztTQUFFLENBQUMsQ0FBQztLQUMzRDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL3BhZ2VzL2FwaS91c2Vycy9baWRdLmpzeD9hZmQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnlcclxuICAgICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHBhcnNlSW50KGlkKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsInBvc3QiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwicGFyc2VJbnQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/[id].jsx\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/[id].jsx"));
module.exports = __webpack_exports__;

})();