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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar posts = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postData = ref[0], setPostData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), postAuthor = ref1[0], setAuthorData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loaded = ref2[0], setLoaded = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), userID = ref3[0], setUserID = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), comment = ref4[0], setComment = ref4[1];\n    var userCookie = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)(\"userId\");\n    var getPostData = function() {\n        var _ref = _asyncToGenerator(C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var post, author;\n            return C_Users_vlado_Desktop_Cours_3_me_ann_e_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/api/posts/\".concat(id));\n                    case 2:\n                        post = _ctx.sent;\n                        setPostData(post.data);\n                        console.log(post.data);\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/api/users/\".concat(post.data.authorId));\n                    case 7:\n                        author = _ctx.sent;\n                        setAuthorData(author.data);\n                        console.log(author.data);\n                        setLoaded(true);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getPostData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var data = {\n        content: comment,\n        userId: parseInt(userID)\n    };\n    var postComment = function() {\n        data.postId = id;\n        console.log(data);\n        axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"/api/posts/\".concat(id, \"/comment\"), data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setUserID(userCookie);\n    }, [\n        userCookie\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id) {\n            getPostData();\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            !loaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, _this),\n            loaded && postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                        children: [\n                            \"Par : \",\n                            postAuthor.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: postData.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Poster un commentaire\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        cols: \"30\",\n                        rows: \"10\",\n                        onChange: function(e) {\n                            return setComment(e.target.value);\n                        },\n                        children: comment\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 116\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return postComment();\n                        },\n                        children: \"Envoyer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n                lineNumber: 58,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vlado\\\\Desktop\\\\Cours\\\\______3\\xe8me ann\\xe9e\\\\next\\\\test\\\\pages\\\\posts\\\\[id].jsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, _this);\n};\n_s(posts, \"qpmS9PVncOK5r5e6F3dgUrzCooM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3FCQUFJO1lBRXBCckIsTUFBTSxJQUFJSixRQUFRLGtCQUNmLDhEQUFDd0IsS0FBRzs7a0NBQ0EsOERBQUNFLElBQUU7a0NBQUUxQixRQUFRLENBQUMyQixLQUFLOzs7Ozs2QkFBTTtrQ0FDekIsOERBQUNDLEdBQUM7OzRCQUFDLFFBQU07NEJBQUMxQixVQUFVLENBQUMyQixJQUFJOzs7Ozs7NkJBQUs7a0NBQzlCLDhEQUFDSixHQUFDO2tDQUFFekIsUUFBUSxDQUFDbUIsT0FBTzs7Ozs7NkJBQUs7a0NBRXpCLDhEQUFDVyxJQUFFOzs7OzZCQUFHO2tDQUNOLDhEQUFDQyxJQUFFO2tDQUFDLHVCQUFxQjs7Ozs7NkJBQUs7a0NBQzlCLDhEQUFDQyxVQUFRO3dCQUFDQyxJQUFJLEVBQUMsSUFBSTt3QkFBQ0MsSUFBSSxFQUFDLElBQUk7d0JBQUNDLFFBQVEsRUFBRSxTQUFDQyxDQUFDO21DQUFLM0IsVUFBVSxDQUFDMkIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQzt5QkFBQTtrQ0FBRzlCLE9BQU87Ozs7OzZCQUFZO2tDQUFBLDhEQUFDK0IsSUFBRTs7Ozs2QkFBRztrQ0FDckcsOERBQUNDLFFBQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBTW5CLFdBQVcsRUFBRTt5QkFBQTtrQ0FBRSxTQUFPOzs7Ozs2QkFBUzs7Ozs7O3FCQUNwRDs7Ozs7O2FBRVIsQ0FDUjtDQUNMO0dBakVLMUIsS0FBSzs7UUFDUUYsa0RBQVM7OztBQWtFNUIsK0RBQWVFLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9baWRdLmpzeD83NmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XHJcblxyXG5jb25zdCBwb3N0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgICBjb25zdCBbcG9zdERhdGEsIHNldFBvc3REYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcG9zdEF1dGhvciwgc2V0QXV0aG9yRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbdXNlcklELCBzZXRVc2VySURdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJDb29raWUgPSBnZXRDb29raWUoJ3VzZXJJZCcpO1xyXG5cclxuICAgIGNvbnN0IGdldFBvc3REYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcG9zdHMvJHtpZH1gKTtcclxuICAgICAgICBzZXRQb3N0RGF0YShwb3N0LmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3QuZGF0YSlcclxuXHJcbiAgICAgICAgY29uc3QgYXV0aG9yID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3VzZXJzLyR7cG9zdC5kYXRhLmF1dGhvcklkfWApO1xyXG4gICAgICAgIHNldEF1dGhvckRhdGEoYXV0aG9yLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGF1dGhvci5kYXRhKVxyXG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBjb250ZW50OiBjb21tZW50LFxyXG4gICAgICAgIHVzZXJJZDogcGFyc2VJbnQodXNlcklEKSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcG9zdENvbW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgZGF0YS5wb3N0SWQgPSBpZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvcG9zdHMvJHtpZH0vY29tbWVudGAsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcklEKHVzZXJDb29raWUpXHJcbiAgICB9LCBbdXNlckNvb2tpZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpZCkge1xyXG4gICAgICAgICAgICBnZXRQb3N0RGF0YSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkXSlcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHshbG9hZGVkICYmXHJcbiAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtsb2FkZWQgJiYgcG9zdERhdGEgJiZcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntwb3N0RGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpPlBhciA6IHtwb3N0QXV0aG9yLm5hbWV9PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntwb3N0RGF0YS5jb250ZW50fTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlBvc3RlciB1biBjb21tZW50YWlyZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9Pntjb21tZW50fTwvdGV4dGFyZWE+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwb3N0Q29tbWVudCgpfT5FbnZveWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJnZXRDb29raWUiLCJwb3N0cyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJwb3N0RGF0YSIsInNldFBvc3REYXRhIiwicG9zdEF1dGhvciIsInNldEF1dGhvckRhdGEiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsInVzZXJDb29raWUiLCJnZXRQb3N0RGF0YSIsInBvc3QiLCJhdXRob3IiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImF1dGhvcklkIiwiY29udGVudCIsInVzZXJJZCIsInBhcnNlSW50IiwicG9zdENvbW1lbnQiLCJwb3N0SWQiLCJkaXYiLCJwIiwiaDEiLCJ0aXRsZSIsImkiLCJuYW1lIiwiaHIiLCJoMiIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].jsx\n");

/***/ })

});