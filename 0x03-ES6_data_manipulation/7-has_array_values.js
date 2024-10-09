export default function hasValuesFromArray(set, array) {
  let boolean = true;
  array.forEach((element) => {
    if (!set.has(element)) {
      boolean = false;
    }
  });
  return boolean;
}
