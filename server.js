const express = require('express');
const { use } = require('./routes/users');

const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // console.log('Here'); // Logs on the terminal
  // res.status(200) // Sends status
  // res.download('server.js') // Download Method
  // res.json({ msg: 'Success' }) // Send message as JSON
  // res.send('Success') // Sends message as string
  res.render('index', { text: 'World' });
})

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000)