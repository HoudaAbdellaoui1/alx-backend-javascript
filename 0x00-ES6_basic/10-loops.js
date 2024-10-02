export default function appendToEachArrayValue(array, appendString) {
  for (const elt of array) {
    const value = elt;
    elt = appendString + value;
  }

  return array;
}
