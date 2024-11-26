const express = require('express')
const app = express();
const port = 1245;
const fs = require('fs').promises;
async function countStudents(path){
        try {
            const data = await fs.readFile(path, 'utf8')
            const lines = data.trim().split('\n');
            const students = lines.slice(1);
            let result = `Number of students: ${students.length}\n`;
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
                result +=`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
            }
            return result.trim();
        } 
        catch (error) {
            throw new Error('Cannot load the database');
        }
}

app.get('/', (req, res)=> {
    res.send('Hello Holberton School!')
});
app.get('/students', async (req, res)=> {
    const header = "This is the list of our students\n";
        try {
            const data = await countStudents(process.argv[2]); // Await the result
            res.send(header + data);
        } catch (error) {
            res.send(error.message);
        }
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
module.exports = app;
