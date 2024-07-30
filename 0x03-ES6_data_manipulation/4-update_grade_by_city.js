function getGrade(id, newGrades) {
  const grade = newGrades.filter((grade) => grade.studentId === id);

  if (grade.length > 0) {
    return grade[0].grade;
  }

  return 'N/A';
}

export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStuds = students.filter((student) => student.location === city);
  const updatedStuds = filteredStuds.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: getGrade(student.id, newGrades),
  }));

  return updatedStuds;
}
