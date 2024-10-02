export default function appendToEachArrayValue(array, appendString) {
  for (let elt of array) {
    const value = elt;
    elt = appendString + value;
  }

  return array;
}
