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

eval("__webpack_require__.r(__webpack_exports__);\nclass MainContent {\n  constructor(ele) {\n    this.ele = ele;\n    let firstLine = document.createElement(\"div\");\n    firstLine.setAttribute(\"id\", \"firstLine\");\n    ele.appendChild(firstLine);\n    let h2 = document.createElement(\"h2\");\n    // h2.classList.add(\"fetchData\");\n    h2.innerText = \"Fetch Vintage:\";\n    firstLine.appendChild(h2);\n    let div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"vintageSelector\");\n    div.classList.add(\"firstLine\");\n    let ul = document.createElement(\"ul\");\n    ul.classList.add(\"vintageUl\");\n    firstLine.appendChild(div);\n    div.appendChild(ul);\n    let li = document.createElement(\"li\");\n    li.innerText = \"2020\";\n    li.classList.add(\"2020\");\n    ul.appendChild(li);\n    li = document.createElement(\"li\");\n    li.innerText = \"2010\";\n    li.classList.add(\"2010\");\n    ul.appendChild(li);\n    let secondLine = document.createElement(\"div\");\n    secondLine.setAttribute(\"id\", \"sortSelector\");\n    ele.appendChild(secondLine);\n    ul = document.createElement(\"ul\");\n    ul.classList.add(\"selectorUl\");\n    secondLine.appendChild(ul);\n    let boundFetch2020 = this.fetch2020.bind(this);\n    let boundFetch2010 = this.fetch2010.bind(this);\n    let boundSortByName = this.sortByName.bind(this);\n    let boundSortByPopulation = this.sortByPopulation.bind(this);\n    document.addEventListener(\"click\", function (e) {\n      let eventTarget = e.target;\n      if (eventTarget.classList.contains(\"2020\")) {\n        boundFetch2020();\n      } else if (eventTarget.classList.contains(\"2010\")) {\n        boundFetch2010();\n      } else if (eventTarget.classList.contains(\"sortByName\")) {\n        boundSortByName();\n      } else if (eventTarget.classList.contains(\"sortByPopulation\")) {\n        boundSortByPopulation();\n      }\n    });\n  }\n  fetch2020() {\n    this.dataObject = getData(\"2020\");\n    printData();\n  }\n  fetch2010() {\n    this.dataObject = getData(\"2010\");\n    printData();\n    this.sortByName();\n  }\n  printData() {\n    if (!document.querySelector(\"data\")) {\n      let dataEl = document.createElement(\"data\");\n      let dataUl = document.createElement(\"ul\");\n      dataUl.classList.add(\"fetchResultSorted\");\n      dataEl.appendChild(dataUl);\n      this.ele.appendChild(dataEl);\n      this.ele.children[0].innerText = \"data fetched!\";\n    }\n    let ul = document.createElement(\"ul\");\n    let li = document.createElement(\"li\");\n    li.classList.add(\"sortByName\");\n    li.innerText = \"Sort by Name\";\n    ul.appendChild(li);\n    li = document.createElement(\"li\");\n    li.classList.add(\"sortByPopulation\");\n    li.innerText = \"Sort by Population\";\n    ul.appendChild(li);\n    let selectorDiv = document.getElementById(\"sortSelector\");\n    selectorDiv.replaceChild(ul, document.querySelector(\".selectorUl\"));\n    ul.classList.add(\"selectorUl\");\n  }\n  getData(vintage) {\n    if (vintage === \"2020\") {\n      const dataBlock = __webpack_require__(/*! ../../../../assets/census-2020-P1001N.json */ \"./assets/census-2020-P1001N.json\");\n      const dataTitle = \"2020 Census dataset\";\n    } else if (vintage === \"2010\") {\n      const dataBlock = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '/assets/census-2010-P1001N.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n      const dataTitle = \"2010 Census dataset\";\n    }\n    const obj = {\n      header: dataTitle,\n      data: dataBlock\n    };\n    return obj;\n  }\n  sortData(sortKey) {\n    const preSorted = {};\n    preSorted.header = this.dataObject.header;\n    preSorted.states = [];\n    this.dataObject.data.forEach(row => {\n      if (row[0] !== \"NAME\") {\n        let newState = {};\n        newState.stateId = row[2];\n        newState.stateName = row[0];\n        newState.population = row[1];\n        preSorted.states.push(newState);\n      }\n    });\n    let sorted = {};\n    if (sortKey === \"byName\") {\n      sorted.states = this.objSortByName(preSorted.states);\n      sorted.header = this.dataObject.header;\n    } else if (sortKey === \"byPopulation\") {\n      sorted.states = this.objSortByPopulation(preSorted.states);\n      sorted.header = this.dataObject.header;\n    }\n    for (let i = 0; i < sorted.states.length; i++) {\n      let popSource = sorted.states[i].population;\n      if (typeof popSource === \"number\") {\n        popSource = parseInt(popSource);\n      }\n      let arrayedPop = popSource.split(\"\");\n      let count = 0;\n      let commaPop = [];\n      while (arrayedPop.length > 0) {\n        if (count === 3) {\n          commaPop.push(\",\");\n          count = 0;\n        }\n        commaPop.push(arrayedPop.pop());\n        count++;\n      }\n      let resultPop = commaPop.reverse().join(\"\");\n      sorted.states[i].population = resultPop;\n    }\n    return sorted;\n  }\n  objSortByName(obj) {\n    let sorted = obj.sort((a, b) => {\n      if (a.stateName < b.stateName) return -1;\n      if (a.stateName > b.stateName) return 1;\n      return 0;\n    });\n    return sorted;\n  }\n  objSortByPopulation(obj) {\n    let sorted = obj.sort((b, a) => {\n      if (parseInt(a.population) < parseInt(b.population)) return -1;\n      if (parseInt(a.population) > parseInt(b.population)) return 1;\n      return 0;\n    });\n    return sorted;\n  }\n  sortByName() {\n    let dataObject = this.sortData(\"byName\");\n    let dataHeader = dataObject.header;\n    let dataEl = document.querySelector(\"data\");\n    let ul = document.createElement(\"ul\");\n    dataEl.replaceChild(ul, document.querySelector(\".fetchResultSorted\"));\n    ul.classList.add(\"fetchResultSorted\");\n    for (let i = 0; i < dataObject.states.length; i++) {\n      if (i === 0) {\n        let li = document.createElement(\"li\");\n        li.innerText = dataHeader;\n        li.classList.add(\"data-header\");\n        ul.appendChild(li);\n        li = document.createElement(\"li\");\n        li.innerText = \"State: Population\";\n        li.classList.add(\"data-header\", \"subheader\");\n        ul.appendChild(li);\n      }\n      let li = document.createElement(\"li\");\n      li.innerText = `${dataObject.states[i].stateName}: ${dataObject.states[i].population}`;\n      li.classList.add(\"item\");\n      ul.appendChild(li);\n    }\n  }\n  sortByPopulation() {\n    let dataObject = this.sortData(\"byPopulation\");\n    let dataHeader = dataObject.header;\n    let dataEl = document.querySelector(\"data\");\n    let ul = document.createElement(\"ul\");\n    dataEl.replaceChild(ul, document.querySelector(\".fetchResultSorted\"));\n    ul.classList.add(\"fetchResultSorted\");\n    for (let i = 0; i < dataObject.states.length; i++) {\n      if (i === 0) {\n        let li = document.createElement(\"li\");\n        li.innerText = dataHeader;\n        li.classList.add(\"data-header\");\n        ul.appendChild(li);\n        li = document.createElement(\"li\");\n        li.innerText = \"State: Population\";\n        li.classList.add(\"data-header\", \"subheader\");\n        ul.appendChild(li);\n      }\n      let li = document.createElement(\"li\");\n      li.innerText = `${dataObject.states[i].stateName}: ${dataObject.states[i].population}`;\n      li.classList.add(\"item\");\n      ul.appendChild(li);\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ3hCQyxFQUFFLENBQUNOLFdBQVcsQ0FBQ08sRUFBRSxDQUFDO0lBQ3BCO0VBQ0Y7QUFDRjtBQUVBLCtEQUFlZCxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9wdWxhdGlvbi10cmFja2VyLy4vc3JjL3NjcmlwdHMvbWFpbi1jb250ZW50LmpzPzM2ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWFpbkNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihlbGUpIHtcbiAgICB0aGlzLmVsZSA9IGVsZTtcblxuICAgIGxldCBmaXJzdExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpcnN0TGluZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZpcnN0TGluZVwiKTtcbiAgICBlbGUuYXBwZW5kQ2hpbGQoZmlyc3RMaW5lKTtcblxuICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAvLyBoMi5jbGFzc0xpc3QuYWRkKFwiZmV0Y2hEYXRhXCIpO1xuICAgIGgyLmlubmVyVGV4dCA9IFwiRmV0Y2ggVmludGFnZTpcIjtcbiAgICBmaXJzdExpbmUuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInZpbnRhZ2VTZWxlY3RvclwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImZpcnN0TGluZVwiKTtcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuY2xhc3NMaXN0LmFkZChcInZpbnRhZ2VVbFwiKTtcbiAgICBmaXJzdExpbmUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5pbm5lclRleHQgPSBcIjIwMjBcIjtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwiMjAyMFwiKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuaW5uZXJUZXh0ID0gXCIyMDEwXCI7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcIjIwMTBcIik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgbGV0IHNlY29uZExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY29uZExpbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzb3J0U2VsZWN0b3JcIik7XG4gICAgZWxlLmFwcGVuZENoaWxkKHNlY29uZExpbmUpO1xuICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RvclVsXCIpO1xuICAgIHNlY29uZExpbmUuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgbGV0IGJvdW5kRmV0Y2gyMDIwID0gdGhpcy5mZXRjaDIwMjAuYmluZCh0aGlzKTtcbiAgICBsZXQgYm91bmRGZXRjaDIwMTAgPSB0aGlzLmZldGNoMjAxMC5iaW5kKHRoaXMpO1xuICAgIGxldCBib3VuZFNvcnRCeU5hbWUgPSB0aGlzLnNvcnRCeU5hbWUuYmluZCh0aGlzKTtcbiAgICBsZXQgYm91bmRTb3J0QnlQb3B1bGF0aW9uID0gdGhpcy5zb3J0QnlQb3B1bGF0aW9uLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGxldCBldmVudFRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICBpZiAoZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiMjAyMFwiKSkge1xuICAgICAgICBib3VuZEZldGNoMjAyMCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCIyMDEwXCIpKSB7XG4gICAgICAgIGJvdW5kRmV0Y2gyMDEwKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNvcnRCeU5hbWVcIikpIHtcbiAgICAgICAgYm91bmRTb3J0QnlOYW1lKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNvcnRCeVBvcHVsYXRpb25cIikpIHtcbiAgICAgICAgYm91bmRTb3J0QnlQb3B1bGF0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmZXRjaDIwMjAoKSB7XG4gICAgdGhpcy5kYXRhT2JqZWN0ID0gZ2V0RGF0YShcIjIwMjBcIik7XG4gICAgcHJpbnREYXRhKCk7XG4gIH1cblxuICBmZXRjaDIwMTAoKSB7XG4gICAgdGhpcy5kYXRhT2JqZWN0ID0gZ2V0RGF0YShcIjIwMTBcIik7XG4gICAgcHJpbnREYXRhKCk7XG4gICAgdGhpcy5zb3J0QnlOYW1lKCk7XG4gIH1cblxuICBwcmludERhdGEoKSB7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGF0YVwiKSkge1xuICAgICAgbGV0IGRhdGFFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhXCIpO1xuICAgICAgbGV0IGRhdGFVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgIGRhdGFVbC5jbGFzc0xpc3QuYWRkKFwiZmV0Y2hSZXN1bHRTb3J0ZWRcIik7XG4gICAgICBkYXRhRWwuYXBwZW5kQ2hpbGQoZGF0YVVsKTtcbiAgICAgIHRoaXMuZWxlLmFwcGVuZENoaWxkKGRhdGFFbCk7XG4gICAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcImRhdGEgZmV0Y2hlZCFcIjtcbiAgICB9XG5cbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJzb3J0QnlOYW1lXCIpO1xuICAgIGxpLmlubmVyVGV4dCA9IFwiU29ydCBieSBOYW1lXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcInNvcnRCeVBvcHVsYXRpb25cIik7XG4gICAgbGkuaW5uZXJUZXh0ID0gXCJTb3J0IGJ5IFBvcHVsYXRpb25cIjtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICBsZXQgc2VsZWN0b3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRTZWxlY3RvclwiKTtcbiAgICBzZWxlY3RvckRpdi5yZXBsYWNlQ2hpbGQodWwsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0b3JVbFwiKSk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yVWxcIik7XG4gIH1cblxuICBnZXREYXRhKHZpbnRhZ2UpIHtcbiAgICBpZiAodmludGFnZSA9PT0gXCIyMDIwXCIpIHtcbiAgICAgIGNvbnN0IGRhdGFCbG9jayA9IHJlcXVpcmUoXCIvYXNzZXRzL2NlbnN1cy0yMDIwLVAxMDAxTi5qc29uXCIpO1xuICAgICAgY29uc3QgZGF0YVRpdGxlID0gXCIyMDIwIENlbnN1cyBkYXRhc2V0XCI7XG4gICAgfSBlbHNlIGlmICh2aW50YWdlID09PSBcIjIwMTBcIikge1xuICAgICAgY29uc3QgZGF0YUJsb2NrID0gcmVxdWlyZShcIi9hc3NldHMvY2Vuc3VzLTIwMTAtUDEwMDFOLmpzb25cIik7XG4gICAgICBjb25zdCBkYXRhVGl0bGUgPSBcIjIwMTAgQ2Vuc3VzIGRhdGFzZXRcIjtcbiAgICB9XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgaGVhZGVyOiBkYXRhVGl0bGUsXG4gICAgICBkYXRhOiBkYXRhQmxvY2ssXG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgc29ydERhdGEoc29ydEtleSkge1xuICAgIGNvbnN0IHByZVNvcnRlZCA9IHt9O1xuICAgIHByZVNvcnRlZC5oZWFkZXIgPSB0aGlzLmRhdGFPYmplY3QuaGVhZGVyO1xuICAgIHByZVNvcnRlZC5zdGF0ZXMgPSBbXTtcbiAgICB0aGlzLmRhdGFPYmplY3QuZGF0YS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGlmIChyb3dbMF0gIT09IFwiTkFNRVwiKSB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICBuZXdTdGF0ZS5zdGF0ZUlkID0gcm93WzJdO1xuICAgICAgICBuZXdTdGF0ZS5zdGF0ZU5hbWUgPSByb3dbMF07XG4gICAgICAgIG5ld1N0YXRlLnBvcHVsYXRpb24gPSByb3dbMV07XG4gICAgICAgIHByZVNvcnRlZC5zdGF0ZXMucHVzaChuZXdTdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgc29ydGVkID0ge307XG4gICAgaWYgKHNvcnRLZXkgPT09IFwiYnlOYW1lXCIpIHtcbiAgICAgIHNvcnRlZC5zdGF0ZXMgPSB0aGlzLm9ialNvcnRCeU5hbWUocHJlU29ydGVkLnN0YXRlcyk7XG4gICAgICBzb3J0ZWQuaGVhZGVyID0gdGhpcy5kYXRhT2JqZWN0LmhlYWRlcjtcbiAgICB9IGVsc2UgaWYgKHNvcnRLZXkgPT09IFwiYnlQb3B1bGF0aW9uXCIpIHtcbiAgICAgIHNvcnRlZC5zdGF0ZXMgPSB0aGlzLm9ialNvcnRCeVBvcHVsYXRpb24ocHJlU29ydGVkLnN0YXRlcyk7XG4gICAgICBzb3J0ZWQuaGVhZGVyID0gdGhpcy5kYXRhT2JqZWN0LmhlYWRlcjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5zdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwb3BTb3VyY2UgPSBzb3J0ZWQuc3RhdGVzW2ldLnBvcHVsYXRpb247XG5cbiAgICAgIGlmICh0eXBlb2YgcG9wU291cmNlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHBvcFNvdXJjZSA9IHBhcnNlSW50KHBvcFNvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBhcnJheWVkUG9wID0gcG9wU291cmNlLnNwbGl0KFwiXCIpO1xuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGxldCBjb21tYVBvcCA9IFtdO1xuICAgICAgd2hpbGUgKGFycmF5ZWRQb3AubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoY291bnQgPT09IDMpIHtcbiAgICAgICAgICBjb21tYVBvcC5wdXNoKFwiLFwiKTtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFQb3AucHVzaChhcnJheWVkUG9wLnBvcCgpKTtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICAgIGxldCByZXN1bHRQb3AgPSBjb21tYVBvcC5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgICAgIHNvcnRlZC5zdGF0ZXNbaV0ucG9wdWxhdGlvbiA9IHJlc3VsdFBvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gc29ydGVkO1xuICB9XG5cbiAgb2JqU29ydEJ5TmFtZShvYmopIHtcbiAgICBsZXQgc29ydGVkID0gb2JqLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLnN0YXRlTmFtZSA8IGIuc3RhdGVOYW1lKSByZXR1cm4gLTE7XG4gICAgICBpZiAoYS5zdGF0ZU5hbWUgPiBiLnN0YXRlTmFtZSkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBzb3J0ZWQ7XG4gIH1cblxuICBvYmpTb3J0QnlQb3B1bGF0aW9uKG9iaikge1xuICAgIGxldCBzb3J0ZWQgPSBvYmouc29ydCgoYiwgYSkgPT4ge1xuICAgICAgaWYgKHBhcnNlSW50KGEucG9wdWxhdGlvbikgPCBwYXJzZUludChiLnBvcHVsYXRpb24pKSByZXR1cm4gLTE7XG4gICAgICBpZiAocGFyc2VJbnQoYS5wb3B1bGF0aW9uKSA+IHBhcnNlSW50KGIucG9wdWxhdGlvbikpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc29ydGVkO1xuICB9XG5cbiAgc29ydEJ5TmFtZSgpIHtcbiAgICBsZXQgZGF0YU9iamVjdCA9IHRoaXMuc29ydERhdGEoXCJieU5hbWVcIik7XG4gICAgbGV0IGRhdGFIZWFkZXIgPSBkYXRhT2JqZWN0LmhlYWRlcjtcbiAgICBsZXQgZGF0YUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRhdGFcIik7XG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGRhdGFFbC5yZXBsYWNlQ2hpbGQodWwsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmV0Y2hSZXN1bHRTb3J0ZWRcIikpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJmZXRjaFJlc3VsdFNvcnRlZFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU9iamVjdC5zdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gZGF0YUhlYWRlcjtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImRhdGEtaGVhZGVyXCIpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaS5pbm5lclRleHQgPSBcIlN0YXRlOiBQb3B1bGF0aW9uXCI7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWhlYWRlclwiLCBcInN1YmhlYWRlclwiKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfVxuICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7ZGF0YU9iamVjdC5zdGF0ZXNbaV0uc3RhdGVOYW1lfTogJHtkYXRhT2JqZWN0LnN0YXRlc1tpXS5wb3B1bGF0aW9ufWA7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gIH1cblxuICBzb3J0QnlQb3B1bGF0aW9uKCkge1xuICAgIGxldCBkYXRhT2JqZWN0ID0gdGhpcy5zb3J0RGF0YShcImJ5UG9wdWxhdGlvblwiKTtcbiAgICBsZXQgZGF0YUhlYWRlciA9IGRhdGFPYmplY3QuaGVhZGVyO1xuICAgIGxldCBkYXRhRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGF0YVwiKTtcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgZGF0YUVsLnJlcGxhY2VDaGlsZCh1bCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZXRjaFJlc3VsdFNvcnRlZFwiKSk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZChcImZldGNoUmVzdWx0U29ydGVkXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhT2JqZWN0LnN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaS5pbm5lclRleHQgPSBkYXRhSGVhZGVyO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiZGF0YS1oZWFkZXJcIik7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmlubmVyVGV4dCA9IFwiU3RhdGU6IFBvcHVsYXRpb25cIjtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImRhdGEtaGVhZGVyXCIsIFwic3ViaGVhZGVyXCIpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9XG4gICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaS5pbm5lclRleHQgPSBgJHtkYXRhT2JqZWN0LnN0YXRlc1tpXS5zdGF0ZU5hbWV9OiAke2RhdGFPYmplY3Quc3RhdGVzW2ldLnBvcHVsYXRpb259YDtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDtcbiJdLCJuYW1lcyI6WyJNYWluQ29udGVudCIsImNvbnN0cnVjdG9yIiwiZWxlIiwiZmlyc3RMaW5lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJoMiIsImlubmVyVGV4dCIsImRpdiIsImNsYXNzTGlzdCIsImFkZCIsInVsIiwibGkiLCJzZWNvbmRMaW5lIiwiYm91bmRGZXRjaDIwMjAiLCJmZXRjaDIwMjAiLCJiaW5kIiwiYm91bmRGZXRjaDIwMTAiLCJmZXRjaDIwMTAiLCJib3VuZFNvcnRCeU5hbWUiLCJzb3J0QnlOYW1lIiwiYm91bmRTb3J0QnlQb3B1bGF0aW9uIiwic29ydEJ5UG9wdWxhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZXZlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjb250YWlucyIsImRhdGFPYmplY3QiLCJnZXREYXRhIiwicHJpbnREYXRhIiwicXVlcnlTZWxlY3RvciIsImRhdGFFbCIsImRhdGFVbCIsImNoaWxkcmVuIiwic2VsZWN0b3JEaXYiLCJnZXRFbGVtZW50QnlJZCIsInJlcGxhY2VDaGlsZCIsInZpbnRhZ2UiLCJkYXRhQmxvY2siLCJyZXF1aXJlIiwiZGF0YVRpdGxlIiwib2JqIiwiaGVhZGVyIiwiZGF0YSIsInNvcnREYXRhIiwic29ydEtleSIsInByZVNvcnRlZCIsInN0YXRlcyIsImZvckVhY2giLCJyb3ciLCJuZXdTdGF0ZSIsInN0YXRlSWQiLCJzdGF0ZU5hbWUiLCJwb3B1bGF0aW9uIiwicHVzaCIsInNvcnRlZCIsIm9ialNvcnRCeU5hbWUiLCJvYmpTb3J0QnlQb3B1bGF0aW9uIiwiaSIsImxlbmd0aCIsInBvcFNvdXJjZSIsInBhcnNlSW50IiwiYXJyYXllZFBvcCIsInNwbGl0IiwiY291bnQiLCJjb21tYVBvcCIsInBvcCIsInJlc3VsdFBvcCIsInJldmVyc2UiLCJqb2luIiwic29ydCIsImEiLCJiIiwiZGF0YUhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main-content.js\n");

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

