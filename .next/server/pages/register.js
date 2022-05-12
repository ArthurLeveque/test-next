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
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register/index.jsx":
/*!**********************************!*\
  !*** ./pages/register/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst register = ()=>{\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const data = {\n        name: name,\n        email: email,\n        password: password\n    };\n    const registerFetchRequest = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/register\", data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"post\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"input-username-register\",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\register\\\\index.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: name,\n                    onChange: (e)=>setName(e.target.value)\n                    ,\n                    id: \"input-username-register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\register\\\\index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"input-email-register\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\register\\\\index.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    value: email,\n                    onChange: (e)=>setEmail(e.target.value)\n                    ,\n                    id: \"input-email-register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\register\\\\index.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"input-password-register\",\n                    children: \"Password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\register\\\\index.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    value: password,\n                    onChange: (e)=>setPassword(e.target.value)\n                    ,\n                    id: \"input-password-register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\register\\\\index.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>registerFetchRequest()\n                    ,\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\register\\\\index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\register\\\\index.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\register\\\\index.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3lCO0FBRW5ELE1BQU1JLFFBQVEsR0FBRyxJQUFNO0lBQ25CLE1BQU0sRUFKVixHQUlXQyxJQUFJLEdBSmYsR0FJaUJDLE9BQU8sTUFBSUgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDcEMsTUFBTSxFQUxWLEdBS1dJLEtBQUssR0FMaEIsR0FLa0JDLFFBQVEsTUFBSUwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxFQU5WLEdBTVdNLFFBQVEsR0FObkIsR0FNcUJDLFdBQVcsTUFBSVAsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFNUMsTUFBTVEsSUFBSSxHQUFHO1FBQ1ROLElBQUksRUFBRUEsSUFBSTtRQUNWRSxLQUFLLEVBQUVBLEtBQUs7UUFDWkUsUUFBUSxFQUFFQSxRQUFRO0tBQ3JCO0lBRUQsTUFBTUcsb0JBQW9CLEdBQUcsSUFBTTtRQUMvQlosaURBQVUsQ0FBQyxlQUFlLEVBQUVXLElBQUksQ0FBQyxDQUFDO0tBQ3JDO0lBRUQscUJBQ0ksOERBQUNHLEtBQUc7a0JBQ0EsNEVBQUNDLE1BQUk7WUFBQ0MsTUFBTSxFQUFDLE1BQU07OzhCQUNmLDhEQUFDQyxPQUFLO29CQUFDQyxPQUFPLEVBQUMseUJBQXlCOzhCQUFDLE1BQUk7Ozs7OzZCQUFROzhCQUNyRCw4REFBQ0MsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLE1BQU07b0JBQUNDLEtBQUssRUFBRWhCLElBQUk7b0JBQUVpQixRQUFRLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFLakIsT0FBTyxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztvQkFBQTtvQkFBRUksRUFBRSxFQUFDLHlCQUF5Qjs7Ozs7NkJBQUc7OEJBRXpHLDhEQUFDUixPQUFLO29CQUFDQyxPQUFPLEVBQUMsc0JBQXNCOzhCQUFDLE9BQUs7Ozs7OzZCQUFROzhCQUNuRCw4REFBQ0MsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLE9BQU87b0JBQUNDLEtBQUssRUFBRWQsS0FBSztvQkFBRWUsUUFBUSxFQUFFLENBQUNDLENBQUMsR0FBS2YsUUFBUSxDQUFDZSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO29CQUFBO29CQUFFSSxFQUFFLEVBQUMsc0JBQXNCOzs7Ozs2QkFBRzs4QkFFekcsOERBQUNSLE9BQUs7b0JBQUNDLE9BQU8sRUFBQyx5QkFBeUI7OEJBQUMsVUFBUTs7Ozs7NkJBQVE7OEJBQ3pELDhEQUFDQyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsVUFBVTtvQkFBQ0MsS0FBSyxFQUFFWixRQUFRO29CQUFFYSxRQUFRLEVBQUUsQ0FBQ0MsQ0FBQyxHQUFLYixXQUFXLENBQUNhLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7b0JBQUE7b0JBQUVJLEVBQUUsRUFBQyx5QkFBeUI7Ozs7OzZCQUFFOzhCQUVwSCw4REFBQ0MsUUFBTTtvQkFBQ04sSUFBSSxFQUFDLFFBQVE7b0JBQUNPLE9BQU8sRUFBRSxJQUFNZixvQkFBb0IsRUFBRTtvQkFBQTs4QkFBRSxVQUFROzs7Ozs2QkFBUzs7Ozs7O3FCQUMzRTs7Ozs7aUJBQ0wsQ0FDUjtDQUNMO0FBRUQsaUVBQWVSLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9wYWdlcy9yZWdpc3Rlci9pbmRleC5qc3g/ZTU1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWdpc3RlckZldGNoUmVxdWVzdCA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9yZWdpc3RlclwiLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQtdXNlcm5hbWUtcmVnaXN0ZXJcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSBpZD0naW5wdXQtdXNlcm5hbWUtcmVnaXN0ZXInIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dC1lbWFpbC1yZWdpc3RlclwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSBpZD0naW5wdXQtZW1haWwtcmVnaXN0ZXInIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dC1wYXNzd29yZC1yZWdpc3RlclwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSBpZD0naW5wdXQtcGFzc3dvcmQtcmVnaXN0ZXInLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZWdpc3RlckZldGNoUmVxdWVzdCgpfT5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXI7Il0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRhdGEiLCJyZWdpc3RlckZldGNoUmVxdWVzdCIsInBvc3QiLCJkaXYiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register/index.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = (__webpack_exec__("./pages/register/index.jsx"));
module.exports = __webpack_exports__;

})();