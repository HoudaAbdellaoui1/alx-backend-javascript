const fs = require('fs').promises;
async function readDatabase(path){
    try {
        const data = await fs.readFile(path, 'utf8')
        const lines = data.trim().split('\n');
        const students = lines.slice(1);
        const fields = {}
        students.forEach(line => {
            const [firstname, , , field] = line.split(',');
            if(!fields[field])
            {
                fields[field] = [];
            }
            fields[field].push(firstname);            
        });
        return fields;
    } 
    catch (error) {
        throw new Error('Cannot load the database');
    }
}
module.exports = readDatabase;