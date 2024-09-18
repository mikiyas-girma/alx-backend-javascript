const http = require("http");
const countStudents = require("./countStudents");

const PORT = 1245;
const HOST = "localhost";

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
      const students = await countStudents(dbFilePath);
      res.setHeader("Content-Length", students.length);
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(students);
    } catch (error) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
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
