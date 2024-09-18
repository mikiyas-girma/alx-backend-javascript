const express = require("express");
const countStudents = require("./countStudents");

const app = express();

app.get("/", (_, res) => {
  res.send("Hello Holberton School");
});

app.get("/students", async (req, res) => {
  const dbFilePath = process.argv[2];

  try {
    const students = await countStudents(dbFilePath);
    res.send(`This is the list of our students\n${students}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245, () => {
  console.log(`Server listening on PORT 1234`);
});

module.exports = app;
