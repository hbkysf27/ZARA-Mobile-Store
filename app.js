const express = require('express');
const app = express();

//initialize routes
app.get('/', (req, res) => {
    res.send('Hello World!');
})

//initialize ports
app.listen(3000, () => {
    console.log('listening on port 3000');
})