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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
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

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/login.jsx":
/*!*****************************!*\
  !*** ./pages/api/login.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/prisma */ \"(api)/./utils/prisma.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function handler(req, res) {\n    try {\n        const user = await _utils_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n            where: {\n                email: req.body.email\n            }\n        });\n        if (!user) {\n            res.status(400).json({\n                status: \"error\",\n                error: \"User Not Found\"\n            });\n        } else {\n            const validPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().compare(req.body.password, user.password);\n            if (!validPassword) return res.status(400).send(\"Invalid Password.\");\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n                user: {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email\n                }\n            }, process.env.TOKEN_SECRET);\n            console.log({\n                user,\n                token\n            });\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookies)(\"token\", token, {\n                req,\n                res\n            });\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.setCookies)(\"userId\", user.id, {\n                req,\n                res\n            });\n            return res.status(200).json({\n                user,\n                token\n            });\n        }\n    } catch (error) {\n        console.log(error);\n        return res.status(500).json({\n            message: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1U7QUFDQTtBQUNhO0FBRXRDLGVBQWVLLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSTtRQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNTixxRUFBc0IsQ0FBQztZQUN0Q1EsS0FBSyxFQUFFO2dCQUNMQyxLQUFLLEVBQUVMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDRCxLQUFLO2FBQ3RCO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQ0gsSUFBSSxFQUFFO1lBQ1RELEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVELE1BQU0sRUFBRSxPQUFPO2dCQUFFRSxLQUFLLEVBQUUsZ0JBQWdCO2FBQUUsQ0FBQyxDQUFDO1NBQ3BFLE1BQU07WUFDTCxNQUFNQyxhQUFhLEdBQUcsTUFBTWhCLHVEQUFjLENBQUNNLEdBQUcsQ0FBQ00sSUFBSSxDQUFDTSxRQUFRLEVBQUVWLElBQUksQ0FBQ1UsUUFBUSxDQUFDO1lBQzVFLElBQUksQ0FBQ0YsYUFBYSxFQUFFLE9BQU9ULEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDTSxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFFcEUsTUFBTUMsS0FBSyxHQUFHbkIsd0RBQWlCLENBQUM7Z0JBQUNPLElBQUksRUFBRTtvQkFDbkNjLEVBQUUsRUFBRWQsSUFBSSxDQUFDYyxFQUFFO29CQUNYQyxJQUFJLEVBQUVmLElBQUksQ0FBQ2UsSUFBSTtvQkFDZlosS0FBSyxFQUFFSCxJQUFJLENBQUNHLEtBQUs7aUJBQ3BCO2FBQUMsRUFBRWEsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVksQ0FBQztZQUU3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUM7Z0JBQUVwQixJQUFJO2dCQUFFWSxLQUFLO2FBQUUsQ0FBQztZQUU1QmhCLHdEQUFVLENBQUMsT0FBTyxFQUFFZ0IsS0FBSyxFQUFFO2dCQUFFZCxHQUFHO2dCQUFFQyxHQUFHO2FBQUUsQ0FBQyxDQUFDO1lBQ3pDSCx3REFBVSxDQUFDLFFBQVEsRUFBRUksSUFBSSxDQUFDYyxFQUFFLEVBQUU7Z0JBQUVoQixHQUFHO2dCQUFFQyxHQUFHO2FBQUUsQ0FBQyxDQUFDO1lBRTVDLE9BQU9BLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVOLElBQUk7Z0JBQUVZLEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDOUM7S0FDSixDQUFDLE9BQU9MLEtBQUssRUFBRTtRQUNaWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsS0FBSyxDQUFDLENBQUM7UUFDbkIsT0FBT1IsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFZSxPQUFPLEVBQUVkLEtBQUssQ0FBQ2MsT0FBTztTQUFFLENBQUMsQ0FBQztLQUMzRDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL3BhZ2VzL2FwaS9sb2dpbi5qc3g/YWY1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQganNvbndlYnRva2VuIGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJpc21hXCI7XHJcbmltcG9ydCB7IGdldENvb2tpZSwgc2V0Q29va2llcyB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3RhdHVzOiBcImVycm9yXCIsIGVycm9yOiBcIlVzZXIgTm90IEZvdW5kXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHZhbGlkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShyZXEuYm9keS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgICBpZiAoIXZhbGlkUGFzc3dvcmQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBQYXNzd29yZC4nKVxyXG5cclxuICAgICAgICAgIGNvbnN0IHRva2VuID0ganNvbndlYnRva2VuLnNpZ24oe3VzZXI6IHtcclxuICAgICAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWxcclxuICAgICAgICAgIH19LCBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVQpO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgdXNlciwgdG9rZW4gfSlcclxuXHJcbiAgICAgICAgICBzZXRDb29raWVzKCd0b2tlbicsIHRva2VuLCB7IHJlcSwgcmVzIH0pO1xyXG4gICAgICAgICAgc2V0Q29va2llcygndXNlcklkJywgdXNlci5pZCwgeyByZXEsIHJlcyB9KTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyLCB0b2tlbiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImJjcnlwdCIsImpzb253ZWJ0b2tlbiIsInByaXNtYSIsImdldENvb2tpZSIsInNldENvb2tpZXMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVtYWlsIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInZhbGlkUGFzc3dvcmQiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJzZW5kIiwidG9rZW4iLCJzaWduIiwiaWQiLCJuYW1lIiwicHJvY2VzcyIsImVudiIsIlRPS0VOX1NFQ1JFVCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.jsx"));
module.exports = __webpack_exports__;

})();