export default function iterateThroughObject(reportWithIterator) {
  // Convert iterator to array
  const employeesArray = [...reportWithIterator];
  return employeesArray.join(' | ');
}
