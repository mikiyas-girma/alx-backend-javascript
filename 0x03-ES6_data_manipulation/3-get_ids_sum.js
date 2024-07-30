export default function getStudentIdsSum(students) {
  const sumOfIds = students.reduce((acc, curr) => acc + curr.id, 0);
  return sumOfIds;
}
