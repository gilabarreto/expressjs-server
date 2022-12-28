const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

const members = [
  {
    id: 1,
    name: 'Victor GB',
    email: 'vgb@vgb.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Tyler Durden',
    email: 'td@td.com',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Marla Singer',
    email: 'ms@ms.com',
    status: 'active'
  }
]

app.get('/api/members', (req, res) => {
  res.json(members);
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

