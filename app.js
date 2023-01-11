const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan=require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');
const api = process.env.API_URL;

//middleware
app.use(express.json());
app.use(morgan('tiny'));

//initialize routes
app.get(`${api}/products`, (req, res) =>{
    const product= {
        id: 1,
        name: 'hair dresser',
        image: 'some url',
    }
    res.send(product);
})

app.post(`${api}/products`, (req, res) => {
    const newProduct=req.body;
    console.log(newProduct);
    res.send(newProduct); 
    })




//initialize ports
app.listen(3000, () => {
    
    console.log('server is running in http://localhost:3000');
})