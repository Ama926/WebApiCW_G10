const express = require('express');
const router = express.Router();
const Flight = require('../models/flightModel');
const Seat = require('../models/seatModel');

const app = express()

//CREATE
router.post('/:flightid', async (req, res, next) => {

    const flightId = req.params.flightid;

    try {
        const newSeat = new Seat(req.body);
        const savedSeat = await newSeat.save();
        try {
            await Flight.findByIdAndUpdate(flightId, {
                $push: { seats: savedSeat._id },
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedSeat);
    } catch (err) {
        next(err)
    }
});

//UPDATE
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const seat = await Seat.findByIdAndUpdate(id, req.body);
        if (!seat) {
            return res.status(404).json({ message: `cannot find any seat with ID ${id}` });
        }
        const updatedSeat = await Seat.findById(id);
        res.status(200).json(updatedSeat);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//DELETE
router.delete('/:id/:flightid', async (req, res, next) => {

    const flightId = req.params.flightid;
    try {
        const { id } = req.params;
        const seat = await Seat.findByIdAndDelete(id);
        try {
            await Flight.findByIdAndUpdate(flightId, {
                $pull: { seats: req.params.id },
            });
        } catch (err) {
            next(err)
        }
        if (!seat) {
            return res.status(404).json({ message: `cannot find any seat with ID ${id}` });
        }
        res.status(200).json(' Seat has been deleted');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//GET
router.get('/:id', async (req, res, next) => {
    const failed = true
    const err = new Error()

    if (failed) {
        err.status = 404;
        err.message = "Sorry not found!";
        return next(err)
    }

    try {
        const { id } = req.params;
        const seat = await Seat.findById(id)
        res.status(200).json(seat);
    } catch (err) {
        console.log(error.message);
        next(err);
    }
})

//GET ALL
router.get('/', async (req, res, next) => {

    const failed = true
    const err = new Error()
    err.status = 404;
    err.message = 'Sorry not found!';
    if (failed) return next(err)

    try {
        const seats = await Seat.find({})
        res.status(200).json(seats);
    } catch (err) {
        console.log(error.message);
        next(err);
    }
})

module.exports = router;
