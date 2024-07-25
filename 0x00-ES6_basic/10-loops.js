export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const val of array) {
    res.push(appendString + val);
  }

  return res;
}
