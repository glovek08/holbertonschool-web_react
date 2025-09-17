/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/crud.js":
/*!********************!*\
  !*** ./js/crud.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteRow: () => (/* binding */ deleteRow),
/* harmony export */   insertRow: () => (/* binding */ insertRow),
/* harmony export */   updateRow: () => (/* binding */ updateRow)
/* harmony export */ });
function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}

/***/ }),

/***/ "./js/display.ts":
/*!***********************!*\
  !*** ./js/display.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayOutput: () => (/* binding */ displayOutput)
/* harmony export */ });
function displayOutput(output, elementType) {
    if (elementType === void 0) { elementType = 'p'; }
    var outputSection = document.createElement("section");
    outputSection.id = "test-output";
    document.documentElement.appendChild(outputSection);
    var newEl; // remove if problems.
    if (elementType === 'heading') {
        newEl = document.createElement('h3');
        newEl.style.color = '#e4e9eeff';
        newEl.style.background = "#3f464dff";
        newEl.style.padding = '10px 5%';
        newEl.style.marginTop = '20px';
        newEl.style.fontWeight = '800';
    }
    else if (elementType === 'code') {
        newEl = document.createElement('pre');
        newEl.style.backgroundColor = '#f5f5f5';
        newEl.style.padding = '10px';
        newEl.style.border = '1px solid #ddd';
        newEl.style.borderRadius = '4px';
        newEl.style.fontFamily = 'monospace';
        newEl.style.overflow = 'auto';
    }
    else {
        newEl = document.createElement('p');
        newEl.style.color = '#34495e';
        newEl.style.padding = '5px 5%';
        newEl.style.margin = '5px 0';
        newEl.style.fontWeight = '100';
    }
    newEl.textContent = output;
    if (outputSection && outputSection instanceof HTMLElement) {
        Object.assign(outputSection.style, {
            maxWidth: '800px',
            margin: '20px auto',
            padding: '20px 10%',
            backgroundColor: '#e6e8ebff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        });
        outputSection.appendChild(newEl);
    }
    else {
        console.warn("Output section not reachable!");
    }
}


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./js/display.ts");
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ "./js/crud.js");
/// <reference path="./crud.d.ts">
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Triple dash directives are OUTDATED. I'm leaving it for the project.
// TypeScript automatically handles the type declarations 
// from crud.d.ts when crud.js is imported.


Object.assign(document.documentElement.style, {
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexBasis: "900px"
});
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
(0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("Row Object ".concat(JSON.stringify(row, null, 2)), "code");
// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
//Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
// Finally, call the updateRow and deleteRow commands.
var newRowID = _crud_js__WEBPACK_IMPORTED_MODULE_1__.insertRow(row);
(0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("New Row ID: ".concat(newRowID), "p");
var updatedRow = __assign(__assign({}, row), { age: 23 });
(0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("Updated Row: ".concat(JSON.stringify(updatedRow, null, 2)), "code");
_crud_js__WEBPACK_IMPORTED_MODULE_1__.deleteRow(newRowID);
(0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("Deleted Row ID: ".concat(newRowID), "p");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUN6Qix1REFBYSxDQUFDLDBCQUFtQixRQUFRLENBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvY3J1ZC5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL2Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGluc2VydFJvdyhyb3cpIHtcbiAgY29uc29sZS5sb2coJ0luc2VydCByb3cnLCByb3cpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMDAwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVSb3cocm93SWQpIHtcbiAgY29uc29sZS5sb2coJ0RlbGV0ZSByb3cgaWQnLCByb3dJZCk7XG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvdyhyb3dJZCwgcm93KSB7XG4gIGNvbnNvbGUubG9nKGBVcGRhdGUgcm93ICR7cm93SWR9YCwgcm93KTtcblxuICByZXR1cm4gcm93SWQ7XG59IiwiXG50eXBlIEVsZW1lbnRUeXBlID0gJ3AnIHwgJ2hlYWRpbmcnIHwgJ2NvZGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU91dHB1dChvdXRwdXQ6IHN0cmluZywgZWxlbWVudFR5cGU6IEVsZW1lbnRUeXBlID0gJ3AnKTogdm9pZCB7XG4gIGNvbnN0IG91dHB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgb3V0cHV0U2VjdGlvbi5pZCA9IFwidGVzdC1vdXRwdXRcIjtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKG91dHB1dFNlY3Rpb24pO1xuICBsZXQgbmV3RWw6IEhUTUxFbGVtZW50OyAvLyByZW1vdmUgaWYgcHJvYmxlbXMuXG5cbiAgaWYgKGVsZW1lbnRUeXBlID09PSAnaGVhZGluZycpIHtcbiAgICBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbmV3RWwuc3R5bGUuY29sb3IgPSAnI2U0ZTllZWZmJztcbiAgICBuZXdFbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjM2Y0NjRkZmZcIjtcbiAgICBuZXdFbC5zdHlsZS5wYWRkaW5nID0gJzEwcHggNSUnO1xuICAgIG5ld0VsLnN0eWxlLm1hcmdpblRvcCA9ICcyMHB4JztcbiAgICBuZXdFbC5zdHlsZS5mb250V2VpZ2h0ID0gJzgwMCc7XG4gIH0gZWxzZSBpZiAoZWxlbWVudFR5cGUgPT09ICdjb2RlJykge1xuICAgIG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gICAgbmV3RWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmNWY1ZjUnO1xuICAgIG5ld0VsLnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgbmV3RWwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjZGRkJztcbiAgICBuZXdFbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNHB4JztcbiAgICBuZXdFbC5zdHlsZS5mb250RmFtaWx5ID0gJ21vbm9zcGFjZSc7XG4gICAgbmV3RWwuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gIH0gZWxzZSB7XG4gICAgbmV3RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmV3RWwuc3R5bGUuY29sb3IgPSAnIzM0NDk1ZSc7XG4gICAgbmV3RWwuc3R5bGUucGFkZGluZyA9ICc1cHggNSUnO1xuICAgIG5ld0VsLnN0eWxlLm1hcmdpbiA9ICc1cHggMCc7XG4gICAgbmV3RWwuc3R5bGUuZm9udFdlaWdodCA9ICcxMDAnO1xuICB9XG5cbiAgbmV3RWwudGV4dENvbnRlbnQgPSBvdXRwdXQ7XG5cbiAgaWYgKG91dHB1dFNlY3Rpb24gJiYgb3V0cHV0U2VjdGlvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgT2JqZWN0LmFzc2lnbihvdXRwdXRTZWN0aW9uLnN0eWxlLCB7XG4gICAgICBtYXhXaWR0aDogJzgwMHB4JyxcbiAgICAgIG1hcmdpbjogJzIwcHggYXV0bycsXG4gICAgICBwYWRkaW5nOiAnMjBweCAxMCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2U2ZThlYmZmJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICBib3hTaGFkb3c6ICcwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpJ1xuICAgIH0pXG4gICAgb3V0cHV0U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKFwiT3V0cHV0IHNlY3Rpb24gbm90IHJlYWNoYWJsZSFcIik7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2NydWQuZC50c1wiPlxuXG4vLyBUcmlwbGUgZGFzaCBkaXJlY3RpdmVzIGFyZSBPVVREQVRFRC4gSSdtIGxlYXZpbmcgaXQgZm9yIHRoZSBwcm9qZWN0LlxuLy8gVHlwZVNjcmlwdCBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgdGhlIHR5cGUgZGVjbGFyYXRpb25zIFxuLy8gZnJvbSBjcnVkLmQudHMgd2hlbiBjcnVkLmpzIGlzIGltcG9ydGVkLlxuXG5pbXBvcnQgeyBkaXNwbGF5T3V0cHV0IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgUm93SUQsIFJvd0VsZW1lbnQgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCAqIGFzIENSVUQgZnJvbSBcIi4vY3J1ZC5qc1wiO1xuXG5PYmplY3QuYXNzaWduKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSwge1xuICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgZmxleEJhc2lzOiBcIjkwMHB4XCJcbn0pO1xuXG5jb25zdCByb3c6IFJvd0VsZW1lbnQgPSB7XG4gIGZpcnN0TmFtZTogXCJHdWlsbGF1bWVcIixcbiAgbGFzdE5hbWU6IFwiU2FsdmFcIixcbn1cblxuZGlzcGxheU91dHB1dChgUm93IE9iamVjdCAke0pTT04uc3RyaW5naWZ5KHJvdywgbnVsbCwgMil9YCwgXCJjb2RlXCIpO1xuXG5cbi8vIENyZWF0ZSBhIGNvbnN0IHZhcmlhYmxlIG5hbWVkIG5ld1Jvd0lEIHdpdGggdGhlIHR5cGUgUm93SUQgYW5kIGFzc2lnbiB0aGUgdmFsdWUgdGhlIGluc2VydFJvdyBjb21tYW5kLlxuLy9OZXh0LCBjcmVhdGUgYSBjb25zdCB2YXJpYWJsZSBuYW1lZCB1cGRhdGVkUm93IHdpdGggdGhlIHR5cGUgUm93RWxlbWVudCBhbmQgdXBkYXRlIHJvdyB3aXRoIGFuIGFnZSBmaWVsZCBzZXQgdG8gMjNcbi8vIEZpbmFsbHksIGNhbGwgdGhlIHVwZGF0ZVJvdyBhbmQgZGVsZXRlUm93IGNvbW1hbmRzLlxuXG5jb25zdCBuZXdSb3dJRDogUm93SUQgPSBDUlVELmluc2VydFJvdyhyb3cpO1xuZGlzcGxheU91dHB1dChgTmV3IFJvdyBJRDogJHtuZXdSb3dJRH1gLCBcInBcIik7XG5cbmNvbnN0IHVwZGF0ZWRSb3c6IFJvd0VsZW1lbnQgPSB7Li4ucm93LCBhZ2U6IDIzfTtcbmRpc3BsYXlPdXRwdXQoYFVwZGF0ZWQgUm93OiAke0pTT04uc3RyaW5naWZ5KHVwZGF0ZWRSb3csIG51bGwsIDIpfWAsIFwiY29kZVwiKTtcblxuQ1JVRC5kZWxldGVSb3cobmV3Um93SUQpO1xuZGlzcGxheU91dHB1dChgRGVsZXRlZCBSb3cgSUQ6ICR7bmV3Um93SUR9YCwgXCJwXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9