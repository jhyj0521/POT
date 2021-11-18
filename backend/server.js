const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const { blockUserAuth, blockGuestAuth, checkUserAuth } = require('./utils/verifyToken');
const routes = require('./routes');
require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:5500',
  credentials: true,
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api', routes);

app.get('/register', blockUserAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

app.get('/login', blockUserAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.get('/manage/:boardId', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/manage.html'));
});

app.get('/board/:id([0-9]+)', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/detailboard.html'));
});

app.get('/board/write', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/createboard.html'));
});

app.get('/setting', blockGuestAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../public/setting.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`)); // port, callback
