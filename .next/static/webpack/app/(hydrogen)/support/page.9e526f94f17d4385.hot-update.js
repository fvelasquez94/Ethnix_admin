"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(hydrogen)/support/page",{

/***/ "(app-pages-browser)/./src/app/shared/support/dashboard/problem-types.tsx":
/*!************************************************************!*\
  !*** ./src/app/shared/support/dashboard/problem-types.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProblemTypes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,ComposedChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,ComposedChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/ComposedChart.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,ComposedChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,ComposedChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,ComposedChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,ComposedChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/Bar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/datepicker */ \"(app-pages-browser)/./src/components/ui/datepicker.tsx\");\n/* harmony import */ var _components_cards_widget_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/cards/widget-card */ \"(app-pages-browser)/./src/components/cards/widget-card.tsx\");\n/* harmony import */ var _components_charts_custom_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/charts/custom-tooltip */ \"(app-pages-browser)/./src/components/charts/custom-tooltip.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst data = [\n    {\n        country: \"Unnasigned\",\n        amount: 9\n    },\n    {\n        country: \"Commercial\",\n        amount: 4\n    },\n    {\n        country: \"Operations\",\n        amount: 13\n    },\n    {\n        country: \"Finantials\",\n        amount: 1\n    }\n];\nfunction ProblemTypes(param) {\n    let { className } = param;\n    _s();\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const handleChange = (param)=>{\n        let [newStartDate, newEndDate] = param;\n        setStartDate(newStartDate);\n        setEndDate(newEndDate);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_widget_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        rounded: \"lg\",\n        className: className,\n        title: \"Customers by Department\",\n        descriptionClassName: \"text-gray-500 mt-1.5\",\n        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center gap-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Show data: \"\n                }, void 0, false, {\n                    fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, void 0),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_datepicker__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {\n                    dateFormat: \"yyyy\",\n                    placeholderText: \"Select Year\",\n                    maxDate: new Date(),\n                    inputProps: {\n                        variant: \"text\",\n                        inputClassName: \"p-0 pr-1.5 h-auto\",\n                        prefixClassName: \"hidden\"\n                    },\n                    popperPlacement: \"bottom-end\",\n                    className: \"w-32\",\n                    selected: startDate,\n                    onChange: handleChange,\n                    selectsRange: true,\n                    startDate: startDate,\n                    endDate: endDate,\n                    showYearPicker: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, void 0)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[350px] w-full lg:h-[300px] min-[1780px]:h-[22rem] 3xl:h-96\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__.ResponsiveContainer, {\n                width: \"100%\",\n                height: \"100%\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__.ComposedChart, {\n                    layout: \"vertical\",\n                    margin: {\n                        top: 20,\n                        bottom: -10,\n                        left: -2\n                    },\n                    barCategoryGap: 20,\n                    data: data,\n                    className: \"[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500  rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, {\n                            type: \"number\",\n                            axisLine: false,\n                            tickLine: false\n                        }, void 0, false, {\n                            fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__.YAxis, {\n                            dataKey: \"country\",\n                            type: \"category\",\n                            axisLine: false,\n                            tickLine: false\n                        }, void 0, false, {\n                            fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_9__.Tooltip, {\n                            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_charts_custom_tooltip__WEBPACK_IMPORTED_MODULE_4__.CustomTooltip, {}, void 0, false, {\n                                fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 31\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_ComposedChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_10__.Bar, {\n                            dataKey: \"amount\",\n                            barSize: 20,\n                            radius: 4,\n                            fill: \"#3872FA\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbooklimena/Desktop/Ethnix_admin/src/app/shared/support/dashboard/problem-types.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(ProblemTypes, \"CB3P3vcxhYWYYMMjpMOjzpMcBPY=\");\n_c = ProblemTypes;\nvar _c;\n$RefreshReg$(_c, \"ProblemTypes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2hhcmVkL3N1cHBvcnQvZGFzaGJvYXJkL3Byb2JsZW0tdHlwZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNrQjtBQUNlO0FBQ3VCO0FBQ0E7QUFDVztBQUVuRSxNQUFNVSxPQUFPO0lBQ1g7UUFDRUMsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRCxTQUFTO1FBQ1RDLFFBQVE7SUFDVjtJQUNBO1FBQ0VELFNBQVM7UUFDVEMsUUFBUTtJQUNWO0lBQ0E7UUFDRUQsU0FBUztRQUNUQyxRQUFRO0lBQ1Y7Q0FFRDtBQUVjLFNBQVNDLGFBQWEsS0FBcUM7UUFBckMsRUFBRUMsU0FBUyxFQUEwQixHQUFyQzs7SUFDbkMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFjLElBQUlXO0lBQzVELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBYyxJQUFJVztJQUV4RCxNQUFNRyxlQUFlO1lBQUMsQ0FBQ0MsY0FBY0MsV0FHcEM7UUFDQ04sYUFBYUs7UUFDYkYsV0FBV0c7SUFDYjtJQUVBLHFCQUNFLDhEQUFDZCxxRUFBVUE7UUFDVGUsU0FBUTtRQUNSVCxXQUFXQTtRQUNYVSxPQUFNO1FBQ05DLHNCQUFxQjtRQUNyQkMsMkJBQ0UsOERBQUNDO1lBQUliLFdBQVU7OzhCQUNiLDhEQUFDYzs4QkFBSzs7Ozs7OzhCQUNOLDhEQUFDckIsaUVBQVVBO29CQUNUc0IsWUFBVztvQkFDWEMsaUJBQWdCO29CQUNoQkMsU0FBUyxJQUFJZDtvQkFDYmUsWUFBWTt3QkFDVkMsU0FBUzt3QkFDVEMsZ0JBQWdCO3dCQUNoQkMsaUJBQWlCO29CQUNuQjtvQkFDQUMsaUJBQWdCO29CQUNoQnRCLFdBQVU7b0JBQ1Z1QixVQUFVdEI7b0JBQ1Z1QixVQUFVbEI7b0JBQ1ZtQixZQUFZO29CQUNaeEIsV0FBV0E7b0JBQ1hHLFNBQVNBO29CQUNUc0IsY0FBYzs7Ozs7Ozs7Ozs7O2tCQUtwQiw0RUFBQ2I7WUFBSWIsV0FBVTtzQkFDYiw0RUFBQ1QsMElBQW1CQTtnQkFBQ29DLE9BQU07Z0JBQU9DLFFBQU87MEJBQ3ZDLDRFQUFDdEMsb0lBQWFBO29CQUNadUMsUUFBTztvQkFDUEMsUUFBUTt3QkFBRUMsS0FBSzt3QkFBSUMsUUFBUSxDQUFDO3dCQUFJQyxNQUFNLENBQUM7b0JBQUU7b0JBQ3pDQyxnQkFBZ0I7b0JBQ2hCdEMsTUFBTUE7b0JBQ05JLFdBQVU7O3NDQUVWLDhEQUFDYiw0SEFBS0E7NEJBQUNnRCxNQUFLOzRCQUFTQyxVQUFVOzRCQUFPQyxVQUFVOzs7Ozs7c0NBQ2hELDhEQUFDakQsNEhBQUtBOzRCQUNKa0QsU0FBUTs0QkFDUkgsTUFBSzs0QkFDTEMsVUFBVTs0QkFDVkMsVUFBVTs7Ozs7O3NDQUVaLDhEQUFDaEQsOEhBQU9BOzRCQUFDa0QsdUJBQVMsOERBQUM1Qyw0RUFBYUE7Ozs7Ozs7Ozs7c0NBQ2hDLDhEQUFDVCwySEFBR0E7NEJBQUNvRCxTQUFROzRCQUFTRSxTQUFTOzRCQUFJQyxRQUFROzRCQUFHQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0Q7R0FqRXdCM0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaGFyZWQvc3VwcG9ydC9kYXNoYm9hcmQvcHJvYmxlbS10eXBlcy50c3g/MmNiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7XG4gIEJhcixcbiAgWEF4aXMsXG4gIFlBeGlzLFxuICBUb29sdGlwLFxuICBDb21wb3NlZENoYXJ0LFxuICBSZXNwb25zaXZlQ29udGFpbmVyLFxufSBmcm9tICdyZWNoYXJ0cyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvZGF0ZXBpY2tlcic7XG5pbXBvcnQgV2lkZ2V0Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvY2FyZHMvd2lkZ2V0LWNhcmQnO1xuaW1wb3J0IHsgQ3VzdG9tVG9vbHRpcCB9IGZyb20gJ0AvY29tcG9uZW50cy9jaGFydHMvY3VzdG9tLXRvb2x0aXAnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgY291bnRyeTogJ1VubmFzaWduZWQnLFxuICAgIGFtb3VudDogOSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6ICdDb21tZXJjaWFsJyxcbiAgICBhbW91bnQ6IDQsXG4gIH0sXG4gIHtcbiAgICBjb3VudHJ5OiAnT3BlcmF0aW9ucycsXG4gICAgYW1vdW50OiAxMyxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6ICdGaW5hbnRpYWxzJyxcbiAgICBhbW91bnQ6IDEsXG4gIH0sXG5cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2JsZW1UeXBlcyh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSB7XG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZTxEYXRlIHwgbnVsbD4obmV3IERhdGUoKSk7XG4gIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlPERhdGUgfCBudWxsPihuZXcgRGF0ZSgpKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoW25ld1N0YXJ0RGF0ZSwgbmV3RW5kRGF0ZV06IFtcbiAgICBEYXRlIHwgbnVsbCxcbiAgICBEYXRlIHwgbnVsbCxcbiAgXSkgPT4ge1xuICAgIHNldFN0YXJ0RGF0ZShuZXdTdGFydERhdGUpO1xuICAgIHNldEVuZERhdGUobmV3RW5kRGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8V2lkZ2V0Q2FyZFxuICAgICAgcm91bmRlZD1cImxnXCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgdGl0bGU9XCJDdXN0b21lcnMgYnkgRGVwYXJ0bWVudFwiXG4gICAgICBkZXNjcmlwdGlvbkNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbXQtMS41XCJcbiAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxzcGFuPlNob3cgZGF0YTogPC9zcGFuPlxuICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICBkYXRlRm9ybWF0PVwieXl5eVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJTZWxlY3QgWWVhclwiXG4gICAgICAgICAgICBtYXhEYXRlPXtuZXcgRGF0ZSgpfVxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICB2YXJpYW50OiAndGV4dCcsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lOiAncC0wIHByLTEuNSBoLWF1dG8nLFxuICAgICAgICAgICAgICBwcmVmaXhDbGFzc05hbWU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBvcHBlclBsYWNlbWVudD1cImJvdHRvbS1lbmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zMlwiXG4gICAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHNlbGVjdHNSYW5nZVxuICAgICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGV9XG4gICAgICAgICAgICBlbmREYXRlPXtlbmREYXRlfVxuICAgICAgICAgICAgc2hvd1llYXJQaWNrZXJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzM1MHB4XSB3LWZ1bGwgbGc6aC1bMzAwcHhdIG1pbi1bMTc4MHB4XTpoLVsyMnJlbV0gM3hsOmgtOTZcIj5cbiAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgIDxDb21wb3NlZENoYXJ0XG4gICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICBtYXJnaW49e3sgdG9wOiAyMCwgYm90dG9tOiAtMTAsIGxlZnQ6IC0yIH19XG4gICAgICAgICAgICBiYXJDYXRlZ29yeUdhcD17MjB9XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiWyZfLnJlY2hhcnRzLXRvb2x0aXAtY3Vyc29yXTpmaWxsLW9wYWNpdHktMjAgZGFyazpbJl8ucmVjaGFydHMtdG9vbHRpcC1jdXJzb3JdOmZpbGwtb3BhY2l0eS0xMCBbJl8ucmVjaGFydHMtY2FydGVzaWFuLWF4aXMtdGljay12YWx1ZV06ZmlsbC1ncmF5LTUwMCAgcnRsOlsmXy5yZWNoYXJ0cy1jYXJ0ZXNpYW4tYXhpcy55QXhpc106LXRyYW5zbGF0ZS14LTEyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WEF4aXMgdHlwZT1cIm51bWJlclwiIGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPFlBeGlzXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJjb3VudHJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cImNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgYXhpc0xpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgICB0aWNrTGluZT17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudD17PEN1c3RvbVRvb2x0aXAgLz59IC8+XG4gICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJhbW91bnRcIiBiYXJTaXplPXsyMH0gcmFkaXVzPXs0fSBmaWxsPVwiIzM4NzJGQVwiIC8+XG4gICAgICAgICAgPC9Db21wb3NlZENoYXJ0PlxuICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L1dpZGdldENhcmQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQmFyIiwiWEF4aXMiLCJZQXhpcyIsIlRvb2x0aXAiLCJDb21wb3NlZENoYXJ0IiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsInVzZVN0YXRlIiwiRGF0ZVBpY2tlciIsIldpZGdldENhcmQiLCJDdXN0b21Ub29sdGlwIiwiZGF0YSIsImNvdW50cnkiLCJhbW91bnQiLCJQcm9ibGVtVHlwZXMiLCJjbGFzc05hbWUiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJEYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJoYW5kbGVDaGFuZ2UiLCJuZXdTdGFydERhdGUiLCJuZXdFbmREYXRlIiwicm91bmRlZCIsInRpdGxlIiwiZGVzY3JpcHRpb25DbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImRpdiIsInNwYW4iLCJkYXRlRm9ybWF0IiwicGxhY2Vob2xkZXJUZXh0IiwibWF4RGF0ZSIsImlucHV0UHJvcHMiLCJ2YXJpYW50IiwiaW5wdXRDbGFzc05hbWUiLCJwcmVmaXhDbGFzc05hbWUiLCJwb3BwZXJQbGFjZW1lbnQiLCJzZWxlY3RlZCIsIm9uQ2hhbmdlIiwic2VsZWN0c1JhbmdlIiwic2hvd1llYXJQaWNrZXIiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJiYXJDYXRlZ29yeUdhcCIsInR5cGUiLCJheGlzTGluZSIsInRpY2tMaW5lIiwiZGF0YUtleSIsImNvbnRlbnQiLCJiYXJTaXplIiwicmFkaXVzIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/shared/support/dashboard/problem-types.tsx\n"));

/***/ })

});