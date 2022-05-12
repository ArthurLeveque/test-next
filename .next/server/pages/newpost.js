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
exports.id = "pages/newpost";
exports.ids = ["pages/newpost"];
exports.modules = {

/***/ "./pages/newpost/index.jsx":
/*!*********************************!*\
  !*** ./pages/newpost/index.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst index = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: userID , 1: setUserID  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const userCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookie)(\"userId\");\n    const data = {\n        title: title,\n        content: content,\n        authorId: parseInt(userID)\n    };\n    const postFetchRequest = async ()=>{\n        const request = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/newpost\", data);\n        if (request.status === 200) {\n            router.push(`/posts/${request.data.id}`);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setUserID(userCookie);\n    }, [\n        userCookie\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"post\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"input-title-post\",\n                    children: \"Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\newpost\\\\index.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: title,\n                    onChange: (e)=>setTitle(e.target.value)\n                    ,\n                    id: \"input-title-post\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\newpost\\\\index.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"input-content-post\",\n                    children: \"Content\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\newpost\\\\index.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: content,\n                    onChange: (e)=>setContent(e.target.value)\n                    ,\n                    id: \"input-content-post\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\newpost\\\\index.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>postFetchRequest()\n                    ,\n                    children: \"post\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\newpost\\\\index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\newpost\\\\index.jsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\newpost\\\\index.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdwb3N0L2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3lCO0FBQ1Y7QUFDRDtBQUV4QyxNQUFNTSxLQUFLLEdBQUcsSUFBTTtJQUNoQixNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQVBWLEdBT1dHLEtBQUssR0FQaEIsR0FPa0JDLFFBQVEsTUFBSVAsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxFQVJWLEdBUVdRLE9BQU8sR0FSbEIsR0FRb0JDLFVBQVUsTUFBSVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDMUMsTUFBTSxFQVRWLEdBU1dVLE1BQU0sR0FUakIsR0FTbUJDLFNBQVMsTUFBSVgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFeEMsTUFBTVksVUFBVSxHQUFHVix1REFBUyxDQUFDLFFBQVEsQ0FBQztJQUV0QyxNQUFNVyxJQUFJLEdBQUc7UUFDVFAsS0FBSyxFQUFFQSxLQUFLO1FBQ1pFLE9BQU8sRUFBRUEsT0FBTztRQUNoQk0sUUFBUSxFQUFFQyxRQUFRLENBQUNMLE1BQU0sQ0FBQztLQUM3QjtJQUVELE1BQU1NLGdCQUFnQixHQUFHLFVBQVk7UUFDakMsTUFBTUMsT0FBTyxHQUFHLE1BQU1uQixpREFBVSxDQUFDLGNBQWMsRUFBRWUsSUFBSSxDQUFDO1FBQ3RELElBQUdJLE9BQU8sQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUN2QmQsTUFBTSxDQUFDZSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUVILE9BQU8sQ0FBQ0osSUFBSSxDQUFDUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNDO0tBQ0o7SUFFRHBCLGdEQUFTLENBQUMsSUFBTTtRQUNaVSxTQUFTLENBQUNDLFVBQVUsQ0FBQztLQUN4QixFQUFFO1FBQUNBLFVBQVU7S0FBQyxDQUFDO0lBRWhCLHFCQUNJLDhEQUFDVSxLQUFHO2tCQUNBLDRFQUFDQyxNQUFJO1lBQUNDLE1BQU0sRUFBQyxNQUFNOzs4QkFDZiw4REFBQ0MsT0FBSztvQkFBQ0MsT0FBTyxFQUFDLGtCQUFrQjs4QkFBQyxPQUFLOzs7Ozs2QkFBUTs4QkFDL0MsOERBQUNDLE9BQUs7b0JBQUNDLElBQUksRUFBQyxNQUFNO29CQUFDQyxLQUFLLEVBQUV2QixLQUFLO29CQUFFd0IsUUFBUSxFQUFFLENBQUNDLENBQUMsR0FBS3hCLFFBQVEsQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7b0JBQUE7b0JBQUVSLEVBQUUsRUFBQyxrQkFBa0I7Ozs7OzZCQUFHOzhCQUVwRyw4REFBQ0ksT0FBSztvQkFBQ0MsT0FBTyxFQUFDLG9CQUFvQjs4QkFBQyxTQUFPOzs7Ozs2QkFBUTs4QkFDbkQsOERBQUNDLE9BQUs7b0JBQUNDLElBQUksRUFBQyxNQUFNO29CQUFDQyxLQUFLLEVBQUVyQixPQUFPO29CQUFFc0IsUUFBUSxFQUFFLENBQUNDLENBQUMsR0FBS3RCLFVBQVUsQ0FBQ3NCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7b0JBQUE7b0JBQUVSLEVBQUUsRUFBQyxvQkFBb0I7Ozs7OzZCQUFHOzhCQUUxRyw4REFBQ1ksUUFBTTtvQkFBQ0wsSUFBSSxFQUFDLFFBQVE7b0JBQUNNLE9BQU8sRUFBRSxJQUFNbEIsZ0JBQWdCLEVBQUU7b0JBQUE7OEJBQUUsTUFBSTs7Ozs7NkJBQVM7Ozs7OztxQkFDbkU7Ozs7O2lCQUNMLENBQ1I7Q0FDTDtBQUVELGlFQUFlWixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vcGFnZXMvbmV3cG9zdC9pbmRleC5qc3g/ZTVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnY29va2llcy1uZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklEXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ29va2llID0gZ2V0Q29va2llKCd1c2VySWQnKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgIGF1dGhvcklkOiBwYXJzZUludCh1c2VySUQpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBvc3RGZXRjaFJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL25ld3Bvc3RcIiwgZGF0YSk7XHJcbiAgICAgICAgaWYocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL3Bvc3RzLyR7cmVxdWVzdC5kYXRhLmlkfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcklEKHVzZXJDb29raWUpXHJcbiAgICB9LCBbdXNlckNvb2tpZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0LXRpdGxlLXBvc3RcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSBpZD0naW5wdXQtdGl0bGUtcG9zdCcgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0LWNvbnRlbnQtcG9zdFwiPkNvbnRlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2NvbnRlbnR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9IGlkPSdpbnB1dC1jb250ZW50LXBvc3QnIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcG9zdEZldGNoUmVxdWVzdCgpfT5wb3N0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0Q29va2llIiwidXNlUm91dGVyIiwiaW5kZXgiLCJyb3V0ZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJ1c2VyQ29va2llIiwiZGF0YSIsImF1dGhvcklkIiwicGFyc2VJbnQiLCJwb3N0RmV0Y2hSZXF1ZXN0IiwicmVxdWVzdCIsInBvc3QiLCJzdGF0dXMiLCJwdXNoIiwiaWQiLCJkaXYiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/newpost/index.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = (__webpack_exec__("./pages/newpost/index.jsx"));
module.exports = __webpack_exports__;

})();