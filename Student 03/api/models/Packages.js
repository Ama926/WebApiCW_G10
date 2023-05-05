import mongoose from 'mongoose';
const { Schema } = mongoose;

const PackagesSchema = new mongoose.Schema({
    name:{
        type: 'String',
        required: true
    },
    type:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    distance:{
        type: String,
        required: true
    },
    photos:{
        type: [String],
    },
    desc:{
        type: String,
        required: true
    },
    rating:{
        type: "number",
        min: 0,
        max:10
    },
    rooms:{
        type: [String],
    },
    cheapestPrice:{
        type: "number",
        required: true
    },
    title:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
    },
})

export default mongoose.model("Packages", PackagesSchema)