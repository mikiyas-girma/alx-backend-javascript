const express = require('express');
const countStudents = require('./countStudents');

const app = express();
const PORT = 1234;

app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbFilePath = process.argv[2];

  try {
    const students = await countStudents(dbFilePath);
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', students.length);
    res.statusCode = 200;
    res.send(`This is the list of our students\n${students}`);
  } catch (error) {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
