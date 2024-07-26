export default function createIteratorObject(report) {
  const names = [];

  for (const item of Object.values(report.allEmployees)) {
    names.push(...item);
  }

  return names;
}
