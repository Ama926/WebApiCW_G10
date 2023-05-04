import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom,updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:hotelID",verifyAdmin, createRoom)

//update - new
router.put("/:id",verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//delete - new
router.delete("/:id/:hotelID",verifyAdmin, deleteRoom);

//get - new
router.get("/:id", getRoom);

//get all - new
router.get("/", getAllRooms);

export default router