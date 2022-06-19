const express = require('express');
const app = express();
const port = 3000;
const database = require('./database/db');

// Server broker
const broker = require('./broker');

app.use(express.json());

// Controllers
const user = require('./controllers/users');
const device = require('./controllers/device');

// Services
const auth = require('./services/auth');

// Middlewares
const authMiddleware = require('./middlewares/auth');

database.sync();

// Health route
app.get('/', authMiddleware, (req, res) => {
  res.json('aloha!');
});

// User routes
app.post('/user/insert', user.insertUser);

// Login route
app.post('/auth', auth.authenticate);

// Device routes
app.post('/device/insert', authMiddleware, device.insertDevice);
app.get('/device/list', authMiddleware, device.listDevices);
app.put('/device/update/:id', authMiddleware, device.updateDevice);
app.delete('/device/delete/:id', authMiddleware, device.removeDevice);
app.get('/device/interaction/:id', authMiddleware, device.interact);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});