interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  const student1: Student = {
    firstName: "Ali",
    lastName: "Kamal",
    age: 65,
    location: 'Tangier',
  };
    const student2: Student = {
        firstName: 'Amal',
        lastName: 'Saqr',
        age: 19,
        location: 'Houston',
  };

const studentsList = [student1, student2];
const table = [];
studentsList.map((student)=> {
    table.push(student.firstName, student.location);    
})

// // Create the table header
// const headerRow = document.createElement('tr');
// const firstNameHeader = document.createElement('th');
// firstNameHeader.textContent = 'First Name';
// const locationHeader = document.createElement('th');
// locationHeader.textContent = 'Location';

// headerRow.appendChild(firstNameHeader);
// headerRow.appendChild(locationHeader);
// table.appendChild(headerRow);

// // Iterate over the studentsList array and append rows to the table
// studentsList.forEach((student) => {
//   // Create a new row for each student
//   const row = document.createElement('tr');

//   // Create the first cell for the student's first name
//   const firstNameCell = document.createElement('td');
//   firstNameCell.textContent = student.firstName;

//   // Create the second cell for the student's location
//   const locationCell = document.createElement('td');
//   locationCell.textContent = student.location;

//   // Append the cells to the row
//   row.appendChild(firstNameCell);
//   row.appendChild(locationCell);

//   // Append the row to the table
//   table.appendChild(row);
// });