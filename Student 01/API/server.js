const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require ('./routes/auth.js');
const usersRoute = require ('./routes/users.js');
const flightsRoute = require ('./routes/flights.js');
const seatsRoute = require ('./routes/seats.js');
dotenv.config()
const app = express()

//connecting to mongoDB
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
app.use(cors())
app.use(cookieParser())
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/flights', flightsRoute);
app.use('/api/seats', seatsRoute);

//error handling middleware
app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'something went wrong'
    
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
})





