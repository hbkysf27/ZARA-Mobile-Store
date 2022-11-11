const express = require('express');
const app = express();

require('dotenv/config');
const api = process.env.API_URL;

//initialize routes
app.get(api + '/products', (req, res) => {
    res.send('Hello API!');
})

//initialize ports
app.listen(3000, () => {
    console.log(api);
    console.log('listening on port 3000');
})