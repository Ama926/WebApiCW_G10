import express from "express";
import Hotel from "../models/Hotel.js";
import Room from "../models/Rooms.js";
import { createError } from "../utils/error.js";
import {
    createHotel,
    deleteHotel,
    updateHotel,
    getHotel,
    getAllHotel,
    countByCity,
    countByType,
    getHotelRooms
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


//CREATE - old
// router.post("/",async (req,res)=>{

//     const newHotel= new Hotel(req.body)

//     try{
//         const saveHotel = await newHotel.save()
//         res.status(200).json(saveHotel)
//     }catch(err){
//         res.status(500).json(err)
//     }

// })




//UPDATE -old
// router.put("/:id",async (req,res)=>{

//     try{
//         const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
//         res.status(200).json(updatedHotel)
//     }catch(err){
//         res.status(500).json(err)
//     }

// })


//DELETE - old
// router.delete("/:id",async (req,res)=>{

//     try{
//         await Hotel.findByIdAndDelete(req.params.id);
//         res.status(200).json("Hotel has been deleted")
//     }catch(err){
//         res.status(500).json(err)
//     }

// })


//creat new
router.post("/",verifyAdmin, createHotel);

//update - new
router.put("/:id",verifyAdmin, updateHotel);

//delete - new
router.delete("/:id",verifyAdmin, deleteHotel);

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

//GET
// router.get("/:id",async (req,res)=>{

//     try{
//         const hotel = await Hotel.findById(req.params.id)
//         res.status(200).json(hotel)
//     }catch(err){
//         res.status(500).json(err)
//       // next(err)
//     }

// })

//GET ALL
//router.get("/",async (req,res, next)=>{
    //const failed = true;

    // const err = new Error();
    // err.status = 404;
    // err.message = "Sorry not found!";

    //if (failed) return next(createError(401, "You are not Authenticated"));

//     try{
//         const hotels = await Hotel.find();
//         res.status(200).json(hotels)
//     }catch(err){
//         //res.status(500).json(err)
//         next(err)
//     }

// })

export default router