export default function concatArrays(array1, array2, string) {
  return ([...array1, ...array2, ...string.match(/.{1,1}/g)]);
}
