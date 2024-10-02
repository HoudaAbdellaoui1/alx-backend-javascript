export default function appendToEachArrayValue(array, appendString) {
  for (let elt of array) {
    let value =  array[elt];
    array[elt] = appendString + value;
  }

  return array;
}
