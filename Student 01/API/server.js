const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require ('./routes/auth.js');
const usersRoute = require ('./routes/users.js');
const flightsRoute = require ('./routes/flights.js');
const seatsRoute = require ('./routes/seats.js');
const Flight = require ('./models/flightModel.js');


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
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/flights', flightsRoute);
app.use('/api/seats', seatsRoute);


app.get('/',  (req, res) => {
    res.send('Hello World')
})



