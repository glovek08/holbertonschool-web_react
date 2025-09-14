// Write an interface named Teacher that accepts the following elements:

//     firstName: string - can only be set during initialization of an object of this interface
//     lastName: string - can only be set during initialization of an object of this interface
//     fullTimeEmployee: boolean
//     yearsOfExperience: number - optional
//     location: string
//     Add the possibility to add any attribute to the Teacher object like contract(boolean) without specifying the name of the attribute:
//         Property should be a string
//         Type of this property can be anything

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log("TASK 1");

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

// ****************************** TASK 2 **********************************

// Write an interface named Directors that extends Teacher.
// It requires an attribute named numberOfReports(number)

interface Directors extends Teacher {
  numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("TASK 2");

console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17


// ************************** TASK 3 ********************************

// Write a function printTeacher:

//     It accepts two arguments firstName and lastName
//     It returns the first letter of the firstName and the full lastName
//     Example: printTeacher("John", "Doe") -> J. Doe

// Write an interface for the function named printTeacherFunction.

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(`TASK 3`);

console.log(printTeacher(director1.firstName, director1.lastName));

// *************************** TASK 4 *********************************

// Write a Class named StudentClass:

//     The constructor accepts firstName(string) and lastName(string) arguments
//     The class has a method named workOnHomework that return the string Currently working
//     The class has a method named displayName. It returns the firstName of the student
//     The constructor of the class should be described through an Interface
//     The class should be described through an Interface

// Requirements:

//     You can reuse the Webpack configuration from the previous exercise to compile the code.
//     When running npm run build, no TypeScript error should be displayed.
//     Every variable should use TypeScript when possible.

interface InterfaceStudent {
  workOnHomework(): string;
  displayName(): string;
}

interface ConstructorStudent {
  new (
    firstName: string,
    lastName: string,
  ): InterfaceStudent
}

class StudentClass implements InterfaceStudent {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently Working'
  }
  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Pepe", "Sanchez");
// try {
//   const student1 = new StudentClass("Pepe", 123);
// } catch (error) {
//   console.log(error)
// }
// const student2 = new StudentClass("Pepe", 23);

console.log("TASK 4")
console.log(student);


