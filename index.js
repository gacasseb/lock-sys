const express = require('express');
const app = express();
const port = 3000;
const database = require('./database/db');

// database.authenticate()
// .then(res => {
//   console.log('Database connected!');
// })
// .catch(err => {
//   console.log('Unable to connect on database');
//   console.log(err);
// })

database.sync();

app.get('/', (req, res) => {
  res.json('aloha!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});