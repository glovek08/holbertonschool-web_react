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
console.log("Is teacher correctly implemented: ".concat(assert.strictEqual(createEmployee(200).constructor.name, "Teache"))); // Using the prototype method
// Teacher
console.log(createEmployee(1000).constructor.name);
// Director
console.log(createEmployee('$500').toString()); // using its own method.

// Director

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7O0FDT0E7SUFBQTtJQWFBLENBQUM7SUFaQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUNELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNELDJCQUFRLEdBQVI7UUFDRSxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFDRDtJQUFBO0lBYUEsQ0FBQztJQVpDLDhCQUFZLEdBQVo7UUFDRSxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0UsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsa0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQ0QsMEJBQVEsR0FBUjtRQUNFLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUlELElBQU0sY0FBYyxHQUFHLFVBQUMsTUFBYztJQUNwQyxPQUFPLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3JGLENBQUM7QUFHRCxrQkFBa0I7QUFDbEIsSUFBTSxNQUFNLEdBQUc7SUFDYixXQUFXLFlBQUMsTUFBVyxFQUFFLFFBQWEsRUFBRSxPQUFnQjtRQUN0RCxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkIsT0FBTyxDQUFDLE9BQU8sSUFBSSw0QkFBcUIsTUFBTSxrQkFBUSxRQUFRLENBQUUsQ0FBQyxDQUFDO1NBQ25FO2FBQ0k7WUFDSCxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBcUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7QUFDckosVUFBVTtBQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuRCxXQUFXO0FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUF3Qjs7QUFDeEUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJkb21haW5cIjtcblxuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyxcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nLFxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcsXG59XG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcsXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyxcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcsXG59XG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XG4gIH1cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuICB9XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnRGlyZWN0b3InO1xuICB9XG59XG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XG4gIH1cbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnVGVhY2hlcic7XG4gIH1cbn1cbnR5cGUgSHVtYW5Xb3JrZXIgPSBUZWFjaGVyIHwgRGlyZWN0b3I7XG50eXBlIFNhbGFyeSA9IG51bWJlciB8IHN0cmluZztcblxuY29uc3QgY3JlYXRlRW1wbG95ZWUgPSAoc2FsYXJ5OiBTYWxhcnkpOiBIdW1hbldvcmtlciA9PiB7XG4gIHJldHVybiB0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiICYmIHNhbGFyeSA8IDUwMCA/IG5ldyBUZWFjaGVyKCkgOiBuZXcgRGlyZWN0b3IoKTtcbn1cblxuXG4vL0V4cGVjdGVkIHJlc3VsdDpcbmNvbnN0IGFzc2VydCA9IHtcbiAgc3RyaWN0RXF1YWwoYWN0dWFsOiBhbnksIGV4cGVjdGVkOiBhbnksIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuICAgICAgcmV0dXJuIChtZXNzYWdlIHx8IGBBc3NlcnRpb24gZmFpbGVkOiAke2FjdHVhbH0gIT09ICR7ZXhwZWN0ZWR9YCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIChcIkFzc2VydGlvbiBzdWNjZXNzZnVsXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc29sZS5sb2coYElzIHRlYWNoZXIgY29ycmVjdGx5IGltcGxlbWVudGVkOiAke2Fzc2VydC5zdHJpY3RFcXVhbChjcmVhdGVFbXBsb3llZSgyMDApLmNvbnN0cnVjdG9yLm5hbWUsIFwiVGVhY2hlXCIpfWApOyAvLyBVc2luZyB0aGUgcHJvdG90eXBlIG1ldGhvZFxuLy8gVGVhY2hlclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkuY29uc3RydWN0b3IubmFtZSk7XG4vLyBEaXJlY3RvclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKS50b1N0cmluZygpKTsgLy8gdXNpbmcgaXRzIG93biBtZXRob2QuXG4vLyBEaXJlY3RvclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9