"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts/index.jsx":
/*!*******************************!*\
  !*** ./pages/posts/index.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar posts = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postsData = ref[0], setPostsData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loaded = ref1[0], setLoaded = ref1[1];\n    var getPostsData = function() {\n        var _ref = _asyncToGenerator(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var posts1;\n            return C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/api/posts\");\n                    case 2:\n                        posts1 = _ctx.sent;\n                        setPostsData(posts1.data);\n                        setLoaded(true);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getPostsData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getPostsData();\n    }, [\n        setPostsData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/newpost\",\n                children: \"Nouveau poste\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\index.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Les postes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\index.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: [\n                    !loaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, _this),\n                    loaded && postsData.map(function(post) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/posts/\".concat(post.id),\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\index.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 43\n                            }, _this1)\n                        }, post.id, false, {\n                            fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\index.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\index.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\index.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this);\n};\n_s(posts, \"L4qw7OdHcfW40fT2oadAPo7jiuc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDRTs7QUFFNUIsSUFBTUssS0FBSyxHQUFHLFdBQU07OztJQUNoQixJQUFrQ0gsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBTGhELFNBS29CLEdBQWtCQSxHQUFVLEdBQTVCLEVBTHBCLFlBS2tDLEdBQUlBLEdBQVUsR0FBZDtJQUM5QixJQUE0QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQU4vQyxNQU1pQixHQUFlQSxJQUFlLEdBQTlCLEVBTmpCLFNBTTRCLEdBQUlBLElBQWUsR0FBbkI7SUFFeEIsSUFBTVEsWUFBWTttQkFBRyxpTUFBWTtnQkFDdkJMLE1BQUs7Ozs7OytCQUFTRixnREFBUyxDQUFDLFlBQVksQ0FBQzs7d0JBQXJDRSxNQUFLLFlBQWdDO3dCQUMzQ0UsWUFBWSxDQUFDRixNQUFLLENBQUNPLElBQUksQ0FBQyxDQUFDO3dCQUN6QkgsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7U0FDbkI7d0JBSktDLFlBQVk7OztPQUlqQjtJQUVEVCxnREFBUyxDQUFDLFdBQU07UUFDWlMsWUFBWSxFQUFFO0tBQ2pCLEVBQUU7UUFBQ0gsWUFBWTtLQUFDLENBQUM7SUFFbEIscUJBQ0ksOERBQUNNLEtBQUc7OzBCQUNBLDhEQUFDVCxrREFBSTtnQkFBQ1UsSUFBSSxFQUFFLFVBQVU7MEJBQUUsZUFBYTs7Ozs7cUJBQU87MEJBRTVDLDhEQUFDQyxJQUFFOzBCQUFDLFlBQVU7Ozs7O3FCQUFLOzBCQUVuQiw4REFBQ0MsSUFBRTs7b0JBQ0UsQ0FBQ1IsTUFBTSxrQkFDSiw4REFBQ1MsR0FBQztrQ0FBQyxZQUFVOzs7Ozs2QkFBSTtvQkFFcEJULE1BQU0sSUFBSUYsU0FBUyxDQUFDWSxHQUFHLENBQUNDLFNBQUFBLElBQUksRUFBSTt3QkFDN0IscUJBQ0ksOERBQUNDLElBQUU7c0NBQWUsNEVBQUNoQixrREFBSTtnQ0FBQ1UsSUFBSSxFQUFFLFNBQVEsQ0FBVSxPQUFSSyxJQUFJLENBQUNFLEVBQUUsQ0FBRTswQ0FBR0YsSUFBSSxDQUFDRyxLQUFLOzs7OztzQ0FBUTsyQkFBN0RILElBQUksQ0FBQ0UsRUFBRTs7OztrQ0FBMkQsQ0FDOUU7cUJBQ0osQ0FBQzs7Ozs7O3FCQUNEOzs7Ozs7YUFDSCxDQUNSO0NBQ0w7R0FoQ0toQixLQUFLO0FBa0NYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanN4P2ExNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IHBvc3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Bvc3RzRGF0YSwgc2V0UG9zdHNEYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGdldFBvc3RzRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvcG9zdHNcIilcclxuICAgICAgICBzZXRQb3N0c0RhdGEocG9zdHMuZGF0YSk7XHJcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFBvc3RzRGF0YSgpXHJcbiAgICB9LCBbc2V0UG9zdHNEYXRhXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvbmV3cG9zdCd9Pk5vdXZlYXUgcG9zdGU8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8aDE+TGVzIHBvc3RlczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7IWxvYWRlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7bG9hZGVkICYmIHBvc3RzRGF0YS5tYXAocG9zdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+PExpbmsgaHJlZj17YC9wb3N0cy8ke3Bvc3QuaWR9YH0+e3Bvc3QudGl0bGV9PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxpbmsiLCJwb3N0cyIsInBvc3RzRGF0YSIsInNldFBvc3RzRGF0YSIsImxvYWRlZCIsInNldExvYWRlZCIsImdldFBvc3RzRGF0YSIsImdldCIsImRhdGEiLCJkaXYiLCJocmVmIiwiaDEiLCJ1bCIsInAiLCJtYXAiLCJwb3N0IiwibGkiLCJpZCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/index.jsx\n");

/***/ })

});