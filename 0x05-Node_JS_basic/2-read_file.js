const fs = require('fs');

/**
 * Read file
 * @param {string} path - Path to file
 */

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');

    const validLines = lines.filter((line) => line.trim() !== '').slice(1);

    let totalStudents = 0;
    const fields = {};

    validLines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
      totalStudents += 1;
    });
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        const students = fields[field];
        console.log(
          `Number of students in ${field}: ${
            students.length
          }. List: ${students.join(', ')}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
