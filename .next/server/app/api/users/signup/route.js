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
exports.id = "app/api/users/signup/route";
exports.ids = ["app/api/users/signup/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=D%3A%5Cwebproject%5CNextjs%5CNextAuth%5Cnextauth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cwebproject%5CNextjs%5CNextAuth%5Cnextauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=D%3A%5Cwebproject%5CNextjs%5CNextAuth%5Cnextauth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cwebproject%5CNextjs%5CNextAuth%5Cnextauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_webproject_Nextjs_NextAuth_nextauth_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/signup/route.ts */ \"(rsc)/./src/app/api/users/signup/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/signup/route\",\n        pathname: \"/api/users/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/signup/route\"\n    },\n    resolvedPagePath: \"D:\\\\webproject\\\\Nextjs\\\\NextAuth\\\\nextauth\\\\src\\\\app\\\\api\\\\users\\\\signup\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_webproject_Nextjs_NextAuth_nextauth_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/users/signup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZzaWdudXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDd2VicHJvamVjdCU1Q05leHRqcyU1Q05leHRBdXRoJTVDbmV4dGF1dGglNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUN3ZWJwcm9qZWN0JTVDTmV4dGpzJTVDTmV4dEF1dGglNUNuZXh0YXV0aCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNrQztBQUMvRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLz9hODE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXHdlYnByb2plY3RcXFxcTmV4dGpzXFxcXE5leHRBdXRoXFxcXG5leHRhdXRoXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHNpZ251cFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvc2lnbnVwXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFx3ZWJwcm9qZWN0XFxcXE5leHRqc1xcXFxOZXh0QXV0aFxcXFxuZXh0YXV0aFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxzaWdudXBcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=D%3A%5Cwebproject%5CNextjs%5CNextAuth%5Cnextauth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cwebproject%5CNextjs%5CNextAuth%5Cnextauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/signup/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/users/signup/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/dbConfig */ \"(rsc)/./src/dbConfig/dbConfig.ts\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_mailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/mailer */ \"(rsc)/./src/helpers/mailer.ts\");\n\n\n\n\n\n(0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\nasync function POST(req, res) {\n    try {\n        const reqBody = await req.json();\n        const { username, email, password } = reqBody;\n        const existinguser = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (existinguser) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"USer already exist\"\n            }, {\n                status: 400\n            });\n        }\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().genSalt(10);\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hash(password, salt);\n        const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username,\n            email,\n            password: hashedPassword\n        });\n        const savedUser = await newUser.save();\n        console.log(savedUser);\n        await (0,_helpers_mailer__WEBPACK_IMPORTED_MODULE_4__.sendEmail)({\n            email,\n            emailType: \"VERIFY\",\n            userId: savedUser._id\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"User registered successfully\",\n            success: true,\n            savedUser\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUNSO0FBQ2U7QUFDckI7QUFDYTtBQUM1Q0EsNkRBQVNBO0FBQ0YsZUFBZUssS0FBS0MsR0FBZSxFQUFDQyxHQUFnQjtJQUN2RCxJQUFHO1FBQ0QsTUFBTUMsVUFBUSxNQUFNRixJQUFJRyxJQUFJO1FBQzVCLE1BQU0sRUFBQ0MsUUFBUSxFQUFDQyxLQUFLLEVBQUNDLFFBQVEsRUFBQyxHQUFHSjtRQUVsQyxNQUFNSyxlQUFlLE1BQU1aLHlEQUFJQSxDQUFDYSxPQUFPLENBQUM7WUFBQ0g7UUFBSztRQUM3QyxJQUFHRSxjQUNGO1lBQ0ksT0FBT1gscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFBQ00sT0FBTTtZQUFvQixHQUFFO2dCQUFDQyxRQUFPO1lBQUc7UUFDckU7UUFDQSxNQUFNQyxPQUFPLE1BQU1kLHVEQUFnQixDQUFDO1FBQ3BDLE1BQU1nQixpQkFBaUIsTUFBTWhCLG9EQUFhLENBQUNTLFVBQVNLO1FBQ3BELE1BQU1JLFVBQVUsSUFBSXBCLHlEQUFJQSxDQUFDO1lBQ3JCUztZQUFTQztZQUFNQyxVQUFTTztRQUM1QjtRQUNBLE1BQU1HLFlBQVksTUFBTUQsUUFBUUUsSUFBSTtRQUNwQ0MsUUFBUUMsR0FBRyxDQUFDSDtRQUNYLE1BQU1sQiwwREFBU0EsQ0FBQztZQUFDTztZQUFNZSxXQUFVO1lBQVNDLFFBQU9MLFVBQVVNLEdBQUc7UUFBQTtRQUNoRSxPQUFPMUIscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFDb0IsU0FBUTtZQUErQkMsU0FBUTtZQUFLUjtRQUFTO0lBQzFGLEVBQ0EsT0FBTVMsS0FDTjtRQUNJLE9BQU83QixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUNNLE9BQU1nQixJQUFJRixPQUFPO1FBQUE7SUFDL0M7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLy4vc3JjL2FwcC9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlLnRzPzE2ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0REJ9IGZyb20gJ0AvZGJDb25maWcvZGJDb25maWcnXHJcbmltcG9ydCBVc2VyIGZyb20gJ0AvbW9kZWxzL3VzZXJNb2RlbCdcclxuaW1wb3J0IHtOZXh0UmVxdWVzdCxOZXh0UmVzcG9uc2V9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSAnYmNyeXB0anMnXHJcbmltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gJ0AvaGVscGVycy9tYWlsZXInXHJcbmNvbm5lY3REQigpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTpOZXh0UmVxdWVzdCxyZXM6TmV4dFJlc3BvbnNlKXtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVxQm9keT1hd2FpdCByZXEuanNvbigpXHJcbiAgICAgIGNvbnN0IHt1c2VybmFtZSxlbWFpbCxwYXNzd29yZH0gPSByZXFCb2R5XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBleGlzdGluZ3VzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe2VtYWlsfSlcclxuICAgICAgIGlmKGV4aXN0aW5ndXNlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7ZXJyb3I6XCJVU2VyIGFscmVhZHkgZXhpc3RcIn0se3N0YXR1czo0MDB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0anMuZ2VuU2FsdCgxMCkgXHJcbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHBhc3N3b3JkLHNhbHQpXHJcbiAgICAgICAgY29uc3QgbmV3VXNlcj0gIG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgdXNlcm5hbWUsZW1haWwscGFzc3dvcmQ6aGFzaGVkUGFzc3dvcmRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHNhdmVkVXNlciA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2coc2F2ZWRVc2VyKSBcclxuICAgICAgICAgYXdhaXQgc2VuZEVtYWlsKHtlbWFpbCxlbWFpbFR5cGU6XCJWRVJJRllcIix1c2VySWQ6c2F2ZWRVc2VyLl9pZH0pXHJcbiAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe21lc3NhZ2U6XCJVc2VyIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XCIsc3VjY2Vzczp0cnVlLHNhdmVkVXNlcn0pIFxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyOmFueSlcclxuICAgIHsgXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlciIsIk5leHRSZXNwb25zZSIsImJjcnlwdGpzIiwic2VuZEVtYWlsIiwiUE9TVCIsInJlcSIsInJlcyIsInJlcUJvZHkiLCJqc29uIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXhpc3Rpbmd1c2VyIiwiZmluZE9uZSIsImVycm9yIiwic3RhdHVzIiwic2FsdCIsImdlblNhbHQiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJuZXdVc2VyIiwic2F2ZWRVc2VyIiwic2F2ZSIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbFR5cGUiLCJ1c2VySWQiLCJfaWQiLCJtZXNzYWdlIiwic3VjY2VzcyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/signup/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbConfig.ts":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDB() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        const connect = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connect.on(\"connected\", ()=>{\n            console.log(\" Mongodb connected\");\n        });\n        connect.on(\"error\", (err)=>{\n            console.log(\"error connecting to db\" + err);\n            process.exit();\n        });\n    } catch (err) {\n        console.log(\"Connection to database refused\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJDb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ3hCLGVBQWVDO0lBRW5CLElBQUc7UUFDQ0QsdURBQWdCLENBQUVHLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztRQUN2QyxNQUFNSCxVQUFVRiw0REFBbUI7UUFDbkNFLFFBQVFLLEVBQUUsQ0FBQyxhQUFZO1lBQ25CQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7UUFDQVAsUUFBUUssRUFBRSxDQUFDLFNBQVEsQ0FBQ0c7WUFDaEJGLFFBQVFDLEdBQUcsQ0FBQywyQkFBeUJDO1lBQ3JDUCxRQUFRUSxJQUFJO1FBQ2hCO0lBQ0osRUFDQSxPQUFNRCxLQUNOO1FBQ0lGLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGF1dGgvLi9zcmMvZGJDb25maWcvZGJDb25maWcudHM/YzA3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIgaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJyBcclxuIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XHJcbiAgIFxyXG4gICAgdHJ5e1xyXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoIHByb2Nlc3MuZW52Lk1PTkdPX1VSSSEpICBcclxuICAgICAgICBjb25zdCBjb25uZWN0ID0gbW9uZ29vc2UuY29ubmVjdGlvbiBcclxuICAgICAgICBjb25uZWN0Lm9uKCdjb25uZWN0ZWQnLCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIE1vbmdvZGIgY29ubmVjdGVkXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25uZWN0Lm9uKCdlcnJvcicsKGVycik9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjb25uZWN0aW5nIHRvIGRiXCIrZXJyKVxyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIHRvIGRhdGFiYXNlIHJlZnVzZWRcIilcclxuICAgIH1cclxuIH1cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbConfig.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/mailer.ts":
/*!*******************************!*\
  !*** ./src/helpers/mailer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\n\nconst sendEmail = async ({ email, emailType, userId })=>{\n    try {\n        //TODO : configure mail for usage\n        const hashedToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(userId.toString(), 12);\n        if (emailType === \"VERIFY\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(userId, {\n                verifyToken: hashedToken,\n                verifyTokenExpiry: Date.now() + 3600000\n            });\n        } else if (emailType === \"RESET\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(userId, {\n                forgotPasswordToken: hashedToken,\n                forrgotPasswordTokenExpiry: Date.now() + 3600000\n            });\n        }\n        var transport = nodemailer__WEBPACK_IMPORTED_MODULE_2__.createTransport({\n            host: \"sandbox.smtp.mailtrap.io\",\n            port: 2525,\n            auth: {\n                user: process.env.transport_user_id,\n                pass: process.env.transport_pass_id\n            }\n        });\n        const mailOption = {\n            from: \"<matin@matin.ai>\",\n            to: email,\n            subject: emailType === \"VERIFY\" ? \"Verify your email\" : \"Reset your password\",\n            html: `<p>Click <a href=\"${process.env.DOMAIN}/verifyemail?token=${hashedToken}\">here</a> to ${emailType === \"VERIFY\" ? \"verify your email\" : \"reset your password\"}\r\n        or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}\r\n        </p> `\n        };\n        const mailResponse = await transport.sendMail(mailOption);\n        return mailResponse;\n    } catch (err) {\n        throw new Error(err.message);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9tYWlsZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFDTjtBQUNJO0FBQzVCLE1BQU1HLFlBQVksT0FBTSxFQUFDQyxLQUFLLEVBQUNDLFNBQVMsRUFBQ0MsTUFBTSxFQUFLO0lBQ3pELElBQUc7UUFDRCxpQ0FBaUM7UUFDbEMsTUFBTUMsY0FBZSxNQUFNTixvREFBYSxDQUFDSyxPQUFPRyxRQUFRLElBQUc7UUFFMUQsSUFBR0osY0FBWSxVQUNiO1lBQ0UsTUFBTUwseURBQUlBLENBQUNVLGlCQUFpQixDQUFDSixRQUFPO2dCQUFDSyxhQUFZSjtnQkFBWUssbUJBQWtCQyxLQUFLQyxHQUFHLEtBQUc7WUFBTztRQUNuRyxPQUNLLElBQUdULGNBQVksU0FDcEI7WUFDRSxNQUFNTCx5REFBSUEsQ0FBQ1UsaUJBQWlCLENBQUNKLFFBQU87Z0JBQUNTLHFCQUFvQlI7Z0JBQVlTLDRCQUEyQkgsS0FBS0MsR0FBRyxLQUFHO1lBQU87UUFFcEg7UUFDQSxJQUFJRyxZQUFZZix1REFBMEIsQ0FBQztZQUN6Q2lCLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNO2dCQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtnQkFDbkNDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csaUJBQWlCO1lBQ3JDO1FBQ0Y7UUFDQSxNQUFNQyxhQUFhO1lBQ2pCQyxNQUFNO1lBQ05DLElBQUkxQjtZQUNKMkIsU0FBUzFCLGNBQVksV0FBUyxzQkFBb0I7WUFDbEQyQixNQUFNLENBQUMsa0JBQWtCLEVBQUVULFFBQVFDLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLG1CQUFtQixFQUFFMUIsWUFBWSxjQUFjLEVBQUVGLGNBQWMsV0FBVyxzQkFBc0Isc0JBQXNCOytEQUM3RyxFQUFFa0IsUUFBUUMsR0FBRyxDQUFDUyxNQUFNLENBQUMsbUJBQW1CLEVBQUUxQixZQUFZO2FBQ3hHLENBQUM7UUFDUjtRQUNBLE1BQU0yQixlQUFlLE1BQU1qQixVQUFVa0IsUUFBUSxDQUFDUDtRQUM5QyxPQUFPTTtJQUVULEVBQ0EsT0FBTUUsS0FDTjtRQUNJLE1BQU0sSUFBSUMsTUFBTUQsSUFBSUUsT0FBTztJQUMvQjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YXV0aC8uL3NyYy9oZWxwZXJzL21haWxlci50cz82YzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJ0AvbW9kZWxzL3VzZXJNb2RlbCdcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gJ2JjcnlwdGpzJ1xyXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJ1xyXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMoe2VtYWlsLGVtYWlsVHlwZSx1c2VySWR9OmFueSk9PntcclxuICB0cnl7XHJcbiAgICAvL1RPRE8gOiBjb25maWd1cmUgbWFpbCBmb3IgdXNhZ2VcclxuICAgY29uc3QgaGFzaGVkVG9rZW4gPSAgYXdhaXQgYmNyeXB0anMuaGFzaCh1c2VySWQudG9TdHJpbmcoKSwxMilcclxuXHJcbiAgICBpZihlbWFpbFR5cGU9PT1cIlZFUklGWVwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZSh1c2VySWQse3ZlcmlmeVRva2VuOmhhc2hlZFRva2VuLHZlcmlmeVRva2VuRXhwaXJ5OkRhdGUubm93KCkrMzYwMDAwMH0pIFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoZW1haWxUeXBlPT09XCJSRVNFVFwiKVxyXG4gICAgICB7IFxyXG4gICAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodXNlcklkLHtmb3Jnb3RQYXNzd29yZFRva2VuOmhhc2hlZFRva2VuLGZvcnJnb3RQYXNzd29yZFRva2VuRXhwaXJ5OkRhdGUubm93KCkrMzYwMDAwMH0pIFxyXG5cclxuICAgICAgfVxyXG4gICAgICB2YXIgdHJhbnNwb3J0ID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICAgIGhvc3Q6IFwic2FuZGJveC5zbXRwLm1haWx0cmFwLmlvXCIsXHJcbiAgICAgICAgcG9ydDogMjUyNSxcclxuICAgICAgICBhdXRoOiB7XHJcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi50cmFuc3BvcnRfdXNlcl9pZCxcclxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LnRyYW5zcG9ydF9wYXNzX2lkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgbWFpbE9wdGlvbiA9IHtcclxuICAgICAgICBmcm9tOiAnPG1hdGluQG1hdGluLmFpPicsIC8vIHNlbmRlciBhZGRyZXNzXHJcbiAgICAgICAgdG86IGVtYWlsLCAvLyBsaXN0IG9mIHJlY2VpdmVyc1xyXG4gICAgICAgIHN1YmplY3Q6IGVtYWlsVHlwZT09PVwiVkVSSUZZXCI/XCJWZXJpZnkgeW91ciBlbWFpbFwiOlwiUmVzZXQgeW91ciBwYXNzd29yZFwiLFxyXG4gICAgICAgIGh0bWw6IGA8cD5DbGljayA8YSBocmVmPVwiJHtwcm9jZXNzLmVudi5ET01BSU59L3ZlcmlmeWVtYWlsP3Rva2VuPSR7aGFzaGVkVG9rZW59XCI+aGVyZTwvYT4gdG8gJHtlbWFpbFR5cGUgPT09IFwiVkVSSUZZXCIgPyBcInZlcmlmeSB5b3VyIGVtYWlsXCIgOiBcInJlc2V0IHlvdXIgcGFzc3dvcmRcIn1cclxuICAgICAgICBvciBjb3B5IGFuZCBwYXN0ZSB0aGUgbGluayBiZWxvdyBpbiB5b3VyIGJyb3dzZXIuIDxicj4gJHtwcm9jZXNzLmVudi5ET01BSU59L3ZlcmlmeWVtYWlsP3Rva2VuPSR7aGFzaGVkVG9rZW59XHJcbiAgICAgICAgPC9wPiBgLCBcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtYWlsUmVzcG9uc2UgPSBhd2FpdCB0cmFuc3BvcnQuc2VuZE1haWwobWFpbE9wdGlvbilcclxuICAgICAgcmV0dXJuIG1haWxSZXNwb25zZVxyXG5cclxuICAgIH1cclxuICAgIGNhdGNoKGVycjphbnkpXHJcbiAgICB7IFxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIubWVzc2FnZSkgXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiVXNlciIsImJjcnlwdGpzIiwibm9kZW1haWxlciIsInNlbmRFbWFpbCIsImVtYWlsIiwiZW1haWxUeXBlIiwidXNlcklkIiwiaGFzaGVkVG9rZW4iLCJoYXNoIiwidG9TdHJpbmciLCJmaW5kQnlJZEFuZFVwZGF0ZSIsInZlcmlmeVRva2VuIiwidmVyaWZ5VG9rZW5FeHBpcnkiLCJEYXRlIiwibm93IiwiZm9yZ290UGFzc3dvcmRUb2tlbiIsImZvcnJnb3RQYXNzd29yZFRva2VuRXhwaXJ5IiwidHJhbnNwb3J0IiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJ0cmFuc3BvcnRfdXNlcl9pZCIsInBhc3MiLCJ0cmFuc3BvcnRfcGFzc19pZCIsIm1haWxPcHRpb24iLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsIkRPTUFJTiIsIm1haWxSZXNwb25zZSIsInNlbmRNYWlsIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/mailer.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a username\"\n        ],\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a email\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide password\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFDL0IsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ25DRyxVQUFTO1FBQ0xDLE1BQUtDO1FBQ0xDLFVBQVM7WUFBQztZQUFLO1NBQTRCO1FBQzNDQyxRQUFPO0lBQ1g7SUFFQUMsT0FBTTtRQUNGSixNQUFLQztRQUNMQyxVQUFTO1lBQUM7WUFBSztTQUF5QjtRQUN4Q0MsUUFBTztJQUNYO0lBQ0FFLFVBQVM7UUFDTEwsTUFBS0M7UUFDTEMsVUFBUztZQUFDO1lBQUs7U0FBMEI7SUFFN0M7SUFDQUksWUFBVztRQUNQTixNQUFLTztRQUNMQyxTQUFRO0lBQ1o7SUFDQUMsU0FBUTtRQUNKVCxNQUFLTztRQUNMQyxTQUFRO0lBQ1o7SUFDQUUscUJBQW9CVDtJQUNwQlUsMkJBQTBCQztJQUMxQkMsYUFBWVo7SUFDWmEsbUJBQWtCRjtBQUN0QjtBQUNBLE1BQU1HLE9BQU1uQix3REFBZSxDQUFDcUIsS0FBSyxJQUFHckIscURBQWMsQ0FBQyxRQUFPQztBQUMxRCxpRUFBZWtCLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YXV0aC8uL3NyYy9tb2RlbHMvdXNlck1vZGVsLmpzP2M0ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiIFxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB1c2VybmFtZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6W3RydWUsXCJQbGVhc2UgcHJvdmlkZSBhIHVzZXJuYW1lXCJdLCBcclxuICAgICAgICB1bmlxdWU6dHJ1ZSBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGVtYWlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDpbdHJ1ZSxcIlBsZWFzZSBwcm92aWRlIGEgZW1haWxcIl0sIFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlIFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDpbdHJ1ZSxcIlBsZWFzZSBwcm92aWRlIHBhc3N3b3JkXCJdLCBcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgaXNWZXJpZmllZDp7XHJcbiAgICAgICAgdHlwZTpCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6ZmFsc2UgICAgICAgXHJcbiAgICB9LFxyXG4gICAgaXNBZG1pbjp7XHJcbiAgICAgICAgdHlwZTpCb29sZWFuLCBcclxuICAgICAgICBkZWZhdWx0OmZhbHNlIFxyXG4gICAgfSxcclxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW46U3RyaW5nICxcclxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnk6RGF0ZSxcclxuICAgIHZlcmlmeVRva2VuOlN0cmluZyAsIFxyXG4gICAgdmVyaWZ5VG9rZW5FeHBpcnk6RGF0ZVxyXG59KVxyXG5jb25zdCBVc2VyID1tb25nb29zZS5tb2RlbHMudXNlcnN8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIix1c2VyU2NoZW1hKSBcclxuZXhwb3J0IGRlZmF1bHQgVXNlciAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNWZXJpZmllZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaXNBZG1pbiIsImZvcmdvdFBhc3N3b3JkVG9rZW4iLCJmb3Jnb3RQYXNzd29yZFRva2VuRXhwaXJ5IiwiRGF0ZSIsInZlcmlmeVRva2VuIiwidmVyaWZ5VG9rZW5FeHBpcnkiLCJVc2VyIiwibW9kZWxzIiwidXNlcnMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/nodemailer","vendor-chunks/next","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=D%3A%5Cwebproject%5CNextjs%5CNextAuth%5Cnextauth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cwebproject%5CNextjs%5CNextAuth%5Cnextauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();