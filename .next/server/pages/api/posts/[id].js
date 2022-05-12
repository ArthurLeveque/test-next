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
exports.id = "pages/api/posts/[id]";
exports.ids = ["pages/api/posts/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/posts/[id]/index.jsx":
/*!****************************************!*\
  !*** ./pages/api/posts/[id]/index.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/prisma */ \"(api)/./utils/prisma.js\");\n\nasync function handler(req, res) {\n    try {\n        const { id  } = req.query;\n        const post = await _utils_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findUnique({\n            where: {\n                id: parseInt(id)\n            },\n            include: {\n                author: true,\n                comments: {\n                    include: {\n                        user: true\n                    }\n                }\n            }\n        });\n        return res.status(200).json(post);\n    } catch (error) {\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvW2lkXS9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFFL0IsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxFQUFFLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO1FBQ3hCLE1BQU1DLElBQUksR0FBRyxNQUFNTixxRUFBc0IsQ0FBQztZQUN0Q1EsS0FBSyxFQUFFO2dCQUNMSixFQUFFLEVBQUVLLFFBQVEsQ0FBQ0wsRUFBRSxDQUFDO2FBQ2pCO1lBQ0RNLE9BQU8sRUFBRTtnQkFDTEMsTUFBTSxFQUFFLElBQUk7Z0JBQ1pDLFFBQVEsRUFBRTtvQkFDTkYsT0FBTyxFQUFHO3dCQUNORyxJQUFJLEVBQUcsSUFBSTtxQkFDZDtpQkFDSjthQUNKO1NBQ0osQ0FBQztRQUNGLE9BQU9WLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNULElBQUksQ0FBQyxDQUFDO0tBQ3JDLENBQUMsT0FBT1UsS0FBSyxFQUFFO1FBQ1osT0FBT2IsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTztTQUFFLENBQUMsQ0FBQztLQUMzRDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL3BhZ2VzL2FwaS9wb3N0cy9baWRdL2luZGV4LmpzeD9iY2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnlcclxuICAgICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHBhcnNlSW50KGlkKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJwb3N0IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwicGFyc2VJbnQiLCJpbmNsdWRlIiwiYXV0aG9yIiwiY29tbWVudHMiLCJ1c2VyIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/[id]/index.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/[id]/index.jsx"));
module.exports = __webpack_exports__;

})();