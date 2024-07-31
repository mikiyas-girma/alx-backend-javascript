interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const stud1: Student = {
  firstName: 'mikiyas',
  lastName: 'girma',
  age: 23,
  location: 'Ethiopia'
}

const stud2: Student = {
  firstName: 'Abebe',
  lastName: 'Bekele',
  age: 30,
  location: 'USA'
}

const studentsList: Array<Student> = [stud1, stud2];

const createTable = (students: Array<Student>) => {
  const table = document.createElement('table');
  table.setAttribute('id', 'studentList');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const headers = ['First Name', 'Location'];
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  students.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  document.body.appendChild(table);
};

createTable(studentsList);
