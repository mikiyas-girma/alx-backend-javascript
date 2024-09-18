const http = require("http");
const fs = require("fs").promises;

const PORT = 1245;
const HOST = "localhost";

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, "utf-8");
    const lines = data.split("\n").filter((line) => line.trim() !== ""); // Remove empty lines
    const students = lines.slice(1); // Skip the header

    const fields = {};
    let totalStudents = 0;

    students.forEach((line) => {
      const [firstName, , , field] = line.split(",");
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
      totalStudents += 1;
    });

    let output = `Number of students: ${totalStudents}\n`;
    for (const field in fields) {
      const studentNames = fields[field].join(", ");
      output += `Number of students in ${field}: ${fields[field].length}. List: ${studentNames}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === "/") {
    // For the root path "/"
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    const dbFilePath = process.argv[2];

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the list of our students\n");

    try {
      const studentInfo = await countStudents(dbFilePath);
      res.end(studentInfo);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    // For any other path, return a 404 error
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
