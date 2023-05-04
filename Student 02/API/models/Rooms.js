import mongoose from "mongoose";

const {Schema} = mongoose;

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    boardType:{
        type: String,
        enum: ['Full Board', 'Bed and Breakfast']
    },
    roomNumbers:[{number: Number, unavailableDates: {type: [Date] }}],
},
{timestamps:true});

export default mongoose.model("Rooms", RoomSchema)