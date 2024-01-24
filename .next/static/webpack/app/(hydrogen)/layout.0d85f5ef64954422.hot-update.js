"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(hydrogen)/layout",{

/***/ "(app-pages-browser)/./src/config/routes.ts":
/*!******************************!*\
  !*** ./src/config/routes.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   routes: function() { return /* binding */ routes; }\n/* harmony export */ });\nconst routes = {\n    eCommerce: {\n        dashboard: \"/ecommerce\",\n        products: \"/ecommerce/products\",\n        createProduct: \"/ecommerce/products/create\",\n        productDetails: (slug)=>\"/ecommerce/products/\".concat(slug),\n        ediProduct: (slug)=>\"/ecommerce/products/\".concat(slug, \"/edit\"),\n        categories: \"/ecommerce/categories\",\n        createCategory: \"/ecommerce/categories/create\",\n        editCategory: (id)=>\"/ecommerce/categories/\".concat(id, \"/edit\"),\n        orders: \"/ecommerce/orders\",\n        createOrder: \"/ecommerce/orders/create\",\n        orderDetails: (id)=>\"/ecommerce/orders/\".concat(id),\n        editOrder: (id)=>\"/ecommerce/orders/\".concat(id, \"/edit\"),\n        reviews: \"/ecommerce/reviews\",\n        shop: \"/ecommerce/shop\",\n        cart: \"/ecommerce/cart\",\n        checkout: \"/ecommerce/checkout\",\n        trackingId: (id)=>\"/ecommerce/tracking/\".concat(id)\n    },\n    searchAndFilter: {\n        realEstate: \"/search/real-estate\",\n        nft: \"/search/nft\",\n        flight: \"/search/flight\"\n    },\n    support: {\n        dashboard: \"/support\",\n        inbox: \"/support/inbox\",\n        supportCategory: (category)=>\"/support/inbox/\".concat(category),\n        messageDetails: (id)=>\"/support/inbox/\".concat(id),\n        snippets: \"/support/snippets\",\n        createSnippet: \"/support/snippets/create\",\n        viewSnippet: (id)=>\"/support/snippets/\".concat(id),\n        editSnippet: (id)=>\"/support/snippets/\".concat(id, \"/edit\"),\n        templates: \"/support/templates\",\n        createTemplate: \"/support/templates/create\",\n        viewTemplate: (id)=>\"/support/templates/\".concat(id),\n        editTemplate: (id)=>\"/support/templates/\".concat(id, \"/edit\")\n    },\n    logistics: {\n        dashboard: \"/logistics\",\n        shipmentList: \"/logistics/shipments\",\n        customerProfile: \"/logistics/customer-profile\",\n        createShipment: \"/logistics/shipments/create\",\n        editShipment: (id)=>\"/logistics/shipments/\".concat(id, \"/edit\"),\n        shipmentDetails: (id)=>\"/logistics/shipments/\".concat(id),\n        tracking: (id)=>\"/logistics/tracking/\".concat(id)\n    },\n    executive: {\n        dashboard: \"/executive\"\n    },\n    analytics: \"/analytics\",\n    financial: {\n        dashboard: \"/financial\"\n    },\n    file: {\n        dashboard: \"/file\",\n        manager: \"/file-manager\",\n        upload: \"/file-manager/upload\",\n        create: \"/file-manager/create\"\n    },\n    pos: {\n        index: \"/point-of-sale\"\n    },\n    eventCalendar: \"/event-calendar\",\n    rolesPermissions: \"/roles-permissions\",\n    invoice: {\n        home: \"/invoice\",\n        create: \"/invoice/create\",\n        details: (id)=>\"/invoice/\".concat(id),\n        edit: (id)=>\"/invoice/\".concat(id, \"/edit\")\n    },\n    newcustomers: {\n        home: \"/newcustomers\",\n        create: \"/newcustomers/create\",\n        details: (id)=>\"/newcustomers/\".concat(id),\n        edit: (id)=>\"/newcustomers/\".concat(id, \"/edit\")\n    },\n    widgets: {\n        cards: \"/widgets/cards\",\n        icons: \"/widgets/icons\",\n        charts: \"/widgets/charts\",\n        maps: \"/widgets/maps\",\n        banners: \"/widgets/banners\"\n    },\n    tables: {\n        basic: \"/tables/basic\",\n        collapsible: \"/tables/collapsible\",\n        enhanced: \"/tables/enhanced\",\n        pagination: \"/tables/pagination\",\n        search: \"/tables/search\",\n        stickyHeader: \"/tables/sticky-header\"\n    },\n    multiStep: \"/multi-step\",\n    forms: {\n        profileSettings: \"/forms/profile-settings\",\n        notificationPreference: \"/forms/profile-settings/notification\",\n        personalInformation: \"/forms/profile-settings/profile\",\n        newsletter: \"/forms/newsletter\"\n    },\n    emailTemplates: \"/email-templates\",\n    profile: \"/profile\",\n    welcome: \"/welcome\",\n    comingSoon: \"/coming-soon\",\n    accessDenied: \"/access-denied\",\n    notFound: \"/not-found\",\n    maintenance: \"/maintenance\",\n    blank: \"/blank\",\n    auth: {\n        signUp1: \"/auth/sign-up-1\",\n        signUp2: \"/auth/sign-up-2\",\n        signUp3: \"/auth/sign-up-3\",\n        signUp4: \"/auth/sign-up-4\",\n        signUp5: \"/auth/sign-up-5\",\n        // sign in\n        signIn1: \"/auth/sign-in-1\",\n        signIn2: \"/auth/sign-in-2\",\n        signIn3: \"/auth/sign-in-3\",\n        signIn4: \"/auth/sign-in-4\",\n        signIn5: \"/auth/sign-in-5\",\n        // forgot password\n        forgotPassword1: \"/auth/forgot-password-1\",\n        forgotPassword2: \"/auth/forgot-password-2\",\n        forgotPassword3: \"/auth/forgot-password-3\",\n        forgotPassword4: \"/auth/forgot-password-4\",\n        forgotPassword5: \"/auth/forgot-password-5\",\n        // OTP\n        otp1: \"/auth/otp-1\",\n        otp2: \"/auth/otp-2\",\n        otp3: \"/auth/otp-3\",\n        otp4: \"/auth/otp-4\",\n        otp5: \"/auth/otp-5\"\n    },\n    signIn: \"/signin\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztRQUNUQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxTQUFTO1FBQ1QsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEJDLGlCQUFpQjtRQUNqQkMsaUJBQWlCO1FBQ2pCQyxpQkFBaUI7UUFDakJDLGlCQUFpQjtRQUNqQkMsaUJBQWlCO1FBQ2pCLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQUMsUUFBUTtBQUNWLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbmZpZy9yb3V0ZXMudHM/ZjNjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBlQ29tbWVyY2U6IHtcbiAgICBkYXNoYm9hcmQ6ICcvZWNvbW1lcmNlJyxcbiAgICBwcm9kdWN0czogJy9lY29tbWVyY2UvcHJvZHVjdHMnLFxuICAgIGNyZWF0ZVByb2R1Y3Q6ICcvZWNvbW1lcmNlL3Byb2R1Y3RzL2NyZWF0ZScsXG4gICAgcHJvZHVjdERldGFpbHM6IChzbHVnOiBzdHJpbmcpID0+IGAvZWNvbW1lcmNlL3Byb2R1Y3RzLyR7c2x1Z31gLFxuICAgIGVkaVByb2R1Y3Q6IChzbHVnOiBzdHJpbmcpID0+IGAvZWNvbW1lcmNlL3Byb2R1Y3RzLyR7c2x1Z30vZWRpdGAsXG4gICAgY2F0ZWdvcmllczogJy9lY29tbWVyY2UvY2F0ZWdvcmllcycsXG4gICAgY3JlYXRlQ2F0ZWdvcnk6ICcvZWNvbW1lcmNlL2NhdGVnb3JpZXMvY3JlYXRlJyxcbiAgICBlZGl0Q2F0ZWdvcnk6IChpZDogc3RyaW5nKSA9PiBgL2Vjb21tZXJjZS9jYXRlZ29yaWVzLyR7aWR9L2VkaXRgLFxuICAgIG9yZGVyczogJy9lY29tbWVyY2Uvb3JkZXJzJyxcbiAgICBjcmVhdGVPcmRlcjogJy9lY29tbWVyY2Uvb3JkZXJzL2NyZWF0ZScsXG4gICAgb3JkZXJEZXRhaWxzOiAoaWQ6IHN0cmluZykgPT4gYC9lY29tbWVyY2Uvb3JkZXJzLyR7aWR9YCxcbiAgICBlZGl0T3JkZXI6IChpZDogc3RyaW5nKSA9PiBgL2Vjb21tZXJjZS9vcmRlcnMvJHtpZH0vZWRpdGAsXG4gICAgcmV2aWV3czogJy9lY29tbWVyY2UvcmV2aWV3cycsXG4gICAgc2hvcDogJy9lY29tbWVyY2Uvc2hvcCcsXG4gICAgY2FydDogJy9lY29tbWVyY2UvY2FydCcsXG4gICAgY2hlY2tvdXQ6ICcvZWNvbW1lcmNlL2NoZWNrb3V0JyxcbiAgICB0cmFja2luZ0lkOiAoaWQ6IHN0cmluZykgPT4gYC9lY29tbWVyY2UvdHJhY2tpbmcvJHtpZH1gLFxuICB9LFxuICBzZWFyY2hBbmRGaWx0ZXI6IHtcbiAgICByZWFsRXN0YXRlOiAnL3NlYXJjaC9yZWFsLWVzdGF0ZScsXG4gICAgbmZ0OiAnL3NlYXJjaC9uZnQnLFxuICAgIGZsaWdodDogJy9zZWFyY2gvZmxpZ2h0JyxcbiAgfSxcbiAgc3VwcG9ydDoge1xuICAgIGRhc2hib2FyZDogJy9zdXBwb3J0JyxcbiAgICBpbmJveDogJy9zdXBwb3J0L2luYm94JyxcbiAgICBzdXBwb3J0Q2F0ZWdvcnk6IChjYXRlZ29yeTogc3RyaW5nKSA9PiBgL3N1cHBvcnQvaW5ib3gvJHtjYXRlZ29yeX1gLFxuICAgIG1lc3NhZ2VEZXRhaWxzOiAoaWQ6IHN0cmluZykgPT4gYC9zdXBwb3J0L2luYm94LyR7aWR9YCxcbiAgICBzbmlwcGV0czogJy9zdXBwb3J0L3NuaXBwZXRzJyxcbiAgICBjcmVhdGVTbmlwcGV0OiAnL3N1cHBvcnQvc25pcHBldHMvY3JlYXRlJyxcbiAgICB2aWV3U25pcHBldDogKGlkOiBzdHJpbmcpID0+IGAvc3VwcG9ydC9zbmlwcGV0cy8ke2lkfWAsXG4gICAgZWRpdFNuaXBwZXQ6IChpZDogc3RyaW5nKSA9PiBgL3N1cHBvcnQvc25pcHBldHMvJHtpZH0vZWRpdGAsXG4gICAgdGVtcGxhdGVzOiAnL3N1cHBvcnQvdGVtcGxhdGVzJyxcbiAgICBjcmVhdGVUZW1wbGF0ZTogJy9zdXBwb3J0L3RlbXBsYXRlcy9jcmVhdGUnLFxuICAgIHZpZXdUZW1wbGF0ZTogKGlkOiBzdHJpbmcpID0+IGAvc3VwcG9ydC90ZW1wbGF0ZXMvJHtpZH1gLFxuICAgIGVkaXRUZW1wbGF0ZTogKGlkOiBzdHJpbmcpID0+IGAvc3VwcG9ydC90ZW1wbGF0ZXMvJHtpZH0vZWRpdGAsXG4gIH0sXG4gIGxvZ2lzdGljczoge1xuICAgIGRhc2hib2FyZDogJy9sb2dpc3RpY3MnLFxuICAgIHNoaXBtZW50TGlzdDogJy9sb2dpc3RpY3Mvc2hpcG1lbnRzJyxcbiAgICBjdXN0b21lclByb2ZpbGU6ICcvbG9naXN0aWNzL2N1c3RvbWVyLXByb2ZpbGUnLFxuICAgIGNyZWF0ZVNoaXBtZW50OiAnL2xvZ2lzdGljcy9zaGlwbWVudHMvY3JlYXRlJyxcbiAgICBlZGl0U2hpcG1lbnQ6IChpZDogc3RyaW5nKSA9PiBgL2xvZ2lzdGljcy9zaGlwbWVudHMvJHtpZH0vZWRpdGAsXG4gICAgc2hpcG1lbnREZXRhaWxzOiAoaWQ6IHN0cmluZykgPT4gYC9sb2dpc3RpY3Mvc2hpcG1lbnRzLyR7aWR9YCxcbiAgICB0cmFja2luZzogKGlkOiBzdHJpbmcpID0+IGAvbG9naXN0aWNzL3RyYWNraW5nLyR7aWR9YCxcbiAgfSxcbiAgZXhlY3V0aXZlOiB7XG4gICAgZGFzaGJvYXJkOiAnL2V4ZWN1dGl2ZScsXG4gIH0sXG4gIGFuYWx5dGljczogJy9hbmFseXRpY3MnLFxuICBmaW5hbmNpYWw6IHtcbiAgICBkYXNoYm9hcmQ6ICcvZmluYW5jaWFsJyxcbiAgfSxcbiAgZmlsZToge1xuICAgIGRhc2hib2FyZDogJy9maWxlJyxcbiAgICBtYW5hZ2VyOiAnL2ZpbGUtbWFuYWdlcicsXG4gICAgdXBsb2FkOiAnL2ZpbGUtbWFuYWdlci91cGxvYWQnLFxuICAgIGNyZWF0ZTogJy9maWxlLW1hbmFnZXIvY3JlYXRlJyxcbiAgfSxcbiAgcG9zOiB7XG4gICAgaW5kZXg6ICcvcG9pbnQtb2Ytc2FsZScsXG4gIH0sXG4gIGV2ZW50Q2FsZW5kYXI6ICcvZXZlbnQtY2FsZW5kYXInLFxuICByb2xlc1Blcm1pc3Npb25zOiAnL3JvbGVzLXBlcm1pc3Npb25zJyxcbiAgaW52b2ljZToge1xuICAgIGhvbWU6ICcvaW52b2ljZScsXG4gICAgY3JlYXRlOiAnL2ludm9pY2UvY3JlYXRlJyxcbiAgICBkZXRhaWxzOiAoaWQ6IHN0cmluZykgPT4gYC9pbnZvaWNlLyR7aWR9YCxcbiAgICBlZGl0OiAoaWQ6IHN0cmluZykgPT4gYC9pbnZvaWNlLyR7aWR9L2VkaXRgLFxuICB9LFxuXG4gIG5ld2N1c3RvbWVyczoge1xuICAgIGhvbWU6ICcvbmV3Y3VzdG9tZXJzJyxcbiAgICBjcmVhdGU6ICcvbmV3Y3VzdG9tZXJzL2NyZWF0ZScsXG4gICAgZGV0YWlsczogKGlkOiBzdHJpbmcpID0+IGAvbmV3Y3VzdG9tZXJzLyR7aWR9YCxcbiAgICBlZGl0OiAoaWQ6IHN0cmluZykgPT4gYC9uZXdjdXN0b21lcnMvJHtpZH0vZWRpdGAsXG4gIH0sXG5cblxuICB3aWRnZXRzOiB7XG4gICAgY2FyZHM6ICcvd2lkZ2V0cy9jYXJkcycsXG4gICAgaWNvbnM6ICcvd2lkZ2V0cy9pY29ucycsXG4gICAgY2hhcnRzOiAnL3dpZGdldHMvY2hhcnRzJyxcbiAgICBtYXBzOiAnL3dpZGdldHMvbWFwcycsXG4gICAgYmFubmVyczogJy93aWRnZXRzL2Jhbm5lcnMnLFxuICB9LFxuICB0YWJsZXM6IHtcbiAgICBiYXNpYzogJy90YWJsZXMvYmFzaWMnLFxuICAgIGNvbGxhcHNpYmxlOiAnL3RhYmxlcy9jb2xsYXBzaWJsZScsXG4gICAgZW5oYW5jZWQ6ICcvdGFibGVzL2VuaGFuY2VkJyxcbiAgICBwYWdpbmF0aW9uOiAnL3RhYmxlcy9wYWdpbmF0aW9uJyxcbiAgICBzZWFyY2g6ICcvdGFibGVzL3NlYXJjaCcsXG4gICAgc3RpY2t5SGVhZGVyOiAnL3RhYmxlcy9zdGlja3ktaGVhZGVyJyxcbiAgfSxcbiAgbXVsdGlTdGVwOiAnL211bHRpLXN0ZXAnLFxuICBmb3Jtczoge1xuICAgIHByb2ZpbGVTZXR0aW5nczogJy9mb3Jtcy9wcm9maWxlLXNldHRpbmdzJyxcbiAgICBub3RpZmljYXRpb25QcmVmZXJlbmNlOiAnL2Zvcm1zL3Byb2ZpbGUtc2V0dGluZ3Mvbm90aWZpY2F0aW9uJyxcbiAgICBwZXJzb25hbEluZm9ybWF0aW9uOiAnL2Zvcm1zL3Byb2ZpbGUtc2V0dGluZ3MvcHJvZmlsZScsXG4gICAgbmV3c2xldHRlcjogJy9mb3Jtcy9uZXdzbGV0dGVyJyxcbiAgfSxcbiAgZW1haWxUZW1wbGF0ZXM6ICcvZW1haWwtdGVtcGxhdGVzJyxcbiAgcHJvZmlsZTogJy9wcm9maWxlJyxcbiAgd2VsY29tZTogJy93ZWxjb21lJyxcbiAgY29taW5nU29vbjogJy9jb21pbmctc29vbicsXG4gIGFjY2Vzc0RlbmllZDogJy9hY2Nlc3MtZGVuaWVkJyxcbiAgbm90Rm91bmQ6ICcvbm90LWZvdW5kJyxcbiAgbWFpbnRlbmFuY2U6ICcvbWFpbnRlbmFuY2UnLFxuICBibGFuazogJy9ibGFuaycsXG4gIGF1dGg6IHtcbiAgICBzaWduVXAxOiAnL2F1dGgvc2lnbi11cC0xJyxcbiAgICBzaWduVXAyOiAnL2F1dGgvc2lnbi11cC0yJyxcbiAgICBzaWduVXAzOiAnL2F1dGgvc2lnbi11cC0zJyxcbiAgICBzaWduVXA0OiAnL2F1dGgvc2lnbi11cC00JyxcbiAgICBzaWduVXA1OiAnL2F1dGgvc2lnbi11cC01JyxcbiAgICAvLyBzaWduIGluXG4gICAgc2lnbkluMTogJy9hdXRoL3NpZ24taW4tMScsXG4gICAgc2lnbkluMjogJy9hdXRoL3NpZ24taW4tMicsXG4gICAgc2lnbkluMzogJy9hdXRoL3NpZ24taW4tMycsXG4gICAgc2lnbkluNDogJy9hdXRoL3NpZ24taW4tNCcsXG4gICAgc2lnbkluNTogJy9hdXRoL3NpZ24taW4tNScsXG4gICAgLy8gZm9yZ290IHBhc3N3b3JkXG4gICAgZm9yZ290UGFzc3dvcmQxOiAnL2F1dGgvZm9yZ290LXBhc3N3b3JkLTEnLFxuICAgIGZvcmdvdFBhc3N3b3JkMjogJy9hdXRoL2ZvcmdvdC1wYXNzd29yZC0yJyxcbiAgICBmb3Jnb3RQYXNzd29yZDM6ICcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtMycsXG4gICAgZm9yZ290UGFzc3dvcmQ0OiAnL2F1dGgvZm9yZ290LXBhc3N3b3JkLTQnLFxuICAgIGZvcmdvdFBhc3N3b3JkNTogJy9hdXRoL2ZvcmdvdC1wYXNzd29yZC01JyxcbiAgICAvLyBPVFBcbiAgICBvdHAxOiAnL2F1dGgvb3RwLTEnLFxuICAgIG90cDI6ICcvYXV0aC9vdHAtMicsXG4gICAgb3RwMzogJy9hdXRoL290cC0zJyxcbiAgICBvdHA0OiAnL2F1dGgvb3RwLTQnLFxuICAgIG90cDU6ICcvYXV0aC9vdHAtNScsXG4gIH0sXG4gIHNpZ25JbjogJy9zaWduaW4nLFxufTtcbiJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJlQ29tbWVyY2UiLCJkYXNoYm9hcmQiLCJwcm9kdWN0cyIsImNyZWF0ZVByb2R1Y3QiLCJwcm9kdWN0RGV0YWlscyIsInNsdWciLCJlZGlQcm9kdWN0IiwiY2F0ZWdvcmllcyIsImNyZWF0ZUNhdGVnb3J5IiwiZWRpdENhdGVnb3J5IiwiaWQiLCJvcmRlcnMiLCJjcmVhdGVPcmRlciIsIm9yZGVyRGV0YWlscyIsImVkaXRPcmRlciIsInJldmlld3MiLCJzaG9wIiwiY2FydCIsImNoZWNrb3V0IiwidHJhY2tpbmdJZCIsInNlYXJjaEFuZEZpbHRlciIsInJlYWxFc3RhdGUiLCJuZnQiLCJmbGlnaHQiLCJzdXBwb3J0IiwiaW5ib3giLCJzdXBwb3J0Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsIm1lc3NhZ2VEZXRhaWxzIiwic25pcHBldHMiLCJjcmVhdGVTbmlwcGV0Iiwidmlld1NuaXBwZXQiLCJlZGl0U25pcHBldCIsInRlbXBsYXRlcyIsImNyZWF0ZVRlbXBsYXRlIiwidmlld1RlbXBsYXRlIiwiZWRpdFRlbXBsYXRlIiwibG9naXN0aWNzIiwic2hpcG1lbnRMaXN0IiwiY3VzdG9tZXJQcm9maWxlIiwiY3JlYXRlU2hpcG1lbnQiLCJlZGl0U2hpcG1lbnQiLCJzaGlwbWVudERldGFpbHMiLCJ0cmFja2luZyIsImV4ZWN1dGl2ZSIsImFuYWx5dGljcyIsImZpbmFuY2lhbCIsImZpbGUiLCJtYW5hZ2VyIiwidXBsb2FkIiwiY3JlYXRlIiwicG9zIiwiaW5kZXgiLCJldmVudENhbGVuZGFyIiwicm9sZXNQZXJtaXNzaW9ucyIsImludm9pY2UiLCJob21lIiwiZGV0YWlscyIsImVkaXQiLCJuZXdjdXN0b21lcnMiLCJ3aWRnZXRzIiwiY2FyZHMiLCJpY29ucyIsImNoYXJ0cyIsIm1hcHMiLCJiYW5uZXJzIiwidGFibGVzIiwiYmFzaWMiLCJjb2xsYXBzaWJsZSIsImVuaGFuY2VkIiwicGFnaW5hdGlvbiIsInNlYXJjaCIsInN0aWNreUhlYWRlciIsIm11bHRpU3RlcCIsImZvcm1zIiwicHJvZmlsZVNldHRpbmdzIiwibm90aWZpY2F0aW9uUHJlZmVyZW5jZSIsInBlcnNvbmFsSW5mb3JtYXRpb24iLCJuZXdzbGV0dGVyIiwiZW1haWxUZW1wbGF0ZXMiLCJwcm9maWxlIiwid2VsY29tZSIsImNvbWluZ1Nvb24iLCJhY2Nlc3NEZW5pZWQiLCJub3RGb3VuZCIsIm1haW50ZW5hbmNlIiwiYmxhbmsiLCJhdXRoIiwic2lnblVwMSIsInNpZ25VcDIiLCJzaWduVXAzIiwic2lnblVwNCIsInNpZ25VcDUiLCJzaWduSW4xIiwic2lnbkluMiIsInNpZ25JbjMiLCJzaWduSW40Iiwic2lnbkluNSIsImZvcmdvdFBhc3N3b3JkMSIsImZvcmdvdFBhc3N3b3JkMiIsImZvcmdvdFBhc3N3b3JkMyIsImZvcmdvdFBhc3N3b3JkNCIsImZvcmdvdFBhc3N3b3JkNSIsIm90cDEiLCJvdHAyIiwib3RwMyIsIm90cDQiLCJvdHA1Iiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/config/routes.ts\n"));

/***/ })

});