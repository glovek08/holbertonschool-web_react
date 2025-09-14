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

// ******************************   Task 2 **********************************
// Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

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

console.log("TASK 2:");

console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17