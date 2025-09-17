// /// <reference path="./Teacher.ts" />
// /// <reference path="./Subject.ts" />

// namespace Subjects {
//   export interface Teacher {
//     experienceTeachingJava?: number;
//   }

//   export class Java extends Subject {
//     getRequirements(): string {
//       return "Here is the list of requirements for Java";
//     }

//     getAvailableTeacher(): string {
//       if (!this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava <= 0) {
          // ? "No available teacher"
          // : `Available Teacher: ${this.teacher.firstName}`;
//   }
// }


import { Subject } from "./Subject";


declare module "./Teacher" { // declaration augmentation
  export namespace Subjects {
    interface Teacher {
      experienceTeachingJava?: number;
    }
  }
}
export class Java extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }
  getAvailableTeacher(): string {
    return (!this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava <= 0)
      ? "No available teacher"
      : `Available Teacher: ${this.teacher.firstName}`;
  }
}