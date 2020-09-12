const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    express.static(path.resolve(__dirname, "../index.html"))
})

app.listen(PORT, () => console.log(`listenning on localhost ${PORT}`))