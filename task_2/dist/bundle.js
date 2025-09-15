/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/display.ts":
/*!***********************!*\
  !*** ./js/display.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayOutput: () => (/* binding */ displayOutput)
/* harmony export */ });
function displayOutput(output) {
    var testOutputsSection = document.querySelector('#test-output');
    var p = document.createElement("p");
    p.textContent = output;
    if (testOutputsSection) {
        testOutputsSection.appendChild(p);
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
//  ****************************** TASK 5 *********************
// Create the DirectorInterface interface with the 3 expected methods:

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    Director.prototype.toString = function () {
        return 'Director';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    Teacher.prototype.toString = function () {
        return 'Teacher';
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    return typeof salary === "number" && salary < 500 ? new Teacher() : new Director();
};
//Expected result:
var assert = {
    strictEqual: function (actual, expected, message) {
        if (actual !== expected) {
            return (message || "Assertion failed: ".concat(actual, " !== ").concat(expected));
        }
        else {
            return ("Assertion successful");
        }
    }
};
console.log("TASK 5");
console.log("Is teacher correctly implemented: ".concat(assert.strictEqual(createEmployee(200).constructor.name, "Teacher")));
// Teacher
console.log(createEmployee(1000).constructor.name); // Using the prototype method
// Director
console.log(createEmployee('$500').toString()); // using its own method.
// Director
// ******************** TASK 6 *******************************
// Write a function isDirector:
//     it accepts employee as an argument
//     it will be used as a type predicate and if the employee is a director
// Write a function executeWork:
//     it accepts employee as an argument
//     if the employee is a Director, it will call workDirectorTasks
//     if the employee is a Teacher, it will call workTeacherTasks
console.log("TASK 6");
// function isDirector(employee: HumanWorker): employee is Director {
//   return employee instanceof Director;
// } Commented out because I'm using the class method toString
// and re-implementing the interaces as readonly types.
//  but it's there. FTR it's cleaner, safer and more performant.
function executeWork(employee) {
    return employee.toString() === 'Director' ?
        "Director: ".concat(employee.workDirectorTasks()) :
        "Teacher: ".concat(employee.workTeacherTasks());
}
var readOnlyTeacher = new Teacher();
var readOnlyDirector = new Director();
console.log(executeWork(readOnlyTeacher));
console.log(executeWork(readOnlyDirector));
// *********************** TASK 7 ********************************
// Write a String literal type named Subjects allowing a
// variable to have the value Math or History only. Write a function named teachClass:
//     it takes todayClass as an argument
//     it will return the string Teaching Math if todayClass is Math
//     it will return the string Teaching History if todayClass is History
console.log("TASK 7");
function teachClass(todayClass) {
    return "Teaching ".concat(todayClass);
}
var teacher = createEmployee(200);
if (teacher instanceof Teacher) {
    console.log("Teacher is teaching?: " + assert.strictEqual(teachClass('Math'), 'Teaching Math'));
}
else {
    console.log("teacher is not student");
}
// This will render all outputs also in the page.
function renderOutputs() {
    var outputSection = document.createElement("section");
    outputSection.id = "test-output";
    document.documentElement.appendChild(outputSection);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("TASK 5");
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("Is teacher correctly implemented: ".concat(assert.strictEqual(createEmployee(200).constructor.name, "Teacher")));
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("Director test: ".concat(createEmployee(1000).constructor.name));
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("String method test: ".concat(createEmployee('$500').toString()));
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("\nTASK 6");
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)(executeWork(readOnlyTeacher));
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)(executeWork(readOnlyDirector));
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("\nTASK 7");
    var teacher = createEmployee(200);
    if (teacher instanceof Teacher) {
        (0,_display__WEBPACK_IMPORTED_MODULE_0__.displayOutput)("What is teacher teaching: ".concat(assert.strictEqual(teachClass('Math'), 'Teaching Math')));
    }
}
document.addEventListener('DOMContentLoaded', renderOutputs);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBUyxhQUFhLENBQUMsTUFBYztJQUMxQyxJQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEUsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUN2QixJQUFJLGtCQUFrQixFQUFFO1FBQ3RCLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQztTQUFNO1FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0tBQy9DO0FBQ0gsQ0FBQzs7Ozs7OztVQ1REO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTEEsK0RBQStEO0FBQy9ELHNFQUFzRTtBQWlDNUI7QUFjMUM7SUFBQTtJQWFBLENBQUM7SUFaQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUNELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNELDJCQUFRLEdBQVI7UUFDRSxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFDRDtJQUFBO0lBYUEsQ0FBQztJQVpDLDhCQUFZLEdBQVo7UUFDRSxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0UsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsa0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQ0QsMEJBQVEsR0FBUjtRQUNFLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUlELElBQU0sY0FBYyxHQUFHLFVBQUMsTUFBYztJQUNwQyxPQUFPLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3JGLENBQUM7QUFHRCxrQkFBa0I7QUFDbEIsSUFBTSxNQUFNLEdBQUc7SUFDYixXQUFXLFlBQUMsTUFBVyxFQUFFLFFBQWEsRUFBRSxPQUFnQjtRQUN0RCxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkIsT0FBTyxDQUFDLE9BQU8sSUFBSSw0QkFBcUIsTUFBTSxrQkFBUSxRQUFRLENBQUUsQ0FBQyxDQUFDO1NBQ25FO2FBQ0k7WUFDSCxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUFxQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFFLENBQUMsQ0FBQztBQUN4SCxVQUFVO0FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsNkJBQTZCO0FBQ2pGLFdBQVc7QUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0FBQ3hFLFdBQVc7QUFFWCw4REFBOEQ7QUFDOUQsK0JBQStCO0FBRS9CLHlDQUF5QztBQUN6Qyw0RUFBNEU7QUFFNUUsZ0NBQWdDO0FBRWhDLHlDQUF5QztBQUN6QyxvRUFBb0U7QUFDcEUsa0VBQWtFO0FBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFJdEIscUVBQXFFO0FBQ3JFLHlDQUF5QztBQUN6Qyw4REFBOEQ7QUFDOUQsdURBQXVEO0FBQ3ZELGdFQUFnRTtBQUVoRSxTQUFTLFdBQVcsQ0FBQyxRQUF3QjtJQUMzQyxPQUFPLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQztRQUN6QyxvQkFBYyxRQUErQixDQUFDLGlCQUFpQixFQUFFLENBQUUsQ0FBQyxDQUFDO1FBQ3JFLG1CQUFhLFFBQThCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBRSxDQUFDO0FBQ3JFLENBQUM7QUFFRCxJQUFNLGVBQWUsR0FBc0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUN6RCxJQUFNLGdCQUFnQixHQUF1QixJQUFJLFFBQVEsRUFBRSxDQUFDO0FBRTVELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBRzNDLGtFQUFrRTtBQUVsRSx3REFBd0Q7QUFDeEQsc0ZBQXNGO0FBQ3RGLHlDQUF5QztBQUN6QyxvRUFBb0U7QUFDcEUsMEVBQTBFO0FBRTFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFJdEIsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDdEMsT0FBTyxtQkFBWSxVQUFVLENBQUUsQ0FBQztBQUNsQyxDQUFDO0FBRUQsSUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXBDLElBQUksT0FBTyxZQUFZLE9BQU8sRUFBRTtJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7Q0FDakc7S0FBTTtJQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztDQUN2QztBQUlELGlEQUFpRDtBQUVqRCxTQUFTLGFBQWE7SUFDcEIsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxhQUFhLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQztJQUNqQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVwRCx1REFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLHVEQUFhLENBQUMsNENBQXFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUUsQ0FBQyxDQUFDO0lBQzFILHVEQUFhLENBQUMseUJBQWtCLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQztJQUN6RSx1REFBYSxDQUFDLDhCQUF1QixjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQyxDQUFDO0lBRTFFLHVEQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUIsdURBQWEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM1Qyx1REFBYSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFN0MsdURBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQixJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsSUFBSSxPQUFPLFlBQVksT0FBTyxFQUFFO1FBQzlCLHVEQUFhLENBQUMsb0NBQTZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFFLENBQUMsQ0FBQztLQUN2RztBQUNILENBQUM7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL2Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlPdXRwdXQob3V0cHV0OiBzdHJpbmcpOnZvaWQge1xuICBjb25zdCB0ZXN0T3V0cHV0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1vdXRwdXQnKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwLnRleHRDb250ZW50ID0gb3V0cHV0O1xuICBpZiAodGVzdE91dHB1dHNTZWN0aW9uKSB7XG4gICAgdGVzdE91dHB1dHNTZWN0aW9uLmFwcGVuZENoaWxkKHApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybihcIk91dHB1dCBzZWN0aW9uIG5vdCByZWFjaGFibGUhXCIpO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogVEFTSyA1ICoqKioqKioqKioqKioqKioqKioqKlxuLy8gQ3JlYXRlIHRoZSBEaXJlY3RvckludGVyZmFjZSBpbnRlcmZhY2Ugd2l0aCB0aGUgMyBleHBlY3RlZCBtZXRob2RzOlxuXG4vLyAgICAgd29ya0Zyb21Ib21lKCkgcmV0dXJuaW5nIGEgc3RyaW5nXG4vLyAgICAgZ2V0Q29mZmVlQnJlYWsoKSByZXR1cm5pbmcgYSBzdHJpbmdcbi8vICAgICB3b3JrRGlyZWN0b3JUYXNrcygpIHJldHVybmluZyBhIHN0cmluZ1xuXG4vLyBDcmVhdGUgdGhlIFRlYWNoZXJJbnRlcmZhY2UgaW50ZXJmYWNlIHdpdGggdGhlIDMgZXhwZWN0ZWQgbWV0aG9kczpcblxuLy8gICAgIHdvcmtGcm9tSG9tZSgpIHJldHVybmluZyBhIHN0cmluZ1xuLy8gICAgIGdldENvZmZlZUJyZWFrKCkgcmV0dXJuaW5nIGEgc3RyaW5nXG4vLyAgICAgd29ya1RlYWNoZXJUYXNrcygpIHJldHVybmluZyBhIHN0cmluZ1xuXG4vLyBDcmVhdGUgYSBjbGFzcyBEaXJlY3RvciB0aGF0IHdpbGwgaW1wbGVtZW50IERpcmVjdG9ySW50ZXJmYWNlXG5cbi8vICAgICB3b3JrRnJvbUhvbWUgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIFdvcmtpbmcgZnJvbSBob21lXG4vLyAgICAgZ2V0Q29mZmVlQnJlYWsgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIEdldHRpbmcgYSBjb2ZmZWUgYnJlYWtcbi8vICAgICB3b3JrRGlyZWN0b3JUYXNrcyBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1xuXG4vLyBDcmVhdGUgYSBjbGFzcyBUZWFjaGVyIHRoYXQgd2lsbCBpbXBsZW1lbnQgVGVhY2hlckludGVyZmFjZVxuXG4vLyAgICAgd29ya0Zyb21Ib21lIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBDYW5ub3Qgd29yayBmcm9tIGhvbWVcbi8vICAgICBnZXRDb2ZmZWVCcmVhayBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgQ2Fubm90IGhhdmUgYSBicmVha1xuLy8gICAgIHdvcmtUZWFjaGVyVGFza3Mgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIEdldHRpbmcgdG8gd29ya1xuXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiBjcmVhdGVFbXBsb3llZSB3aXRoIHRoZSBmb2xsb3dpbmcgcmVxdWlyZW1lbnRzOlxuXG4vLyAgICAgSXQgY2FuIHJldHVybiBlaXRoZXIgYSBEaXJlY3RvciBvciBhIFRlYWNoZXIgaW5zdGFuY2Vcbi8vICAgICBJdCBhY2NlcHRzIDEgYXJndW1lbnRzOlxuLy8gICAgICAgICBzYWxhcnkoZWl0aGVyIG51bWJlciBvciBzdHJpbmcpXG4vLyAgICAgaWYgc2FsYXJ5IGlzIGEgbnVtYmVyIGFuZCBsZXNzIHRoYW4gNTAwIC0gSXQgc2hvdWxkIHJldHVybiBhIG5ldyBUZWFjaGVyLiBPdGhlcndpc2UgaXQgc2hvdWxkIHJldHVybiBhIERpcmVjdG9yXG5cbi8vIGltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiOyA8LSBVbmNvbW1lbnQgaWYgeW91IHdhbnQgdG8gdXNlIG5vZGUuanMuIFJlbW92ZSB0aGUgY3VycmVudCBhc3NlcnQuXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwiZG9tYWluXCI7XG5pbXBvcnQgeyBkaXNwbGF5T3V0cHV0IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5cbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHJlYWRvbmx5IHdvcmtGcm9tSG9tZTogKCkgPT4gc3RyaW5nO1xuICByZWFkb25seSBnZXRDb2ZmZWVCcmVhazogKCkgPT4gc3RyaW5nO1xuICByZWFkb25seSB3b3JrRGlyZWN0b3JUYXNrczogKCkgPT4gc3RyaW5nO1xufVxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICByZWFkb25seSB3b3JrRnJvbUhvbWU6ICgpID0+IHN0cmluZztcbiAgcmVhZG9ubHkgZ2V0Q29mZmVlQnJlYWs6ICgpID0+IHN0cmluZztcbiAgcmVhZG9ubHkgd29ya1RlYWNoZXJUYXNrczogKCkgPT4gc3RyaW5nO1xufVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XG4gIH1cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuICB9XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnRGlyZWN0b3InO1xuICB9XG59XG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XG4gIH1cbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnVGVhY2hlcic7XG4gIH1cbn1cbnR5cGUgSHVtYW5Xb3JrZXIgPSBUZWFjaGVyIHwgRGlyZWN0b3I7XG50eXBlIFNhbGFyeSA9IG51bWJlciB8IHN0cmluZztcblxuY29uc3QgY3JlYXRlRW1wbG95ZWUgPSAoc2FsYXJ5OiBTYWxhcnkpOiBIdW1hbldvcmtlciA9PiB7XG4gIHJldHVybiB0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiICYmIHNhbGFyeSA8IDUwMCA/IG5ldyBUZWFjaGVyKCkgOiBuZXcgRGlyZWN0b3IoKTtcbn1cblxuXG4vL0V4cGVjdGVkIHJlc3VsdDpcbmNvbnN0IGFzc2VydCA9IHtcbiAgc3RyaWN0RXF1YWwoYWN0dWFsOiBhbnksIGV4cGVjdGVkOiBhbnksIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuICAgICAgcmV0dXJuIChtZXNzYWdlIHx8IGBBc3NlcnRpb24gZmFpbGVkOiAke2FjdHVhbH0gIT09ICR7ZXhwZWN0ZWR9YCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIChcIkFzc2VydGlvbiBzdWNjZXNzZnVsXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc29sZS5sb2coXCJUQVNLIDVcIik7XG5jb25zb2xlLmxvZyhgSXMgdGVhY2hlciBjb3JyZWN0bHkgaW1wbGVtZW50ZWQ6ICR7YXNzZXJ0LnN0cmljdEVxdWFsKGNyZWF0ZUVtcGxveWVlKDIwMCkuY29uc3RydWN0b3IubmFtZSwgXCJUZWFjaGVyXCIpfWApO1xuLy8gVGVhY2hlclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkuY29uc3RydWN0b3IubmFtZSk7IC8vIFVzaW5nIHRoZSBwcm90b3R5cGUgbWV0aG9kXG4vLyBEaXJlY3RvclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKS50b1N0cmluZygpKTsgLy8gdXNpbmcgaXRzIG93biBtZXRob2QuXG4vLyBEaXJlY3RvclxuXG4vLyAqKioqKioqKioqKioqKioqKioqKiBUQVNLIDYgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gV3JpdGUgYSBmdW5jdGlvbiBpc0RpcmVjdG9yOlxuXG4vLyAgICAgaXQgYWNjZXB0cyBlbXBsb3llZSBhcyBhbiBhcmd1bWVudFxuLy8gICAgIGl0IHdpbGwgYmUgdXNlZCBhcyBhIHR5cGUgcHJlZGljYXRlIGFuZCBpZiB0aGUgZW1wbG95ZWUgaXMgYSBkaXJlY3RvclxuXG4vLyBXcml0ZSBhIGZ1bmN0aW9uIGV4ZWN1dGVXb3JrOlxuXG4vLyAgICAgaXQgYWNjZXB0cyBlbXBsb3llZSBhcyBhbiBhcmd1bWVudFxuLy8gICAgIGlmIHRoZSBlbXBsb3llZSBpcyBhIERpcmVjdG9yLCBpdCB3aWxsIGNhbGwgd29ya0RpcmVjdG9yVGFza3Ncbi8vICAgICBpZiB0aGUgZW1wbG95ZWUgaXMgYSBUZWFjaGVyLCBpdCB3aWxsIGNhbGwgd29ya1RlYWNoZXJUYXNrc1xuXG5jb25zb2xlLmxvZyhcIlRBU0sgNlwiKTtcblxudHlwZSBST19IdW1hbldvcmtlciA9IFJlYWRvbmx5PEh1bWFuV29ya2VyPjtcblxuLy8gZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogSHVtYW5Xb3JrZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4vLyAgIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xuLy8gfSBDb21tZW50ZWQgb3V0IGJlY2F1c2UgSSdtIHVzaW5nIHRoZSBjbGFzcyBtZXRob2QgdG9TdHJpbmdcbi8vIGFuZCByZS1pbXBsZW1lbnRpbmcgdGhlIGludGVyYWNlcyBhcyByZWFkb25seSB0eXBlcy5cbi8vICBidXQgaXQncyB0aGVyZS4gRlRSIGl0J3MgY2xlYW5lciwgc2FmZXIgYW5kIG1vcmUgcGVyZm9ybWFudC5cblxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IFJPX0h1bWFuV29ya2VyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVtcGxveWVlLnRvU3RyaW5nKCkgPT09ICdEaXJlY3RvcicgP1xuICAgIGBEaXJlY3RvcjogJHsoZW1wbG95ZWUgYXMgUmVhZG9ubHk8RGlyZWN0b3I+KS53b3JrRGlyZWN0b3JUYXNrcygpfWAgOlxuICAgIGBUZWFjaGVyOiAkeyhlbXBsb3llZSBhcyBSZWFkb25seTxUZWFjaGVyPikud29ya1RlYWNoZXJUYXNrcygpfWA7XG59XG5cbmNvbnN0IHJlYWRPbmx5VGVhY2hlcjogUmVhZG9ubHk8VGVhY2hlcj4gPSBuZXcgVGVhY2hlcigpO1xuY29uc3QgcmVhZE9ubHlEaXJlY3RvcjogUmVhZG9ubHk8RGlyZWN0b3I+ID0gbmV3IERpcmVjdG9yKCk7XG5cbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKHJlYWRPbmx5VGVhY2hlcikpO1xuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsocmVhZE9ubHlEaXJlY3RvcikpO1xuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqIFRBU0sgNyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyBXcml0ZSBhIFN0cmluZyBsaXRlcmFsIHR5cGUgbmFtZWQgU3ViamVjdHMgYWxsb3dpbmcgYVxuLy8gdmFyaWFibGUgdG8gaGF2ZSB0aGUgdmFsdWUgTWF0aCBvciBIaXN0b3J5IG9ubHkuIFdyaXRlIGEgZnVuY3Rpb24gbmFtZWQgdGVhY2hDbGFzczpcbi8vICAgICBpdCB0YWtlcyB0b2RheUNsYXNzIGFzIGFuIGFyZ3VtZW50XG4vLyAgICAgaXQgd2lsbCByZXR1cm4gdGhlIHN0cmluZyBUZWFjaGluZyBNYXRoIGlmIHRvZGF5Q2xhc3MgaXMgTWF0aFxuLy8gICAgIGl0IHdpbGwgcmV0dXJuIHRoZSBzdHJpbmcgVGVhY2hpbmcgSGlzdG9yeSBpZiB0b2RheUNsYXNzIGlzIEhpc3RvcnlcblxuY29uc29sZS5sb2coXCJUQVNLIDdcIik7XG5cbnR5cGUgU3ViamVjdHMgPSAnTWF0aCcgfCAnSGlzdG9yeSc7XG5cbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuICByZXR1cm4gYFRlYWNoaW5nICR7dG9kYXlDbGFzc31gO1xufVxuXG5jb25zdCB0ZWFjaGVyID0gY3JlYXRlRW1wbG95ZWUoMjAwKTtcblxuaWYgKHRlYWNoZXIgaW5zdGFuY2VvZiBUZWFjaGVyKSB7XG4gIGNvbnNvbGUubG9nKFwiVGVhY2hlciBpcyB0ZWFjaGluZz86IFwiICsgYXNzZXJ0LnN0cmljdEVxdWFsKHRlYWNoQ2xhc3MoJ01hdGgnKSwgJ1RlYWNoaW5nIE1hdGgnKSk7XG59IGVsc2Uge1xuICBjb25zb2xlLmxvZyhcInRlYWNoZXIgaXMgbm90IHN0dWRlbnRcIik7XG59XG5cblxuXG4vLyBUaGlzIHdpbGwgcmVuZGVyIGFsbCBvdXRwdXRzIGFsc28gaW4gdGhlIHBhZ2UuXG5cbmZ1bmN0aW9uIHJlbmRlck91dHB1dHMoKTogdm9pZCB7XG4gIGNvbnN0IG91dHB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgb3V0cHV0U2VjdGlvbi5pZCA9IFwidGVzdC1vdXRwdXRcIjtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKG91dHB1dFNlY3Rpb24pO1xuXG4gIGRpc3BsYXlPdXRwdXQoXCJUQVNLIDVcIik7XG4gIGRpc3BsYXlPdXRwdXQoYElzIHRlYWNoZXIgY29ycmVjdGx5IGltcGxlbWVudGVkOiAke2Fzc2VydC5zdHJpY3RFcXVhbChjcmVhdGVFbXBsb3llZSgyMDApLmNvbnN0cnVjdG9yLm5hbWUsIFwiVGVhY2hlclwiKX1gKTtcbiAgZGlzcGxheU91dHB1dChgRGlyZWN0b3IgdGVzdDogJHtjcmVhdGVFbXBsb3llZSgxMDAwKS5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICBkaXNwbGF5T3V0cHV0KGBTdHJpbmcgbWV0aG9kIHRlc3Q6ICR7Y3JlYXRlRW1wbG95ZWUoJyQ1MDAnKS50b1N0cmluZygpfWApO1xuXG4gIGRpc3BsYXlPdXRwdXQoXCJcXG5UQVNLIDZcIik7XG4gIGRpc3BsYXlPdXRwdXQoZXhlY3V0ZVdvcmsocmVhZE9ubHlUZWFjaGVyKSk7XG4gIGRpc3BsYXlPdXRwdXQoZXhlY3V0ZVdvcmsocmVhZE9ubHlEaXJlY3RvcikpO1xuXG4gIGRpc3BsYXlPdXRwdXQoXCJcXG5UQVNLIDdcIik7XG4gIGNvbnN0IHRlYWNoZXIgPSBjcmVhdGVFbXBsb3llZSgyMDApO1xuICBpZiAodGVhY2hlciBpbnN0YW5jZW9mIFRlYWNoZXIpIHtcbiAgICBkaXNwbGF5T3V0cHV0KGBXaGF0IGlzIHRlYWNoZXIgdGVhY2hpbmc6ICR7YXNzZXJ0LnN0cmljdEVxdWFsKHRlYWNoQ2xhc3MoJ01hdGgnKSwgJ1RlYWNoaW5nIE1hdGgnKX1gKTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVuZGVyT3V0cHV0cyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9