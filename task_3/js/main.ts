/// <reference path="./crud.d.ts" />

// Triple dash directives are outdated. I'm leaving it for the project.
// TypeScript automatically handles the type declarations 
// It's only used for namespacing.
// from crud.d.ts when crud.js is imported.
// Always use ES modules.

import { displayOutput } from "./display";
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

Object.assign(document.documentElement.style, {
  background: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  flexBasis: "900px"
});

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
}

displayOutput(`New Row Object ${JSON.stringify(row, null, 2)}`, "code");


// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
//Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
// Finally, call the updateRow and deleteRow commands.

const newRowID: RowID = CRUD.insertRow(row);
displayOutput(`New Row ID: ${newRowID}`, "p");

const updatedRow: RowElement = {...row, age: 23};
displayOutput(`Updated Row: ${JSON.stringify(updatedRow, null, 2)}`, "code");

CRUD.deleteRow(newRowID);
displayOutput(`Deleted Row ID: ${newRowID}`, "p");
