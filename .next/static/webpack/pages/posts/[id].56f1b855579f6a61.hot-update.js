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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar posts = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postData = ref[0], setPostData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postAuthor = ref1[0], setAuthorData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loaded = ref2[0], setLoaded = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), userID = ref3[0], setUserID = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), comment = ref4[0], setComment = ref4[1];\n    var userCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)(\"userId\");\n    var getPostData = function() {\n        var _ref = _asyncToGenerator(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var post, author;\n            return C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/api/posts/\".concat(id));\n                    case 2:\n                        post = _ctx.sent;\n                        setPostData(post.data);\n                        console.log(post.data);\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/api/users/\".concat(post.data.authorId));\n                    case 7:\n                        author = _ctx.sent;\n                        setAuthorData(author.data);\n                        console.log(author.data);\n                        setLoaded(true);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getPostData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var data = {\n        content: comment,\n        // userId: userID,\n        postId: id\n    };\n    var postComment = function() {\n        data.userId = userID;\n        console.log(data);\n    // axios.post(`/api/posts/${id}/comment`, data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setUserID(userCookie);\n        console.log(\"cookie\");\n    }, [\n        userCookie\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            getPostData();\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            !loaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, _this),\n            loaded && postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                        children: [\n                            \"Par : \",\n                            postAuthor.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: postData.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Poster un commentaire\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        cols: \"30\",\n                        rows: \"10\",\n                        onChange: function(e) {\n                            return setComment(e.target.value);\n                        },\n                        children: comment\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 67,\n                        columnNumber: 116\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return postComment();\n                        },\n                        children: \"Envoyer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, _this);\n};\n_s(posts, \"qpmS9PVncOK5r5e6F3dgUrzCooM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDZiw4REFBQ3VCLEtBQUc7O2tDQUNBLDhEQUFDRSxJQUFFO2tDQUFFekIsUUFBUSxDQUFDMEIsS0FBSzs7Ozs7NkJBQU07a0NBQ3pCLDhEQUFDQyxHQUFDOzs0QkFBQyxRQUFNOzRCQUFDekIsVUFBVSxDQUFDMEIsSUFBSTs7Ozs7OzZCQUFLO2tDQUM5Qiw4REFBQ0osR0FBQztrQ0FBRXhCLFFBQVEsQ0FBQ21CLE9BQU87Ozs7OzZCQUFLO2tDQUV6Qiw4REFBQ1UsSUFBRTs7Ozs2QkFBRztrQ0FDTiw4REFBQ0MsSUFBRTtrQ0FBQyx1QkFBcUI7Ozs7OzZCQUFLO2tDQUM5Qiw4REFBQ0MsVUFBUTt3QkFBQ0MsSUFBSSxFQUFDLElBQUk7d0JBQUNDLElBQUksRUFBQyxJQUFJO3dCQUFDQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzttQ0FBSzFCLFVBQVUsQ0FBQzBCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7eUJBQUE7a0NBQUc3QixPQUFPOzs7Ozs2QkFBWTtrQ0FBQSw4REFBQzhCLElBQUU7Ozs7NkJBQUc7a0NBQ3JHLDhEQUFDQyxRQUFNO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1uQixXQUFXLEVBQUU7eUJBQUE7a0NBQUUsU0FBTzs7Ozs7NkJBQVM7Ozs7OztxQkFDcEQ7Ozs7OzthQUVSLENBQ1I7Q0FDTDtHQW5FS3pCLEtBQUs7O1FBQ1FGLGtEQUFTOzs7QUFvRTVCLCtEQUFlRSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW2lkXS5qc3g/NzZjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICdjb29raWVzLW5leHQnO1xyXG5cclxuY29uc3QgcG9zdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gICAgY29uc3QgW3Bvc3REYXRhLCBzZXRQb3N0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3Bvc3RBdXRob3IsIHNldEF1dGhvckRhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklEXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ29va2llID0gZ2V0Q29va2llKCd1c2VySWQnKTtcclxuXHJcbiAgICBjb25zdCBnZXRQb3N0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Bvc3RzLyR7aWR9YCk7XHJcbiAgICAgICAgc2V0UG9zdERhdGEocG9zdC5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwb3N0LmRhdGEpXHJcblxyXG4gICAgICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS91c2Vycy8ke3Bvc3QuZGF0YS5hdXRob3JJZH1gKTtcclxuICAgICAgICBzZXRBdXRob3JEYXRhKGF1dGhvci5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhdXRob3IuZGF0YSlcclxuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgY29udGVudDogY29tbWVudCxcclxuICAgICAgICAvLyB1c2VySWQ6IHVzZXJJRCxcclxuICAgICAgICBwb3N0SWQ6IGlkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBvc3RDb21tZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGRhdGEudXNlcklkID0gdXNlcklEO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgLy8gYXhpb3MucG9zdChgL2FwaS9wb3N0cy8ke2lkfS9jb21tZW50YCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRVc2VySUQodXNlckNvb2tpZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnY29va2llJylcclxuICAgIH0sIFt1c2VyQ29va2llXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGlkKSB7XHJcbiAgICAgICAgICAgIGdldFBvc3REYXRhKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyFsb2FkZWQgJiZcclxuICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2xvYWRlZCAmJiBwb3N0RGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3Bvc3REYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGk+UGFyIDoge3Bvc3RBdXRob3IubmFtZX08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3REYXRhLmNvbnRlbnR9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UG9zdGVyIHVuIGNvbW1lbnRhaXJlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX0+e2NvbW1lbnR9PC90ZXh0YXJlYT48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHBvc3RDb21tZW50KCl9PkVudm95ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsImdldENvb2tpZSIsInBvc3RzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInBvc3REYXRhIiwic2V0UG9zdERhdGEiLCJwb3N0QXV0aG9yIiwic2V0QXV0aG9yRGF0YSIsImxvYWRlZCIsInNldExvYWRlZCIsInVzZXJJRCIsInNldFVzZXJJRCIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwidXNlckNvb2tpZSIsImdldFBvc3REYXRhIiwicG9zdCIsImF1dGhvciIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYXV0aG9ySWQiLCJjb250ZW50IiwicG9zdElkIiwicG9zdENvbW1lbnQiLCJ1c2VySWQiLCJkaXYiLCJwIiwiaDEiLCJ0aXRsZSIsImkiLCJuYW1lIiwiaHIiLCJoMiIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].jsx\n");

/***/ })

});