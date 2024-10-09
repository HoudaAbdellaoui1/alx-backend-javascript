export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((values, keys) => {
    if (values === 1) {
      map.set(keys, 100);
    }
  });
  return map;
}
