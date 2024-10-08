export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const ids = [];
  array.forEach((obj) => {
    ids.push(obj.id);
  });
  return ids;
}
