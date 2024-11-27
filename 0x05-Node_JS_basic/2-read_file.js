const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const file = fs.readFileSync(path, 'utf-8');
  const lines = file.trim().split('\n');
  const students = lines.slice(1);
  console.log('Number of students: ', students.length);
  const fields = {};
  students.forEach((line) => {
    const [firstname, , , field] = line.split(',');
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  });
  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}
module.exports = countStudents;
