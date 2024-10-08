import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(studentsList) {
  const counter = 0;
  const ids = getListStudentIds(studentsList);
  return ids.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    counter,
  );
}
