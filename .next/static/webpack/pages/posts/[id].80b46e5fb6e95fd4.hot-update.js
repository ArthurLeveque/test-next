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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar posts = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postData = ref[0], setPostData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postAuthor = ref1[0], setAuthorData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loaded = ref2[0], setLoaded = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), userID = ref3[0], setUserID = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), comment = ref4[0], setComment = ref4[1];\n    var userCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)(\"userId\");\n    var getPostData = function() {\n        var _ref = _asyncToGenerator(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var post;\n            return C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/api/posts/\".concat(id));\n                    case 2:\n                        post = _ctx.sent;\n                        setPostData(post.data);\n                        console.log(post.data);\n                        setAuthorData(post.data.author);\n                        setLoaded(true);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getPostData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var data = {\n        content: comment,\n        userId: parseInt(userID),\n        postId: id\n    };\n    var postComment = function() {\n        console.log(data);\n    // axios.post(`/api/posts/${id}/comment`, data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setUserID(userCookie);\n    }, [\n        userCookie\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            getPostData();\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            !loaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, _this),\n            loaded && postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                        children: [\n                            \"Par : \",\n                            postAuthor.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: postData.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, _this),\n                    userID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: \"Poster un commentaire\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                lineNumber: 65,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                cols: \"30\",\n                                rows: \"10\",\n                                onChange: function(e) {\n                                    return setComment(e.target.value);\n                                },\n                                children: comment\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                lineNumber: 66,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                lineNumber: 66,\n                                columnNumber: 124\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return postComment();\n                                },\n                                children: \"Envoyer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                                lineNumber: 67,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 64,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, _this);\n};\n_s(posts, \"qpmS9PVncOK5r5e6F3dgUrzCooM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDVyxJQUFFOzs7OzZCQUFHO29CQUVMdkIsTUFBTSxrQkFDSCw4REFBQ2lCLEtBQUc7OzBDQUNBLDhEQUFDTyxJQUFFOzBDQUFDLHVCQUFxQjs7Ozs7cUNBQUs7MENBQzlCLDhEQUFDQyxVQUFRO2dDQUFDQyxJQUFJLEVBQUMsSUFBSTtnQ0FBQ0MsSUFBSSxFQUFDLElBQUk7Z0NBQUNDLFFBQVEsRUFBRSxTQUFDQyxDQUFDOzJDQUFLMUIsVUFBVSxDQUFDMEIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztpQ0FBQTswQ0FBRzdCLE9BQU87Ozs7O3FDQUFZOzBDQUFBLDhEQUFDOEIsSUFBRTs7OztxQ0FBRzswQ0FDckcsOERBQUNDLFFBQU07Z0NBQUNDLE9BQU8sRUFBRTsyQ0FBTWxCLFdBQVcsRUFBRTtpQ0FBQTswQ0FBRSxTQUFPOzs7OztxQ0FBUzs7Ozs7OzZCQUNwRDs7Ozs7O3FCQUVSOzs7Ozs7YUFFUixDQUNSO0NBQ0w7R0FwRUsxQixLQUFLOztRQUNRRixrREFBUzs7O0FBcUU1QiwrREFBZUUsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tpZF0uanN4Pzc2Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnY29va2llcy1uZXh0JztcclxuXHJcbmNvbnN0IHBvc3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGNvbnN0IFtwb3N0RGF0YSwgc2V0UG9zdERhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwb3N0QXV0aG9yLCBzZXRBdXRob3JEYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFt1c2VySUQsIHNldFVzZXJJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgdXNlckNvb2tpZSA9IGdldENvb2tpZSgndXNlcklkJyk7XHJcblxyXG4gICAgY29uc3QgZ2V0UG9zdERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wb3N0cy8ke2lkfWApO1xyXG4gICAgICAgIHNldFBvc3REYXRhKHBvc3QuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocG9zdC5kYXRhKVxyXG5cclxuICAgICAgICBzZXRBdXRob3JEYXRhKHBvc3QuZGF0YS5hdXRob3IpO1xyXG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBjb250ZW50OiBjb21tZW50LFxyXG4gICAgICAgIHVzZXJJZDogcGFyc2VJbnQodXNlcklEKSxcclxuICAgICAgICBwb3N0SWQ6IGlkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBvc3RDb21tZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgLy8gYXhpb3MucG9zdChgL2FwaS9wb3N0cy8ke2lkfS9jb21tZW50YCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRVc2VySUQodXNlckNvb2tpZSlcclxuICAgIH0sIFt1c2VyQ29va2llXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGlkKSB7XHJcbiAgICAgICAgICAgIGdldFBvc3REYXRhKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyFsb2FkZWQgJiZcclxuICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2xvYWRlZCAmJiBwb3N0RGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3Bvc3REYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGk+UGFyIDoge3Bvc3RBdXRob3IubmFtZX08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3REYXRhLmNvbnRlbnR9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJRCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlBvc3RlciB1biBjb21tZW50YWlyZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX0+e2NvbW1lbnR9PC90ZXh0YXJlYT48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcG9zdENvbW1lbnQoKX0+RW52b3llcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJnZXRDb29raWUiLCJwb3N0cyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJwb3N0RGF0YSIsInNldFBvc3REYXRhIiwicG9zdEF1dGhvciIsInNldEF1dGhvckRhdGEiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsInVzZXJDb29raWUiLCJnZXRQb3N0RGF0YSIsInBvc3QiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImF1dGhvciIsImNvbnRlbnQiLCJ1c2VySWQiLCJwYXJzZUludCIsInBvc3RJZCIsInBvc3RDb21tZW50IiwiZGl2IiwicCIsImgxIiwidGl0bGUiLCJpIiwibmFtZSIsImhyIiwiaDIiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].jsx\n");

/***/ })

});