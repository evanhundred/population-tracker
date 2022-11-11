/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_title_splash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/title_splash */ \"./src/scripts/title_splash.js\");\n/* harmony import */ var _scripts_main_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main-content */ \"./src/scripts/main-content.js\");\n// import Fetcher from \"./scripts/fetcher\";\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const title = document.getElementById(\"title\");\n  new _scripts_title_splash__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title);\n  const main = document.getElementById(\"main\");\n  new _scripts_main_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"](main);\n});\n\n// console.log(\"Hello World\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDaUQ7QUFDQTtBQUVqREUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsT0FBTyxDQUFDO0VBQzlDLElBQUlMLDZEQUFXLENBQUNJLEtBQUssQ0FBQztFQUN0QixNQUFNRSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFJSiw2REFBVyxDQUFDSyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFDOztBQUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9wdWxhdGlvbi10cmFja2VyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEZldGNoZXIgZnJvbSBcIi4vc2NyaXB0cy9mZXRjaGVyXCI7XG5pbXBvcnQgVGl0bGVTcGxhc2ggZnJvbSBcIi4vc2NyaXB0cy90aXRsZV9zcGxhc2hcIjtcbmltcG9ydCBNYWluQ29udGVudCBmcm9tIFwiLi9zY3JpcHRzL21haW4tY29udGVudFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgbmV3IFRpdGxlU3BsYXNoKHRpdGxlKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbmV3IE1haW5Db250ZW50KG1haW4pO1xufSk7XG5cbi8vIGNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGRcIik7XG4iXSwibmFtZXMiOlsiVGl0bGVTcGxhc2giLCJNYWluQ29udGVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRpdGxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/main-content.js":
/*!*************************************!*\
  !*** ./src/scripts/main-content.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MainContent {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h2>Fetch Data</h2>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    let dataEl = document.createElement(\"dataEl\");\n    const dataBlock = __webpack_require__(/*! ../../../../assets/sample_state_census_data.json */ \"./assets/sample_state_census_data.json\");\n    dataEl.innerText = dataBlock;\n    this.ele.appendChild(dataEl);\n    // this.ele.children[0].innerText = \"...pOpUlAtIoN tRaCkEr...\";\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluLWNvbnRlbnQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVcsQ0FBQztFQUNoQkMsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxTQUFTLEdBQUcscUJBQXFCO0lBRTFDLElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNqRTtFQUVBRCxXQUFXLEdBQUc7SUFDWixJQUFJRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3QyxNQUFNQyxTQUFTLEdBQUdDLG1CQUFPLENBQUMsZ0dBQXVDLENBQUM7SUFDbEVKLE1BQU0sQ0FBQ0ssU0FBUyxHQUFHRixTQUFTO0lBQzVCLElBQUksQ0FBQ1IsR0FBRyxDQUFDVyxXQUFXLENBQUNOLE1BQU0sQ0FBQztJQUM1QjtFQUNGO0FBQ0Y7O0FBRUEsK0RBQWVQLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3B1bGF0aW9uLXRyYWNrZXIvLi9zcmMvc2NyaXB0cy9tYWluLWNvbnRlbnQuanM/MzZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNYWluQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgyPkZldGNoIERhdGE8L2gyPlwiO1xuXG4gICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICBsZXQgZGF0YUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRhdGFFbFwiKTtcbiAgICBjb25zdCBkYXRhQmxvY2sgPSByZXF1aXJlKFwiL2Fzc2V0cy9zYW1wbGVfc3RhdGVfY2Vuc3VzX2RhdGEuanNvblwiKTtcbiAgICBkYXRhRWwuaW5uZXJUZXh0ID0gZGF0YUJsb2NrO1xuICAgIHRoaXMuZWxlLmFwcGVuZENoaWxkKGRhdGFFbCk7XG4gICAgLy8gdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCIuLi5wT3BVbEF0SW9OIHRSYUNrRXIuLi5cIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDtcbiJdLCJuYW1lcyI6WyJNYWluQ29udGVudCIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImRhdGFFbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRhdGFCbG9jayIsInJlcXVpcmUiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main-content.js\n");

/***/ }),

/***/ "./src/scripts/title_splash.js":
/*!*************************************!*\
  !*** ./src/scripts/title_splash.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass TitleSplash {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>Population Tracker</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"...pOpUlAtIoN tRaCkEr...\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (TitleSplash);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aXRsZV9zcGxhc2guanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVcsQ0FBQztFQUNoQkMsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxTQUFTLEdBQUcsNkJBQTZCO0lBRWxELElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNqRTtFQUVBRCxXQUFXLEdBQUc7SUFDWixJQUFJLENBQUNILEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsMEJBQTBCO0VBQzdEO0FBQ0Y7QUFFQSwrREFBZVIsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcHVsYXRpb24tdHJhY2tlci8uL3NyYy9zY3JpcHRzL3RpdGxlX3NwbGFzaC5qcz9mYTg1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRpdGxlU3BsYXNoIHtcbiAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+UG9wdWxhdGlvbiBUcmFja2VyPC9oMT5cIjtcblxuICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCIuLi5wT3BVbEF0SW9OIHRSYUNrRXIuLi5cIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZVNwbGFzaDtcbiJdLCJuYW1lcyI6WyJUaXRsZVNwbGFzaCIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/title_splash.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3B1bGF0aW9uLXRyYWNrZXIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./assets/sample_state_census_data.json":
/*!**********************************************!*\
  !*** ./assets/sample_state_census_data.json ***!
  \**********************************************/
/***/ (function(module) {

module.exports = JSON.parse('[["NAME","state"],["Pennsylvania","42"],["California","06"],["West Virginia","54"],["Utah","49"],["New York","36"],["District of Columbia","11"],["Alaska","02"],["Florida","12"],["South Carolina","45"],["North Dakota","38"],["Maine","23"],["Georgia","13"],["Alabama","01"],["New Hampshire","33"],["Oregon","41"],["Wyoming","56"],["Arizona","04"],["Louisiana","22"],["Indiana","18"],["Idaho","16"],["Connecticut","09"],["Hawaii","15"],["Illinois","17"],["Massachusetts","25"],["Texas","48"],["Montana","30"],["Nebraska","31"],["Ohio","39"],["Colorado","08"],["New Jersey","34"],["Maryland","24"],["Virginia","51"],["Vermont","50"],["North Carolina","37"],["Arkansas","05"],["Washington","53"],["Kansas","20"],["Oklahoma","40"],["Wisconsin","55"],["Mississippi","28"],["Missouri","29"],["Michigan","26"],["Rhode Island","44"],["Minnesota","27"],["Iowa","19"],["New Mexico","35"],["Nevada","32"],["Delaware","10"],["Puerto Rico","72"],["Kentucky","21"],["South Dakota","46"],["Tennessee","47"]]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;