const express = require('express');
const path = require('path');

const apiRouter = require('./routes/api.js');
const userRouter = require('./routes/user.js')

const app = express();
const PORT = 3000;

// serve static files
app.get('/', (req, res) => {
    express.static(path.resolve(__dirname, "../index.html"));
})

// API route handler
app.use('/api', apiRouter);

// USER route handler
app.use('/user', userRouter);

// catch-all error handler
app.use('/', (req, res) => res.sendStatus(404))

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => console.log(`listenning on localhost ${PORT}`));