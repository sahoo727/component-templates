import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    name: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    speed: {
        type: Number
    },
},{timestamps: true});

export default mongoose.model("Location", locationSchema)