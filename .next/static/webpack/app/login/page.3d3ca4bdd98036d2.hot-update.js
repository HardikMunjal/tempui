"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.js":
/*!***************************!*\
  !*** ./app/login/page.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.module.css */ \"(app-pages-browser)/./app/login/login.module.css\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"(app-pages-browser)/./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n// app/login/page.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"token\"\n    ]);\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        const user = {\n            id: 1,\n            name: \"User\",\n            email: \"user@example.com\"\n        };\n        if (e.target.username.value === \"user\" && e.target.password.value === \"password\") {\n            setCookie(\"token\", user, {\n                path: \"/\"\n            });\n            router.push(\"/\");\n        }\n    // try{\n    //   await signIn(\"credentials\", {\n    //     redirect: true,\n    //     callbackUrl: \"/\",\n    //     username: e.target.username.value,\n    //     password: e.target.password.value,\n    //   });\n    // }\n    // catch(error){\n    //   console.log(error)\n    // }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"username\",\n                                id: \"username\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                name: \"password\",\n                                id: \"password\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().submitButton),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\login\\\\page.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"04VO4V5Vwa3LpYr4wH8WVv8xqVo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9COzs7QUFHcUI7QUFDRDtBQUNrQjtBQUNkO0FBRTdCLFNBQVNLOztJQUN0QixNQUFNQyxTQUFTRiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDRyxTQUFTQyxVQUFVLEdBQUdMLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUdqRCxNQUFNTSxjQUFjLE9BQU9DO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU87WUFBRUMsSUFBSTtZQUFHQyxNQUFNO1lBQVFDLE9BQU87UUFBbUI7UUFDOUQsSUFBS0wsRUFBRU0sTUFBTSxDQUFDQyxRQUFRLENBQUNDLEtBQUssS0FBSyxVQUFVUixFQUFFTSxNQUFNLENBQUNHLFFBQVEsQ0FBQ0QsS0FBSyxLQUFLLFlBQVk7WUFDakZWLFVBQVUsU0FBU0ksTUFBTTtnQkFBRVEsTUFBTTtZQUFJO1lBQ3JDZCxPQUFPZSxJQUFJLENBQUM7UUFDZDtJQUNBLE9BQU87SUFDUCxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix5Q0FBeUM7SUFDekMseUNBQXlDO0lBQ3pDLFFBQVE7SUFDUixJQUFJO0lBQ0osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixJQUFJO0lBRU47SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3RCLG9FQUFnQjs7MEJBQzlCLDhEQUFDd0I7Z0JBQUdGLFdBQVd0QixpRUFBYTswQkFBRTs7Ozs7OzBCQUM5Qiw4REFBQzBCO2dCQUFLQyxVQUFVbkI7O2tDQUNkLDhEQUFDYTt3QkFBSUMsV0FBV3RCLG9FQUFnQjs7MENBQzlCLDhEQUFDNkI7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPbkIsTUFBSztnQ0FBV0QsSUFBRztnQ0FBV3FCLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFM0QsOERBQUNaO3dCQUFJQyxXQUFXdEIsb0VBQWdCOzswQ0FDOUIsOERBQUM2QjtnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVduQixNQUFLO2dDQUFXRCxJQUFHO2dDQUFXcUIsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUUvRCw4REFBQ0M7d0JBQU9GLE1BQUs7d0JBQVNWLFdBQVd0Qix1RUFBbUI7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RDtHQTFDd0JJOztRQUNQRCxzREFBU0E7UUFDS0Qsb0RBQVVBOzs7S0FGakJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9wYWdlLmpzPzZhZmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2xvZ2luL3BhZ2UuanNcclxuXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2dpbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyLCB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFsndG9rZW4nXSlcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHVzZXIgPSB7IGlkOiAxLCBuYW1lOiBcIlVzZXJcIiwgZW1haWw6IFwidXNlckBleGFtcGxlLmNvbVwiIH07XHJcbiAgICBpZiAoIGUudGFyZ2V0LnVzZXJuYW1lLnZhbHVlID09PSBcInVzZXJcIiAmJiBlLnRhcmdldC5wYXNzd29yZC52YWx1ZSA9PT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgIHNldENvb2tpZSgndG9rZW4nLCB1c2VyLCB7IHBhdGg6ICcvJyB9KVxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfVxyXG4gICAgLy8gdHJ5e1xyXG4gICAgLy8gICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XHJcbiAgICAvLyAgICAgcmVkaXJlY3Q6IHRydWUsXHJcbiAgICAvLyAgICAgY2FsbGJhY2tVcmw6IFwiL1wiLFxyXG4gICAgLy8gICAgIHVzZXJuYW1lOiBlLnRhcmdldC51c2VybmFtZS52YWx1ZSxcclxuICAgIC8vICAgICBwYXNzd29yZDogZS50YXJnZXQucGFzc3dvcmQudmFsdWUsXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY2F0Y2goZXJyb3Ipe1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIC8vIH1cclxuICAgIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PkxvZ2luPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwidXNlcm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ1dHRvbn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic2lnbkluIiwic3R5bGVzIiwiQ29va2llc1Byb3ZpZGVyIiwidXNlQ29va2llcyIsInVzZVJvdXRlciIsIkxvZ2luUGFnZSIsInJvdXRlciIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInRhcmdldCIsInVzZXJuYW1lIiwidmFsdWUiLCJwYXNzd29yZCIsInBhdGgiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJoZWFkZXIiLCJmb3JtIiwib25TdWJtaXQiLCJmb3JtR3JvdXAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.js\n"));

/***/ })

});