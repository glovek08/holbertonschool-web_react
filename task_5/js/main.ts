import { displayOutput } from "./display"

displayOutput("TASK 5", "heading");

interface MinorCredits {
  credits: number,
  brand: "minor",
}
interface MajorCredits {
  credits: number,
  brand: "major",
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MinorCredits) => {
  return {
    total: subject1.credits + subject2.credits,
    majorCredits: subject1.credits,
  };
};
const sumMinorCredits = (subject1: MajorCredits, subject2: MinorCredits) => {
  return {
    total: subject1.credits + subject2.credits,
    minorCredits: subject2.credits,
  };
};

const major: MajorCredits = { credits: 3, brand: "major" };
const minor: MinorCredits = { credits: 2, brand: "minor" };

displayOutput(`MajorCredits: ${JSON.stringify(major)}`, "heading");
displayOutput(`MainorCredits: ${JSON.stringify(minor)}`, "heading");
displayOutput(`sumMajorCredits: ${JSON.stringify(sumMajorCredits(major, minor))}`, "heading");