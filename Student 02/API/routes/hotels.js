import express from "express";
import Hotel from "../models/Hotel.js";
import Room from "../models/Rooms.js";
import { createError } from "../utils/error.js";
import {
    createHotel,
    //deleteHotel,
    //updateHotel,
    getHotel,
    getAllHotel,
    countByCity,
    countByType,
    getHotelRooms
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//creat new
router.post("/",verifyAdmin, createHotel);

//get - new
router.get("/find/:id", getHotel);

//get all - new
router.get("/", getAllHotel);

//get hotels by cities 
router.get("/countByCity", countByCity);

//get hotel by types
router.get("/countByType", countByType);

//get hotel rooms
router.get("/room/:id", getHotelRooms);



export default router