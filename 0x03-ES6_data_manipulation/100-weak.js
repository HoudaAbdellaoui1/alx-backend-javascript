export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the WeakMap
  if (weakMap.has(endpoint)) {
    // If it exists, increment the count
    const currentCount = weakMap.get(endpoint);
    weakMap.set(endpoint, currentCount + 1);

    if (currentCount + 1 >= 5) {
      throw new Error('Endpoint load is high.');
    }
  } else {
    weakMap.set(endpoint, 1);
  }

  return weakMap.get(endpoint);
}
