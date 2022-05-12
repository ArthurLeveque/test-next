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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst index = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { 0: token , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const userCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)(\"token\");\n    const disconnectUser = ()=>{\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)(\"token\");\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)(\"userId\");\n        router.push(\"/\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setToken(userCookie);\n    }, [\n        userCookie\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/login\",\n                        children: \"Se connecter\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 54\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/register\",\n                        children: \"S'inscrire\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, undefined),\n            token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>disconnectUser()\n                    ,\n                    children: \"Se d\\xe9connecter\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/posts\",\n                children: \"Voir les posts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDSztBQUNoQjtBQUV4QyxNQUFNTSxLQUFLLEdBQUcsSUFBTTtJQUNoQixNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQU5WLEdBTVdHLEtBQUssR0FOaEIsR0FNa0JDLFFBQVEsTUFBSVIsK0NBQVEsRUFBRTtJQUVwQyxNQUFNUyxVQUFVLEdBQUdQLHVEQUFTLENBQUMsT0FBTyxDQUFDO0lBRXJDLE1BQU1RLGNBQWMsR0FBRyxJQUFNO1FBQ3pCUCwyREFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCQSwyREFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCRyxNQUFNLENBQUNLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUVEVixnREFBUyxDQUFDLElBQU07UUFDWk8sUUFBUSxDQUFDQyxVQUFVLENBQUM7S0FDdkIsRUFBRTtRQUFDQSxVQUFVO0tBQUMsQ0FBQztJQUVoQixxQkFDSSw4REFBQ0csS0FBRzs7WUFDQyxDQUFDTCxLQUFLLGtCQUNILDhEQUFDSyxLQUFHOztrQ0FDQSw4REFBQ0MsR0FBQzt3QkFBQ0MsSUFBSSxFQUFDLFFBQVE7a0NBQUMsY0FBWTs7Ozs7aUNBQUk7a0NBQUEsOERBQUNDLElBQUU7Ozs7aUNBQUc7a0NBQ3ZDLDhEQUFDRixHQUFDO3dCQUFDQyxJQUFJLEVBQUMsV0FBVztrQ0FBQyxZQUFVOzs7OztpQ0FBSTs7Ozs7O3lCQUNoQztZQUVUUCxLQUFLLGtCQUNGLDhEQUFDSyxLQUFHOzBCQUNBLDRFQUFDSSxRQUFNO29CQUFFQyxPQUFPLEVBQUUsSUFBTVAsY0FBYyxFQUFFO29CQUFBOzhCQUFFLG1CQUFjOzs7Ozs2QkFBUzs7Ozs7eUJBQy9EOzBCQUVWLDhEQUFDSyxJQUFFOzs7O3lCQUFHOzBCQUNOLDhEQUFDRixHQUFDO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTswQkFBQyxnQkFBYzs7Ozs7eUJBQUk7Ozs7OztpQkFDakMsQ0FDUjtDQUNMO0FBRUQsaUVBQWVULEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0Q29va2llLCByZW1vdmVDb29raWVzIH0gZnJvbSAnY29va2llcy1uZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJDb29raWUgPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG4gICAgY29uc3QgZGlzY29ubmVjdFVzZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llcygndG9rZW4nKTtcclxuICAgICAgICByZW1vdmVDb29raWVzKCd1c2VySWQnKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VG9rZW4odXNlckNvb2tpZSlcclxuICAgIH0sIFt1c2VyQ29va2llXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHshdG9rZW4gJiYgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9naW5cIj5TZSBjb25uZWN0ZXI8L2E+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nL3JlZ2lzdGVyJz5TJ2luc2NyaXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Rva2VuICYmIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXsoKSA9PiBkaXNjb25uZWN0VXNlcigpfT5TZSBkw6ljb25uZWN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL3Bvc3RzXCI+Vm9pciBsZXMgcG9zdHM8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRDb29raWUiLCJyZW1vdmVDb29raWVzIiwidXNlUm91dGVyIiwiaW5kZXgiLCJyb3V0ZXIiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlckNvb2tpZSIsImRpc2Nvbm5lY3RVc2VyIiwicHVzaCIsImRpdiIsImEiLCJocmVmIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();