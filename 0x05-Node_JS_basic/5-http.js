const http = require('node:http');
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
const app = http.createServer(async (req, res) => {
    if (req.url === '/students')
    {
        res.write("This is the list of our students\n")
        try {
            const data = await countStudents(process.argv[2]); // Await the result
            res.end(data);
        } catch (error) {
            res.end(error.message);
        }
    }
    else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    }

});
app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

module.exports = app;
