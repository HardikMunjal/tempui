"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"(app-pages-browser)/./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _grid_object_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/object/page */ \"(app-pages-browser)/./app/grid/object/page.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Home.module.css */ \"(app-pages-browser)/./app/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n// app/page.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    let status;\n    if (Object.keys(cookies).length) {\n        status = \"authenticated\";\n    } else {\n        status = \"unauthenticated\";\n    }\n    console.log(cookies, status);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"tab1\");\n    const renderTabContent = ()=>{\n        switch(activeTab){\n            case \"tab1\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_object_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                    lineNumber: 33,\n                    columnNumber: 16\n                }, this);\n            case \"tab2\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_object_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                    lineNumber: 35,\n                    columnNumber: 16\n                }, this);\n            case \"tab3\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_object_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                    lineNumber: 37,\n                    columnNumber: 16\n                }, this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_object_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                    lineNumber: 39,\n                    columnNumber: 16\n                }, this);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (status === \"unauthenticated\") {\n            router.push(\"/login\");\n        }\n    }, [\n        status\n    ]);\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, this);\n    }\n    if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading),\n                    children: \"Home Page with Tabs\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabs),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabButton), \" \").concat(activeTab === \"tab1\" ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeTab) : \"\"),\n                            onClick: ()=>setActiveTab(\"tab1\"),\n                            children: \"Tab 1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabButton), \" \").concat(activeTab === \"tab2\" ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeTab) : \"\"),\n                            onClick: ()=>setActiveTab(\"tab2\"),\n                            children: \"Tab 2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabButton), \" \").concat(activeTab === \"tab3\" ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().activeTab) : \"\"),\n                            onClick: ()=>setActiveTab(\"tab3\"),\n                            children: \"Tab 3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabContent),\n                    children: renderTabContent()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to the Home Page!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\page.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this);\n    }\n    // This fallback is in case the useEffect has not yet redirected the user\n    return null;\n}\n_s(HomePage, \"yXYz0nx/p8eX8KH+nBD1u8d6fRE=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYzs7O0FBSStCO0FBQ2E7QUFDZjtBQUNDO0FBQ0o7QUFDQTtBQUNFO0FBQ0k7QUFDL0IsU0FBU1U7O0lBSXRCLE1BQU0sQ0FBQ0MsU0FBU0MsVUFBVSxHQUFHVix3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFDakQsSUFBSVc7SUFHSixJQUFHQyxPQUFPQyxJQUFJLENBQUNKLFNBQVNLLE1BQU0sRUFBQztRQUM3QkgsU0FBUztJQUNYLE9BQUs7UUFDSEEsU0FBUztJQUNYO0lBQ0FJLFFBQVFDLEdBQUcsQ0FBQ1AsU0FBUUU7SUFDcEIsTUFBTU0sU0FBU2QsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2UsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWtCLG1CQUFtQjtRQUN2QixPQUFRRjtZQUNOLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNkLHlEQUFNQTs7Ozs7WUFDaEIsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0MseURBQU1BOzs7OztZQUNoQixLQUFLO2dCQUNILHFCQUFPLDhEQUFDQyx5REFBUUE7Ozs7O1lBQ2xCO2dCQUNFLHFCQUFPLDhEQUFDRix5REFBTUE7Ozs7O1FBQ2xCO0lBQ0Y7SUFHQUgsZ0RBQVNBLENBQUM7UUFDUixJQUFJVSxXQUFXLG1CQUFtQjtZQUNoQ00sT0FBT0ksSUFBSSxDQUFDO1FBQ2Q7SUFDRixHQUFHO1FBQUNWO0tBQU87SUFFWCxJQUFJQSxXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNXO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLElBQUlYLFdBQVcsaUJBQWlCO1FBQzlCLHFCQUNFLDhEQUFDWTtZQUFJQyxXQUFXakIsMEVBQWdCOzs4QkFDOUIsOERBQUNtQjtvQkFBR0YsV0FBV2pCLHdFQUFjOzhCQUFFOzs7Ozs7OEJBQy9CLDhEQUFDZ0I7b0JBQUlDLFdBQVdqQixxRUFBVzs7c0NBQ3pCLDhEQUFDc0I7NEJBQ0NMLFdBQVcsR0FBdUJOLE9BQXBCWCwwRUFBZ0IsRUFBQyxLQUFnRCxPQUE3Q1csY0FBYyxTQUFTWCwwRUFBZ0IsR0FBRzs0QkFDNUV3QixTQUFTLElBQU1aLGFBQWE7c0NBQzdCOzs7Ozs7c0NBR0QsOERBQUNVOzRCQUNDTCxXQUFXLEdBQXVCTixPQUFwQlgsMEVBQWdCLEVBQUMsS0FBZ0QsT0FBN0NXLGNBQWMsU0FBU1gsMEVBQWdCLEdBQUc7NEJBQzVFd0IsU0FBUyxJQUFNWixhQUFhO3NDQUM3Qjs7Ozs7O3NDQUdELDhEQUFDVTs0QkFDQ0wsV0FBVyxHQUF1Qk4sT0FBcEJYLDBFQUFnQixFQUFDLEtBQWdELE9BQTdDVyxjQUFjLFNBQVNYLDBFQUFnQixHQUFHOzRCQUM1RXdCLFNBQVMsSUFBTVosYUFBYTtzQ0FDN0I7Ozs7Ozs7Ozs7Ozs4QkFJSCw4REFBQ0k7b0JBQUlDLFdBQVdqQiwyRUFBaUI7OEJBQzlCYTs7Ozs7OzhCQUVILDhEQUFDRzs4QkFDQyw0RUFBQ0c7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTVo7SUFFQSx5RUFBeUU7SUFDekUsT0FBTztBQUNUO0dBL0V3QmxCOztRQUlPUixvREFBVUE7UUFVeEJHLHNEQUFTQTs7O0tBZEZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL3BhZ2UuanNcblxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIsIHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBUYWJPbmUgZnJvbSAnLi9ncmlkL29iamVjdC9wYWdlJztcbmltcG9ydCBUYWJUd28gZnJvbSAnLi9ncmlkL29iamVjdC9wYWdlJztcbmltcG9ydCBUYWJUaHJlZSBmcm9tICcuL2dyaWQvb2JqZWN0L3BhZ2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cblxuXG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pXG4gIGxldCBzdGF0dXM7XG5cblxuICBpZihPYmplY3Qua2V5cyhjb29raWVzKS5sZW5ndGgpe1xuICAgIHN0YXR1cyA9ICdhdXRoZW50aWNhdGVkJztcbiAgfWVsc2V7XG4gICAgc3RhdHVzID0gJ3VuYXV0aGVudGljYXRlZCc7XG4gIH1cbiAgY29uc29sZS5sb2coY29va2llcyxzdGF0dXMpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJ3RhYjEnKTtcblxuICBjb25zdCByZW5kZXJUYWJDb250ZW50ID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aXZlVGFiKSB7XG4gICAgICBjYXNlICd0YWIxJzpcbiAgICAgICAgcmV0dXJuIDxUYWJPbmUgLz47XG4gICAgICBjYXNlICd0YWIyJzpcbiAgICAgICAgcmV0dXJuIDxUYWJUd28gLz47XG4gICAgICBjYXNlICd0YWIzJzpcbiAgICAgICAgcmV0dXJuIDxUYWJUaHJlZSAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8VGFiT25lIC8+O1xuICAgIH1cbiAgfTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIikge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbc3RhdHVzXSk7XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICBpZiAoc3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5Ib21lIFBhZ2Ugd2l0aCBUYWJzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50YWJCdXR0b259ICR7YWN0aXZlVGFiID09PSAndGFiMScgPyBzdHlsZXMuYWN0aXZlVGFiIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigndGFiMScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRhYiAxXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGFiQnV0dG9ufSAke2FjdGl2ZVRhYiA9PT0gJ3RhYjInID8gc3R5bGVzLmFjdGl2ZVRhYiA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3RhYjInKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBUYWIgMlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhYkJ1dHRvbn0gJHthY3RpdmVUYWIgPT09ICd0YWIzJyA/IHN0eWxlcy5hY3RpdmVUYWIgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCd0YWIzJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVGFiIDNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFiQ29udGVudH0+XG4gICAgICAgICAge3JlbmRlclRhYkNvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPldlbGNvbWUgdG8gdGhlIEhvbWUgUGFnZSE8L2gxPlxuICAgICAgICAgIHsvKiA8cD5Zb3UgYXJlIGxvZ2dlZCBpbiBhcyB7c2Vzc2lvbi51c2VyLm5hbWV9PC9wPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICAvLyBUaGlzIGZhbGxiYWNrIGlzIGluIGNhc2UgdGhlIHVzZUVmZmVjdCBoYXMgbm90IHlldCByZWRpcmVjdGVkIHRoZSB1c2VyXG4gIHJldHVybiBudWxsO1xufVxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJDb29raWVzUHJvdmlkZXIiLCJ1c2VDb29raWVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJUYWJPbmUiLCJUYWJUd28iLCJUYWJUaHJlZSIsInN0eWxlcyIsIkhvbWVQYWdlIiwiY29va2llcyIsInNldENvb2tpZSIsInN0YXR1cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwicmVuZGVyVGFiQ29udGVudCIsInB1c2giLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJoZWFkaW5nIiwidGFicyIsImJ1dHRvbiIsInRhYkJ1dHRvbiIsIm9uQ2xpY2siLCJ0YWJDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});