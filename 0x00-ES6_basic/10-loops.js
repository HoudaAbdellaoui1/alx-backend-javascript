export default function appendToEachArrayValue(array, appendString) {
  for (const elt of array) {
    elt = appendString + elt;
  }

  return array;
}
