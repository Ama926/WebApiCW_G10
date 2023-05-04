const mongoose = require('mongoose');

const flightSchema = mongoose.Schema(
    {
        flightNo: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        cabinClass: {
            type: [String],
            required: false
        },
        departureCity: {
            type: String,
            required: true
        },
        arrivalCity: {
            type: String,
            required: true
        },
        departureDate: {
            type: String,
            required: true
        },
        arrivalDate: {
            type: String,
            required: true
        },
        airline: {
            type: String,
            required: false
        },
        seats: {
            type: [String],
            required: false
        },
        cheapestPrice: {
            type: Number,
            required: false
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const flight = mongoose.model('Flight', flightSchema);
module.exports = flight;