const express = require('express');
const app = express();
const port = 3000;
const database = require('./database/db');
const broker = require('./broker');

app.use(express.json());

const user = require('./controllers/users');
const device = require('./controllers/device');
const auth = require('./services/auth');
const authMiddleware = require('./middlewares/auth');

database.sync();

app.get('/', authMiddleware, (req, res) => {
  res.json('aloha!');
});

app.post('/user/insert', user.insertUser);

app.post('/device/insert', authMiddleware, device.insertDevice);
app.get('/device/list', authMiddleware, device.listDevices);
app.put('/device/update/:id', authMiddleware, device.updateDevice);
app.delete('/device/delete/:id', authMiddleware, device.removeDevice);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/auth', auth.authenticate);