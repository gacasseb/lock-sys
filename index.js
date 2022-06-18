const express = require('express');
const app = express();
const port = 3000;
const database = require('./database/db');

app.use(express.json());

const user = require('./controllers/users');
const auth = require('./services/auth');

database.sync();

app.get('/', (req, res) => {
  res.json('aloha!');
});

app.post('/user/insert', user.insertUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/auth', auth.authenticate);