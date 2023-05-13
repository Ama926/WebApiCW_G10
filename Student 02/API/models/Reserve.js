import mongoose from "mongoose";

const {Schema} = mongoose;

const ResereveSchema = new mongoose.Schema({
    Hotelname: {
        type: String,
        required: true,
    },
    rooms: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
    },
    bedRoom: {
        type : String,
        required: true
    },
    boardType: {
        type: String,
        required: true
    }

});

export default mongoose.model("Reserve", ResereveSchema)