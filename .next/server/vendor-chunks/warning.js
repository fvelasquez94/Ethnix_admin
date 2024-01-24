"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/warning";
exports.ids = ["vendor-chunks/warning"];
exports.modules = {

/***/ "(ssr)/./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ \n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */ var __DEV__ = \"development\" !== \"production\";\nvar warning = function() {};\nif (__DEV__) {\n    var printWarning = function printWarning(format, args) {\n        var len = arguments.length;\n        args = new Array(len > 1 ? len - 1 : 0);\n        for(var key = 1; key < len; key++){\n            args[key - 1] = arguments[key];\n        }\n        var argIndex = 0;\n        var message = \"Warning: \" + format.replace(/%s/g, function() {\n            return args[argIndex++];\n        });\n        if (typeof console !== \"undefined\") {\n            console.error(message);\n        }\n        try {\n            // --- Welcome to debugging React ---\n            // This error was thrown as a convenience so that you can use this stack\n            // to find the callsite that caused this warning to fire.\n            throw new Error(message);\n        } catch (x) {}\n    };\n    warning = function(condition, format, args) {\n        var len = arguments.length;\n        args = new Array(len > 2 ? len - 2 : 0);\n        for(var key = 2; key < len; key++){\n            args[key - 2] = arguments[key];\n        }\n        if (format === undefined) {\n            throw new Error(\"`warning(condition, format, ...args)` requires a warning \" + \"message argument\");\n        }\n        if (!condition) {\n            printWarning.apply(null, [\n                format\n            ].concat(args));\n        }\n    };\n}\nmodule.exports = warning;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FybmluZy93YXJuaW5nLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQ7QUFFQTs7Ozs7Q0FLQyxHQUVELElBQUlBLFVBQVVDLGtCQUF5QjtBQUV2QyxJQUFJQyxVQUFVLFlBQVk7QUFFMUIsSUFBSUYsU0FBUztJQUNYLElBQUlHLGVBQWUsU0FBU0EsYUFBYUMsTUFBTSxFQUFFQyxJQUFJO1FBQ25ELElBQUlDLE1BQU1DLFVBQVVDLE1BQU07UUFDMUJILE9BQU8sSUFBSUksTUFBTUgsTUFBTSxJQUFJQSxNQUFNLElBQUk7UUFDckMsSUFBSyxJQUFJSSxNQUFNLEdBQUdBLE1BQU1KLEtBQUtJLE1BQU87WUFDbENMLElBQUksQ0FBQ0ssTUFBTSxFQUFFLEdBQUdILFNBQVMsQ0FBQ0csSUFBSTtRQUNoQztRQUNBLElBQUlDLFdBQVc7UUFDZixJQUFJQyxVQUFVLGNBQ1pSLE9BQU9TLE9BQU8sQ0FBQyxPQUFPO1lBQ3BCLE9BQU9SLElBQUksQ0FBQ00sV0FBVztRQUN6QjtRQUNGLElBQUksT0FBT0csWUFBWSxhQUFhO1lBQ2xDQSxRQUFRQyxLQUFLLENBQUNIO1FBQ2hCO1FBQ0EsSUFBSTtZQUNGLHFDQUFxQztZQUNyQyx3RUFBd0U7WUFDeEUseURBQXlEO1lBQ3pELE1BQU0sSUFBSUksTUFBTUo7UUFDbEIsRUFBRSxPQUFPSyxHQUFHLENBQUM7SUFDZjtJQUVBZixVQUFVLFNBQVNnQixTQUFTLEVBQUVkLE1BQU0sRUFBRUMsSUFBSTtRQUN4QyxJQUFJQyxNQUFNQyxVQUFVQyxNQUFNO1FBQzFCSCxPQUFPLElBQUlJLE1BQU1ILE1BQU0sSUFBSUEsTUFBTSxJQUFJO1FBQ3JDLElBQUssSUFBSUksTUFBTSxHQUFHQSxNQUFNSixLQUFLSSxNQUFPO1lBQ2xDTCxJQUFJLENBQUNLLE1BQU0sRUFBRSxHQUFHSCxTQUFTLENBQUNHLElBQUk7UUFDaEM7UUFDQSxJQUFJTixXQUFXZSxXQUFXO1lBQ3hCLE1BQU0sSUFBSUgsTUFDTiw4REFDQTtRQUVOO1FBQ0EsSUFBSSxDQUFDRSxXQUFXO1lBQ2RmLGFBQWFpQixLQUFLLENBQUMsTUFBTTtnQkFBQ2hCO2FBQU8sQ0FBQ2lCLE1BQU0sQ0FBQ2hCO1FBQzNDO0lBQ0Y7QUFDRjtBQUVBaUIsT0FBT0MsT0FBTyxHQUFHckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc29tb3JwaGljLy4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcz84MWZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDEgPyBsZW4gLSAxIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMTsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAxXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cblxuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KG51bGwsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iXSwibmFtZXMiOlsiX19ERVZfXyIsInByb2Nlc3MiLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiZm9ybWF0IiwiYXJncyIsImxlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkFycmF5Iiwia2V5IiwiYXJnSW5kZXgiLCJtZXNzYWdlIiwicmVwbGFjZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwieCIsImNvbmRpdGlvbiIsInVuZGVmaW5lZCIsImFwcGx5IiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/warning/warning.js\n");

/***/ })

};
;