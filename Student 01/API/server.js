const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require ('./routes/auth.js');
const usersRoute = require ('./routes/users.js');
const flightsRoute = require ('./routes/flights.js');
const seatsRoute = require ('./routes/seats.js');

//const Product = require('./modules/productModel');
dotenv.config()
const app = express()



mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to mongoDB')
        app.listen(8000, () => {
            console.log('API running')
        })
    }).catch((error) => {
        console.log(error)
    });

//middlewares
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/flights', flightsRoute);
app.use('/seats', seatsRoute);
app.use(express.json());

app.get('/',  (req, res) => {
    res.send('Hello World')
})

