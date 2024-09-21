const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
    const students = lines.slice(1); // Skip the header

    const fields = {};
    let totalStudents = 0;

    students.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
      totalStudents += 1;
    });

    let output = `Number of students: ${totalStudents}\n`;
    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        const studentNames = fields[field].join(', ');
        output += `Number of students in ${field}: ${fields[field].length}. List: ${studentNames}\n`;
      }
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
