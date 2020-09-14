const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api.js');
const userRouter = require('./routes/user.js');

const app = express();
const PORT = 3000;

// handle parsing request body?
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files
app.get('/' || '/user', (req, res) => {
  express.static(path.resolve(__dirname, '../index.html'));
});

// USER route handler
app.use('/user', userRouter);

// API route handler
app.use('/api', apiRouter);

// catch-all error handler
app.use('/', (req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`listenning on localhost ${PORT}`));
