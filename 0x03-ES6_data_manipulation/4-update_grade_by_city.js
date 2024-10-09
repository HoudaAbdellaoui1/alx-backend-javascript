export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const students = studentsList.filter((student) => student.location === city);
  return students.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}
