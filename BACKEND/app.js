const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv/config');

app.use(cors());
app.options('*',cors());


//middleware
app.use(express.json())
app.use(morgan('tiny'))

//routes
const productsRoutes = require('./routers/products');
const categoriesRoutes = require('./routers/categories');
const userRoutes = require('./routers/users');
const orderRoutes=require('./routers/orders');

const api = process.env.API_URL;

//routers
app.use(`${api}/products`,productsRoutes);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/user`, userRoutes);
app.use(`${api}/order`, orderRoutes);

//database connective
mongoose.set('strictQuery', false)
mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'zara-database',
    })
    .then(() => {
        console.log('Database connection is ready...')
    })
    .catch((err) => {
        console.log(err)
    })


//server
app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})
