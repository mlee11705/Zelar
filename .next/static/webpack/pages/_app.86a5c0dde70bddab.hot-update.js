"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/ModeToggle.jsx":
/*!***************************************!*\
  !*** ./src/components/ModeToggle.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModeToggle\": function() { return /* binding */ ModeToggle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SunIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        viewBox: \"0 0 20 20\",\n        fill: \"none\",\n        \"aria-hidden\": \"true\",\n        ...props,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z\"\n            }, void 0, false, {\n                fileName: \"/Users/mike/Projects/tailwindui-protocol/Zelar/src/components/ModeToggle.jsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                strokeLinecap: \"round\",\n                d: \"M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707\"\n            }, void 0, false, {\n                fileName: \"/Users/mike/Projects/tailwindui-protocol/Zelar/src/components/ModeToggle.jsx\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mike/Projects/tailwindui-protocol/Zelar/src/components/ModeToggle.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = SunIcon;\nfunction MoonIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        viewBox: \"0 0 20 20\",\n        fill: \"none\",\n        \"aria-hidden\": \"true\",\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z\"\n        }, void 0, false, {\n            fileName: \"/Users/mike/Projects/tailwindui-protocol/Zelar/src/components/ModeToggle.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mike/Projects/tailwindui-protocol/Zelar/src/components/ModeToggle.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c1 = MoonIcon;\nfunction ModeToggle() {\n    function disableTransitionsTemporarily() {\n        document.documentElement.classList.add(\"[&_*]:!transition-none\");\n        window.setTimeout(()=>{\n            document.documentElement.classList.remove(\"[&_*]:!transition-none\");\n        }, 0);\n    }\n    function toggleMode() {\n        disableTransitionsTemporarily();\n        let darkModeMediaQuery = window.matchMedia(\"(prefers-color-scheme: dark)\");\n        let isSystemDarkMode = darkModeMediaQuery.matches;\n        let isDarkMode = document.documentElement.classList.toggle(\"dark\");\n        if (isDarkMode === isSystemDarkMode) {\n            delete window.localStorage.isDarkMode;\n        } else {\n            window.localStorage.isDarkMode = isDarkMode;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: \"flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5\",\n        \"aria-label\": \"Toggle dark mode\",\n        onClick: toggleMode,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SunIcon, {\n                className: \"h-5 w-5 stroke-zinc-900 dark:hidden\"\n            }, void 0, false, {\n                fileName: \"/Users/mike/Projects/tailwindui-protocol/Zelar/src/components/ModeToggle.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MoonIcon, {\n                className: \"hidden h-5 w-5 stroke-white dark:block\"\n            }, void 0, false, {\n                fileName: \"/Users/mike/Projects/tailwindui-protocol/Zelar/src/components/ModeToggle.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mike/Projects/tailwindui-protocol/Zelar/src/components/ModeToggle.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c2 = ModeToggle;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SunIcon\");\n$RefreshReg$(_c1, \"MoonIcon\");\n$RefreshReg$(_c2, \"ModeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RlVG9nZ2xlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLFNBQVNBLFFBQVFDLEtBQUssRUFBRTtJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUMsU0FBUTtRQUFZQyxNQUFLO1FBQU9DLGVBQVk7UUFBUSxHQUFHSixLQUFLOzswQkFDL0QsOERBQUNLO2dCQUFLQyxHQUFFOzs7Ozs7MEJBQ1IsOERBQUNEO2dCQUNDRSxlQUFjO2dCQUNkRCxHQUFFOzs7Ozs7Ozs7Ozs7QUFJVjtLQVZTUDtBQVlULFNBQVNTLFNBQVNSLEtBQUssRUFBRTtJQUN2QixxQkFDRSw4REFBQ0M7UUFBSUMsU0FBUTtRQUFZQyxNQUFLO1FBQU9DLGVBQVk7UUFBUSxHQUFHSixLQUFLO2tCQUMvRCw0RUFBQ0s7WUFBS0MsR0FBRTs7Ozs7Ozs7Ozs7QUFHZDtNQU5TRTtBQVFGLFNBQVNDLGFBQWE7SUFDM0IsU0FBU0MsZ0NBQWdDO1FBQ3ZDQyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQ3ZDQyxPQUFPQyxVQUFVLENBQUMsSUFBTTtZQUN0QkwsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNJLE1BQU0sQ0FBQztRQUM1QyxHQUFHO0lBQ0w7SUFFQSxTQUFTQyxhQUFhO1FBQ3BCUjtRQUVBLElBQUlTLHFCQUFxQkosT0FBT0ssVUFBVSxDQUFDO1FBQzNDLElBQUlDLG1CQUFtQkYsbUJBQW1CRyxPQUFPO1FBQ2pELElBQUlDLGFBQWFaLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDVyxNQUFNLENBQUM7UUFFM0QsSUFBSUQsZUFBZUYsa0JBQWtCO1lBQ25DLE9BQU9OLE9BQU9VLFlBQVksQ0FBQ0YsVUFBVTtRQUN2QyxPQUFPO1lBQ0xSLE9BQU9VLFlBQVksQ0FBQ0YsVUFBVSxHQUFHQTtRQUNuQyxDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0c7UUFDQ0MsTUFBSztRQUNMQyxXQUFVO1FBQ1ZDLGNBQVc7UUFDWEMsU0FBU1o7OzBCQUVULDhEQUFDbkI7Z0JBQVE2QixXQUFVOzs7Ozs7MEJBQ25CLDhEQUFDcEI7Z0JBQVNvQixXQUFVOzs7Ozs7Ozs7Ozs7QUFHMUIsQ0FBQztNQWpDZW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vZGVUb2dnbGUuanN4PzgyZGYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU3VuSWNvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoIGQ9XCJNMTIuNSAxMGEyLjUgMi41IDAgMSAxLTUgMCAyLjUgMi41IDAgMCAxIDUgMFpcIiAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgZD1cIk0xMCA1LjV2LTFNMTMuMTgyIDYuODE4bC43MDctLjcwN00xNC41IDEwaDFNMTMuMTgyIDEzLjE4MmwuNzA3LjcwN00xMCAxNS41di0xTTYuMTEgMTMuODg5bC43MDgtLjcwN000LjUgMTBoMU02LjExIDYuMTExbC43MDguNzA3XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZnVuY3Rpb24gTW9vbkljb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHsuLi5wcm9wc30+XG4gICAgICA8cGF0aCBkPVwiTTE1LjIyNCAxMS43MjRhNS41IDUuNSAwIDAgMS02Ljk0OS02Ljk0OSA1LjUgNS41IDAgMSAwIDYuOTQ5IDYuOTQ5WlwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1vZGVUb2dnbGUoKSB7XG4gIGZ1bmN0aW9uIGRpc2FibGVUcmFuc2l0aW9uc1RlbXBvcmFyaWx5KCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdbJl8qXTohdHJhbnNpdGlvbi1ub25lJylcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnWyZfKl06IXRyYW5zaXRpb24tbm9uZScpXG4gICAgfSwgMClcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vZGUoKSB7XG4gICAgZGlzYWJsZVRyYW5zaXRpb25zVGVtcG9yYXJpbHkoKVxuXG4gICAgbGV0IGRhcmtNb2RlTWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcbiAgICBsZXQgaXNTeXN0ZW1EYXJrTW9kZSA9IGRhcmtNb2RlTWVkaWFRdWVyeS5tYXRjaGVzXG4gICAgbGV0IGlzRGFya01vZGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpXG5cbiAgICBpZiAoaXNEYXJrTW9kZSA9PT0gaXNTeXN0ZW1EYXJrTW9kZSkge1xuICAgICAgZGVsZXRlIHdpbmRvdy5sb2NhbFN0b3JhZ2UuaXNEYXJrTW9kZVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmlzRGFya01vZGUgPSBpc0RhcmtNb2RlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaC02IHctNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCB0cmFuc2l0aW9uIGhvdmVyOmJnLXppbmMtOTAwLzUgZGFyazpob3ZlcjpiZy13aGl0ZS81XCJcbiAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgZGFyayBtb2RlXCJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vZGV9XG4gICAgPlxuICAgICAgPFN1bkljb24gY2xhc3NOYW1lPVwiaC01IHctNSBzdHJva2UtemluYy05MDAgZGFyazpoaWRkZW5cIiAvPlxuICAgICAgPE1vb25JY29uIGNsYXNzTmFtZT1cImhpZGRlbiBoLTUgdy01IHN0cm9rZS13aGl0ZSBkYXJrOmJsb2NrXCIgLz5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlN1bkljb24iLCJwcm9wcyIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZCIsInN0cm9rZUxpbmVjYXAiLCJNb29uSWNvbiIsIk1vZGVUb2dnbGUiLCJkaXNhYmxlVHJhbnNpdGlvbnNUZW1wb3JhcmlseSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInJlbW92ZSIsInRvZ2dsZU1vZGUiLCJkYXJrTW9kZU1lZGlhUXVlcnkiLCJtYXRjaE1lZGlhIiwiaXNTeXN0ZW1EYXJrTW9kZSIsIm1hdGNoZXMiLCJpc0RhcmtNb2RlIiwidG9nZ2xlIiwibG9jYWxTdG9yYWdlIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ModeToggle.jsx\n"));

/***/ })

});