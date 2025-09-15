
//  ****************************** TASK 5 *********************
// Create the DirectorInterface interface with the 3 expected methods:

//     workFromHome() returning a string
//     getCoffeeBreak() returning a string
//     workDirectorTasks() returning a string

// Create the TeacherInterface interface with the 3 expected methods:

//     workFromHome() returning a string
//     getCoffeeBreak() returning a string
//     workTeacherTasks() returning a string

// Create a class Director that will implement DirectorInterface

//     workFromHome should return the string Working from home
//     getCoffeeBreak should return the string Getting a coffee break
//     workDirectorTasks should return the string Getting to director tasks

// Create a class Teacher that will implement TeacherInterface

//     workFromHome should return the string Cannot work from home
//     getCoffeeBreak should return the string Cannot have a break
//     workTeacherTasks should return the string Getting to work

// Create a function createEmployee with the following requirements:

//     It can return either a Director or a Teacher instance
//     It accepts 1 arguments:
//         salary(either number or string)
//     if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

// import assert from "assert"; <- Uncomment if you want to use node.js. Remove the current assert.
import { create } from "domain";


interface DirectorInterface {
  readonly workFromHome: () => string;
  readonly getCoffeeBreak: () => string;
  readonly workDirectorTasks: () => string;
}
interface TeacherInterface {
  readonly workFromHome: () => string;
  readonly getCoffeeBreak: () => string;
  readonly workTeacherTasks: () => string;
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

console.log("TASK 5");
console.log(`Is teacher correctly implemented: ${assert.strictEqual(createEmployee(200).constructor.name, "Teacher")}`);
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

type RO_HumanWorker = Readonly<HumanWorker>;

// function isDirector(employee: HumanWorker): employee is Director {
//   return employee instanceof Director;
// } Commented out because I'm using the class method toString
// and re-implementing the interaces as readonly types.
//  but it's there. FTR it's cleaner, safer and more performant.

function executeWork(employee: RO_HumanWorker): string {
  return employee.toString() === 'Director' ? 
    `Director: ${(employee as Readonly<Director>).workDirectorTasks()}` : 
    `Teacher: ${(employee as Readonly<Teacher>).workTeacherTasks()}`;
}

const readOnlyTeacher: Readonly<Teacher> = new Teacher();
const readOnlyDirector: Readonly<Director> = new Director();

console.log(executeWork(readOnlyTeacher));
console.log(executeWork(readOnlyDirector));