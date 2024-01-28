(function() {
var __webpack_modules__ = {
"./src/foo.js": (function () {
console.log('this should be required');
}),
"./src/index.js": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
const r =  true && require;
console.log(r('./foo'));
if (true) console.log(__webpack_require__(/*! ./foo */"./src/foo.js"));
if (true) {
    const r = require;
    console.log(r('./foo'));
}
}),

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
var __webpack_exports__ = __webpack_require__("./src/index.js");
})()
