// import assert from "assert";
import { create } from "domain";

interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}
interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
  toString(): string {
    return 'Director';
  }
}
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
  toString(): string {
    return 'Teacher';
  }
}
type HumanWorker = Teacher | Director;
type Salary = number | string;

const createEmployee = (salary: Salary): HumanWorker => {
  return typeof salary === "number" && salary < 500 ? new Teacher() : new Director();
}


//Expected result:
const assert = {
  strictEqual(actual: any, expected: any, message?: string) {
    if (actual !== expected) {
      return (message || `Assertion failed: ${actual} !== ${expected}`);
    }
    else {
      return ("Assertion successful");
    }
  }
};

console.log(`Is teacher correctly implemented: ${assert.strictEqual(createEmployee(200).constructor.name, "Teacher")}`);
// Teacher
console.log(createEmployee(1000).constructor.name);  // Using the prototype method
// Director
console.log(createEmployee('$500').toString()); // using its own method.
// Director
