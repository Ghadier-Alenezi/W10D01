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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"ul\": \"Home_ul__fkmwq\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"list\": \"Home_list__qBUOI\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"div\": \"Home_div___Q0U8\",\n\t\"cards\": \"Home_cards__mtQuA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdzEwZDAxLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwidWxcIjogXCJIb21lX3VsX19ma213cVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibGlzdFwiOiBcIkhvbWVfbGlzdF9fcUJVT0lcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiLFxuXHRcImRpdlwiOiBcIkhvbWVfZGl2X19fUTBVOFwiLFxuXHRcImNhcmRzXCI6IFwiSG9tZV9jYXJkc19fbXRRdUFcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getStaticPaths() {\n    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);\n    const posts = await res.json();\n    const paths = posts.map((post)=>({\n            params: {\n                id: post.id.toString()\n            }\n        })\n    );\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);\n    const post = await res.json();\n    return {\n        props: {\n            post\n        }\n    };\n}\nconst Post = ({ post  })=>{\n    //   console.log(post);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n            __source: {\n                fileName: \"/Users/ghadier/Desktop/W10D01/pages/posts/[id].js\",\n                lineNumber: 26,\n                columnNumber: 5\n            },\n            __self: undefined,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"/Users/ghadier/Desktop/W10D01/pages/posts/[id].js\",\n                        lineNumber: 27,\n                        columnNumber: 5\n                    },\n                    __self: undefined,\n                    children: \"Post\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ghadier/Desktop/W10D01/pages/posts/[id].js\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                            __source: {\n                                fileName: \"/Users/ghadier/Desktop/W10D01/pages/posts/[id].js\",\n                                lineNumber: 29,\n                                columnNumber: 9\n                            },\n                            __self: undefined,\n                            children: post.title\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ghadier/Desktop/W10D01/pages/posts/[id].js\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            },\n                            __self: undefined,\n                            children: post.body\n                        })\n                    ]\n                }, post.id)\n            ]\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBRzFDLGVBQWVDLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLDBDQUEwQztJQUNuRSxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0csSUFBSTtJQUM1QixLQUFLLENBQUNDLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxHQUFHLEVBQUVDLElBQUksSUFBTSxDQUFDO1lBQ2xDQyxNQUFNLEVBQUUsQ0FBQztnQkFBQ0MsRUFBRSxFQUFFRixJQUFJLENBQUNFLEVBQUUsQ0FBQ0MsUUFBUTtZQUFHLENBQUM7UUFDcEMsQ0FBQzs7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUFDTCxLQUFLO1FBQUVNLFFBQVEsRUFBRSxLQUFLO0lBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDLENBQUMsQ0FBQ0osTUFBTSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hELEtBQUssQ0FBQ1AsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxFQUNwQiwyQ0FBMkMsRUFBRU0sTUFBTSxDQUFDQyxFQUFFO0lBRXpELEtBQUssQ0FBQ0YsSUFBSSxHQUFHLEtBQUssQ0FBQ04sR0FBRyxDQUFDRyxJQUFJO0lBQzNCLE1BQU0sQ0FBQyxDQUFDO1FBQUNTLEtBQUssRUFBRSxDQUFDO1lBQUNOLElBQUk7UUFBQyxDQUFDO0lBQUMsQ0FBQztBQUM1QixDQUFDO0FBRUQsS0FBSyxDQUFDTyxJQUFJLElBQUksQ0FBQyxDQUFDUCxJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDMUIsRUFBdUI7SUFDdkIsTUFBTTt3RkFFSFEsQ0FBRztZQUFDQyxTQUFTLEVBQUVqQixxRUFBVzs7Ozs7Ozs7cUZBQzFCbUIsQ0FBRTs7Ozs7Ozs4QkFBQyxDQUFJOztzRkFDTEgsQ0FBRzs7Ozs7Ozs7NkZBQ0RJLENBQUU7Ozs7Ozs7c0NBQUVaLElBQUksQ0FBQ2EsS0FBSzs7NkZBQ2RDLENBQUM7Ozs7Ozs7c0NBQUVkLElBQUksQ0FBQ2UsSUFBSTs7O21CQUZMZixJQUFJLENBQUNFLEVBQUU7Ozs7QUFRdkIsQ0FBQztBQUVELGlFQUFlSyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93MTBkMDEvLi9wYWdlcy9wb3N0cy9baWRdLmpzPzc5NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c2ApO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xuICAgIHBhcmFtczogeyBpZDogcG9zdC5pZC50b1N0cmluZygpIH0sXG4gIH0pKTtcblxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtwYXJhbXMuaWR9YFxuICApO1xuICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdCB9IH07XG59XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhwb3N0KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgPGgxPlBvc3Q8L2gxPlxuICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwicG9zdHMiLCJqc29uIiwicGF0aHMiLCJtYXAiLCJwb3N0IiwicGFyYW1zIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsIlBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaDEiLCJoMiIsInRpdGxlIiwicCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();