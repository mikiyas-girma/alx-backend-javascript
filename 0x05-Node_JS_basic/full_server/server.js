const express = require('express');
const router = require('./routes/index');

const app = express();
const PORT = 1245;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(PORT);

export default app;