/***/ "./assets/census-2020-P1001N.json":
/*!****************************************!*\
  !*** ./assets/census-2020-P1001N.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('[["NAME","P1_001N","state"],["Pennsylvania","13002700","42"],["California","39538223","06"],["West Virginia","1793716","54"],["Utah","3271616","49"],["New York","20201249","36"],["District of Columbia","689545","11"],["Alaska","733391","02"],["Florida","21538187","12"],["South Carolina","5118425","45"],["North Dakota","779094","38"],["Maine","1362359","23"],["Georgia","10711908","13"],["Alabama","5024279","01"],["New Hampshire","1377529","33"],["Oregon","4237256","41"],["Wyoming","576851","56"],["Arizona","7151502","04"],["Louisiana","4657757","22"],["Indiana","6785528","18"],["Idaho","1839106","16"],["Connecticut","3605944","09"],["Hawaii","1455271","15"],["Illinois","12812508","17"],["Massachusetts","7029917","25"],["Texas","29145505","48"],["Montana","1084225","30"],["Nebraska","1961504","31"],["Ohio","11799448","39"],["Colorado","5773714","08"],["New Jersey","9288994","34"],["Maryland","6177224","24"],["Virginia","8631393","51"],["Vermont","643077","50"],["North Carolina","10439388","37"],["Arkansas","3011524","05"],["Washington","7705281","53"],["Kansas","2937880","20"],["Oklahoma","3959353","40"],["Wisconsin","5893718","55"],["Mississippi","2961279","28"],["Missouri","6154913","29"],["Michigan","10077331","26"],["Rhode Island","1097379","44"],["Minnesota","5706494","27"],["Iowa","3190369","19"],["New Mexico","2117522","35"],["Nevada","3104614","32"],["Delaware","989948","10"],["Puerto Rico","3285874","72"],["Kentucky","4505836","21"],["South Dakota","886667","46"],["Tennessee","6910840","47"]]');

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