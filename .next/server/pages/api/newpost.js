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
exports.id = "pages/api/newpost";
exports.ids = ["pages/api/newpost"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/newpost.jsx":
/*!*******************************!*\
  !*** ./pages/api/newpost.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/prisma */ \"(api)/./utils/prisma.js\");\n\nasync function handler(req, res) {\n    try {\n        const results = await _utils_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.create({\n            data: {\n                title: req.body.title,\n                content: req.body.content,\n                authorId: req.body.authorId\n            }\n        });\n        return res.status(200).json(results);\n    } catch (error) {\n        console.log(error);\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3cG9zdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0M7QUFHekIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJO1FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQU1KLGlFQUFrQixDQUFDO1lBQ3JDTyxJQUFJLEVBQUU7Z0JBQ0ZDLEtBQUssRUFBRU4sR0FBRyxDQUFDTyxJQUFJLENBQUNELEtBQUs7Z0JBQ3JCRSxPQUFPLEVBQUVSLEdBQUcsQ0FBQ08sSUFBSSxDQUFDQyxPQUFPO2dCQUN6QkMsUUFBUSxFQUFFVCxHQUFHLENBQUNPLElBQUksQ0FBQ0UsUUFBUTthQUM5QjtTQUNKLENBQUM7UUFDRixPQUFPUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVCxPQUFPLENBQUMsQ0FBQztLQUN4QyxDQUFDLE9BQU9VLEtBQUssRUFBRTtRQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7UUFDbkIsT0FBT1gsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFSSxPQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FBTztTQUFFLENBQUMsQ0FBQztLQUMzRDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL3BhZ2VzL2FwaS9uZXdwb3N0LmpzeD9jZTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL3V0aWxzL3ByaXNtYVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHByaXNtYS5wb3N0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXEuYm9keS50aXRsZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlcS5ib2R5LmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBhdXRob3JJZDogcmVxLmJvZHkuYXV0aG9ySWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXN1bHRzIiwicG9zdCIsImNyZWF0ZSIsImRhdGEiLCJ0aXRsZSIsImJvZHkiLCJjb250ZW50IiwiYXV0aG9ySWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/newpost.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newpost.jsx"));
module.exports = __webpack_exports__;

})();