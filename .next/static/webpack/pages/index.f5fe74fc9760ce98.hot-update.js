"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), token = ref[0], setToken = ref[1];\n    var userCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)(\"token\");\n    var disconnectUser = function() {\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)(\"token\");\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.removeCookies)(\"userId\");\n        Router.push(\"/\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setToken(userCookie);\n    }, [\n        userCookie\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/login\",\n                        children: \"Se connecter\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/register\",\n                        children: \"S'inscrire\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, _this),\n            token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return disconnectUser();\n                    },\n                    children: \"Se d\\xe9connecter\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/posts\",\n                children: \"Voir les posts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\index.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this);\n};\n_s(index, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFtRDtBQUNLOztBQUV4RCxJQUFNSyxLQUFLLEdBQUcsV0FBTTs7SUFDaEIsSUFBMEJKLEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUp4QyxLQUlnQixHQUFjQSxHQUFVLEdBQXhCLEVBSmhCLFFBSTBCLEdBQUlBLEdBQVUsR0FBZDtJQUV0QixJQUFNTyxVQUFVLEdBQUdMLHVEQUFTLENBQUMsT0FBTyxDQUFDO0lBRXJDLElBQU1NLGNBQWMsR0FBRyxXQUFNO1FBQ3pCTCwyREFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCQSwyREFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCTSxNQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUVEVCxnREFBUyxDQUFDLFdBQU07UUFDWkssUUFBUSxDQUFDQyxVQUFVLENBQUM7S0FDdkIsRUFBRTtRQUFDQSxVQUFVO0tBQUMsQ0FBQztJQUVoQixxQkFDSSw4REFBQ0ksS0FBRzs7WUFDQyxDQUFDTixLQUFLLGtCQUNILDhEQUFDTSxLQUFHOztrQ0FDQSw4REFBQ0MsR0FBQzt3QkFBQ0MsSUFBSSxFQUFDLFFBQVE7a0NBQUMsY0FBWTs7Ozs7NkJBQUk7a0NBQ2pDLDhEQUFDRCxHQUFDO3dCQUFDQyxJQUFJLEVBQUMsV0FBVztrQ0FBQyxZQUFVOzs7Ozs2QkFBSTs7Ozs7O3FCQUNoQztZQUVUUixLQUFLLGtCQUNGLDhEQUFDTSxLQUFHOzBCQUNBLDRFQUFDRyxRQUFNO29CQUFFQyxPQUFPLEVBQUU7K0JBQU1QLGNBQWMsRUFBRTtxQkFBQTs4QkFBRSxtQkFBYzs7Ozs7eUJBQVM7Ozs7O3FCQUMvRDswQkFHViw4REFBQ0ksR0FBQztnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7MEJBQUMsZ0JBQWM7Ozs7O3FCQUFJOzs7Ozs7YUFDakMsQ0FDUjtDQUNMO0dBaENLVCxLQUFLO0FBa0NYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSwgcmVtb3ZlQ29va2llcyB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ29va2llID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuICAgIGNvbnN0IGRpc2Nvbm5lY3RVc2VyID0gKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUNvb2tpZXMoJ3Rva2VuJyk7XHJcbiAgICAgICAgcmVtb3ZlQ29va2llcygndXNlcklkJyk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKHVzZXJDb29raWUpXHJcbiAgICB9LCBbdXNlckNvb2tpZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IXRva2VuICYmIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+U2UgY29ubmVjdGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy9yZWdpc3Rlcic+UydpbnNjcmlyZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHt0b2tlbiAmJiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17KCkgPT4gZGlzY29ubmVjdFVzZXIoKX0+U2UgZMOpY29ubmVjdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9wb3N0c1wiPlZvaXIgbGVzIHBvc3RzPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0Q29va2llIiwicmVtb3ZlQ29va2llcyIsImluZGV4IiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZXJDb29raWUiLCJkaXNjb25uZWN0VXNlciIsIlJvdXRlciIsInB1c2giLCJkaXYiLCJhIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});