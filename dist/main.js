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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_title_splash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/title_splash */ \"./src/scripts/title_splash.js\");\n/* harmony import */ var _scripts_main_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main-content */ \"./src/scripts/main-content.js\");\n// import Fetcher from \"./scripts/fetcher\";\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const title = document.getElementById(\"title\");\n  new _scripts_title_splash__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title);\n  const main = document.getElementById(\"main-content\");\n  new _scripts_main_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"](main);\n});\n\n// console.log(\"Hello World\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDaUQ7QUFDQTtBQUVqREUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsT0FBTyxDQUFDO0VBQzlDLElBQUlMLDZEQUFXLENBQUNJLEtBQUssQ0FBQztFQUN0QixNQUFNRSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUNwRCxJQUFJSiw2REFBVyxDQUFDSyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFDOztBQUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9wdWxhdGlvbi10cmFja2VyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEZldGNoZXIgZnJvbSBcIi4vc2NyaXB0cy9mZXRjaGVyXCI7XG5pbXBvcnQgVGl0bGVTcGxhc2ggZnJvbSBcIi4vc2NyaXB0cy90aXRsZV9zcGxhc2hcIjtcbmltcG9ydCBNYWluQ29udGVudCBmcm9tIFwiLi9zY3JpcHRzL21haW4tY29udGVudFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgbmV3IFRpdGxlU3BsYXNoKHRpdGxlKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250ZW50XCIpO1xuICBuZXcgTWFpbkNvbnRlbnQobWFpbik7XG59KTtcblxuLy8gY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZFwiKTtcbiJdLCJuYW1lcyI6WyJUaXRsZVNwbGFzaCIsIk1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/main-content.js":
/*!*************************************!*\
  !*** ./src/scripts/main-content.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MainContent {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h2>Fetch Data</h2>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n\n  // sortData(data) {\n\n  // }\n\n  handleClick() {\n    let dataEl = document.createElement(\"data\");\n    const dataBlock = __webpack_require__(/*! ../../../../assets/2020_pop_by_state.json */ \"./assets/2020_pop_by_state.json\");\n    const dataTitle = \"2020 Census dataset\";\n    // const dataBlock = require(\"/assets/sample_state_census_data.json\");\n    const parsed_data = JSON.stringify(dataBlock);\n    let ul = document.createElement(\"ul\");\n    // let li = document.createElement(\"li\");\n    // li.innerText = `State ID: Name`;\n    // ul.appendChild(li);\n\n    let first_entry_processed = false;\n    dataBlock.forEach(subArray => {\n      if (!first_entry_processed) {\n        let li = document.createElement(\"li\");\n        li.innerText = dataTitle;\n        li.classList.add(\"data-header\");\n        ul.appendChild(li);\n        li = document.createElement(\"li\");\n        li.innerText = \"State: Population\";\n        li.classList.add(\"data-header\", \"subheader\");\n        ul.appendChild(li);\n        first_entry_processed = true;\n      } else {\n        let li = document.createElement(\"li\");\n        li.innerText = `${subArray[1]}: ${subArray[0]}`;\n        li.classList.add(\"item\");\n        ul.appendChild(li);\n      }\n    });\n    dataEl.appendChild(ul);\n    // dataEl.innerText = JSON.stringify(dataBlock, null, \"\\t\"); // Indented 4 spaces\n    // dataEl.innerText = JSON.stringify(dataBlock);\n    this.ele.appendChild(dataEl);\n    this.ele.children[0].innerText = \"data fetched!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluLWNvbnRlbnQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVcsQ0FBQztFQUNoQkMsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxTQUFTLEdBQUcscUJBQXFCO0lBRTFDLElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNqRTs7RUFFQTs7RUFFQTs7RUFFQUQsV0FBVyxHQUFHO0lBQ1osSUFBSUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDM0MsTUFBTUMsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLGtGQUFnQyxDQUFDO0lBQzNELE1BQU1DLFNBQVMsR0FBRyxxQkFBcUI7SUFDdkM7SUFDQSxNQUFNQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxTQUFTLENBQUM7SUFDN0MsSUFBSU0sRUFBRSxHQUFHUixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDckM7SUFDQTtJQUNBOztJQUVBLElBQUlRLHFCQUFxQixHQUFHLEtBQUs7SUFDakNQLFNBQVMsQ0FBQ1EsT0FBTyxDQUFFQyxRQUFRLElBQUs7TUFDOUIsSUFBSSxDQUFDRixxQkFBcUIsRUFBRTtRQUMxQixJQUFJRyxFQUFFLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNyQ1csRUFBRSxDQUFDQyxTQUFTLEdBQUdULFNBQVM7UUFDeEJRLEVBQUUsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQy9CUCxFQUFFLENBQUNRLFdBQVcsQ0FBQ0osRUFBRSxDQUFDO1FBQ2xCQSxFQUFFLEdBQUdaLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNqQ1csRUFBRSxDQUFDQyxTQUFTLEdBQUcsbUJBQW1CO1FBQ2xDRCxFQUFFLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7UUFDNUNQLEVBQUUsQ0FBQ1EsV0FBVyxDQUFDSixFQUFFLENBQUM7UUFDbEJILHFCQUFxQixHQUFHLElBQUk7TUFDOUIsQ0FBQyxNQUFNO1FBQ0wsSUFBSUcsRUFBRSxHQUFHWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDckNXLEVBQUUsQ0FBQ0MsU0FBUyxHQUFJLEdBQUVGLFFBQVEsQ0FBQyxDQUFDLENBQUUsS0FBSUEsUUFBUSxDQUFDLENBQUMsQ0FBRSxFQUFDO1FBQy9DQyxFQUFFLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN4QlAsRUFBRSxDQUFDUSxXQUFXLENBQUNKLEVBQUUsQ0FBQztNQUNwQjtJQUNGLENBQUMsQ0FBQztJQUNGYixNQUFNLENBQUNpQixXQUFXLENBQUNSLEVBQUUsQ0FBQztJQUN0QjtJQUNBO0lBQ0EsSUFBSSxDQUFDZCxHQUFHLENBQUNzQixXQUFXLENBQUNqQixNQUFNLENBQUM7SUFDNUIsSUFBSSxDQUFDTCxHQUFHLENBQUN1QixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNKLFNBQVMsR0FBRyxlQUFlO0VBQ2xEO0FBQ0Y7QUFFQSwrREFBZXJCLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3B1bGF0aW9uLXRyYWNrZXIvLi9zcmMvc2NyaXB0cy9tYWluLWNvbnRlbnQuanM/MzZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNYWluQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgIHRoaXMuZWxlID0gZWxlO1xuICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgyPkZldGNoIERhdGE8L2gyPlwiO1xuXG4gICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cblxuICAvLyBzb3J0RGF0YShkYXRhKSB7XG5cbiAgLy8gfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGxldCBkYXRhRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YVwiKTtcbiAgICBjb25zdCBkYXRhQmxvY2sgPSByZXF1aXJlKFwiL2Fzc2V0cy8yMDIwX3BvcF9ieV9zdGF0ZS5qc29uXCIpO1xuICAgIGNvbnN0IGRhdGFUaXRsZSA9IFwiMjAyMCBDZW5zdXMgZGF0YXNldFwiO1xuICAgIC8vIGNvbnN0IGRhdGFCbG9jayA9IHJlcXVpcmUoXCIvYXNzZXRzL3NhbXBsZV9zdGF0ZV9jZW5zdXNfZGF0YS5qc29uXCIpO1xuICAgIGNvbnN0IHBhcnNlZF9kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YUJsb2NrKTtcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgLy8gbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIC8vIGxpLmlubmVyVGV4dCA9IGBTdGF0ZSBJRDogTmFtZWA7XG4gICAgLy8gdWwuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgbGV0IGZpcnN0X2VudHJ5X3Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIGRhdGFCbG9jay5mb3JFYWNoKChzdWJBcnJheSkgPT4ge1xuICAgICAgaWYgKCFmaXJzdF9lbnRyeV9wcm9jZXNzZWQpIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaS5pbm5lclRleHQgPSBkYXRhVGl0bGU7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWhlYWRlclwiKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gXCJTdGF0ZTogUG9wdWxhdGlvblwiO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiZGF0YS1oZWFkZXJcIiwgXCJzdWJoZWFkZXJcIik7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgZmlyc3RfZW50cnlfcHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7c3ViQXJyYXlbMV19OiAke3N1YkFycmF5WzBdfWA7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZGF0YUVsLmFwcGVuZENoaWxkKHVsKTtcbiAgICAvLyBkYXRhRWwuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoZGF0YUJsb2NrLCBudWxsLCBcIlxcdFwiKTsgLy8gSW5kZW50ZWQgNCBzcGFjZXNcbiAgICAvLyBkYXRhRWwuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoZGF0YUJsb2NrKTtcbiAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChkYXRhRWwpO1xuICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiZGF0YSBmZXRjaGVkIVwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50O1xuIl0sIm5hbWVzIjpbIk1haW5Db250ZW50IiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZGF0YUVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YUJsb2NrIiwicmVxdWlyZSIsImRhdGFUaXRsZSIsInBhcnNlZF9kYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInVsIiwiZmlyc3RfZW50cnlfcHJvY2Vzc2VkIiwiZm9yRWFjaCIsInN1YkFycmF5IiwibGkiLCJpbm5lclRleHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/main-content.js\n");

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

