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
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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
router.get('/:id', async (req, res,next) => {
   
    try {
        const { id } = req.params;
        const flight = await Flight.findById(id)

        res.status(200).json(flight);
    } catch (err) {
        console.log(error.message);
        next(err);
    }
})

//GET ALL
router.get('/', async (req, res,next) => {

   
    try {
        const flights = await Flight.find({})
        res.status(200).json(flights);
    } catch (err) {
        console.log(error.message);
        next(err);
    }
})

// router.get('/',  (req, res) => {
//     res.send('Hello this is flight')
// })

module.exports = router;
