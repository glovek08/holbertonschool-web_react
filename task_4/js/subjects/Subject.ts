// /// <reference path="./Teacher.ts" />
// namespace Subjects {
//   export class Subject {
//     teacher: Teacher;
//
//     constructor() {
//       this.teacher = {firstName: "", lastName: ""};
//     }
//     setTeacher(teacher: Teacher) {
//       this.teacher = teacher;
//     }
//   }
// }

import { Subjects } from './Teacher';

export class Subject {
  teacher: Subjects.Teacher;
  
  constructor() {
    this.teacher = {
      firstName: "",
      lastName: ""
    }
  };

  set setTeacher(teacher: Subjects.Teacher) {
    this.teacher = teacher;
  }
}