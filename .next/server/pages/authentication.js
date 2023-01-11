"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/authentication";
exports.ids = ["pages/authentication"];
exports.modules = {

/***/ "./src/pages/authentication.mdx":
/*!**************************************!*\
  !*** ./src/pages/authentication.mdx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__]);\n_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/*@jsxRuntime automatic @jsxImportSource react*/ \n\nconst title = \"Cloud Native Consulting\";\nconst description = \"In this guide, we’ll look at how authentication works. Protocol offers two ways to authenticate your API requests: Basic authentication and OAuth2 with a token.\";\nconst sections = [\n    {\n        title: \"Services\",\n        id: \"services\",\n        ...undefined\n    },\n    {\n        title: \"Solutions\",\n        id: \"solutions\",\n        ...undefined\n    }\n];\nfunction _createMdxContent(props) {\n    const _components = Object.assign({\n        h1: \"h1\",\n        p: \"p\",\n        h2: \"h2\",\n        pre: \"pre\",\n        code: \"code\",\n        a: \"a\"\n    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components), { Button  } = _components;\n    if (!Button) _missingMdxReference(\"Button\", true, \"25:3-30:5\");\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {\n                children: \"Cloud Native Consulting\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                children: \"You'll need to authenticate your requests to access any of the endpoints in the Protocol API. In this guide, we'll look at how authentication works. Protocol offers two ways to authenticate your API requests: Basic authentication and OAuth2 with a token — OAuth2 is the recommended way.\",\n                ...{\n                    className: \"lead\"\n                }\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {\n                id: \"services\",\n                children: \"Services\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                children: \"With basic authentication, you use your username and password to authenticate your HTTP requests. Unless you have a very good reason, you probably shouldn't use basic auth. Here's how to authenticate using cURL:\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {\n                language: \"bash\",\n                code: \"curl https://api.protocol.chat/v1/conversations \\\\\\n  -u username:password\\n\",\n                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {\n                    className: \"language-bash\",\n                    children: '<span><span style=\"color: var(--shiki-color-text)\">curl https://api.protocol.chat/v1/conversations \\\\</span></span>\\n<span><span style=\"color: var(--shiki-color-text)\">  -u username:password</span></span>\\n<span></span>'\n                }),\n                ...{\n                    title: \"Example request with basic auth\"\n                }\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                children: \"Please don't commit your Protocol password to GitHub!\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {\n                id: \"solutions\",\n                children: \"Solutions\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {\n                children: [\n                    \"If you use one of our official SDKs, you won't have to worry about any of the above — fetch your access token from the \",\n                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {\n                        href: \"#\",\n                        children: \"Protocol dashboard\"\n                    }),\n                    \" under API settings, and the client library will take care of the rest. All the client libraries use OAuth2 behind the scenes.\"\n                ]\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"not-prose\",\n                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, {\n                    href: \"/sdks\",\n                    variant: \"text\",\n                    arrow: \"right\",\n                    children: \"Check out our list of first-party SDKs\"\n                })\n            })\n        ]\n    });\n}\nfunction MDXContent(props = {}) {\n    const { wrapper: MDXLayout  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);\n    return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, Object.assign({}, props, {\n        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, props)\n    })) : _createMdxContent(props);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);\nfunction _missingMdxReference(id, component, place) {\n    throw new Error(\"Expected \" + (component ? \"component\" : \"object\") + \" `\" + id + \"` to be defined: you likely forgot to import, pass, or provide it.\" + (place ? \"\\nIt’s referenced in your code at `\" + place + \"` in `/Users/mike/Projects/tailwindui-protocol/Zelar/src/pages/authentication.mdx`\" : \"\"));\n}\nconst getStaticProps = ()=>({\n        props: JSON.parse(JSON.stringify({\n            _provideComponents: _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents,\n            description,\n            sections,\n            title\n        }))\n    });\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aGVudGljYXRpb24ubWR4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O01BQWFBLGNBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVBOzs7OzBCQUVGOzs7Ozs7OzswQkFFRzs7OzswQkFFSDs7Ozs7Ozs7Ozs7Ozs7OzswQkFPQTs7Ozs7MEJBR0c7Ozs7O29CQUVIO29CQUFBQyxzREFBQUEsQ0FBQUMsWUFBQUMsQ0FBQTs7a0NBQXdIOztvQkFBc0I7aUJBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZHVpLXByb3RvY29sLy4vc3JjL3BhZ2VzL2F1dGhlbnRpY2F0aW9uLm1keD9hYTFjIl0sIm5hbWVzIjpbImRlc2NyaXB0aW9uIiwiX2pzeCIsIl9jb21wb25lbnRzIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/authentication.mdx\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/authentication.mdx"));
module.exports = __webpack_exports__;

})();