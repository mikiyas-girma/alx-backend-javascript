export default function getStudentsByLocation(students, city) {
  const studs = students.filter((student) => student.location === city);
  return studs;
}
