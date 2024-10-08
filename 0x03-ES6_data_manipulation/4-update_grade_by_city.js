import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const students = getStudentsByLocation(studentsList, city);
  return students.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}
