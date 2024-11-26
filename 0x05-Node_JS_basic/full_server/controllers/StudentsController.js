const readDatabase = require("../utils");

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      let output = "This is the list of our students\n";
      const studentsFields = await readDatabase(process.argv[2]);
      const fields = Object.keys(studentsFields).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      fields.forEach((field) => {
        output += `Number of students in ${field}: ${
          studentsFields[field].length
        }. List: ${studentsFields[field].join(", ")}\n`;
      });
      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send("Cannot load the database");
    }
  }
  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!["CS", "SWE"].includes(major)) {
      return response.status(500).send("Major parameter must be CS or SWE");
    }

    try {
      const studentsFields = await readDatabase(process.argv[2]);
      const studentsbyMajor = studentsFields[major] || [];
      response.status(200).send(`List: ${studentsbyMajor.join(", ")}`);
    } catch (error) {
      response.status(500).send("Cannot load the database");
    }
  }
}
module.exports = StudentsController;
