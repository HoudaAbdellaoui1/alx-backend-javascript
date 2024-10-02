export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];
  for (const dept of Object.keys(allEmployees)) {
    employees.push(...allEmployees[dept]);
  }
  return employees[Symbol.iterator]();
}
