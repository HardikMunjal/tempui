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

/***/ "(app-pages-browser)/./app/grid/object/page.js":
/*!*********************************!*\
  !*** ./app/grid/object/page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_MultiSelectFilter_MultiSelectFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/MultiSelectFilter/MultiSelectFilter */ \"(app-pages-browser)/./component/MultiSelectFilter/MultiSelectFilter.js\");\n/* harmony import */ var _component_DynamicTable_DynamicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/DynamicTable/DynamicTable */ \"(app-pages-browser)/./component/DynamicTable/DynamicTable.js\");\n/* harmony import */ var _object_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object.module.css */ \"(app-pages-browser)/./app/grid/object/object.module.css\");\n/* harmony import */ var _object_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_object_module_css__WEBPACK_IMPORTED_MODULE_4__);\n// pages/index.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [objectData, setObjectData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSave = (updatedRow)=>{\n        setData((prevData)=>prevData.map((row)=>row.Name === updatedRow.Name ? updatedRow : row));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // First side effect\n        fetch(\"http://localhost:5000/objects\").then((response)=>response.json()).then((data)=>setObjectData(data));\n    }, []); // Run only once on mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Simulating an API call\n        setTimeout(()=>{\n            setOptions([\n                \"Option 1\",\n                \"Option 2\",\n                \"Option 3\",\n                \"Option 4\"\n            ]);\n        }, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_MultiSelectFilter_MultiSelectFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                options: options,\n                selectedOptions: selectedOptions,\n                onChange: setSelectedOptions,\n                placeholder: \"Select options\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\grid\\\\object\\\\page.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_object_module_css__WEBPACK_IMPORTED_MODULE_4___default().childtable),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_DynamicTable_DynamicTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: objectData,\n                    onSave: handleSave\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\grid\\\\object\\\\page.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\grid\\\\object\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hardik.munjal\\\\walmart\\\\gridapp-ui\\\\app\\\\grid\\\\object\\\\page.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ehQfxlCv95BcvRm8IbJ2vWGsiFE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ncmlkL29iamVjdC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCOzs7QUFFa0M7QUFDb0M7QUFDZjtBQUMvQjtBQUUxQixTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsTUFBTSxDQUFDTyxpQkFBaUJDLG1CQUFtQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDLE1BQU1XLGFBQWEsQ0FBQ0M7UUFDbEJDLFFBQVEsQ0FBQ0MsV0FDUEEsU0FBU0MsR0FBRyxDQUFDLENBQUNDLE1BQ1pBLElBQUlDLElBQUksS0FBS0wsV0FBV0ssSUFBSSxHQUFHTCxhQUFhSTtJQUdsRDtJQUVBakIsZ0RBQVNBLENBQUM7UUFDUixvQkFBb0I7UUFDcEJtQixNQUFNLGlDQUNIQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUWhCLGNBQWNnQjtJQUNoQyxHQUFHLEVBQUUsR0FBRyx5QkFBeUI7SUFJakN2QixnREFBU0EsQ0FBQztRQUNSLHlCQUF5QjtRQUN6QndCLFdBQVc7WUFDVGIsV0FBVztnQkFBQztnQkFBWTtnQkFBWTtnQkFBWTthQUFXO1FBQzdELEdBQUc7SUFDTCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2M7OzBCQUNDLDhEQUFDdkIsc0ZBQWlCQTtnQkFDaEJRLFNBQVNBO2dCQUNURixpQkFBaUJBO2dCQUNqQmtCLFVBQVVqQjtnQkFDVmtCLGFBQVk7Ozs7OzswQkFFaEIsOERBQUNGO2dCQUFJRyxXQUFXeEIsc0VBQWlCOzBCQUMvQiw0RUFBQ0QsNEVBQVlBO29CQUFDb0IsTUFBTWpCO29CQUFZd0IsUUFBUWxCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QztHQTNDd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ncmlkL29iamVjdC9wYWdlLmpzPzFhNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcclxuXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTXVsdGlTZWxlY3RGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L011bHRpU2VsZWN0RmlsdGVyL011bHRpU2VsZWN0RmlsdGVyJztcclxuaW1wb3J0IER5bmFtaWNUYWJsZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvRHluYW1pY1RhYmxlL0R5bmFtaWNUYWJsZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9vYmplY3QubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtvYmplY3REYXRhLCBzZXRPYmplY3REYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9ucywgc2V0U2VsZWN0ZWRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAodXBkYXRlZFJvdykgPT4ge1xyXG4gICAgc2V0RGF0YSgocHJldkRhdGEpID0+XHJcbiAgICAgIHByZXZEYXRhLm1hcCgocm93KSA9PlxyXG4gICAgICAgIHJvdy5OYW1lID09PSB1cGRhdGVkUm93Lk5hbWUgPyB1cGRhdGVkUm93IDogcm93XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZpcnN0IHNpZGUgZWZmZWN0XHJcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL29iamVjdHMnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0T2JqZWN0RGF0YShkYXRhKSk7XHJcbiAgfSwgW10pOyAvLyBSdW4gb25seSBvbmNlIG9uIG1vdW50XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFNpbXVsYXRpbmcgYW4gQVBJIGNhbGxcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRPcHRpb25zKFsnT3B0aW9uIDEnLCAnT3B0aW9uIDInLCAnT3B0aW9uIDMnLCAnT3B0aW9uIDQnXSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TXVsdGlTZWxlY3RGaWx0ZXJcclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIHNlbGVjdGVkT3B0aW9ucz17c2VsZWN0ZWRPcHRpb25zfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRTZWxlY3RlZE9wdGlvbnN9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3Qgb3B0aW9uc1wiXHJcbiAgICAgIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoaWxkdGFibGV9PlxyXG4gICAgICA8RHluYW1pY1RhYmxlIGRhdGE9e29iamVjdERhdGF9IG9uU2F2ZT17aGFuZGxlU2F2ZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk11bHRpU2VsZWN0RmlsdGVyIiwiRHluYW1pY1RhYmxlIiwic3R5bGVzIiwiSG9tZSIsIm9iamVjdERhdGEiLCJzZXRPYmplY3REYXRhIiwic2VsZWN0ZWRPcHRpb25zIiwic2V0U2VsZWN0ZWRPcHRpb25zIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJoYW5kbGVTYXZlIiwidXBkYXRlZFJvdyIsInNldERhdGEiLCJwcmV2RGF0YSIsIm1hcCIsInJvdyIsIk5hbWUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0VGltZW91dCIsImRpdiIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJjaGlsZHRhYmxlIiwib25TYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/grid/object/page.js\n"));

/***/ })

});