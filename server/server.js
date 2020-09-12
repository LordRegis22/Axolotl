const express = require('express');
const path = require('path');

const apiRouter = require('./routes/api.js');

const app = express();
const PORT = 3000;

// serve static files
app.get('/', (req, res) => {
    express.static(path.resolve(__dirname, "../index.html"));
})

// API route handler
app.use('/api', apiRouter);

// USER route handler

// catch-all error handler

// global error handler

app.listen(PORT, () => console.log(`listenning on localhost ${PORT}`));