const express = require('express');
const { QueryTypes } = require('sequelize');
const db = require('./models');

const app = express();
app.locals.db = db;  

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/demo', async (req, res) => {
  const sequelize= req.app.locals.db.sequelize;
  const result = await sequelize.query("SELECT * FROM demo", { type: QueryTypes.SELECT });
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});