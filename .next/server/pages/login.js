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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login/index.jsx":
/*!*******************************!*\
  !*** ./pages/login/index.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst register = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const data = {\n        email: email,\n        password: password\n    };\n    const loginFetchRequest = async ()=>{\n        const request = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/login\", data);\n        if (request.status === 200) {\n            router.push(\"/posts\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"post\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"input-email-login\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\login\\\\index.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    value: email,\n                    onChange: (e)=>setEmail(e.target.value)\n                    ,\n                    id: \"input-email-login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\login\\\\index.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"input-password-login\",\n                    children: \"Password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\login\\\\index.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    value: password,\n                    onChange: (e)=>setPassword(e.target.value)\n                    ,\n                    id: \"input-password-login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\login\\\\index.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>loginFetchRequest()\n                    ,\n                    children: \"Log in\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\login\\\\index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\login\\\\index.jsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\login\\\\index.jsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDYztBQUNBO0FBRXhDLE1BQU1JLFFBQVEsR0FBRyxJQUFNO0lBQ25CLE1BQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBRTtJQUMxQixNQUFNLEVBTlYsR0FNV0csS0FBSyxHQU5oQixHQU1rQkMsUUFBUSxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEVBUFYsR0FPV00sUUFBUSxHQVBuQixHQU9xQkMsV0FBVyxNQUFJUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUU1QyxNQUFNUSxJQUFJLEdBQUc7UUFDVEosS0FBSyxFQUFFQSxLQUFLO1FBQ1pFLFFBQVEsRUFBRUEsUUFBUTtLQUNyQjtJQUVELE1BQU1HLGlCQUFpQixHQUFHLFVBQVk7UUFDbEMsTUFBTUMsT0FBTyxHQUFHLE1BQU1aLGlEQUFVLENBQUMsWUFBWSxFQUFFVSxJQUFJLENBQUM7UUFDcEQsSUFBR0UsT0FBTyxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ3ZCVCxNQUFNLENBQUNVLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEI7S0FDSjtJQUVELHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQyxNQUFJO1lBQUNDLE1BQU0sRUFBQyxNQUFNOzs4QkFDZiw4REFBQ0MsT0FBSztvQkFBQ0MsT0FBTyxFQUFDLG1CQUFtQjs4QkFBQyxPQUFLOzs7Ozs2QkFBUTs4QkFDaEQsOERBQUNDLE9BQUs7b0JBQUNDLElBQUksRUFBQyxPQUFPO29CQUFDQyxLQUFLLEVBQUVqQixLQUFLO29CQUFFa0IsUUFBUSxFQUFFLENBQUNDLENBQUMsR0FBS2xCLFFBQVEsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7b0JBQUE7b0JBQUVJLEVBQUUsRUFBQyxtQkFBbUI7Ozs7OzZCQUFHOzhCQUV0Ryw4REFBQ1IsT0FBSztvQkFBQ0MsT0FBTyxFQUFDLHNCQUFzQjs4QkFBQyxVQUFROzs7Ozs2QkFBUTs4QkFDdEQsOERBQUNDLE9BQUs7b0JBQUNDLElBQUksRUFBQyxVQUFVO29CQUFDQyxLQUFLLEVBQUVmLFFBQVE7b0JBQUVnQixRQUFRLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFLaEIsV0FBVyxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztvQkFBQTtvQkFBRUksRUFBRSxFQUFDLHNCQUFzQjs7Ozs7NkJBQUU7OEJBRWpILDhEQUFDQyxRQUFNO29CQUFDTixJQUFJLEVBQUMsUUFBUTtvQkFBQ08sT0FBTyxFQUFFLElBQU1sQixpQkFBaUIsRUFBRTtvQkFBQTs4QkFBRSxRQUFNOzs7Ozs2QkFBUzs7Ozs7O3FCQUN0RTs7Ozs7aUJBQ0wsQ0FDUjtDQUNMO0FBRUQsaUVBQWVQLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9wYWdlcy9sb2dpbi9pbmRleC5qc3g/MWE5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IHJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ2luRmV0Y2hSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCBkYXRhKTtcclxuICAgICAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcG9zdHMnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQtZW1haWwtbG9naW5cIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gaWQ9J2lucHV0LWVtYWlsLWxvZ2luJyAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQtcGFzc3dvcmQtbG9naW5cIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gaWQ9J2lucHV0LXBhc3N3b3JkLWxvZ2luJy8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gbG9naW5GZXRjaFJlcXVlc3QoKX0+TG9nIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlcjsiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwicmVnaXN0ZXIiLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRhdGEiLCJsb2dpbkZldGNoUmVxdWVzdCIsInJlcXVlc3QiLCJwb3N0Iiwic3RhdHVzIiwicHVzaCIsImRpdiIsImZvcm0iLCJhY3Rpb24iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImlkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login/index.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login/index.jsx"));
module.exports = __webpack_exports__;

})();