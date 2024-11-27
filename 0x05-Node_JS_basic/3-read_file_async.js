const fs = require('fs').promises;
function countStudents(path){
    return fs.readFile(path, 'utf8')
        .then((data) => {
            const lines = data.trim().split('\n');
            const students = lines.slice(1);
            console.log(`Number of students: ${students.length}`);
            const fields = {}
            students.forEach(line => {
                const [firstname, lastname, age, field] = line.split(',');
                if(!fields[field])
                {
                    fields[field] = [];
                }
                fields[field].push(firstname);            
            });
            for (const [field, names] of Object.entries(fields))
            {
                console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
            }
        })
        .catch(() => {
            throw new Error('Cannot load the database');
        });        
}
module.exports = countStudents;
