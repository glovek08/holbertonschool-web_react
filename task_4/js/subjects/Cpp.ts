// /// <reference path="./Teacher.ts" />
// /// <reference path="./Subject.ts" />

// namespace Subjects {
//   export interface Teacher {
//     experienceTeachingC?: number;
//   }

//   export class Cpp extends Subject {
//     getRequirements(): string {
//       return "Here is the list of requirements for Cpp";
//     }

//     getAvailableTeacher(): string {
//       if (!this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0) {
          // ? "No available teacher"
          // : `Available Teacher: ${this.teacher.firstName}`;
//   }
// }


import { Subject } from "./Subject";


declare module "./Teacher" { // declaration augmentation
  export namespace Subjects {
    interface Teacher {
      experienceTeachingC?: number;
    }
  }
}
export class Cpp extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }
  getAvailableTeacher(): string {
    return (!this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0)
      ? "No available teacher"
      : `Available Teacher: ${this.teacher.firstName}`;
  }
}