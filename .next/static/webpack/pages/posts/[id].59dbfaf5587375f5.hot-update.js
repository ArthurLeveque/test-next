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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar posts = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postData = ref[0], setPostData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postAuthor = ref1[0], setAuthorData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loaded = ref2[0], setLoaded = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), userID = ref3[0], setUserID = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), comment = ref4[0], setComment = ref4[1];\n    var userCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)(\"userId\");\n    var getPostData = function() {\n        var _ref = _asyncToGenerator(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var post, author;\n            return C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/api/posts/\".concat(id));\n                    case 2:\n                        post = _ctx.sent;\n                        setPostData(post.data);\n                        console.log(post.data);\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/api/users/\".concat(post.data.authorId));\n                    case 7:\n                        author = _ctx.sent;\n                        setAuthorData(author.data);\n                        console.log(author.data);\n                        setLoaded(true);\n                        if (userCookie) {\n                            setUserID(userCookie);\n                        }\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getPostData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var data = {\n        content: comment,\n        // userId: userID,\n        postId: id\n    };\n    var postComment = function() {\n        data.userId = userID;\n        console.log(data);\n    // axios.post(`/api/posts/${id}/comment`, data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setUserID(userCookie);\n    }, [\n        userCookie\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            getPostData();\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            !loaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, _this),\n            loaded && postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                        children: [\n                            \"Par : \",\n                            postAuthor.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: postData.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Poster un commentaire\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        cols: \"30\",\n                        rows: \"10\",\n                        onChange: function(e) {\n                            return setComment(e.target.value);\n                        },\n                        children: comment\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 70,\n                        columnNumber: 116\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return postComment();\n                        },\n                        children: \"Envoyer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 63,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, _this);\n};\n_s(posts, \"qpmS9PVncOK5r5e6F3dgUrzCooM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixNQUFNLElBQUlKLFFBQVEsa0JBQ2YsOERBQUN1QixLQUFHOztrQ0FDQSw4REFBQ0UsSUFBRTtrQ0FBRXpCLFFBQVEsQ0FBQzBCLEtBQUs7Ozs7OzZCQUFNO2tDQUN6Qiw4REFBQ0MsR0FBQzs7NEJBQUMsUUFBTTs0QkFBQ3pCLFVBQVUsQ0FBQzBCLElBQUk7Ozs7Ozs2QkFBSztrQ0FDOUIsOERBQUNKLEdBQUM7a0NBQUV4QixRQUFRLENBQUNtQixPQUFPOzs7Ozs2QkFBSztrQ0FFekIsOERBQUNVLElBQUU7Ozs7NkJBQUc7a0NBQ04sOERBQUNDLElBQUU7a0NBQUMsdUJBQXFCOzs7Ozs2QkFBSztrQ0FDOUIsOERBQUNDLFVBQVE7d0JBQUNDLElBQUksRUFBQyxJQUFJO3dCQUFDQyxJQUFJLEVBQUMsSUFBSTt3QkFBQ0MsUUFBUSxFQUFFLFNBQUNDLENBQUM7bUNBQUsxQixVQUFVLENBQUMwQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3lCQUFBO2tDQUFHN0IsT0FBTzs7Ozs7NkJBQVk7a0NBQUEsOERBQUM4QixJQUFFOzs7OzZCQUFHO2tDQUNyRyw4REFBQ0MsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNbkIsV0FBVyxFQUFFO3lCQUFBO2tDQUFFLFNBQU87Ozs7OzZCQUFTOzs7Ozs7cUJBQ3BEOzs7Ozs7YUFFUixDQUNSO0NBQ0w7R0F0RUt6QixLQUFLOztRQUNRRixrREFBUzs7O0FBdUU1QiwrREFBZUUsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tpZF0uanN4Pzc2Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnY29va2llcy1uZXh0JztcclxuXHJcbmNvbnN0IHBvc3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGNvbnN0IFtwb3N0RGF0YSwgc2V0UG9zdERhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwb3N0QXV0aG9yLCBzZXRBdXRob3JEYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFt1c2VySUQsIHNldFVzZXJJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgdXNlckNvb2tpZSA9IGdldENvb2tpZSgndXNlcklkJyk7XHJcblxyXG4gICAgY29uc3QgZ2V0UG9zdERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wb3N0cy8ke2lkfWApO1xyXG4gICAgICAgIHNldFBvc3REYXRhKHBvc3QuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocG9zdC5kYXRhKVxyXG5cclxuICAgICAgICBjb25zdCBhdXRob3IgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdXNlcnMvJHtwb3N0LmRhdGEuYXV0aG9ySWR9YCk7XHJcbiAgICAgICAgc2V0QXV0aG9yRGF0YShhdXRob3IuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXV0aG9yLmRhdGEpXHJcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG5cclxuICAgICAgICBpZih1c2VyQ29va2llKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJJRCh1c2VyQ29va2llKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBjb250ZW50OiBjb21tZW50LFxyXG4gICAgICAgIC8vIHVzZXJJZDogdXNlcklELFxyXG4gICAgICAgIHBvc3RJZDogaWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcG9zdENvbW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZGF0YS51c2VySWQgPSB1c2VySUQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAvLyBheGlvcy5wb3N0KGAvYXBpL3Bvc3RzLyR7aWR9L2NvbW1lbnRgLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJJRCh1c2VyQ29va2llKVxyXG4gICAgfSwgW3VzZXJDb29raWVdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaWQpIHtcclxuICAgICAgICAgICAgZ2V0UG9zdERhdGEoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IWxvYWRlZCAmJlxyXG4gICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7bG9hZGVkICYmIHBvc3REYXRhICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57cG9zdERhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aT5QYXIgOiB7cG9zdEF1dGhvci5uYW1lfTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57cG9zdERhdGEuY29udGVudH08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qb3N0ZXIgdW4gY29tbWVudGFpcmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpfT57Y29tbWVudH08L3RleHRhcmVhPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcG9zdENvbW1lbnQoKX0+RW52b3llcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0czsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiZ2V0Q29va2llIiwicG9zdHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicG9zdERhdGEiLCJzZXRQb3N0RGF0YSIsInBvc3RBdXRob3IiLCJzZXRBdXRob3JEYXRhIiwibG9hZGVkIiwic2V0TG9hZGVkIiwidXNlcklEIiwic2V0VXNlcklEIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJ1c2VyQ29va2llIiwiZ2V0UG9zdERhdGEiLCJwb3N0IiwiYXV0aG9yIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhdXRob3JJZCIsImNvbnRlbnQiLCJwb3N0SWQiLCJwb3N0Q29tbWVudCIsInVzZXJJZCIsImRpdiIsInAiLCJoMSIsInRpdGxlIiwiaSIsIm5hbWUiLCJociIsImgyIiwidGV4dGFyZWEiLCJjb2xzIiwicm93cyIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].jsx\n");

/***/ })

});