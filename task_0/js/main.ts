
interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

const studentsList: Student[] = [];

const student1: Student = {
  firstName: 'Federico',
  lastName: 'Valverde',
  age: 91,
  location: 'Madrid',
};

const student2: Student = {
  firstName: 'Agustin',
  lastName: 'Cannobio',
  age: 122,
  location: 'Antartica',
}

studentsList.push(student1, student2);

// console.log(studentsList);

const createStudentsTable = () => {
  const studentsTable = document.createElement('table');
  studentsList.forEach((el): void => {
    if (studentsTable.tHead === null) {
      const theadRow = document.createElement('tr');
      const thName = document.createElement('th');
      const thLocation = document.createElement('th');
      thName.textContent = 'Name';
      thLocation.textContent = 'Location';
      theadRow.appendChild(thName);
      theadRow.appendChild(thLocation);
      const thead = document.createElement('thead');
      thead.appendChild(theadRow);
      studentsTable.appendChild(thead);
    }
    const row = document.createElement('tr')
    const td_name = document.createElement('td');
    const td_location = document.createElement('td');

    td_name.textContent = el.firstName;
    td_location.textContent = el.location;

    row.appendChild(td_name);
    row.appendChild(td_location);

    studentsTable.appendChild(row);
  })
  document.documentElement.appendChild(studentsTable);
}

createStudentsTable();