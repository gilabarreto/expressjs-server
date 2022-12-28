const express = require('express');
const path = require('path');
const members = require('./members');
const moment = require('moment');

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
  next();
}

// Init Middleware
app.use(logger);

// Get All Members
app.get('/api/members', (req, res) => res.json(members));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

