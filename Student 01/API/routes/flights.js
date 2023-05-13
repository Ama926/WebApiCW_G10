const express = require('express');
const Flight = require('../models/flightModel');
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

//GET by id
router.get('/find/:id', async (req, res, next) => {

    try {
        const { id } = req.params;
        const flight = await Flight.findById(id)

        res.status(200).json(flight);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
})

//get count by departure city
router.get('/countByDepartureCity', async (req, res, next) => {

    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(departureCity => {
            return Flight.countDocuments({ departureCity: departureCity })
        }))
        res.status(200).json(list);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
})
//get count by airline type
router.get('/countByAirline', async (req, res, next) => {

    try {
        const srilankanCount = await Flight.countDocuments({ airline: "srilankan" });
        const qatarCount = await Flight.countDocuments({ airline: "qatar" });
        const emiratesCount = await Flight.countDocuments({ airline: "emirates" });



        res.status(200).json([
            { airline: "srilankan", count: srilankanCount },
            { airline: "qatar", count: qatarCount },
            { airline: "emirates", count: emiratesCount },
        ]);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
})


router.get('/', async (req, res, next) => {

    const { min, max, ...others } = req.query
    try {
        const flights = await Flight.find({ ...others, cheapestPrice: { $gt: min | 1000, $lt: max || 100000 }, });
        res.status(200).json(flights);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
})

// //get all
// export const getAllHotel = async (req, res, next) => {
//     const { min, max, rating, ...others } = req.query;
//     try {
//         console.log(rating)
//         if (rating == -1) {
            
//             const hotels = await Hotel.find
//                 ({
//                     ...others,
//                     CheapestPrice: { $gt: min || 1, $lt: max || 999 },

//                 }).limit(req.query.limit);
//             res.status(200).json(hotels)
//         }else {
//             const hotels = await Hotel.find
//             ({
//                 ...others,
//                 CheapestPrice: { $gt: min || 1, $lt: max || 999 },
//                 rating: rating

//             }).limit(req.query.limit);
//         res.status(200).json(hotels)
//         }
//     } catch (err) {
//         //res.status(500).json(err)
//         next(err)
//     }

// };

module.exports = router;
