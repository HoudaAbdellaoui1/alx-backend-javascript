const fs = require('fs');

function countStudents(path) {
  try {
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
      console.log(`Number of students in ${field}:${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