/***/ "./assets/2020_pop_by_state.json":
/*!***************************************!*\
  !*** ./assets/2020_pop_by_state.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('[["H1_001N","NAME","state"],["5742828","Pennsylvania","42"],["14392140","California","06"],["855635","West Virginia","54"],["1151414","Utah","49"],["8488066","New York","36"],["350364","District of Columbia","11"],["326200","Alaska","02"],["9865350","Florida","12"],["2344963","South Carolina","45"],["370642","North Dakota","38"],["739072","Maine","23"],["4410956","Georgia","13"],["2288330","Alabama","01"],["638795","New Hampshire","33"],["1813747","Oregon","41"],["271887","Wyoming","56"],["3082000","Arizona","04"],["2073200","Louisiana","22"],["2923175","Indiana","18"],["751859","Idaho","16"],["1530197","Connecticut","09"],["561066","Hawaii","15"],["5426429","Illinois","17"],["2998537","Massachusetts","25"],["11589324","Texas","48"],["514803","Montana","30"],["844278","Nebraska","31"],["5242524","Ohio","39"],["2491404","Colorado","08"],["3761229","New Jersey","34"],["2530844","Maryland","24"],["3618247","Virginia","51"],["334318","Vermont","50"],["4708710","North Carolina","37"],["1365265","Arkansas","05"],["3202241","Washington","53"],["1275689","Kansas","20"],["1746807","Oklahoma","40"],["2727726","Wisconsin","55"],["1319945","Mississippi","28"],["2786621","Missouri","29"],["4570173","Michigan","26"],["483474","Rhode Island","44"],["2485558","Minnesota","27"],["1412789","Iowa","19"],["940859","New Mexico","35"],["1281018","Nevada","32"],["448735","Delaware","10"],["1598159","Puerto Rico","72"],["1994323","Kentucky","21"],["393375","South Dakota","46"],["3031605","Tennessee","47"]]');

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