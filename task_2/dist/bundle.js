/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

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
console.log(createEmployee(200).constructor.name);
// Teacher
console.log(createEmployee(1000).toString());
// Director
console.log(createEmployee('$500').toString());
// Director

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVVBO0lBQUE7SUFhQSxDQUFDO0lBWkMsK0JBQVksR0FBWjtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDRSxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDRSxPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQ0UsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBQ0Q7SUFBQTtJQWFBLENBQUM7SUFaQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNELDBCQUFRLEdBQVI7UUFDRSxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUFJRCxJQUFNLGNBQWMsR0FBRyxVQUFDLE1BQWM7SUFDcEMsT0FBTyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNyRixDQUFDO0FBR0Qsa0JBQWtCO0FBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxVQUFVO0FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM3QyxXQUFXO0FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMvQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcsXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyxcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nLFxufVxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nLFxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcsXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nLFxufVxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xuICB9XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcbiAgfVxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0RpcmVjdG9yJztcbiAgfVxufVxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZSc7XG4gIH1cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xuICB9XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1RlYWNoZXInO1xuICB9XG59XG50eXBlIEh1bWFuV29ya2VyID0gIFRlYWNoZXIgfCBEaXJlY3RvcjtcbnR5cGUgU2FsYXJ5ID0gbnVtYmVyIHwgc3RyaW5nO1xuXG5jb25zdCBjcmVhdGVFbXBsb3llZSA9IChzYWxhcnk6IFNhbGFyeSk6IEh1bWFuV29ya2VyID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBzYWxhcnkgPT09IFwibnVtYmVyXCIgJiYgc2FsYXJ5IDwgNTAwID8gbmV3IFRlYWNoZXIoKSA6IG5ldyBEaXJlY3RvcigpO1xufVxuXG5cbi8vRXhwZWN0ZWQgcmVzdWx0OlxuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApLmNvbnN0cnVjdG9yLm5hbWUpO1xuLy8gVGVhY2hlclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkudG9TdHJpbmcoKSk7XG4vLyBEaXJlY3RvclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKS50b1N0cmluZygpKTtcbi8vIERpcmVjdG9yIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9