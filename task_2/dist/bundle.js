/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBc0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUN6RCxJQUFNLGdCQUFnQixHQUF1QixJQUFJLFFBQVEsRUFBRSxDQUFDO0FBRTVELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLy8gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBUQVNLIDUgKioqKioqKioqKioqKioqKioqKioqXG4vLyBDcmVhdGUgdGhlIERpcmVjdG9ySW50ZXJmYWNlIGludGVyZmFjZSB3aXRoIHRoZSAzIGV4cGVjdGVkIG1ldGhvZHM6XG5cbi8vICAgICB3b3JrRnJvbUhvbWUoKSByZXR1cm5pbmcgYSBzdHJpbmdcbi8vICAgICBnZXRDb2ZmZWVCcmVhaygpIHJldHVybmluZyBhIHN0cmluZ1xuLy8gICAgIHdvcmtEaXJlY3RvclRhc2tzKCkgcmV0dXJuaW5nIGEgc3RyaW5nXG5cbi8vIENyZWF0ZSB0aGUgVGVhY2hlckludGVyZmFjZSBpbnRlcmZhY2Ugd2l0aCB0aGUgMyBleHBlY3RlZCBtZXRob2RzOlxuXG4vLyAgICAgd29ya0Zyb21Ib21lKCkgcmV0dXJuaW5nIGEgc3RyaW5nXG4vLyAgICAgZ2V0Q29mZmVlQnJlYWsoKSByZXR1cm5pbmcgYSBzdHJpbmdcbi8vICAgICB3b3JrVGVhY2hlclRhc2tzKCkgcmV0dXJuaW5nIGEgc3RyaW5nXG5cbi8vIENyZWF0ZSBhIGNsYXNzIERpcmVjdG9yIHRoYXQgd2lsbCBpbXBsZW1lbnQgRGlyZWN0b3JJbnRlcmZhY2VcblxuLy8gICAgIHdvcmtGcm9tSG9tZSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgV29ya2luZyBmcm9tIGhvbWVcbi8vICAgICBnZXRDb2ZmZWVCcmVhayBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgR2V0dGluZyBhIGNvZmZlZSBicmVha1xuLy8gICAgIHdvcmtEaXJlY3RvclRhc2tzIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXG5cbi8vIENyZWF0ZSBhIGNsYXNzIFRlYWNoZXIgdGhhdCB3aWxsIGltcGxlbWVudCBUZWFjaGVySW50ZXJmYWNlXG5cbi8vICAgICB3b3JrRnJvbUhvbWUgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIENhbm5vdCB3b3JrIGZyb20gaG9tZVxuLy8gICAgIGdldENvZmZlZUJyZWFrIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBDYW5ub3QgaGF2ZSBhIGJyZWFrXG4vLyAgICAgd29ya1RlYWNoZXJUYXNrcyBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgR2V0dGluZyB0byB3b3JrXG5cbi8vIENyZWF0ZSBhIGZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlIHdpdGggdGhlIGZvbGxvd2luZyByZXF1aXJlbWVudHM6XG5cbi8vICAgICBJdCBjYW4gcmV0dXJuIGVpdGhlciBhIERpcmVjdG9yIG9yIGEgVGVhY2hlciBpbnN0YW5jZVxuLy8gICAgIEl0IGFjY2VwdHMgMSBhcmd1bWVudHM6XG4vLyAgICAgICAgIHNhbGFyeShlaXRoZXIgbnVtYmVyIG9yIHN0cmluZylcbi8vICAgICBpZiBzYWxhcnkgaXMgYSBudW1iZXIgYW5kIGxlc3MgdGhhbiA1MDAgLSBJdCBzaG91bGQgcmV0dXJuIGEgbmV3IFRlYWNoZXIuIE90aGVyd2lzZSBpdCBzaG91bGQgcmV0dXJuIGEgRGlyZWN0b3JcblxuLy8gaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7IDwtIFVuY29tbWVudCBpZiB5b3Ugd2FudCB0byB1c2Ugbm9kZS5qcy4gUmVtb3ZlIHRoZSBjdXJyZW50IGFzc2VydC5cbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJkb21haW5cIjtcblxuXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICByZWFkb25seSB3b3JrRnJvbUhvbWU6ICgpID0+IHN0cmluZztcbiAgcmVhZG9ubHkgZ2V0Q29mZmVlQnJlYWs6ICgpID0+IHN0cmluZztcbiAgcmVhZG9ubHkgd29ya0RpcmVjdG9yVGFza3M6ICgpID0+IHN0cmluZztcbn1cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgcmVhZG9ubHkgd29ya0Zyb21Ib21lOiAoKSA9PiBzdHJpbmc7XG4gIHJlYWRvbmx5IGdldENvZmZlZUJyZWFrOiAoKSA9PiBzdHJpbmc7XG4gIHJlYWRvbmx5IHdvcmtUZWFjaGVyVGFza3M6ICgpID0+IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xuICB9XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcbiAgfVxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0RpcmVjdG9yJztcbiAgfVxufVxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZSc7XG4gIH1cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xuICB9XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1RlYWNoZXInO1xuICB9XG59XG50eXBlIEh1bWFuV29ya2VyID0gVGVhY2hlciB8IERpcmVjdG9yO1xudHlwZSBTYWxhcnkgPSBudW1iZXIgfCBzdHJpbmc7XG5cbmNvbnN0IGNyZWF0ZUVtcGxveWVlID0gKHNhbGFyeTogU2FsYXJ5KTogSHVtYW5Xb3JrZXIgPT4ge1xuICByZXR1cm4gdHlwZW9mIHNhbGFyeSA9PT0gXCJudW1iZXJcIiAmJiBzYWxhcnkgPCA1MDAgPyBuZXcgVGVhY2hlcigpIDogbmV3IERpcmVjdG9yKCk7XG59XG5cblxuLy9FeHBlY3RlZCByZXN1bHQ6XG5jb25zdCBhc3NlcnQgPSB7XG4gIHN0cmljdEVxdWFsKGFjdHVhbDogYW55LCBleHBlY3RlZDogYW55LCBtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgaWYgKGFjdHVhbCAhPT0gZXhwZWN0ZWQpIHtcbiAgICAgIHJldHVybiAobWVzc2FnZSB8fCBgQXNzZXJ0aW9uIGZhaWxlZDogJHthY3R1YWx9ICE9PSAke2V4cGVjdGVkfWApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAoXCJBc3NlcnRpb24gc3VjY2Vzc2Z1bFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnNvbGUubG9nKFwiVEFTSyA1XCIpO1xuY29uc29sZS5sb2coYElzIHRlYWNoZXIgY29ycmVjdGx5IGltcGxlbWVudGVkOiAke2Fzc2VydC5zdHJpY3RFcXVhbChjcmVhdGVFbXBsb3llZSgyMDApLmNvbnN0cnVjdG9yLm5hbWUsIFwiVGVhY2hlclwiKX1gKTtcbi8vIFRlYWNoZXJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApLmNvbnN0cnVjdG9yLm5hbWUpOyAvLyBVc2luZyB0aGUgcHJvdG90eXBlIG1ldGhvZFxuLy8gRGlyZWN0b3JcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykudG9TdHJpbmcoKSk7IC8vIHVzaW5nIGl0cyBvd24gbWV0aG9kLlxuLy8gRGlyZWN0b3JcblxuLy8gKioqKioqKioqKioqKioqKioqKiogVEFTSyA2ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFdyaXRlIGEgZnVuY3Rpb24gaXNEaXJlY3RvcjpcblxuLy8gICAgIGl0IGFjY2VwdHMgZW1wbG95ZWUgYXMgYW4gYXJndW1lbnRcbi8vICAgICBpdCB3aWxsIGJlIHVzZWQgYXMgYSB0eXBlIHByZWRpY2F0ZSBhbmQgaWYgdGhlIGVtcGxveWVlIGlzIGEgZGlyZWN0b3JcblxuLy8gV3JpdGUgYSBmdW5jdGlvbiBleGVjdXRlV29yazpcblxuLy8gICAgIGl0IGFjY2VwdHMgZW1wbG95ZWUgYXMgYW4gYXJndW1lbnRcbi8vICAgICBpZiB0aGUgZW1wbG95ZWUgaXMgYSBEaXJlY3RvciwgaXQgd2lsbCBjYWxsIHdvcmtEaXJlY3RvclRhc2tzXG4vLyAgICAgaWYgdGhlIGVtcGxveWVlIGlzIGEgVGVhY2hlciwgaXQgd2lsbCBjYWxsIHdvcmtUZWFjaGVyVGFza3NcblxuY29uc29sZS5sb2coXCJUQVNLIDZcIik7XG5cbnR5cGUgUk9fSHVtYW5Xb3JrZXIgPSBSZWFkb25seTxIdW1hbldvcmtlcj47XG5cbi8vIGZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IEh1bWFuV29ya2VyKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuLy8gICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3Rvcjtcbi8vIH0gQ29tbWVudGVkIG91dCBiZWNhdXNlIEknbSB1c2luZyB0aGUgY2xhc3MgbWV0aG9kIHRvU3RyaW5nXG4vLyBhbmQgcmUtaW1wbGVtZW50aW5nIHRoZSBpbnRlcmFjZXMgYXMgcmVhZG9ubHkgdHlwZXMuXG4vLyAgYnV0IGl0J3MgdGhlcmUuIEZUUiBpdCdzIGNsZWFuZXIsIHNhZmVyIGFuZCBtb3JlIHBlcmZvcm1hbnQuXG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBST19IdW1hbldvcmtlcik6IHN0cmluZyB7XG4gIHJldHVybiBlbXBsb3llZS50b1N0cmluZygpID09PSAnRGlyZWN0b3InID8gXG4gICAgYERpcmVjdG9yOiAkeyhlbXBsb3llZSBhcyBSZWFkb25seTxEaXJlY3Rvcj4pLndvcmtEaXJlY3RvclRhc2tzKCl9YCA6IFxuICAgIGBUZWFjaGVyOiAkeyhlbXBsb3llZSBhcyBSZWFkb25seTxUZWFjaGVyPikud29ya1RlYWNoZXJUYXNrcygpfWA7XG59XG5cbmNvbnN0IHJlYWRPbmx5VGVhY2hlcjogUmVhZG9ubHk8VGVhY2hlcj4gPSBuZXcgVGVhY2hlcigpO1xuY29uc3QgcmVhZE9ubHlEaXJlY3RvcjogUmVhZG9ubHk8RGlyZWN0b3I+ID0gbmV3IERpcmVjdG9yKCk7XG5cbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKHJlYWRPbmx5VGVhY2hlcikpO1xuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsocmVhZE9ubHlEaXJlY3RvcikpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==