const express = require('express');
const Flight = require ('../models/flightModel');
const router = express.Router();
router.use(express.json());


//CREATE
router.post('/', async (req, res) => {
    try {
        const flight = new Flight(req.body);
        const savedFlight = await flight.save();
        res.status(200).json(savedFlight);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
});

//UPDATE
router.put('/find/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const flight = await Flight.findByIdAndUpdate(id, req.body);
        if (!flight) {
            return res.status(404).json({ message: `cannot find any flight with ID ${id}` });
        }
        const updatedFlight = await Flight.findById(id);
        res.status(200).json(updatedFlight);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//DELETE
router.delete('/find/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const flight = await Flight.findByIdAndDelete(id);
        if (!flight) {
            return res.status(404).json({ message: `cannot find any flight with ID ${id}` });
        }
        res.status(200).json(' Flight has been deleted');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//GET
router.get('/find/:id', async (req, res,next) => {
   
    try {
        const { id } = req.params;
        const flight = await Flight.findById(id)

        res.status(200).json(flight);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
})

//GET ALL
router.get('/', async (req, res,next) => {

   
    try {
        const flights = await Flight.find({})
        res.status(200).json(flights);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
})
router.get('/countByDepartureCity', async (req, res,next) => {

   const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(departureCity =>{
            return Flight.countDocuments({departureCity:departureCity})
        }))
        res.status(200).json(list);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
})
router.get('/countByAirline', async (req, res,next) => {

   
    const airlines = req.query.airlines.split(",")
    try {
        const list = await Promise.all(airlines.map(airline =>{
            return Flight.countDocuments({airline:airline})
        }))
        res.status(200).json(list);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
})
// router.get('/',  (req, res) => {
//     res.send('Hello this is flight')
// })

module.exports = router;
