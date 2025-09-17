import { displayOutput } from "./display";
import { Subjects } from "./subjects/Teacher";
import { Subject } from "./subjects/Subject";
import { Cpp } from "./subjects/Cpp";
import { React } from "./subjects/React";

displayOutput("TASK 4", "heading");

const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
  experienceTeachingReact: 5
};

displayOutput("Teacher:", "heading");
displayOutput(JSON.stringify(cTeacher, null, 2), "code");

// cpp teacher
const cpp = new Cpp();
cpp.setTeacher = cTeacher;
displayOutput(`Cpp Subject ${JSON.stringify(cpp, null, 2)}`, "heading");
displayOutput(`Requirements: ${cpp.getRequirements()}`);
displayOutput(`${cpp.getAvailableTeacher()}`);

// react teacher
const react = new React();
react.setTeacher = cTeacher;
displayOutput(`React Subject: ${JSON.stringify(react, null, 2)}`, "heading");
displayOutput(`Requirements: ${react.getRequirements()}`);
displayOutput(`${react.getAvailableTeacher()}`);

displayOutput("Teacher doens't have C experience:", "heading");
const newTeacher: Subjects.Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  experienceTeachingReact: 7
};

cpp.setTeacher = newTeacher;
displayOutput(`${cpp.getAvailableTeacher()}`);

displayOutput("Teacher doesn't have React experience:", "heading");
const anotherTeacher: Subjects.Teacher = {
  firstName: "Bob",
  lastName: "Johnson",
  experienceTeachingC: 8
};

react.setTeacher = anotherTeacher;
displayOutput(`${react.getAvailableTeacher()}`);