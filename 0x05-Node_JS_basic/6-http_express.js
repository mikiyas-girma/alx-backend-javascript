import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello Holberton School");
});

app.listen(1245, () => {
  console.log(`Server listening on PORT 1234`);
});

module.exports = app;
