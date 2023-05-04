const mongoose = require('mongoose');

const seatSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            required: true,
            
        },
        seatNos: {
            type: [String],
            required: true
        },
        unavailableSeatNumbers: {
            type: [String],
            required: false
        }
        
        
    },
    {
        timestamps: true
    }
)

const seat = mongoose.model('Seat', seatSchema);
module.exports = seat;