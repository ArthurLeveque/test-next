"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].jsx":
/*!******************************!*\
  !*** ./pages/posts/[id].jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar posts = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postData = ref[0], setPostData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postAuthor = ref1[0], setAuthorData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postComments = ref2[0], setPostComments = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loaded = ref3[0], setLoaded = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), userID = ref4[0], setUserID = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), commentContent = ref5[0], setCommentContent = ref5[1];\n    var userCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)(\"userId\");\n    var getPostData = function() {\n        var _ref = _asyncToGenerator(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var post;\n            return C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/api/posts/\".concat(id));\n                    case 2:\n                        post = _ctx.sent;\n                        setPostData(post.data);\n                        console.log(post.data);\n                        setAuthorData(post.data.author);\n                        setPostComments(post.data.comments);\n                        setLoaded(true);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getPostData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var data = {\n        content: commentContent,\n        userId: parseInt(userID),\n        postId: parseInt(id)\n    };\n    var postComment = function() {\n        axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"/api/posts/\".concat(id, \"/comment\"), data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setUserID(userCookie);\n    }, [\n        userCookie\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            getPostData();\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            !loaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, _this),\n            loaded && postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                        children: [\n                            \"Par : \",\n                            postAuthor.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: postData.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, _this),\n                    userID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: \"Poster un commentaire\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                lineNumber: 66,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                cols: \"30\",\n                                rows: \"10\",\n                                onChange: function(e) {\n                                    return setCommentContent(e.target.value);\n                                },\n                                children: commentContent\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                lineNumber: 67,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                lineNumber: 67,\n                                columnNumber: 138\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return postComment();\n                                },\n                                children: \"Envoyer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                lineNumber: 68,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        children: postComments.map(function(comment) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        style: \"font-weight:bold\",\n                                        children: comment.user.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 37\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: comment.content\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 37\n                                    }, _this1)\n                                ]\n                            }, comment.id, true, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                lineNumber: 75,\n                                columnNumber: 33\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, _this);\n};\n_s(posts, \"VmKORGTWkkBWe7g1a0YN7JiKLMw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzthQUVSLENBQ1I7Q0FDTDtHQWhGS0YsS0FBSzs7UUFDUUYsa0RBQVM7OztBQWlGNUIsK0RBQWVFLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9baWRdLmpzeD83NmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XHJcblxyXG5jb25zdCBwb3N0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgICBjb25zdCBbcG9zdERhdGEsIHNldFBvc3REYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcG9zdEF1dGhvciwgc2V0QXV0aG9yRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Bvc3RDb21tZW50cywgc2V0UG9zdENvbW1lbnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFt1c2VySUQsIHNldFVzZXJJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY29tbWVudENvbnRlbnQsIHNldENvbW1lbnRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ29va2llID0gZ2V0Q29va2llKCd1c2VySWQnKTtcclxuXHJcbiAgICBjb25zdCBnZXRQb3N0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Bvc3RzLyR7aWR9YCk7XHJcbiAgICAgICAgc2V0UG9zdERhdGEocG9zdC5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwb3N0LmRhdGEpXHJcblxyXG4gICAgICAgIHNldEF1dGhvckRhdGEocG9zdC5kYXRhLmF1dGhvcik7XHJcbiAgICAgICAgc2V0UG9zdENvbW1lbnRzKHBvc3QuZGF0YS5jb21tZW50cyk7XHJcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGNvbnRlbnQ6IGNvbW1lbnRDb250ZW50LFxyXG4gICAgICAgIHVzZXJJZDogcGFyc2VJbnQodXNlcklEKSxcclxuICAgICAgICBwb3N0SWQ6IHBhcnNlSW50KGlkKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwb3N0Q29tbWVudCA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5wb3N0KGAvYXBpL3Bvc3RzLyR7aWR9L2NvbW1lbnRgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJJRCh1c2VyQ29va2llKVxyXG4gICAgfSwgW3VzZXJDb29raWVdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaWQpIHtcclxuICAgICAgICAgICAgZ2V0UG9zdERhdGEoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IWxvYWRlZCAmJlxyXG4gICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7bG9hZGVkICYmIHBvc3REYXRhICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57cG9zdERhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aT5QYXIgOiB7cG9zdEF1dGhvci5uYW1lfTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57cG9zdERhdGEuY29udGVudH08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcklEICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UG9zdGVyIHVuIGNvbW1lbnRhaXJlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX0+e2NvbW1lbnRDb250ZW50fTwvdGV4dGFyZWE+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHBvc3RDb21tZW50KCl9PkVudm95ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0Q29tbWVudHMubWFwKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjb21tZW50LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXdlaWdodDpib2xkXCI+e2NvbW1lbnQudXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvbW1lbnQuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsImdldENvb2tpZSIsInBvc3RzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInBvc3REYXRhIiwic2V0UG9zdERhdGEiLCJwb3N0QXV0aG9yIiwic2V0QXV0aG9yRGF0YSIsInBvc3RDb21tZW50cyIsInNldFBvc3RDb21tZW50cyIsImxvYWRlZCIsInNldExvYWRlZCIsInVzZXJJRCIsInNldFVzZXJJRCIsImNvbW1lbnRDb250ZW50Iiwic2V0Q29tbWVudENvbnRlbnQiLCJ1c2VyQ29va2llIiwiZ2V0UG9zdERhdGEiLCJwb3N0IiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhdXRob3IiLCJjb21tZW50cyIsImNvbnRlbnQiLCJ1c2VySWQiLCJwYXJzZUludCIsInBvc3RJZCIsInBvc3RDb21tZW50IiwiZGl2IiwicCIsImgxIiwidGl0bGUiLCJpIiwibmFtZSIsImhyIiwiaDIiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsImNvbW1lbnQiLCJsaSIsInN0eWxlIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].jsx\n");

/***/ })

});