const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//const Product = require('./modules/productModel');
dotenv.config()
const app = express()

app.use(express.json());

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to mongoDB')
        app.listen(8000, () => {
            console.log('API running')
        })
    }).catch((error) => {
        console.log(error)
    });


app.get('/',  (req, res) => {
    res.send('Hello World')
})

