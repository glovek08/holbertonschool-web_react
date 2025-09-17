
// Write an ambient file within task_3/js, named crud.d.ts
// containing the type declarations for each crud function.
// At the top of the file import RowID and RowElement from interface.ts.

import { RowID, RowElement } from "./interface";

// export function insertRow(row) {
//   console.log('Insert row', row);
//   return Math.floor(Math.random() * Math.floor(1000));
// }

// export function deleteRow(rowId) {
//   console.log('Delete row id', rowId);
//   return;
// }

// export function updateRow(rowId, row) {
//   console.log(`Update row ${rowId}`, row);

//   return rowId;
// }

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;